/**
 * 获取token字符串
 * @returns
 */
export function getAuthorization() {
  return uni.getStorageSync(getKey())
}

/**
 * 设置token字符串
 * @param token
 */
export function setAuthorization(token: string) {
  uni.setStorageSync(getKey(), token)
}

/**
 * 移除token字符串
 */
export function removeAuthorization() {
  uni.removeStorageSync(getKey())
}

/**
 * 获取token存储的key.
 * 测试环境做兼容隔离
 */
function getKey(key = 'Authorization') {
  // const isH5 = process.env.TARO_ENV === 'h5'

  // if (isH5 && window?.location) {
  //   const { host, pathname } = window.location
  //   if (host.indexOf('.xxxxxxxx.') !== -1) {
  //     const prefix = pathname.split('/')[1] || ''
  //     return prefix.length ? key + `_${prefix}` : key
  //   }
  // }

  return key
}
