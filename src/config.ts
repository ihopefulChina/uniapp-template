import { routeNames } from './routes';

/** 开发环境 */
export const isDev = process.env.NODE_ENV === 'development';
/** 是否是matser 分支 */
// export const isMatserBranch = process.env?.['BRANCH'] !== 'master';
/** 是否是 P2 */
export const isP2 = process.env?.['BRANCH'] !== 'master';

export const CUSTOM_ENVIRONMENT_TEXT = '自定义环境';

export const urls = [
    // { text: '生产环境', value: 'https://knowledgesharing.ecpsrplus.com' }, // 正式地址放第一个
    { text: '测试环境（家鹏）', value: 'https://yanjiapeng-weiyunbao.f.wmeimob.com/' },
    { text: '测试环境（志文）', value: 'https://zhiwen-weiyunbao.f.wmeimob.com/' },
    { text: CUSTOM_ENVIRONMENT_TEXT, value: undefined },
];

/** 登录地址 */
export const loginUrl = routeNames.pagesLoginIndex;

/** 静默授权 */
export const silentAuthorization = false;

/** 静默授权接口地址 */
export const silentAuthorizationUrl = '/wechat/auth/imperceptionToken';
