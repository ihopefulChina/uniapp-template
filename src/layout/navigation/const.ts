/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-18 12:10:52
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-09-18 12:50:45
 *  * @FilePath: /uniapp_template/src/layout/navigation/const.ts
 */
import { CSSProperties } from 'vue';

export enum MMNavigationType {
    /**
     * 白色背景，黑色字体
     */
    Default = 'Default',

    /**
     * 透明背景。黑色字体
     */
    Transparent = 'Transparent',
    /**
     * 透明背景。白色字体
     */
    Transparent_white = 'Transparent_white',

    Primary = 'Primary',

    Yellow = 'Yellow',
}

export const navigationTypeStyleMap: Record<MMNavigationType, CSSProperties> = {
    [MMNavigationType.Default]: {
        backgroundColor: '#fff',
        color: '#000',
    },
    [MMNavigationType.Transparent]: {
        backgroundColor: 'transparent',
        color: '#000',
    },
    [MMNavigationType.Transparent_white]: {
        backgroundColor: 'transparent',
        color: '#fff',
    },
    [MMNavigationType.Primary]: {
        backgroundColor: '#fd9849',
        color: '#fff',
    },
    [MMNavigationType.Yellow]: {
        backgroundColor: '#F8F5F1',
        color: '#000',
    },
};
