import * as Api from './Api'
import requestInstance from './instance'

export * from './data-contracts'

/**
 * 是否支持 FormData 对象
 */
const SUPPORT_FORM_DATA = isSupportFormData()

export type UType = Api.API & {
  get: Api.APIGET
  post: Api.APIPOST
  del: Api.APIDELETE
  put: Api.APIPUT
  options: Api.APIOPTIONS
}

const METHODS = new Set(['get', 'post', 'del', 'put', 'options'])

export const api: UType = new Proxy(
  {
    get: createMethodProxy('GET'),
    post: createMethodProxy('POST'),
    del: createMethodProxy('DELETE'),
    put: createMethodProxy('PUT'),
    options: createMethodProxy('OPTIONS')
  },
  {
    get(_target: any, propKey: string) {
      if (METHODS.has(propKey)) {
        return _target[propKey]
      }

      const [url, method] = propKey.split('_') // 根据key分割出url和method
      if (!url || !method) {
        throw new Error(`Invalid API call format: ${propKey}`)
      }
      return getterHandler(url, method)
    }
  }
)

function createMethodProxy(method: string) {
  return new Proxy(
    {},
    {
      get: (_target: any, propKey: string) => getterHandler(propKey, method)
    }
  )
}

const DYNAMIC_PATH_REGEX = /^\{.+\}$/ // 预编译
const HYPHEN_REGEX = /-(\w)/g // 预编译（用于驼峰转换）

function getterHandler(url: string, method: string) {
  return (args: any) => {
    let _url = url
    // eslint-disable-next-line prefer-const
    let { requestConfig = {}, query = {}, ...rest } = args ?? {}

    // 解构参数。rest参数成分比较复杂。包含动态路径，也可能是post或者query参数
    // 这些场景不支持 query 和 requestConfig
    if (SUPPORT_FORM_DATA && args instanceof FormData) {
      rest = args
    } else if (Array.isArray(args)) {
      // 示例：api.xxx(['a', 'b'])
      rest = args
    }

    const config = { method, ...requestConfig } // 构建请求配置

    // 如果url中存在{id}这种动态参数，则需要替换成参数
    if (_url.indexOf('{') > -1) {
      const dynamicKeys: string[] = []

      _url.split('/').forEach((item) => {
        if (DYNAMIC_PATH_REGEX.test(item)) {
          // 如果是对象包装的。需要先解包。然后把剩余参数返回给到参数列表里面
          const kk = item.replace(/[{}]/g, '').replace(HYPHEN_REGEX, (_, m1) => m1.toUpperCase())
          const value = rest[kk] ?? query[kk]
          if (!value && value !== 0) {
            throw new Error(`参数${kk}不能为空`)
          }
          _url = _url.replace(item, value) // 替换url中的{id}为参数
          dynamicKeys.push(kk)
        }
      })

      rest = omitByKey(rest, dynamicKeys) // 把动态参数从参数列表中删除
      query = omitByKey(query, dynamicKeys) // 把动态参数从参数列表中删除
    }

    config.url = _url

    // 如果是post或者put请求。则需要把body放到data里面
    if (['POST', 'PUT'].includes(method)) {
      config.data = rest
      if (Object.keys(query).length) {
        config.params = query
      }
    } else {
      config.params = rest
    }

    return requestInstance(config)
  }
}

function omitByKey(data: Record<string, any>, keys: string[]) {
  return Object.keys(data).reduce(
    (result, key) => {
      keys.indexOf(key) === -1 && (result[key] = data[key])
      return result
    },
    {} as Record<string, any>
  )
}

function isSupportFormData() {
  let support = false

  try {
    // 小程序、RN 不支持
    support = !!FormData
  } catch (error) {}

  return support
}
