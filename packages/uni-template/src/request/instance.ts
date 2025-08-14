import { apiUrl, loginUrl, silentAuthorizationUrl, silentAuthorization, isDev } from '../config'
import Request, { getToken } from '~/components/request/index.uni'
// import { getAuthorization, removeAuthorization, setAuthorization } from '~/utils/authorization'
import { IUniResponse } from '~/components/request/types/uni-type'
import { getAuthorization, removeAuthorization, setAuthorization } from '~/utils/authorization'
import { normalizationUrl } from '~/components/request/core/utils'

const instance = Request.create({ baseUrl: apiUrl })

// 请求拦截器
instance.requestInterceptors.use(async (config) => {
  let token = getAuthorization()
  // 静默授权
  if (!token && silentAuthorization) {
    const fetchUrl = normalizationUrl(silentAuthorizationUrl, config.baseUrl)
    const { data } = await getToken(fetchUrl)
    token = data // 赋值token
    setAuthorization(token)
  }

  config.headers = { ...config.headers, Authorization: token }
  return config
})

// 响应拦截器
instance.responseInterceptors.use((res: IUniResponse) => {
  const { config, statusCode, data = {} } = res

  let description: string | null = null
  // 打印请求log
  if (isDev) {
    const { url, method, baseUrl, params = {} } = config
    console.log(`--------`)
    console.log(`【${method as string}】${normalizationUrl(url, baseUrl)}`)
    Object.keys(params).length && console.log('query', params)
    config.data && console.log('data', config.data)
    console.log('response', data)
    console.log(`--------`)
  }

  // token过期或者无权限等 清空token
  if ([403, 40003, 401].indexOf(data.code) !== -1) {
    const oldToken = getAuthorization()
    removeAuthorization()
    // 如果静默登录 则重新发请求获取code
    if (silentAuthorization && oldToken) {
      return instance(config)
    }
    // 如果不是静默登录 则跳转至登录
    loginUrl && uni.navigateTo({ url: loginUrl })
    throw new Error()
  } else if (data.code !== 0 || statusCode !== 200) {
    description = data.msg || '未知错误，万分抱歉！'
  }

  if (description !== null) {
    const { errorToast = true } = config
    errorToast && uni.showToast({ icon: 'none', title: description })
    throw new Error()
  }

  return res.data
})

export default instance
