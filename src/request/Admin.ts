/* eslint-disable max-lines */
/* eslint-disable id-length */

import {
  AdminApiMallConfMaterialDeleteDeleteParams,
  AdminApiMallConfMaterialGroupDeleteDeleteParams,
  AdminApiMallConfMaterialGroupQueryListAllGetParams,
  AdminApiMallConfMaterialQueryListGetParams,
  AdminApiMemberExportGetParams,
  AdminApiMemberQueryGetParams,
  AdminApiOpenApiSecurityPageGetParams,
  AdminApiSmsSendCodeGetParams,
  AdminApiSurveyWorkOrderPageGetParams,
  AdminApiSysDeptDeleteDeleteParams,
  AdminApiSysDeptQueryGetParams,
  AdminApiSysResourceGetParams,
  AdminApiSysResourceTreeGetParams,
  AdminApiSysRoleDeleteDeleteParams,
  AdminApiSysRoleQueryGetParams,
  AdminApiSysUserDeleteDeleteParams,
  AdminApiSysUserExportGetParams,
  AdminApiSysUserQueryGetParams,
  AdminApiSysUserResetDefaultDeleteParams,
  AdminApiUpWorkOrderAppointmentHistoryPageGetParams,
  AdminApiUpWorkOrderDeviceRelationPageGetParams,
  AdminApiUpWorkOrderHistoryPageGetParams,
  AdminApiUpWorkOrderPageGetParams,
  AdminCustomerQueryListGetParams,
  AdminCustomerQueryPageGetParams,
  AdminDeviceSnInfoQueryListGetParams,
  AdminDeviceSnInfoQueryPageGetParams,
  AdminDeviceWcQueryListGetParams,
  AdminDeviceWcQueryPageGetParams,
  AdminEmployeeInfoPageGetParams,
  AdminEmployeeRoleQueryListGetParams,
  AdminEmployeeRoleQueryPageGetParams,
  AdminHotKeywordGetParams,
  AdminMallBannerQueryListGetParams,
  AdminMallConfigQueryByKeyGetParams,
  AdminMallConfigQueryByMultipleKeyGetParams,
  AdminMallPageDeleteDeleteParams,
  AdminMallPageDetailGetParams,
  AdminMallPageQueryGetParams,
  AdminProjectPageGetParams,
  AdminRichtextGetParams,
  AdminServerRoomQueryListGetParams,
  AdminServerRoomQueryPageGetParams,
  BannerCreateInputDto,
  BannerModifyInputDto,
  BannerModifyStatusInputDto,
  CreateCustomerInfoReq,
  CreateDeviceSnInfoReq,
  CreateDeviceWcInfoReq,
  CreateServerRoomInfoReq,
  DeviceSnInfoImportDTO,
  EmployeeInfoAddInputDTO,
  EmployeeInfoEditInputDTO,
  EmployeeResetPasswordDTO,
  ForgotPasswordDto,
  HotKeywordSaveDto,
  HotKeywordUpdateDto,
  HQOrderContentReqDTO,
  HQOrderInfoReqDTO,
  HqOrderReqDTO,
  JsonResultBannerOutputDto,
  JsonResultCustomerInfo,
  JsonResultDeviceWcInfo,
  JsonResultEmployeeDetailsVO,
  JsonResultEmployeeRole,
  JsonResultHotKeywordDto,
  JsonResultHQOrderInfoCallback,
  JsonResultListConfConfigOutputDto,
  JsonResultListDeviceSnInfoImportVO,
  JsonResultListLong,
  JsonResultListMallConfPageOutputDto,
  JsonResultListMaterialGroupVo,
  JsonResultListMenuTreeOutputDto,
  JsonResultListQueryCustomerInfoRes,
  JsonResultListQueryDeviceSnInfoRes,
  JsonResultListQueryDeviceWcInfoRes,
  JsonResultListQueryEmployeeRoleRes,
  JsonResultListQueryServerRoomInfoRes,
  JsonResultListSlaConfig,
  JsonResultListSysApi,
  JsonResultListSysResource,
  JsonResultListSysRole,
  JsonResultListSysRoleSelectOutputDto,
  JsonResultListTreeResourceVo,
  JsonResultLoginOutputDto,
  JsonResultLong,
  JsonResultMallConfPageOutputDto,
  JsonResultMapStringObject,
  JsonResultMapStringString,
  JsonResultMemberDetailOutputDto,
  JsonResultObject,
  JsonResultPagedResultBannerOutputDto,
  JsonResultPagedResultHotKeywordDto,
  JsonResultPagedResultMallConfPageOutputDto,
  JsonResultPagedResultMaterialVo,
  JsonResultPagedResultMemberDetailOutputDto,
  JsonResultPagedResultQueryCustomerInfoRes,
  JsonResultPagedResultQueryDeviceSnInfoRes,
  JsonResultPagedResultQueryDeviceWcInfoRes,
  JsonResultPagedResultQueryEmployeeRoleRes,
  JsonResultPagedResultQueryServerRoomInfoRes,
  JsonResultPagedResultSysDeptVo,
  JsonResultPagedResultSysResource,
  JsonResultPagedResultSysRoleOutputDto,
  JsonResultPagedResultSysUserVo,
  JsonResultPageInfoDeviceSnInfoListVo,
  JsonResultPageInfoEmployeeInfoPageVO,
  JsonResultPageInfoOpenApiSecurityVo,
  JsonResultPageInfoProjectPageVO,
  JsonResultPageInfoSurveyWorkOrderAdminListVo,
  JsonResultPageInfoUpWorkHistoryPageVO,
  JsonResultPageInfoUpWorkOrderAdminListVo,
  JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo,
  JsonResultProjectDetailsVO,
  JsonResultQueryDeviceSnInfoRes,
  JsonResultResourceDetailVo,
  JsonResultServerRoomInfo,
  JsonResultSlaConfig,
  JsonResultString,
  JsonResultSurveyWorkOrderDetailVo,
  JsonResultSysAuthVo,
  JsonResultSysResource,
  JsonResultSysRoleDetailOutputDto,
  JsonResultUpWorkOrderDetailVo,
  JsonResultVoid,
  JsonResultWybOrderContentResDTO,
  LoginDto,
  MallConfPageCreateInputDto,
  MallConfPageModifyInputDto,
  MaterialAddParam,
  MaterialGroupAddParam,
  MaterialGroupModifyParam,
  MaterialModifyParam,
  MaterialMoveParam,
  OpenApiSecurityAddDto,
  OpenApiSecurityUpdateDto,
  OpenOrderReqDTO,
  OpenTokenReqDTO,
  ProjectAddInputDTO,
  ProjectEditInputDTO,
  ResetPwdParam,
  ResourceCreateDto,
  ResourceUpdateDto,
  RichText,
  RoleResourceSaveDto,
  ShowDto,
  SlaConfigUpdateDto,
  SurveyWorkOrderAddDto,
  SysDeptCreateInputDto,
  SysDeptModifyInputDto,
  SysResourceReq,
  SysRoleCreateInputDto,
  SysRoleModifyInputDto,
  SysUserCreateInputDto,
  SysUserModifyInputDto,
  UnlimitedInputDto,
  UpdateCustomerInfoReq,
  UpdateCustomerStatusReq,
  UpdateDeviceSnInfoReq,
  UpdateDeviceWcInfoReq,
  UpdateEmployeeRoleReq,
  UpdateEmployeeRoleStatusReq,
  UpdateServerRoomInfoReq,
  UpdateServerRoomStatusReq,
  UpWorkOrderAddDto,
  UserChangeStatusInputDto,
  UserRolesDto
} from "./data-contracts";
import requestInstance from "./instance";

type RequestConfig = Omit<any, "url" | "method">;

export const API = {
  /**
   * No description
   * @name POST /admin/api/mallConfMaterial/add
   * @summary 添加
   * @tags admin/素材库
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterial/add_POST": (body: MaterialAddParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/mallConfMaterial/delete
   * @summary 删除
   * @tags admin/素材库
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/mallConfMaterial/delete_DELETE": (
    query: AdminApiMallConfMaterialDeleteDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterial/move
   * @summary 移动
   * @tags admin/素材库
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterial/move_PUT": (body: MaterialMoveParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/move`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/mallConfMaterial/queryList
   * @summary 分页获取
   * @tags admin/素材库
   * @response `200` `JsonResultPagedResultMaterialVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterial/queryList_GET": (
    query: AdminApiMallConfMaterialQueryListGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMaterialVo>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterial/update
   * @summary 更新
   * @tags admin/素材库
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterial/update_PUT": (body: MaterialModifyParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterial/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/mallConfMaterialGroup/add
   * @summary 新增
   * @tags admin/素材库分组
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterialGroup/add_POST": (body: MaterialGroupAddParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/mallConfMaterialGroup/delete
   * @summary 删除
   * @tags admin/素材库分组
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/mallConfMaterialGroup/delete_DELETE": (
    query: AdminApiMallConfMaterialGroupDeleteDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/mallConfMaterialGroup/queryListAll
   * @summary 分页获取
   * @tags admin/素材库分组
   * @response `200` `JsonResultListMaterialGroupVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterialGroup/queryListAll_GET": (
    query: AdminApiMallConfMaterialGroupQueryListAllGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/queryListAll`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListMaterialGroupVo>,
  /**
   * No description
   * @name PUT /admin/api/mallConfMaterialGroup/update
   * @summary 更新
   * @tags admin/素材库分组
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/mallConfMaterialGroup/update_PUT": (body: MaterialGroupModifyParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/mallConfMaterialGroup/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/member/changeStatus
   * @summary 会员状态变更
   * @tags admin/会员-会员管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/member/changeStatus_POST": (body: UserChangeStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/changeStatus`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/member/export
   * @summary 导出会员
   * @tags admin/会员-会员管理
   * @response `200` `object` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/member/export_GET": (query: AdminApiMemberExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<object>,
  /**
   * No description
   * @name GET /admin/api/member/query
   * @summary 会员查询
   * @tags admin/会员-会员管理
   * @response `200` `JsonResultPagedResultMemberDetailOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/member/query_GET": (query: AdminApiMemberQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMemberDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/member/query/{id}
   * @summary 会员详情
   * @tags admin/会员-会员管理
   * @response `200` `JsonResultMemberDetailOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/member/query/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/member/query/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultMemberDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/oss/info
   * @summary 云存储信息
   * @tags admin/云存储
   * @response `200` `JsonResultMapStringObject` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/oss/info_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/oss/info`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultMapStringObject>,
  /**
   * No description
   * @name POST /admin/api/qrCode/getUnlimited
   * @summary 获取小程序码 - getUnlimited
   * @tags admin/小程序码
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/qrCode/getUnlimited_POST": (body: UnlimitedInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/qrCode/getUnlimited`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/api/slaConfig
   * @summary 修改配置
   * @tags admin/sla配置表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/slaConfig_PUT": (body: SlaConfigUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/slaConfig`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/slaConfig/sparePart
   * @summary 查询备件配置
   * @tags admin/sla配置表
   * @response `200` `JsonResultListSlaConfig` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/slaConfig/sparePart_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/slaConfig/sparePart`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSlaConfig>,
  /**
   * No description
   * @name GET /admin/api/slaConfig/surveyWorkOrder
   * @summary 查询工勘工单配置
   * @tags admin/sla配置表
   * @response `200` `JsonResultSlaConfig` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/slaConfig/surveyWorkOrder_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/slaConfig/surveyWorkOrder`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSlaConfig>,
  /**
   * No description
   * @name GET /admin/api/slaConfig/upWorkerOrder
   * @summary 查询上架工单配置
   * @tags admin/sla配置表
   * @response `200` `JsonResultSlaConfig` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/slaConfig/upWorkerOrder_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/slaConfig/upWorkerOrder`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSlaConfig>,
  /**
   * No description
   * @name GET /admin/api/sms/sendCode
   * @summary 发送短信验证码
   * @tags admin/短信服务
   * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sms/sendCode_GET": (query: AdminApiSmsSendCodeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sms/sendCode`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /admin/api/surveyWorkOrder/add
   * @summary 新增
   * @tags admin/工勘工单
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/surveyWorkOrder/add_POST": (body: SurveyWorkOrderAddDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/surveyWorkOrder/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/surveyWorkOrder/detail/{id}
   * @summary 详情
   * @tags admin/工勘工单
   * @response `200` `JsonResultSurveyWorkOrderDetailVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/surveyWorkOrder/detail/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/surveyWorkOrder/detail/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSurveyWorkOrderDetailVo>,
  /**
   * No description
   * @name GET /admin/api/surveyWorkOrder/page
   * @summary 分页查询
   * @tags admin/工勘工单
   * @response `200` `JsonResultPageInfoSurveyWorkOrderAdminListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/surveyWorkOrder/page_GET": (query: AdminApiSurveyWorkOrderPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/surveyWorkOrder/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoSurveyWorkOrderAdminListVo>,
  /**
   * No description
   * @name POST /admin/api/sysDept/add
   * @summary 部门新增(返回ID)
   * @tags admin/系统-组织机构管理
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysDept/add_POST": (body: SysDeptCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/sysDept/delete
   * @summary 部门删除
   * @tags admin/系统-组织机构管理
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/sysDept/delete_DELETE": (query: AdminApiSysDeptDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysDept/query
   * @summary 部门表分页查询
   * @tags admin/系统-组织机构管理
   * @response `200` `JsonResultPagedResultSysDeptVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysDept/query_GET": (query: AdminApiSysDeptQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysDeptVo>,
  /**
   * No description
   * @name GET /admin/api/sysDept/queryAll
   * @summary 部门表树列表
   * @tags admin/系统-组织机构管理
   * @response `200` `JsonResultListMenuTreeOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysDept/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMenuTreeOutputDto>,
  /**
   * No description
   * @name PUT /admin/api/sysDept/update
   * @summary 部门修改
   * @tags admin/系统-组织机构管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysDept/update_PUT": (body: SysDeptModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysDept/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysResource
   * @summary 搜索资源
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultPagedResultSysResource` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource_GET": (query: AdminApiSysResourceGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysResource
   * @summary 新增
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource_POST": (body: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name PUT /admin/api/sysResource
   * @summary 修改
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource_PUT": (body: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/api/sysResource/apis
   * @summary 获取所有api集合
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultListSysApi` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/apis_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/apis`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSysApi>,
  /**
   * No description
   * @name GET /admin/api/sysResource/detail/{resource-id}
   * @summary 加载资源详情
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultResourceDetailVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/detail/{resource-id}_GET": (resourceId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/detail/${resourceId}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultResourceDetailVo>,
  /**
   * No description
   * @name POST /admin/api/sysResource/resourceCreate
   * @summary 创建资源
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/resourceCreate_POST": (body: ResourceCreateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/resourceCreate`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/api/sysResource/resourceUpdate/{id}
   * @summary 更新资源
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/resourceUpdate/{id}_PUT": (
    id: number,
    body: ResourceUpdateDto,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/sysResource/resourceUpdate/${id}`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysResource/tree
   * @summary 获取所有资源列表（树状结构）
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultListTreeResourceVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/tree_GET": (query: AdminApiSysResourceTreeGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/tree`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListTreeResourceVo>,
  /**
   * No description
   * @name GET /admin/api/sysResource/{id}
   * @summary 详情
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultSysResource` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSysResource>,
  /**
   * No description
   * @name PUT /admin/api/sysResource/{id}
   * @summary 修改
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/{id}_PUT": (id: number, body: SysResourceReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name DELETE /admin/api/sysResource/{id}
   * @summary 删除
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultString` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/sysResource/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/api/sysResource/{menu-id}/buttons
   * @summary 根据菜单ID加载菜单下所有的按钮资源
   * @tags admin/系统-资源管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysResource/{menu-id}/buttons_GET": (menuId: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysResource/${menuId}/buttons`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysRole/add
   * @summary 新增角色(返回ID)
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/add_POST": (body: SysRoleCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/api/sysRole/delete
   * @summary 角色删除
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/sysRole/delete_DELETE": (query: AdminApiSysRoleDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysRole/query
   * @summary 角色表分页查询
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultPagedResultSysRoleOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/query_GET": (query: AdminApiSysRoleQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysRoleOutputDto>,
  /**
   * No description
   * @name GET /admin/api/sysRole/queryAll
   * @summary 角色表不分页查询
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultListSysRoleSelectOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListSysRoleSelectOutputDto>,
  /**
   * No description
   * @name POST /admin/api/sysRole/resources-role
   * @summary 批量保存角色和资源的对应关系
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/resources-role_POST": (body: RoleResourceSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/resources-role`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/sysRole/update
   * @summary 修改角色
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/update_PUT": (body: SysRoleModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysRole/{id}
   * @summary 详情
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultSysRoleDetailOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultSysRoleDetailOutputDto>,
  /**
   * No description
   * @name GET /admin/api/sysRole/{id}/resources
   * @summary 获取角色对应的资源集合
   * @tags admin/系统-角色管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysRole/{id}/resources_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysRole/${id}/resources`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name POST /admin/api/sysUser/add
   * @summary 员工新增
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultLoginOutputDto` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/add_POST": (body: SysUserCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLoginOutputDto>,
  /**
   * No description
   * @name POST /admin/api/sysUser/changeStatus
   * @summary 员工状态变更
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/changeStatus_POST": (body: UserChangeStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/changeStatus`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/current-authorities
   * @summary 获取当前用户权限
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultSysAuthVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/current-authorities_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/current-authorities`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultSysAuthVo>,
  /**
   * No description
   * @name DELETE /admin/api/sysUser/delete
   * @summary 员工删除
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/sysUser/delete_DELETE": (query: AdminApiSysUserDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/export
   * @summary 导出人员
   * @tags admin/系统-用户管理
   * @response `200` `object` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/export_GET": (query: AdminApiSysUserExportGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/export`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<object>,
  /**
   * No description
   * @name GET /admin/api/sysUser/query
   * @summary 员工表分页查询
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultPagedResultSysUserVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/query_GET": (query: AdminApiSysUserQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultSysUserVo>,
  /**
   * No description
   * @name DELETE /admin/api/sysUser/resetDefault
   * @summary 重置密码
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultLoginOutputDto` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/api/sysUser/resetDefault_DELETE": (
    query: AdminApiSysUserResetDefaultDeleteParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/sysUser/resetDefault`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultLoginOutputDto>,
  /**
   * No description
   * @name PUT /admin/api/sysUser/resetPwd
   * @summary 修改密码
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/resetPwd_PUT": (body: ResetPwdParam, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/resetPwd`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/sysUser/roles-user
   * @summary 保存员工与角色的对应关系
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/roles-user_POST": (body: UserRolesDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/roles-user`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/sysUser/update
   * @summary 员工修改
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/update_PUT": (body: SysUserModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/sysUser/{id}/resources
   * @summary 根据员工ID获取员工可访问的资源
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultListSysResource` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/{id}/resources_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/${id}/resources`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysResource>,
  /**
   * No description
   * @name GET /admin/api/sysUser/{id}/roles
   * @summary 根据员工ID查询员工关联的角色集合
   * @tags admin/系统-用户管理
   * @response `200` `JsonResultListSysRole` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/sysUser/{id}/roles_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/sysUser/${id}/roles`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListSysRole>,
  /**
   * No description
   * @name POST /admin/api/upWorkOrder/add
   * @summary 新增
   * @tags admin/上架工单
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/add_POST": (body: UpWorkOrderAddDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/api/upWorkOrder/add/import
   * @summary 导入设备SN码
   * @tags admin/上架工单
   * @response `200` `JsonResultListDeviceSnInfoImportVO` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/add/import_POST": (body: DeviceSnInfoImportDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/add/import`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultListDeviceSnInfoImportVO>,
  /**
   * No description
   * @name GET /admin/api/upWorkOrder/historyPage
   * @summary 查看审核工单/签到历史
   * @tags admin/上架工单
   * @response `200` `JsonResultPageInfoUpWorkHistoryPageVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/historyPage_GET": (
    query: AdminApiUpWorkOrderHistoryPageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/historyPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoUpWorkHistoryPageVO>,
  /**
   * No description
   * @name GET /admin/api/upWorkOrder/page
   * @summary 分页查询
   * @tags admin/上架工单
   * @response `200` `JsonResultPageInfoUpWorkOrderAdminListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/page_GET": (query: AdminApiUpWorkOrderPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoUpWorkOrderAdminListVo>,
  /**
   * No description
   * @name GET /admin/api/upWorkOrder/{id}
   * @summary 详情
   * @tags admin/上架工单
   * @response `200` `JsonResultUpWorkOrderDetailVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultUpWorkOrderDetailVo>,
  /**
   * No description
   * @name GET /admin/api/upWorkOrderDeviceRelation/page
   * @summary 工单关联设备分页查询
   * @tags admin/上架工单设备
   * @response `200` `JsonResultPageInfoDeviceSnInfoListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrderDeviceRelation/page_GET": (
    query: AdminApiUpWorkOrderDeviceRelationPageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/upWorkOrderDeviceRelation/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoDeviceSnInfoListVo>,
  /**
   * No description
   * @name POST /admin/customer/add
   * @summary 添加
   * @tags admin/客户信息表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/add_POST": (body: CreateCustomerInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/customer/queryList
   * @summary 列表查询
   * @tags admin/客户信息表
   * @response `200` `JsonResultListQueryCustomerInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/queryList_GET": (query: AdminCustomerQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQueryCustomerInfoRes>,
  /**
   * No description
   * @name GET /admin/customer/queryPage
   * @summary 分页查询
   * @tags admin/客户信息表
   * @response `200` `JsonResultPagedResultQueryCustomerInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/queryPage_GET": (query: AdminCustomerQueryPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/queryPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultQueryCustomerInfoRes>,
  /**
   * No description
   * @name PUT /admin/customer/update
   * @summary 修改
   * @tags admin/客户信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/update_PUT": (body: UpdateCustomerInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/customer/updateStatus
   * @summary 修改状态
   * @tags admin/客户信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/updateStatus_PUT": (body: UpdateCustomerStatusReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/updateStatus`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/customer/{id}
   * @summary 通过id查询
   * @tags admin/客户信息表
   * @response `200` `JsonResultCustomerInfo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/customer/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/customer/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultCustomerInfo>,
  /**
   * No description
   * @name POST /admin/deviceSnInfo/add
   * @summary 添加
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/add_POST": (body: CreateDeviceSnInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/deviceSnInfo/importDeviceSn
   * @summary 导入SN数据
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/importDeviceSn_PUT": (data?: any, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/importDeviceSn`,
      method: "PUT",
      data: data,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/deviceSnInfo/queryList
   * @summary 列表查询
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultListQueryDeviceSnInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/queryList_GET": (query: AdminDeviceSnInfoQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQueryDeviceSnInfoRes>,
  /**
   * No description
   * @name GET /admin/deviceSnInfo/queryPage
   * @summary 分页查询
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultPagedResultQueryDeviceSnInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/queryPage_GET": (query: AdminDeviceSnInfoQueryPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/queryPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultQueryDeviceSnInfoRes>,
  /**
   * No description
   * @name PUT /admin/deviceSnInfo/update
   * @summary 修改
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/update_PUT": (body: UpdateDeviceSnInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/deviceSnInfo/{id}
   * @summary 通过id查询
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultQueryDeviceSnInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceSnInfo/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultQueryDeviceSnInfoRes>,
  /**
   * No description
   * @name DELETE /admin/deviceSnInfo/{id}
   * @summary 删除
   * @tags admin/设备SN信息表
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/deviceSnInfo/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceSnInfo/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/deviceWc/add
   * @summary 添加
   * @tags admin/设备WC信息表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceWc/add_POST": (body: CreateDeviceWcInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceWc/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/deviceWc/queryList
   * @summary 列表查询
   * @tags admin/设备WC信息表
   * @response `200` `JsonResultListQueryDeviceWcInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceWc/queryList_GET": (query: AdminDeviceWcQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceWc/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQueryDeviceWcInfoRes>,
  /**
   * No description
   * @name GET /admin/deviceWc/queryPage
   * @summary 分页查询
   * @tags admin/设备WC信息表
   * @response `200` `JsonResultPagedResultQueryDeviceWcInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceWc/queryPage_GET": (query: AdminDeviceWcQueryPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceWc/queryPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultQueryDeviceWcInfoRes>,
  /**
   * No description
   * @name PUT /admin/deviceWc/update
   * @summary 修改
   * @tags admin/设备WC信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceWc/update_PUT": (body: UpdateDeviceWcInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceWc/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/deviceWc/{id}
   * @summary 通过id查询
   * @tags admin/设备WC信息表
   * @response `200` `JsonResultDeviceWcInfo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/deviceWc/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/deviceWc/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultDeviceWcInfo>,
  /**
   * No description
   * @name GET /admin/employeeRole/queryList
   * @summary 列表查询
   * @tags admin/员工角色表
   * @response `200` `JsonResultListQueryEmployeeRoleRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employeeRole/queryList_GET": (query: AdminEmployeeRoleQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employeeRole/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQueryEmployeeRoleRes>,
  /**
   * No description
   * @name GET /admin/employeeRole/queryPage
   * @summary 分页查询
   * @tags admin/员工角色表
   * @response `200` `JsonResultPagedResultQueryEmployeeRoleRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employeeRole/queryPage_GET": (query: AdminEmployeeRoleQueryPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employeeRole/queryPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultQueryEmployeeRoleRes>,
  /**
   * No description
   * @name PUT /admin/employeeRole/update
   * @summary 修改
   * @tags admin/员工角色表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employeeRole/update_PUT": (body: UpdateEmployeeRoleReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employeeRole/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/employeeRole/updateStatus
   * @summary 修改状态
   * @tags admin/员工角色表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employeeRole/updateStatus_PUT": (body: UpdateEmployeeRoleStatusReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employeeRole/updateStatus`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/employeeRole/{id}
   * @summary 通过id查询
   * @tags admin/员工角色表
   * @response `200` `JsonResultEmployeeRole` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employeeRole/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employeeRole/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultEmployeeRole>,
  /**
   * No description
   * @name POST /admin/employee_info/add
   * @summary 新建员工白名单账号
   * @tags admin/员工信息表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/add_POST": (body: EmployeeInfoAddInputDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/employee_info/disable/{id}
   * @summary 员工账号禁用
   * @tags admin/员工信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/disable/{id}_PUT": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/disable/${id}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/employee_info/enable/{id}
   * @summary 员工账号启用
   * @tags admin/员工信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/enable/{id}_PUT": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/enable/${id}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/employee_info/page
   * @summary 分页查询
   * @tags admin/员工信息表
   * @response `200` `JsonResultPageInfoEmployeeInfoPageVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/page_GET": (query: AdminEmployeeInfoPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoEmployeeInfoPageVO>,
  /**
   * No description
   * @name PUT /admin/employee_info/resetPassword
   * @summary 重置密码
   * @tags admin/员工信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/resetPassword_PUT": (body: EmployeeResetPasswordDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/resetPassword`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/employee_info/update
   * @summary 编辑员工账号
   * @tags admin/员工信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/update_PUT": (body: EmployeeInfoEditInputDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/employee_info/{id}
   * @summary 通过id查询
   * @tags admin/员工信息表
   * @response `200` `JsonResultEmployeeDetailsVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/employee_info/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/employee_info/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultEmployeeDetailsVO>,
  /**
   * No description
   * @name GET /admin/hotKeyword
   * @summary 列表
   * @tags admin/热词
   * @response `200` `JsonResultPagedResultHotKeywordDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hotKeyword_GET": (query: AdminHotKeywordGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultHotKeywordDto>,
  /**
   * No description
   * @name POST /admin/hotKeyword
   * @summary 新增
   * @tags admin/热词
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hotKeyword_POST": (body: HotKeywordSaveDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/hotKeyword/{id}
   * @summary 详情
   * @tags admin/热词
   * @response `200` `JsonResultHotKeywordDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hotKeyword/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultHotKeywordDto>,
  /**
   * No description
   * @name PUT /admin/hotKeyword/{id}
   * @summary 编辑
   * @tags admin/热词
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hotKeyword/{id}_PUT": (id: number, body: HotKeywordUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/hotKeyword/{id}
   * @summary 删除
   * @tags admin/热词
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/hotKeyword/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/hotKeyword/{id}/show
   * @summary 显示/隐藏
   * @tags admin/热词
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hotKeyword/{id}/show_PUT": (id: number, body: ShowDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hotKeyword/${id}/show`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 退出
   * @name POST /admin/logout
   * @summary 退出
   * @tags admin/退出
   * @response `200` `object` OK
   */
  "/admin/logout_POST": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/logout`,
      method: "POST",
      params,
      ...options
    }) as unknown as Promise<object>,
  /**
   * No description
   * @name POST /admin/mall/banner/add
   * @summary 添加banner
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/banner/add_POST": (body: BannerCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/banner/delete/{id}
   * @summary 删除banner
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/mall/banner/delete/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/delete/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/banner/get/{id}
   * @summary banner查询
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultBannerOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/banner/get/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/get/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultBannerOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/banner/queryList
   * @summary banner分页查询
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultPagedResultBannerOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/banner/queryList_GET": (query: AdminMallBannerQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultBannerOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/banner/update
   * @summary 编辑banner
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/banner/update_PUT": (body: BannerModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/mall/banner/updateStatus
   * @summary banner状态变更
   * @tags admin/Banner相关接口
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/banner/updateStatus_PUT": (body: BannerModifyStatusInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/banner/updateStatus`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/mall/config/insertAndUpdate
   * @summary 通用设置保存与修改 {key : value} 形式
   * @tags admin/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/config/insertAndUpdate_POST": (body: Record<string, string>, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/insertAndUpdate`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/config/query
   * @summary 查询所有配置项
   * @tags admin/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultListConfConfigOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/config/query_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/query`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListConfConfigOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/config/queryByKey
   * @summary 根据key查询
   * @tags admin/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/config/queryByKey_GET": (query: AdminMallConfigQueryByKeyGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/config/queryByKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/mall/config/queryByMultipleKey
   * @summary 根据keys查询，多个按逗号分割
   * @tags admin/系统配置（支付、提现、客服等）
   * @response `200` `JsonResultMapStringString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/config/queryByMultipleKey_GET": (
    query: AdminMallConfigQueryByMultipleKeyGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/mall/config/queryByMultipleKey`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMapStringString>,
  /**
   * No description
   * @name POST /admin/mall/page/add
   * @summary 自定义页面新增
   * @tags admin/自定义页面
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/page/add_POST": (body: MallConfPageCreateInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name DELETE /admin/mall/page/delete
   * @summary 自定义页面删除
   * @tags admin/自定义页面
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/mall/page/delete_DELETE": (query: AdminMallPageDeleteDeleteParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/delete`,
      method: "DELETE",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/mall/page/detail
   * @summary 自定义页面内容详情
   * @tags admin/自定义页面
   * @response `200` `JsonResultMallConfPageOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/page/detail_GET": (query: AdminMallPageDetailGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/detail`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultMallConfPageOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/page/query
   * @summary 自定义页面分页查询
   * @tags admin/自定义页面
   * @response `200` `JsonResultPagedResultMallConfPageOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/page/query_GET": (query: AdminMallPageQueryGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/query`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultMallConfPageOutputDto>,
  /**
   * No description
   * @name GET /admin/mall/page/queryAll
   * @summary 自定义页面不分页查询
   * @tags admin/自定义页面
   * @response `200` `JsonResultListMallConfPageOutputDto` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/page/queryAll_GET": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/queryAll`,
      method: "GET",
      params,
      ...options
    }) as unknown as Promise<JsonResultListMallConfPageOutputDto>,
  /**
   * No description
   * @name PUT /admin/mall/page/update
   * @summary 自定义页面修改
   * @tags admin/自定义页面
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/mall/page/update_PUT": (body: MallConfPageModifyInputDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/mall/page/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/project/add
   * @summary 新增项目
   * @tags admin/项目列表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/add_POST": (body: ProjectAddInputDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name GET /admin/project/listServerRoomId/{id}
   * @summary 通过项目id查询对应机房id
   * @tags admin/项目列表
   * @response `200` `JsonResultListLong` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/listServerRoomId/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/listServerRoomId/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultListLong>,
  /**
   * No description
   * @name GET /admin/project/page
   * @summary 分页查询
   * @tags admin/项目列表
   * @response `200` `JsonResultPageInfoProjectPageVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/page_GET": (query: AdminProjectPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoProjectPageVO>,
  /**
   * No description
   * @name PUT /admin/project/update
   * @summary 编辑项目
   * @tags admin/项目列表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/update_PUT": (body: ProjectEditInputDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/project/updateManpowerInventoryStatus/{id}
   * @summary 人员盘点通过
   * @tags admin/项目列表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/updateManpowerInventoryStatus/{id}_PUT": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/updateManpowerInventoryStatus/${id}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/project/updateSparePartsInventoryStatus/{id}
   * @summary 备件盘点通过
   * @tags admin/项目列表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/updateSparePartsInventoryStatus/{id}_PUT": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/updateSparePartsInventoryStatus/${id}`,
      method: "PUT",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/project/{id}
   * @summary 通过id查询
   * @tags admin/项目列表
   * @response `200` `JsonResultProjectDetailsVO` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/project/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/project/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultProjectDetailsVO>,
  /**
   * No description
   * @name POST /admin/public/forgot
   * @summary 忘记密码
   * @tags admin/公开访问的APIs
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/public/forgot_POST": (body: ForgotPasswordDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/public/forgot`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * @description 默认账号:19999999999 密码ocj123456 密码需要aes加密，获取token后放在header中{Authorization:你的token}
   * @name POST /admin/public/login
   * @summary 登录
   * @tags admin/公开访问的APIs
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/public/login_POST": (body: LoginDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/public/login`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name GET /admin/richtext
   * @summary 获取富文本内容
   * @tags admin/富文本管理接口
   * @response `200` `JsonResultString` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/richtext_GET": (query: AdminRichtextGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultString>,
  /**
   * No description
   * @name POST /admin/richtext
   * @summary 新增富文本
   * @tags admin/富文本管理接口
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/richtext_POST": (body: RichText, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/richtext/{id}
   * @summary 修改富文本
   * @tags admin/富文本管理接口
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/richtext/{id}_PUT": (id: number, body: RichText, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext/${id}`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name DELETE /admin/richtext/{id}
   * @summary 删除富文本
   * @tags admin/富文本管理接口
   * @response `200` `JsonResultVoid` OK |  `204` `object` No Content |  `401` `object` Unauthorized |  `403` `object` Forbidden
   */
  "/admin/richtext/{id}_DELETE": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/richtext/${id}`,
      method: "DELETE",
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name POST /admin/serverRoom/add
   * @summary 添加
   * @tags admin/机房信息表
   * @response `200` `JsonResultLong` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/add_POST": (body: CreateServerRoomInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/add`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultLong>,
  /**
   * No description
   * @name PUT /admin/serverRoom/importCustomer
   * @summary 导入机房信息
   * @tags admin/机房信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/importCustomer_PUT": (data?: any, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/importCustomer`,
      method: "PUT",
      data: data,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/serverRoom/importRegion
   * @summary 导入机房信息
   * @tags admin/机房信息表
   * @response `200` `object` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/importRegion_PUT": (params: Record<string, any> = {}, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/importRegion`,
      method: "PUT",
      params,
      ...options
    }) as unknown as Promise<object>,
  /**
   * No description
   * @name GET /admin/serverRoom/queryList
   * @summary 列表查询
   * @tags admin/机房信息表
   * @response `200` `JsonResultListQueryServerRoomInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/queryList_GET": (query: AdminServerRoomQueryListGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/queryList`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultListQueryServerRoomInfoRes>,
  /**
   * No description
   * @name GET /admin/serverRoom/queryPage
   * @summary 分页查询
   * @tags admin/机房信息表
   * @response `200` `JsonResultPagedResultQueryServerRoomInfoRes` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/queryPage_GET": (query: AdminServerRoomQueryPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/queryPage`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPagedResultQueryServerRoomInfoRes>,
  /**
   * No description
   * @name PUT /admin/serverRoom/update
   * @summary 修改
   * @tags admin/机房信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/update_PUT": (body: UpdateServerRoomInfoReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/update`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/serverRoom/updateStatus
   * @summary 修改状态
   * @tags admin/机房信息表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/updateStatus_PUT": (body: UpdateServerRoomStatusReq, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/updateStatus`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/serverRoom/{id}
   * @summary 通过id查询
   * @tags admin/机房信息表
   * @response `200` `JsonResultServerRoomInfo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/serverRoom/{id}_GET": (id: number, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/serverRoom/${id}`,
      method: "GET",
      ...options
    }) as unknown as Promise<JsonResultServerRoomInfo>,
  /**
   * No description
   * @name GET /admin/api/upWorkOrder/appointmentHistory/page
   * @summary 分页查询
   * @tags admin/上架工单改约历史
   * @response `200` `JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/upWorkOrder/appointmentHistory/page_GET": (
    query: AdminApiUpWorkOrderAppointmentHistoryPageGetParams,
    options: RequestConfig = {}
  ) =>
    requestInstance({
      url: `/admin/api/upWorkOrder/appointmentHistory/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo>,
  /**
   * No description
   * @name POST /admin/hqOrder/push
   * @summary 新增
   * @tags admin/华勤工单对接
   * @response `200` `JsonResultWybOrderContentResDTO` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/hqOrder/push_POST": (body: HQOrderContentReqDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/hqOrder/push`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultWybOrderContentResDTO>,
  /**
   * No description
   * @name POST /admin/api/openApiSecurity
   * @summary 新增
   * @tags admin/对接安全表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/openApiSecurity_POST": (body: OpenApiSecurityAddDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/openApiSecurity`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name PUT /admin/api/openApiSecurity
   * @summary 编辑
   * @tags admin/对接安全表
   * @response `200` `JsonResultVoid` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/openApiSecurity_PUT": (body: OpenApiSecurityUpdateDto, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/openApiSecurity`,
      method: "PUT",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultVoid>,
  /**
   * No description
   * @name GET /admin/api/openApiSecurity/page
   * @summary 分页查询
   * @tags admin/对接安全表
   * @response `200` `JsonResultPageInfoOpenApiSecurityVo` OK |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/api/openApiSecurity/page_GET": (query: AdminApiOpenApiSecurityPageGetParams, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/api/openApiSecurity/page`,
      method: "GET",
      params: query,
      ...options
    }) as unknown as Promise<JsonResultPageInfoOpenApiSecurityVo>,
  /**
   * @description ## 访问域名 dev:https://zhiwen-weiyunbao.f.wmeimob.com
   * @name POST /admin/open/api/order/dispatch
   * @summary 统一下单
   * @tags admin/第三方下单接口
   * @response `200` `JsonResultObject` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/open/api/order/dispatch_POST": (body: OpenOrderReqDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/open/api/order/dispatch`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /admin/open/api/order/hq
   * @summary 华擎下单
   * @tags admin/第三方下单接口
   * @response `200` `JsonResultObject` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/open/api/order/hq_POST": (body: HqOrderReqDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/open/api/order/hq`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultObject>,
  /**
   * No description
   * @name POST /admin/open/api/order/orderInfo
   * @summary 华擎获取工单信息
   * @tags admin/第三方下单接口
   * @response `200` `JsonResultHQOrderInfoCallback` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/open/api/order/orderInfo_POST": (body: HQOrderInfoReqDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/open/api/order/orderInfo`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultHQOrderInfoCallback>,
  /**
   * No description
   * @name POST /admin/open/auth/accessToken
   * @summary 获取鉴权token
   * @tags admin/第三方认证接口
   * @response `200` `JsonResultString` OK |  `201` `object` Created |  `401` `object` Unauthorized |  `403` `object` Forbidden |  `404` `object` Not Found
   */
  "/admin/open/auth/accessToken_POST": (body: OpenTokenReqDTO, options: RequestConfig = {}) =>
    requestInstance({
      url: `/admin/open/auth/accessToken`,
      method: "POST",
      data: body,
      ...options
    }) as unknown as Promise<JsonResultString>
};
