// 项目全局配置文件

export const isDev = !!import.meta.env.DEV // 开发环境
export const isPrd = !!import.meta.env.PROD

/** 接口地址 */
export const apiUrl = import.meta.env.VITE_API_URL

/** 是否启用静默登录 */
export const silentAuthorization = false

/**
 * 静默登录授权地址
 */
export const silentAuthorizationUrl = '/wechat/auth/token'

/**
 * 授权登录页地址，若没有开静默登录，则自动跳转此地址
 */
export const loginUrl = '/pages/auth/index'
