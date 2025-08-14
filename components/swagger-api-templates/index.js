/* eslint-disable no-console */
const got = require('got')
const swaggerTypescriptApi = require('swagger-typescript-api')
const path = require('path')
const fs = require('fs-extra')
const Eta = require('eta')
// const CryptoJS = require('crypto-js');

const ignoreFiles = ['index.ts', 'instance.ts']

/**
 * 获取所有的接口
 * @returns
 */
async function getAllApi(swaggerOption) {
  const { host, basePath = '' } = swaggerOption
  const swaggerResourceUrl = host + basePath + '/swagger-resources'

  const res = await got(swaggerResourceUrl).json() // 获取分组

  // 获取所有分组下面的接口
  const apidocs = await Promise.all(
    (res || []).map(async (item) => {
      const url = host + basePath + item.url
      let data
      try {
        data = await got(url).json()
      } catch (error) {
        console.log('接口文档有错误', url)
      }

      return { ...item, data }
    })
  )
  return apidocs
}

/** 生成api */
async function generateApi(data, config) {
  const { output, swaggerTypescriptApiOption, groupNameMap } = config
  const { data: spec, name, url } = data
  if (!spec) {
    return
  }

  const dname = groupNameMap[name] || name
  try {
    console.log('生成', spec.host, url)
    const { files } = await swaggerTypescriptApi.generateApi({ ...swaggerTypescriptApiOption, spec })
    const destDir = path.resolve(output, dname || '')
    files.forEach(({ fileContent, fileName, fileExtension }) => {
      fs.ensureDirSync(destDir)
      if (dname) {
        fileContent = fileContent.replace('"./instance"', '"../instance"')
      }
      fs.writeFileSync(path.resolve(destDir, `${fileName}${fileExtension}`), fileContent)
    })

    setTimeout(() => {
      fs.removeSync(path.join(destDir, 'http-client.ts'))
    })
  } catch (error) {
    console.log(error)

    console.error('生成', url, '失败')
  }
}

async function generateIndex(config) {
  const { output } = config
  // 读取目录
  let groups = fs
    .readdirSync(output)
    .filter((file) => {
      const stat = fs.statSync(path.resolve(output, file))
      return stat.isDirectory()
    })
    .reduce((result, dir) => {
      const files = fs
        .readdirSync(path.resolve(output, dir))
        .filter((file) => /^[A-Z].+\.ts/.test(file))
        .map((name) => [dir, path.basename(name, '.ts')])
      return result.concat(files)
    }, [])

  if (!groups.length) {
    groups = fs
      .readdirSync(output)
      .filter((file) => {
        const stat = fs.statSync(path.resolve(output, file))
        return stat.isFile() && /^[A-Z].+\.ts/.test(file)
      })
      .map((file) => [path.basename(file, '.ts')])
  }

  let singleFileName = ''
  if (!groups.length) {
    const names = fs.readdirSync(output).filter((file) => {
      return !['index.ts', 'instance.ts', 'data-contracts.ts', 'http-client.ts'].includes(file)
    })
    singleFileName = (names[0] || 'Admin').replace('.ts', '')
  }

  const indexTs = Eta.render(fs.readFileSync(path.resolve(__dirname, './index.eta')).toString(), {
    groups,
    singleFileName
  })
  fs.writeFileSync(path.resolve(output, 'index.ts'), indexTs)
}

/**
 * 清理request文件夹
 */
function clearRequestDir(output) {
  fs.readdirSync(output).forEach((name) => {
    const file = path.resolve(output, name)
    const stat = fs.statSync(file)
    if (stat.isDirectory()) {
      fs.removeSync(file)
    } else if (!ignoreFiles.includes(name)) {
      fs.removeSync(file)
    }
  })
}

async function run(config) {
  const { docSource, output, apifoxOption, swaggerOption, apiHook } = config
  // 清理目录
  clearRequestDir(output)

  if (docSource === 'swagger') {
    const docs = await getAllApi(swaggerOption)
    // 只有一个分组.不做分组
    if (docs.length === 1 && docs[0]) {
      const item = { ...docs[0], name: '' }
      await generateApi(item, config)
    } else {
      await docs.reduce((resolve, item) => {
        return resolve.then(() => generateApi(item, config))
      }, Promise.resolve())
    }
  } else {
    const resultData = await apifoxOption.projects.reduce(async (resolve, { name, url }) => {
      const data = await got(url, { parseJson }).json()
      const { paths } = data
      const newPaths = {}

      // onPaths处理 过滤路径函数
      const onPaths = apiHook.onPaths ?? ((data) => data)
      onPaths(Object.keys(paths)).forEach((key) => {
        const pathData = paths[key]
        let newPathData = {}
        // 通过onPathTags过滤路径
        if (apiHook.onPathTags) {
          for (const key in pathData) {
            if (Object.hasOwn(pathData, key)) {
              const element = pathData[key]
              if (apiHook.onPathTags(element.tags || [])) {
                newPathData[key] = element
              }
            }
          }
        } else {
          newPathData = pathData
        }

        newPaths[key] = newPathData
      })

      return resolve.then((fox) => {
        return {
          ...data,
          tags: data.tags.concat(fox.tags),
          definitions: {
            ...fox.definitions,
            ...data.definitions
          },
          paths: {
            ...fox.paths,
            ...newPaths
          },
          components: {
            schemas: {
              ...data?.components?.schemas,
              ...fox?.components?.schemas
            }
          }
        }
      })
    }, Promise.resolve({ tags: [], paths: {} }))

    await generateApi({ data: resultData, name: '', url: '' }, config)
  }

  generateIndex(config)
}

/**
 * 解析apifox数据
 *
 * 解决几个问题
 * 1. apifox中导出的引用类型经过了编码。需要解码才能正确匹配类型
 * 2. 部分接口因为后端开发编写问题存在中文导致生成失败。也需要做额外处理
 *
 * "swagger-typescript-api": "13.0.3" => 中文问题已经解决  所以代码先注释
 * @param {*} text
 * @returns
 */
const parseJson = (text) => {
  // const chineseRegex = /[\u4e00-\u9fff]/g; // 中文匹配
  // 计算MD5值
  // function calculateMD5(text) {
  //   const utf8Text = CryptoJS.enc.Utf8.parse(text);
  //   const md5Hash = CryptoJS.MD5(utf8Text);
  //   const md5String = md5Hash.toString();

  //   return md5String;
  // }

  // const chineseHashMap = {}

  const pareData = JSON.parse(text, (key, value) => (key === '$ref' ? decodeURIComponent(value) : value))
  return pareData
  // let strData = JSON.stringify(pareData)

  // 替换类型中的中文字符串
  // Object.keys(pareData.definitions ?? {}).forEach((key) => {
  //   if (chineseRegex.test(key)) {
  //     const replacedKey = key.replace(chineseRegex, (ckey) => {
  //       if (!chineseHashMap[ckey]) {
  //         chineseHashMap[ckey] = 'M' + calculateMD5(ckey).substring(0, 2)
  //       }
  //       return chineseHashMap[ckey]
  //     })

  //     strData = strData.replace(new RegExp(key, 'gm'), replacedKey)
  //   }
  // })

  // const result = JSON.parse(strData)
  // fs.writeFileSync(path.resolve(__dirname, './api.json'), strData)
  // return result
}

module.exports = {
  run
}
