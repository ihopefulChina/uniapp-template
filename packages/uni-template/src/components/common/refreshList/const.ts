import { IMMPullToRefreshProps } from './RefreshList.vue';

export interface IMMPullToRefreshState {
  pulling: boolean;
  top: number;
  scrollViewHeight: number;

  showNoMoreText: boolean;

  scrollTop: number;
  showTopArrow: boolean;
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
  pushing,
}

export interface IMMPullRefreshHookRefreshParams {
  /**
   * 刷新时是否清空旧数组
   *
   * @default false
   */
  clearList?: boolean;
}

export interface IMMPullRefreshHookReturn extends Omit<IMMPullToRefreshProps, 'onRefresh'> {
  onRefresh: (params?: IMMPullRefreshHookRefreshParams) => void;
}
