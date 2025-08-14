export interface IMMPullToRefreshState {
  /** 是否正在下拉刷新 */
  pulling: boolean
  /** 下拉的距离 */
  top: number
  /** 滚动视图高度 */
  scrollViewHeight: number
  /** 是否没有更多数据 */
  showNoMoreText: boolean
  /** 滚动条位置 */
  scrollTop: number
  /** 是否显示顶部箭头 */
  showTopArrow: boolean
}

export enum MMPullToRefreshState {
  /**
   * 普通状态
   */
  none,
  /**
   * 刷新中
   */
  refreshing,
  /**
   * 添加中
   */
  pushing
}

export interface IMMPullRefreshHookRefreshParams {
  /**
   * 刷新时是否清空旧数组
   *
   * @default false
   */
  clearList?: boolean
}
