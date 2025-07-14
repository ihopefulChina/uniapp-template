// 此文件由脚本自动维护
type DefaultParam = Record<string, string | number>;

/**
 * 路由参数配置
 */
export interface RouteParams {
    /** 首页 */
    pagesTabbarHomeIndex: DefaultParam;
    /** 个人中心 */
    pagesTabbarMineIndex: DefaultParam;
    /** 登录 */
    pagesLoginIndex: DefaultParam;
    /** 协议 */
    pagesCommonAgreementIndex: DefaultParam;
    /** Not Found */
    pagesCommonNotFoundIndex: DefaultParam;
}
