/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
    EmployeeBaseInfoEditDTO,
    JsonResultBoolean,
    JsonResultListBannerPositionOutputDto,
    JsonResultListConfConfigOutputDto,
    JsonResultListHotKeywordDto,
    JsonResultListPopupAdsDto,
    JsonResultLoginResponseVo,
    JsonResultMallConfPageSimpleOutputDto,
    JsonResultMapStringObject,
    JsonResultMapStringString,
    JsonResultMemberOutputDto,
    JsonResultPagedResultQueryMessagesRes,
    JsonResultPageInfoDeviceSnInfoListVo,
    JsonResultPageInfoSurveyWorkOrderWebListVo,
    JsonResultPageInfoThirdPartyEngineerVO,
    JsonResultPageInfoUpWorkHistoryPageVO,
    JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo,
    JsonResultPageInfoUpWorkOrderWebListVo,
    JsonResultQueryMessagesRes,
    JsonResultString,
    JsonResultSurveyWorkOrderDetailVo,
    JsonResultUpWorkOrderDetailVo,
    JsonResultVoid,
    JsonResultWebEmployeeInfoVO,
    ReqJpushDTO,
    SurveyWorkOrderAuditDto,
    UnlimitedInputDto,
    UpWorkOrderAppointmentChangeDto,
    UpWorkOrderAppointmentDto,
    UpWorkOrderAuditDto,
    UpWorkOrderSignInDto,
    UpWorkOrderUpDto,
    WebLoginDto,
    WechatApiSmsSendCodeGetParams,
    WechatApiSurveyWorkOrderPageGetParams,
    WechatApiUpWorkOrderAppointmentHistoryPageGetParams,
    WechatApiUpWorkOrderDeviceRelationPageGetParams,
    WechatApiUpWorkOrderGetAddressGetParams,
    WechatApiUpWorkOrderHistoryPageGetParams,
    WechatApiUpWorkOrderPageGetParams,
    WechatAuthTestGetParams,
    WechatEmployeeInfoThirdPartyEngineerPageGetParams,
    WechatMallConfigQueryByKeyGetParams,
    WechatMallConfigQueryByMultipleKeyGetParams,
    WechatMessagesQueryPageGetParams,
    WechatRichtextGetParams,
    WechatWebMemberDecodePhoneGetParams,
    WechatWebMemberDecodeUserInfoGetParams,
    WechatWebMemberExistsUnionIdGetParams,
    WechatWebMemberSaveUserInfoPutParams,
    WechatWebMemberUpdateMobilePutParams,
} from './data-contracts';
import requestInstance from './instance';

type RequestConfig = Omit<any, 'url' | 'method'>;

export const API = {
    /**
     * No description
     * @name GET /wechat/api/oss/info
     * @summary 云存储信息
     * @tags wechat/云存储
     * @response `200` `JsonResultMapStringObject` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/oss/info_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/oss/info',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultMapStringObject>,
    /**
     * No description
     * @name POST /wechat/api/qrCode/getUnlimited
     * @summary 获取小程序码 - getUnlimited
     * @tags wechat/小程序码
     * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/qrCode/getUnlimited_POST': (body: UnlimitedInputDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/qrCode/getUnlimited',
            method: 'POST',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultString>,
    /**
     * No description
     * @name GET /wechat/api/sms/sendCode
     * @summary 发送短信验证码
     * @tags wechat/短信服务
     * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/sms/sendCode_GET': (query: WechatApiSmsSendCodeGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/sms/sendCode',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultString>,
    /**
     * No description
     * @name POST /wechat/api/surveyWorkOrder/audit
     * @summary 审核
     * @tags wechat/工勘工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/surveyWorkOrder/audit_POST': (body: SurveyWorkOrderAuditDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/surveyWorkOrder/audit',
            method: 'POST',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/api/surveyWorkOrder/detail/{id}
     * @summary 详情
     * @tags wechat/工勘工单
     * @response `200` `JsonResultSurveyWorkOrderDetailVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/surveyWorkOrder/detail/{id}_GET': (id: number, options: RequestConfig = {}) =>
        requestInstance({
            url: `/wechat/api/surveyWorkOrder/detail/${id}`,
            method: 'GET',
            ...options,
        }) as unknown as Promise<JsonResultSurveyWorkOrderDetailVo>,
    /**
     * No description
     * @name GET /wechat/api/surveyWorkOrder/page
     * @summary 分页查询
     * @tags wechat/工勘工单
     * @response `200` `JsonResultPageInfoSurveyWorkOrderWebListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/surveyWorkOrder/page_GET': (query: WechatApiSurveyWorkOrderPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/surveyWorkOrder/page',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoSurveyWorkOrderWebListVo>,
    /**
     * No description
     * @name PUT /wechat/api/upWorkOrder/appointment
     * @summary 预约时间
     * @tags wechat/上架工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/appointment_PUT': (body: UpWorkOrderAppointmentDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/appointment',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name PUT /wechat/api/upWorkOrder/audit
     * @summary 审核
     * @tags wechat/上架工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/audit_PUT': (body: UpWorkOrderAuditDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/audit',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrder/historyPage
     * @summary 查看审核工单/签到历史
     * @tags wechat/上架工单
     * @response `200` `JsonResultPageInfoUpWorkHistoryPageVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/historyPage_GET': (query: WechatApiUpWorkOrderHistoryPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/historyPage',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoUpWorkHistoryPageVO>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrder/page
     * @summary 分页查询
     * @tags wechat/上架工单
     * @response `200` `JsonResultPageInfoUpWorkOrderWebListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/page_GET': (query: WechatApiUpWorkOrderPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/page',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoUpWorkOrderWebListVo>,
    /**
     * No description
     * @name PUT /wechat/api/upWorkOrder/signIn
     * @summary 签到
     * @tags wechat/上架工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/signIn_PUT': (body: UpWorkOrderSignInDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/signIn',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name PUT /wechat/api/upWorkOrder/up
     * @summary 上架
     * @tags wechat/上架工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/up_PUT': (body: UpWorkOrderUpDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/up',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrder/{id}
     * @summary 详情
     * @tags wechat/上架工单
     * @response `200` `JsonResultUpWorkOrderDetailVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/{id}_GET': (id: number, options: RequestConfig = {}) =>
        requestInstance({
            url: `/wechat/api/upWorkOrder/${id}`,
            method: 'GET',
            ...options,
        }) as unknown as Promise<JsonResultUpWorkOrderDetailVo>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrderDeviceRelation/page
     * @summary 工单关联设备分页查询
     * @tags wechat/上架工单设备
     * @response `200` `JsonResultPageInfoDeviceSnInfoListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrderDeviceRelation/page_GET': (query: WechatApiUpWorkOrderDeviceRelationPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrderDeviceRelation/page',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoDeviceSnInfoListVo>,
    /**
     * No description
     * @name GET /wechat/auth/test
     * @summary 生成测试token
     * @tags wechat/授权（登录、注册、修改密码、获取当前权限、忘记密码）
     * @response `200` `JsonResultLoginResponseVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/auth/test_GET': (query: WechatAuthTestGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/auth/test',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultLoginResponseVo>,
    /**
     * No description
     * @name POST /wechat/auth/token
     * @summary 账号密码登录
     * @tags wechat/授权（登录、注册、修改密码、获取当前权限、忘记密码）
     * @response `200` `JsonResultLoginResponseVo` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/auth/token_POST': (body: WebLoginDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/auth/token',
            method: 'POST',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultLoginResponseVo>,
    /**
     * No description
     * @name GET /wechat/auth/userInfo
     * @summary 获取用户信息
     * @tags wechat/授权（登录、注册、修改密码、获取当前权限、忘记密码）
     * @response `200` `JsonResultLoginResponseVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/auth/userInfo_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/auth/userInfo',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultLoginResponseVo>,
    /**
     * No description
     * @name GET /wechat/employeeInfo/baseInfo
     * @summary 基本信息
     * @tags wechat/员工信息相关接口
     * @response `200` `JsonResultWebEmployeeInfoVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/employeeInfo/baseInfo_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/employeeInfo/baseInfo',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultWebEmployeeInfoVO>,
    /**
     * No description
     * @name GET /wechat/employeeInfo/baseInfoDetails
     * @summary 基本信息详情
     * @tags wechat/员工信息相关接口
     * @response `200` `JsonResultWebEmployeeInfoVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/employeeInfo/baseInfoDetails_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/employeeInfo/baseInfoDetails',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultWebEmployeeInfoVO>,
    /**
     * No description
     * @name PUT /wechat/employeeInfo/editBaseInfo
     * @summary 修改基本信息
     * @tags wechat/员工信息相关接口
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/employeeInfo/editBaseInfo_PUT': (body: EmployeeBaseInfoEditDTO, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/employeeInfo/editBaseInfo',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/employeeInfo/thirdPartyEngineerPage
     * @summary 三方工程师列表
     * @tags wechat/员工信息相关接口
     * @response `200` `JsonResultPageInfoThirdPartyEngineerVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/employeeInfo/thirdPartyEngineerPage_GET': (query: WechatEmployeeInfoThirdPartyEngineerPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/employeeInfo/thirdPartyEngineerPage',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoThirdPartyEngineerVO>,
    /**
     * No description
     * @name GET /wechat/hotKeyword/hot
     * @summary 热词
     * @tags wechat/热词
     * @response `200` `JsonResultListHotKeywordDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/hotKeyword/hot_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/hotKeyword/hot',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultListHotKeywordDto>,
    /**
     * @description jpushDTO 具体推送字段可见当前类
     * @name POST /wechat/jpush/jPushSendAppMessage
     * @summary  极光推送 消息通知
     * @tags wechat/极光推送controller
     * @response `200` `JsonResultBoolean` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/jpush/jPushSendAppMessage_POST': (body: ReqJpushDTO, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/jpush/jPushSendAppMessage',
            method: 'POST',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultBoolean>,
    /**
     * @description 退出
     * @name POST /wechat/logout
     * @summary 退出
     * @tags wechat/退出
     * @response `200` `object` OK
     */
    '/wechat/logout_POST': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/logout',
            method: 'POST',
            params,
            ...options,
        }) as unknown as Promise<object>,
    /**
     * No description
     * @name GET /wechat/mall/banner/queryList/{position}
     * @summary 根据显示位置查询 banner 列表
     * @tags wechat/Banner相关接口
     * @response `200` `JsonResultListBannerPositionOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/mall/banner/queryList/{position}_GET': (position: string, options: RequestConfig = {}) =>
        requestInstance({
            url: `/wechat/mall/banner/queryList/${position}`,
            method: 'GET',
            ...options,
        }) as unknown as Promise<JsonResultListBannerPositionOutputDto>,
    /**
     * No description
     * @name GET /wechat/mall/config/query
     * @summary 查询所有配置项
     * @tags wechat/系统配置（支付、提现、客服等）
     * @response `200` `JsonResultListConfConfigOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/mall/config/query_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/mall/config/query',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultListConfConfigOutputDto>,
    /**
     * No description
     * @name GET /wechat/mall/config/queryByKey
     * @summary 根据key查询
     * @tags wechat/系统配置（支付、提现、客服等）
     * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/mall/config/queryByKey_GET': (query: WechatMallConfigQueryByKeyGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/mall/config/queryByKey',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultString>,
    /**
     * No description
     * @name GET /wechat/mall/config/queryByMultipleKey
     * @summary 根据keys查询，多个按逗号分割
     * @tags wechat/系统配置（支付、提现、客服等）
     * @response `200` `JsonResultMapStringString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/mall/config/queryByMultipleKey_GET': (query: WechatMallConfigQueryByMultipleKeyGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/mall/config/queryByMultipleKey',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultMapStringString>,
    /**
     * No description
     * @name GET /wechat/mall/page/get/{id}
     * @summary 获取自定义页面内容
     * @tags wechat/自定义页面
     * @response `200` `JsonResultMallConfPageSimpleOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/mall/page/get/{id}_GET': (id: number, options: RequestConfig = {}) =>
        requestInstance({
            url: `/wechat/mall/page/get/${id}`,
            method: 'GET',
            ...options,
        }) as unknown as Promise<JsonResultMallConfPageSimpleOutputDto>,
    /**
     * No description
     * @name GET /wechat/popupAds
     * @summary 弹窗列表
     * @tags wechat/弹窗广告
     * @response `200` `JsonResultListPopupAdsDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/popupAds_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/popupAds',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultListPopupAdsDto>,
    /**
     * No description
     * @name GET /wechat/richtext
     * @summary 获取富文本内容
     * @tags wechat/富文本接口
     * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/richtext_GET': (query: WechatRichtextGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/richtext',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultString>,
    /**
     * No description
     * @name GET /wechat/web/member/decodePhone
     * @summary 解析手机号并保存
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultVoid` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/decodePhone_GET': (query: WechatWebMemberDecodePhoneGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/decodePhone',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/web/member/decodeUserInfo
     * @summary 解析用户信息并保存（昵称、头像）
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultVoid` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/decodeUserInfo_GET': (query: WechatWebMemberDecodeUserInfoGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/decodeUserInfo',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/web/member/exists/unionId
     * @summary 判断是否存在 unionId
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultBoolean` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/exists/unionId_GET': (query: WechatWebMemberExistsUnionIdGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/exists/unionId',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultBoolean>,
    /**
     * No description
     * @name GET /wechat/web/member/getUserInfo
     * @summary 获取用户信息
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultMemberOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/getUserInfo_GET': (params: Record<string, any> = {}, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/getUserInfo',
            method: 'GET',
            params,
            ...options,
        }) as unknown as Promise<JsonResultMemberOutputDto>,
    /**
     * No description
     * @name PUT /wechat/web/member/saveUserInfo
     * @summary 保存用户信息（昵称、头像）
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/saveUserInfo_PUT': (query: WechatWebMemberSaveUserInfoPutParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/saveUserInfo',
            method: 'PUT',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name PUT /wechat/web/member/updateMobile
     * @summary 用户修改手机号
     * @tags wechat/会员-会员管理
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/web/member/updateMobile_PUT': (query: WechatWebMemberUpdateMobilePutParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/web/member/updateMobile',
            method: 'PUT',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/messages/queryPage
     * @summary 分页查询
     * @tags wechat/消息
     * @response `200` `JsonResultPagedResultQueryMessagesRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/messages/queryPage_GET': (query: WechatMessagesQueryPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/messages/queryPage',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPagedResultQueryMessagesRes>,
    /**
     * No description
     * @name GET /wechat/messages/{id}
     * @summary 通过id查询&红点消失
     * @tags wechat/消息
     * @response `200` `JsonResultQueryMessagesRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/messages/{id}_GET': (id: number, options: RequestConfig = {}) =>
        requestInstance({
            url: `/wechat/messages/${id}`,
            method: 'GET',
            ...options,
        }) as unknown as Promise<JsonResultQueryMessagesRes>,
    /**
     * No description
     * @name PUT /wechat/api/upWorkOrder/appointment/change
     * @summary 改约时间
     * @tags wechat/上架工单
     * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/appointment/change_PUT': (body: UpWorkOrderAppointmentChangeDto, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/appointment/change',
            method: 'PUT',
            data: body,
            ...options,
        }) as unknown as Promise<JsonResultVoid>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrder/appointmentHistory/page
     * @summary 分页查询
     * @tags wechat/上架工单改约历史
     * @response `200` `JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/appointmentHistory/page_GET': (query: WechatApiUpWorkOrderAppointmentHistoryPageGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/appointmentHistory/page',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo>,
    /**
     * No description
     * @name GET /wechat/api/upWorkOrder/getAddress
     * @summary 根据经纬度获取地址
     * @tags wechat/上架工单
     * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
     */
    '/wechat/api/upWorkOrder/getAddress_GET': (query: WechatApiUpWorkOrderGetAddressGetParams, options: RequestConfig = {}) =>
        requestInstance({
            url: '/wechat/api/upWorkOrder/getAddress',
            method: 'GET',
            params: query,
            ...options,
        }) as unknown as Promise<JsonResultString>,
};
