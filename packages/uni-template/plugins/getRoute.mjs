import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { parse } from 'jsonc-parser'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PAGE_JSON_PATH = path.resolve(__dirname, '../src/pages.json')
const OUTPUT_ROUTE_TS = path.resolve(__dirname, '../src/routes.ts')
const ROUTE_PARAMS_PATH = path.resolve(__dirname, '../src/RouteParams.d.ts')
const OUTPUT_PAGEIDS_TS = path.resolve(__dirname, '../src/pageIds.ts')

function formatRouteKey(pagePath) {
  return pagePath
    .split('/')
    .map((seg, idx) => (idx === 0 ? seg : seg.charAt(0).toUpperCase() + seg.slice(1)))
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '')
}

function getTitleOrPath(page) {
  if (page.name) {
    return page.name.trim()
  } else if (page.style && typeof page.style.navigationBarTitleText === 'string' && page.style.navigationBarTitleText.trim()) {
    return page.style.navigationBarTitleText.trim()
  }
  return page.path
}

function walkPages(pages, root = '') {
  const results = []
  for (const page of pages || []) {
    if (!page?.path) continue
    const fullPath = root ? `${root}/${page.path}` : page.path
    const titleOrPath = getTitleOrPath(page)
    results.push({ path: fullPath, titleOrPath })
  }
  return results
}

function walkSubPackages(subPackages) {
  const results = []
  for (const pkg of subPackages || []) {
    const root = pkg.root || ''
    results.push(...walkPages(pkg.pages, root))
  }
  return results
}

function extractExistingFields(content) {
  const fieldMap = {}
  const interfaceMatch = content.match(/export interface RouteParams {([\s\S]*?)^\}/m)
  if (!interfaceMatch) return fieldMap

  const lines = interfaceMatch[1].split('\n')
  let idx = 0

  while (idx < lines.length) {
    let line = lines[idx].trim()
    let comment = ''

    // 捕获 /** 注释 */
    if (line.startsWith('/**')) {
      const commentMatch = line.match(/^\/\*\*\s*(.*?)\s*\*\/$/)
      if (commentMatch) {
        comment = commentMatch[1].trim()
        idx++
        line = lines[idx]?.trim()
      }
    }

    // 简单字段
    const fieldMatch = line?.match(/^([a-zA-Z0-9_]+):\s*([^;{]+);?$/)
    if (fieldMatch) {
      const [, name, type] = fieldMatch
      const raw = comment ? [`  /** ${comment} */`, `  ${name}: ${type.trim()}`] : [`  ${name}: ${type.trim()}`]
      fieldMap[name] = { type: type.trim(), comment, raw }
      idx++
      continue
    }

    // 嵌套对象字段
    const objectFieldMatch = line?.match(/^([a-zA-Z0-9_]+):\s*{\s*$/)
    if (objectFieldMatch) {
      const name = objectFieldMatch[1]
      const raw = comment ? [`  /** ${comment} */`] : []
      raw.push(`  ${name}: {`)

      idx++
      let depth = 1
      while (idx < lines.length && depth > 0) {
        const len = lines[idx]
        if (len.includes('{')) depth++
        if (len.includes('}')) depth--
        raw.push(len)
        idx++
      }

      fieldMap[name] = { type: 'object', comment, raw }
      continue
    }

    idx++
  }

  return fieldMap
}

async function generateRouteParams(routeMap, titleMap) {
  const existingContent = await fs.readFile(ROUTE_PARAMS_PATH, 'utf-8').catch(() => '')
  const existingFields = extractExistingFields(existingContent)

  for (const [routeKey, path] of routeMap.entries()) {
    const existing = existingFields[routeKey]
    if (!existing) {
      existingFields[routeKey] = {
        type: 'DefaultParam',
        comment: titleMap.get(routeKey) || path
      }
    }
  }

  const lines = []
  lines.push('// 此文件由脚本自动维护')
  lines.push('type DefaultParam = Record<string, string>')
  lines.push('')
  lines.push('/**')
  lines.push(' * 路由参数配置')
  lines.push(' */')
  lines.push('export interface RouteParams {')

  for (const [key, field] of Object.entries(existingFields)) {
    if (field.raw) {
      lines.push(...field.raw)
    } else {
      lines.push(`  /** ${field.comment || key} */`)
      lines.push(`  ${key}: ${field.type}`)
    }
  }

  lines.push('}')

  await fs.writeFile(ROUTE_PARAMS_PATH, lines.join('\n'), 'utf-8')
  console.log('✅ RouteParams.d.ts 已更新 🎉 🎉 🎉')
}

async function main() {
  try {
    const raw = await fs.readFile(PAGE_JSON_PATH, 'utf-8')
    const json = parse(raw)

    const pagesList = walkPages(json.pages)
    const subPkgList = walkSubPackages(json.subPackages)
    const allPages = [...pagesList, ...subPkgList]

    const routeMap = new Map()
    const titleMap = new Map()
    const pageIdsMap = new Map()

    const allRawPages = [...(json.pages || []), ...(json.subPackages?.flatMap((pkg) => (pkg.pages || []).map((page) => ({ ...page, _root: pkg.root }))) || [])]

    const tabbarPages = json.tabBar.list ?? []

    for (const { path, titleOrPath } of allPages) {
      const key = formatRouteKey(path)
      if (!routeMap.has(key)) {
        routeMap.set(key, path)
        titleMap.set(key, titleOrPath)
      }

      const pageConfig = allRawPages.find((page) => {
        const fullPath = page._root ? `${page._root}/${page.path}` : page.path
        return fullPath === path
      })

      const pageId = pageConfig?.style?.pageId
      if (pageId) {
        pageIdsMap.set(key, { value: pageId, comment: titleOrPath || key })
      }
    }

    // routes.ts
    const routeLines = []
    routeLines.push('// 此文件为路由映射，由脚本自动生成，请勿手动修改')
    routeLines.push('export const routeNames = {')
    const routes = [...routeMap.entries()]

    for (const [key, path] of routes) {
      const title = titleMap.get(key)
      routeLines.push(`  /** ${title} */`)

      routeLines.push(`  ${key}: '/${path}'${key !== routes[routes.length - 1]?.[0] ? ',' : ''}`)
    }
    routeLines.push('}')
    routeLines.push('')

    /** 添加tabbar页面 */
    routeLines.push('/** tabbar页面 */')
    routeLines.push('export const tabbar = [')

    for (const [key, tabBarObj] of tabbarPages.entries()) {
      const { pagePath, text } = tabBarObj
      routeLines.push(`  /** ${text} */`)
      routeLines.push(`  { text: '${text}', url: '/${pagePath}' }${key + 1 !== tabbarPages.length ? ',' : ''}`)
    }

    routeLines.push(']')
    routeLines.push('')
    routeLines.push('/** 路径 */')
    routeLines.push('export type RoutePath = (typeof routeNames)[keyof typeof routeNames]')
    routeLines.push('')

    routeLines.push('/** 路由key */')
    routeLines.push('export type RouteKey = keyof typeof routeNames')
    routeLines.push('')

    await fs.writeFile(OUTPUT_ROUTE_TS, routeLines.join('\n'), 'utf-8')

    console.log('✅ routes.ts 已更新 🎉 🎉 🎉')

    // 写 pageIds.ts
    // const pageIdLines = [];
    // pageIdLines.push('// 此文件为神策埋点pageId映射，由脚本自动生成，请勿手动修改');
    // pageIdLines.push('export const pageIds = {');
    // for (const [key, { value, comment }] of pageIdsMap.entries()) {
    //   pageIdLines.push(`  /** ${comment}: ${value} */`);
    //   pageIdLines.push(`  ${key}: ${value},`);
    // }
    // pageIdLines.push('};');
    // await fs.writeFile(OUTPUT_PAGEIDS_TS, pageIdLines.join('\n'), 'utf-8');
    // console.log('✅ pageIds.ts 已更新 🎉 🎉 🎉');

    // 写 RouteParams.d.ts
    await generateRouteParams(routeMap, titleMap)
  } catch (err) {
    console.error('❌ 生成失败:', err)
  }
}

main()
