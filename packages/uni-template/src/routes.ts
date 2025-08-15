// 此文件为路由映射，由脚本自动生成，请勿手动修改
export const routeNames = {
  /** 首页 */
  pagesTabbarHomeIndex: '/pages/tabbar/home/index',
  /** 个人中心 */
  pagesTabbarMineIndex: '/pages/tabbar/mine/index',
  /** 登录 */
  pagesLoginIndex: '/pages/login/index',
  /** 协议 */
  pagesCommonAgreementIndex: '/pages/common/agreement/index',
  /** Not Found */
  pagesCommonNotFoundIndex: '/pages/common/notFound/index'
}

/** tabbar页面 */
export const tabbar = [
  /** 首页 */
  { text: '首页', url: '/pages/tabbar/home/index' },
  /** 个人中心 */
  { text: '个人中心', url: '/pages/tabbar/mine/index' }
]

/** 路径 */
export type RoutePath = (typeof routeNames)[keyof typeof routeNames]

/** 路由key */
export type RouteKey = keyof typeof routeNames
