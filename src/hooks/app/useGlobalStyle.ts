import pagesJson from '~/pages.json';

const { globalStyle } = pagesJson;
/**
 * 全局样式
 */
export const useGlobalStyle = () => {
    const { navigationBarTextStyle, navigationBarTitleText, backgroundColor } = globalStyle;
    return {
        navigationBarTextStyle,
        navigationBarTitleText,
        backgroundColor,
    };
};
