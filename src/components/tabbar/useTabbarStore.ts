/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:02:11
 * @FilePath: /uniapp_template/src/components/tabbar/useTabbarStore.ts
 * @Description: tabbar 状态管理
 *
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia';
import { ITabBarData } from './type';
import { routeNames } from '~/routes';

import homeIcon from './images/home.png';
import homeActive from './images/homeActive.png';
import mineIcon from './images/mine.png';
import mineActive from './images/mineActive.png';
import { ref } from 'vue';

const defaultTabbarData = [
    {
        image: homeIcon,
        imageSelected: homeActive,
        url: routeNames.pagesTabbarHomeIndex,
        key: 'common.home_title',
    },

    {
        image: mineIcon,
        imageSelected: mineActive,
        url: routeNames.pagesTabbarMineIndex,
        key: 'common.mine_title',
    },
];

export const useTabbarStore = defineStore('tabbarStore', () => {
    const data = ref<ITabBarData[]>(defaultTabbarData);

    const current = ref<number>(0);

    const setCurrent = (index: number) => {
        current.value = index;
    };

    /** 添加数量 */
    const setCount = (index: number, count: number) => {
        data.value = (data.value ?? []).map((value, dataIndex) => {
            if (index === dataIndex) {
                value.count = count;
            }
            return value;
        });
    };

    /** 添加红点 */
    const setRedDot = (index: number, redHot: boolean) => {
        data.value = (data.value ?? []).map((value, dataIndex) => {
            if (index === dataIndex) {
                value.redHot = redHot;
            }
            return value;
        });
    };

    return {
        data,
        setCurrent,
        current,
        setCount,
        setRedDot,
    };
});
