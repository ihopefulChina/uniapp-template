#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-console */
const path = require('path')
const fs = require('fs')
const { Command } = require('commander')
const merge = require('deepmerge')

const { version, name } = require('./package.json')
const { run } = require('./index')

const baseConfig = require('./config')
const program = new Command()
const programName = name.replace('@template/', '')

program
  .name(programName)
  .helpOption('-h, --help', '显示帮助信息')
  .version(version, '-v, --version', '显示当前CLI版本')
  .option('-b, --base-path <basePath>', '基础路径')
  .option('-c, --config <config>', '配置文件')

const commands = [
  {
    command: 'api',
    alias: 'a',
    description: '生成接口',
    action: (pa) => {
      const configPath = path.join(process.cwd(), './swaggerApi.config.js')
      const privateConfigPath = path.resolve(process.cwd(), './swaggerApi.config.private.js')
      let config
      if (fs.existsSync(privateConfigPath)) {
        config = require(privateConfigPath)
      } else if (fs.existsSync(configPath)) {
        config = require(configPath)
      }
      if (!config) {
        throw new Error(`项目根目录中不存在swaggerApi.config[.private].js`)
      }

      config = merge.all([
        {
          // 默认模板类型
          swaggerTypescriptApiOption: {
            templates: path.resolve(__dirname, `./api-templates`)
          }
        },
        baseConfig,
        config
      ])

      if (config.logger || baseConfig.logger) {
        console.log(config)
      }
      run(config)
    }
  }
]

const commandHelps = commands.map(({ command, alias, description, action }) => {
  // 挂载命令
  program.command(command).alias(alias).description(description).action(action)
  return [description, `${programName} ${command}`]
})

program.on('--help', () => {
  ;[['示例:'], ['显示帮助信息', `${programName} --help`], ...commandHelps].forEach(([title, ...desc], index) => {
    console.log('')
    if (index === 0) {
      console.log(title)
    } else {
      console.log(`  # ${title}`)
    }
    if (desc?.length) {
      desc.forEach((de) => console.log(`  $  ${de}`))
    }
  })
})

program.parse(process.argv)

/**
 * Help
 */
;(function help() {
  if (program.args.length < 1) {
    return program.help()
  }
})()
