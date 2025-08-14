import { normalizationUrl, jointQuery, paserDynamicPath } from './utils'

describe('测试normalizationUrl函数', () => {
  const result = 'https://www.baidu.com/a/b'

  it('测试不带域名', () => {
    expect(normalizationUrl('/a/b')).toBe('/a/b')
  })

  it('测试不带域名相对路径', () => {
    expect(normalizationUrl('a/b')).toBe('/a/b')
  })

  it('测试1', () => {
    expect(normalizationUrl('/a/b', 'https://www.baidu.com')).toBe(result)
  })

  it('测试2', () => {
    expect(normalizationUrl('a/b', 'https://www.baidu.com')).toBe(result)
  })

  it('测试3', () => {
    expect(normalizationUrl('/a/b', 'https://www.baidu.com/')).toBe(result)
  })

  it('测试4', () => {
    expect(normalizationUrl('a/b', 'https://www.baidu.com/')).toBe(result)
  })

  it('测试路径为绝对路径', () => {
    expect(normalizationUrl('https://www.baidu.com/a/b')).toBe(result)
  })

  it('测试路径为绝对路径', () => {
    expect(normalizationUrl('https://www.baidu.com/a/b', 'http://www.baidu.com')).toBe(result)
  })
})

describe('jointQuery', () => {
  const url = 'http://www.baidu.com/a/b'

  it('不带query', () => {
    expect(jointQuery(url)).toBe(url)
  })

  it('query', () => {
    expect(
      jointQuery(url, {
        q1: 1,
        q2: 'string',
        q3: true,
        q4: { p1: 1 },
        q5: undefined,
        q6: null,
        q7: ''
      })
    ).toBe(url + '?' + ['q1=1', 'q2=string', 'q3=true', 'q4={"p1":1}', 'q7='].join('&'))
  })

  it('空参数', () => {
    expect(jointQuery(url, {})).toBe(url)
  })
})

describe('paserDynamicPath', () => {
  it('', () => {
    expect(paserDynamicPath({ url: '/:foo/:bar/:zoo', urlMatch: { foo: 1, bar: 'string', zoo: true } })).toBe('/1/string/true')
  })
})
