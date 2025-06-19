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

    Blue = 'Blue',
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
        backgroundColor: '#CBDDFF',
        color: '#fff',
    },
    [MMNavigationType.Blue]: {
        backgroundColor: '#497CD8',
        color: '#fff',
    },
};
