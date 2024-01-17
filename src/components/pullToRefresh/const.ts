/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-18 17:18:06
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-10 09:43:25
 * @FilePath: /LX001413-weiyunbao-app/src/components/pullToRefresh/const.ts
 * @Description:
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */

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
