/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */
import { IUniRequestConfig } from '@/components/request/types/uni-type'
import * as DC from './data-contracts'

type RequestConfig = Partial<IUniRequestConfig>

export interface APIGET {
  /**
   * @summary 获取微信手机号
   * @tags public/小程序
   */
  '/api/wx/getMobile/{code}': (query: { code: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPhoneNumDTO>
  /**
   * @summary 云存储信息
   * @tags public/云存储, web/云存储
   */
  '/api/oss/info': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapStringObject>
  /**
   * @summary 注销
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/logout': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 尝试请求
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/try': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 获取分享id
   * @tags public/分享, flow-manage-mini/W-F-流量主管理小程序核心API(登录、获取手机号)
   */
  '/api/share': (query: DC.ApiShareGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 根据分享id获取参数值
   * @tags public/分享, flow-manage-mini/W-F-流量主管理小程序核心API(登录、获取手机号)
   */
  '/api/share/{id}/value': (query: { id: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 分页查询
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity': (query: DC.ApiSysV1ActivityGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResActivityDto>
  /**
   * @summary 简要信息
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @summary 所有活动查询
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/getAll': (query: DC.ApiSysV1ActivityGetAllGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResActivityDto>
  /**
   * @summary 简要信息
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayDto>
  /**
   * @summary 新分页查询
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/list': (
    query: DC.ApiSysV1ActivityPlayListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayDto>
  /**
   * @summary 玩法票档-1
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/queryFile': (
    query: DC.ApiSysV1ActivityPlayQueryFileGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityPlayTicketingFilesDto>
  /**
   * @summary 分页查询
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods': (
    query: DC.ApiSysV1ActivityPlayGoodsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayGoodsDto>
  /**
   * @summary 简要信息
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayGoodsDto>
  /**
   * @summary 分页查询
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask': (
    query: DC.ApiSysV1ActivityPlayTaskGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayTaskDto>
  /**
   * @summary 简要信息
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayTaskDto>
  /**
   * @summary 分页查询
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes': (
    query: DC.ApiSysV1ActivityPlayVotesGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesDto>
  /**
   * @summary 简要信息
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayVotesDto>
  /**
   * @summary 分页查询
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm': (
    query: DC.ApiSysV1ActivityPlayVotesTurmGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesTurmDto>
  /**
   * @summary 简要信息
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayVotesTurmDto>
  /**
   * @summary 查询-3
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/list': (
    query: DC.ApiSysV1ActivityPlayVotesTurmListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesTurmDto>
  /**
   * @summary 地址列表
   * @tags 收货地址接口
   */
  '/api/sys/v1/address/getList': (
    query: DC.ApiSysV1AddressGetListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResMemberAddressDto>
  /**
   * @summary 分页查询
   * @tags banner
   */
  '/api/sys/v1/banner': (query: DC.ApiSysV1BannerGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultBannerDto>
  /**
   * @summary 简要信息
   * @tags banner
   */
  '/api/sys/v1/banner/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultBannerDto>
  /**
   * @summary 查询所有配置项
   * @tags 系统配置
   */
  '/api/sys/v1/config': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysConfigDto>
  /**
   * @summary 根据键值查询
   * @tags 系统配置
   */
  '/api/sys/v1/config/queryByKey': (query: DC.ApiSysV1ConfigQueryByKeyGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 根据多个键值查询，多个按逗号分割
   * @tags 系统配置
   */
  '/api/sys/v1/config/queryByMultipleKey': (
    query: DC.ApiSysV1ConfigQueryByMultipleKeyGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultMapStringString>
  /**
   * @summary 分页查询
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents': (query: DC.ApiSysV1ContentsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResContentsDto>
  /**
   * @summary 简要信息
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResContentsDto>
  /**
   * @summary 分页查询
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts': (
    query: DC.ApiSysV1FrequentContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResFrequentContactsDto>
  /**
   * @summary 简要信息
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResFrequentContactsDto>
  /**
   * @summary 分页查询
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods': (query: DC.ApiSysV1GoodsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResGoodsDto>
  /**
   * @summary 导出
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/export': (query: DC.ApiSysV1GoodsExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 简要信息
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResGoodsDto>
  /**
   * @summary 新分页查询
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/list': (query: DC.ApiSysV1GoodsListGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResGoodsDto>
  /**
   * @summary 分页查询
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode': (
    query: DC.ApiSysV1InvitationCodeGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResInvitationCodeDto>
  /**
   * @summary 导出-1
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/export': (query: DC.ApiSysV1InvitationCodeExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 简要信息
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResInvitationCodeDto>
  /**
   * @summary 分页查询
   * @tags 素材库
   */
  '/api/sys/v1/material': (query: DC.ApiSysV1MaterialGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultMaterialDto>
  /**
   * @summary 简要信息
   * @tags 素材库
   */
  '/api/sys/v1/material/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMaterialDto>
  /**
   * @summary 简要信息
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMaterialGroupDto>
  /**
   * @summary 树列表
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/tree': (query: DC.ApiSysV1MaterialGroupTreeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListTreeLong>
  /**
   * @summary 分页查询-1
   * @tags 会员
   */
  '/api/sys/v1/member': (query: DC.ApiSysV1MemberGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultMemberDto>
  /**
   * @summary 导出
   * @tags 会员
   */
  '/api/sys/v1/member/export': (query: DC.ApiSysV1MemberExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 爽约导出
   * @tags 会员
   */
  '/api/sys/v1/member/exportFail': (query: DC.ApiSysV1MemberExportFailGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 会员基本信息
   * @tags 会员
   */
  '/api/sys/v1/member/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @summary 会员详情
   * @tags 会员
   */
  '/api/sys/v1/member/getDetail/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @summary 压测
   * @tags 会员
   */
  '/api/sys/v1/member/addUser': (query: DC.ApiSysV1MemberAddUserGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 分页查询
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery': (
    query: DC.ApiSysV1MemberLotteryGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResMemberLotteryDto>
  /**
   * @summary 导出
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/export': (query: DC.ApiSysV1MemberLotteryExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 导出
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/exportMember': (
    query: DC.ApiSysV1MemberLotteryExportMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.CharSequence>
  /**
   * @summary 简要信息
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberLotteryDto>
  /**
   * @summary 消息-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/send': (query: DC.ApiSysV1MemberLotterySendGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 分页查询
   * @tags 操作日志
   */
  '/api/sys/v1/operationLog': (
    query: DC.ApiSysV1OperationLogGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultReqOperateLogsDTO>
  /**
   * @summary 分页查询
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders': (query: DC.ApiSysV1OrdersGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResOrdersDto>
  /**
   * @summary 参与人订单查询-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/contactsOrder': (
    query: DC.ApiSysV1OrdersContactsOrderGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResOrderFrequentContactsDto>
  /**
   * @summary 导出数据-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/export': (query: DC.ApiSysV1OrdersExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 导出全部参与人-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContacts': (query: DC.ApiSysV1OrdersExportContactsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 票务核销明细导出-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContactsAll': (query: DC.ApiSysV1OrdersExportContactsAllGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 参与人订单导出-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContactsList': (query: DC.ApiSysV1OrdersExportContactsListGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 简要信息
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @summary 预约详情-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/getContactsByOrderId': (
    query: DC.ApiSysV1OrdersGetContactsByOrderIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResOrderFrequentContactsDto>
  /**
   * @summary 查询核销信息-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/getOrderContacts': (
    query: DC.ApiSysV1OrdersGetOrderContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @summary 票务活动数据统计-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/statistics': (
    query: DC.ApiSysV1OrdersStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrdersstatisticsDto>
  /**
   * @summary 分页查询
   * @tags 页面
   */
  '/api/sys/v1/page': (query: DC.ApiSysV1PageGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysPageDto>
  /**
   * @summary 简要信息
   * @tags 页面
   */
  '/api/sys/v1/page/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysPageDto>
  /**
   * @summary 获取所有页面
   * @tags 页面
   */
  '/api/sys/v1/page/select': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysPageDto>
  /**
   * @summary 分页查询
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play': (query: DC.ApiSysV1PlayGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayDto>
  /**
   * @summary 简要信息
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayDto>
  /**
   * @summary 所有玩法查询
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/getAll': (query: DC.ApiSysV1PlayGetAllGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResPlayDto>
  /**
   * @summary 分页查询
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods': (query: DC.ApiSysV1PlayGoodsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayGoodsDto>
  /**
   * @summary 简要信息
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayGoodsDto>
  /**
   * @summary 分页查询
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask': (query: DC.ApiSysV1PlayTaskGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayTaskDto>
  /**
   * @summary 简要信息
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayTaskDto>
  /**
   * @summary 分页查询
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds': (query: DC.ApiSysV1PopupAdsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultPopupAdsDto>
  /**
   * @summary 简要信息
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPopupAdsDto>
  /**
   * @summary 简要信息
   * @tags 资源
   */
  '/api/sys/v1/resource/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResourceDetailDto>
  /**
   * @summary 树列表
   * @tags 资源
   */
  '/api/sys/v1/resource/tree': (query: DC.ApiSysV1ResourceTreeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListTreeLong>
  /**
   * @summary 简要信息
   * @tags 富文本
   */
  '/api/sys/v1/richtext/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultRichTextDto>
  /**
   * @summary 分页查询
   * @tags 角色
   */
  '/api/sys/v1/role': (query: DC.ApiSysV1RoleGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysRoleDto>
  /**
   * @summary 简要信息
   * @tags 角色
   */
  '/api/sys/v1/role/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysRoleDto>
  /**
   * @summary 获取所有角色
   * @tags 角色
   */
  '/api/sys/v1/role/select': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysRoleSelectDto>
  /**
   * @summary 分页查询
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig': (
    query: DC.ApiSysV1TicketingConfigGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResTicketingConfigDto>
  /**
   * @summary 简要信息
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResTicketingConfigDto>
  /**
   * @summary 票务玩法详情-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/getTicketingPlayId': (
    query: DC.ApiSysV1TicketingConfigGetTicketingPlayIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResPlayTicketingDto>
  /**
   * @summary 分页查询
   * @tags 用户
   */
  '/api/sys/v1/user': (query: DC.ApiSysV1UserGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysUserDto>
  /**
   * @summary 获取当前用户权限
   * @tags 用户
   */
  '/api/sys/v1/user/current-authorities': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserAuthDto>
  /**
   * @summary 导出
   * @tags 用户
   */
  '/api/sys/v1/user/export': (query: DC.ApiSysV1UserExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 简要信息
   * @tags 用户
   */
  '/api/sys/v1/user/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserDto>
  /**
   * @summary 分页查询
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes': (query: DC.ApiSysV1VotesGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResVotesDto>
  /**
   * @summary 简要信息
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResVotesDto>
  /**
   * @summary 投票玩法详情-1
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/getPlayId': (query: DC.ApiSysV1VotesGetPlayIdGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayDto>
  /**
   * @summary 分页查询
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord': (query: DC.ApiSysV1VotesRecordGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResVotesRecordDto>
  /**
   * @summary 简要信息
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResVotesRecordDto>
  /**
   * @summary 抽奖用户名单-3
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/lotteryList': (
    query: DC.ApiSysV1VotesRecordLotteryListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListMemberDto>
  /**
   * @summary 投票统计-3
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/statistics': (
    query: DC.ApiSysV1VotesRecordStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResVotesRecordStatisticsDto>
  /**
   * @summary 分页查询
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff': (query: DC.ApiSysV1WriteOffGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResWriteOffDto>
  /**
   * @summary 简要信息
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResWriteOffDto>
  /**
   * @summary 可选择人员查询-1
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/queryAllMember': (
    query: DC.ApiSysV1WriteOffQueryAllMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultMemberDto>
  /**
   * @summary 获取活动详情内容
   * @tags 活动
   */
  '/api/member/v1/activity/activity': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @summary 根据经纬度计算是否在范围内-3
   * @tags 活动
   */
  '/api/member/v1/activity/addressDistance': (
    query: DC.ApiMemberV1ActivityAddressDistanceGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultBoolean>
  /**
   * @summary 核销人员可核销活动-1
   * @tags 活动
   */
  '/api/member/v1/activity/getActivityList': (
    query: DC.ApiMemberV1ActivityGetActivityListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityDto>
  /**
   * @summary 查询活动任务抽奖记录
   * @tags 活动
   */
  '/api/member/v1/activity/getLotteryList': (
    query: DC.ApiMemberV1ActivityGetLotteryListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberLotteryDto>
  /**
   * @summary 最近中奖数据
   * @tags 活动
   */
  '/api/member/v1/activity/getNowLottery': (
    query: DC.ApiMemberV1ActivityGetNowLotteryGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResMemberLotteryDto>
  /**
   * @summary 任务资格明细
   * @tags 活动
   */
  '/api/member/v1/activity/getRewardList': (
    query: DC.ApiMemberV1ActivityGetRewardListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberRewardDto>
  /**
   * @summary 用户可领取中奖数量
   * @tags 活动
   */
  '/api/member/v1/activity/lotteryNum': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapIntInt>
  /**
   * @summary 获取活动详情内容-1
   * @tags 活动
   */
  '/api/member/v1/activity/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @summary 根据订单Id获取退款规则-1
   * @tags 退票规则-1
   */
  '/api/member/v1/activityPlayTicketingRefundRule/getRule': (
    query: DC.ApiMemberV1ActivityPlayTicketingRefundRuleGetRuleGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityPlayTicketingRefundRuleDto>
  /**
   * @summary 地址详情
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getById': (
    query: DC.ApiMemberV1AddressGetByIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResMemberAddressDto>
  /**
   * @summary 默认收货地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getDefault': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberAddressDto>
  /**
   * @summary 地址列表
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getList': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedScrollResultResMemberAddressDto>
  /**
   * @summary 助力列表
   * @tags 助力
   */
  '/api/member/v1/assist/getAssistList': (
    query: DC.ApiMemberV1AssistGetAssistListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberAssistDto>
  /**
   * @summary 查询banner金刚区列表
   * @tags Banner
   */
  '/api/member/v1/banner/list/{type}': (query: { type: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListBannerDto>
  /**
   * @summary 根据key查询
   * @tags 系统配置
   */
  '/api/member/v1/config/getByKey': (query: DC.ApiMemberV1ConfigGetByKeyGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 根据keys查询，多个按逗号分割
   * @tags 系统配置
   */
  '/api/member/v1/config/getByMultipleKey': (
    query: DC.ApiMemberV1ConfigGetByMultipleKeyGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultMapStringString>
  /**
   * @summary 查询所有配置项
   * @tags 系统配置
   */
  '/api/member/v1/config/query': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysConfigDto>
  /**
   * @summary 所有内容
   * @tags 内容管理 管理接口
   */
  '/api/member/v1/contents/list': (query: DC.ApiMemberV1ContentsListGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResContentsDto>
  /**
   * @summary 查询联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResFrequentContactsDto>
  /**
   * @summary 根据id查询联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts/getById': (
    query: DC.ApiMemberV1FrequentContactsGetByIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResFrequentContactsDto>
  /**
   * @summary 判断用户手机号是否注册过
   * @tags 会员
   */
  '/api/member/v1/member/existMobile': (query: DC.ApiMemberV1MemberExistMobileGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultBoolean>
  /**
   * @summary 会员详情
   * @tags 会员
   */
  '/api/member/v1/member/getUserDetail': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @summary 获取用户信息
   * @tags 会员
   */
  '/api/member/v1/member/getUserInfo': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDto>
  /**
   * @summary 中奖名单-3
   * @tags 中奖记录-3
   */
  '/api/member/v1/memberLottery/getLotteryMember': (
    query: DC.ApiMemberV1MemberLotteryGetLotteryMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResMemberLotteryDto>
  /**
   * @summary 预约列表分页-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders': (query: DC.ApiMemberV1OrdersGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedScrollResultResOrdersDto>
  /**
   * @summary 预约详情-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/detail': (query: DC.ApiMemberV1OrdersDetailGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @summary 查询核销信息-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/getOrderContacts': (
    query: DC.ApiMemberV1OrdersGetOrderContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @summary 核销详情-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/orderContactsDetail': (
    query: DC.ApiMemberV1OrdersOrderContactsDetailGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @summary 核销预约列表分页-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/pageContacts': (
    query: DC.ApiMemberV1OrdersPageContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResOrderFrequentContactsDto>
  /**
   * @summary 票务活动数据统计-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/statistics': (
    query: DC.ApiMemberV1OrdersStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrdersstatisticsDto>
  /**
   * @summary 获取自定义页面内容
   * @tags 自定义页面
   */
  '/api/member/v1/page/get/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysPageSimpleDto>
  /**
   * @summary 弹窗列表
   * @tags 弹窗广告
   */
  '/api/member/v1/popupAds': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListPopupAdsDto>
  /**
   * @summary 获取富文本内容
   * @tags 富文本
   */
  '/api/member/v1/richtext': (query: DC.ApiMemberV1RichtextGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 发送短信验证码
   * @tags 短信服务
   */
  '/api/member/v1/sms/sendCode': (query: DC.ApiMemberV1SmsSendCodeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 验证短信验证码
   * @tags 短信服务
   */
  '/api/member/v1/sms/verificationCode': (query: DC.ApiMemberV1SmsVerificationCodeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 获取订阅关系
   * @tags 订阅 接口
   */
  '/api/member/v1/subscription': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapIntString>
  /**
   * @summary 未命名接口
   */
  '/api/sms/sendMsm': (data?: { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
}

export interface APIPOST {
  /**
   * @summary 预览
   */
  '/api/qrCode/preview': (body: DC.CharSequence & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 获取预览参数
   */
  '/api/qrCode/getPreview': (option: { query: DC.ApiQrCodeGetPreviewPostParams; requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @summary 获取小程序码 - getUnlimited
   * @tags public/小程序, web/小程序码
   */
  '/api/wx/qrCode/getUnlimited': (
    body: {
      /** 参数 */
      scene: string
      /** 页面 */
      page?: string
      /** 版本 默认"release" 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop" */
      version?: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
  /**
   * @summary 获取小程序urlLink
   * @tags public/小程序, sys/W-P-平台分享API
   */
  '/api/wx/urlLink': (
    body: {
      /** 小程序页面路径 */
      path: string
      /** scene参数 */
      scene?: string
      /** 环境版本 */
      version?: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
  /**
   * @summary 添加
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity': (body: DC.ReqActivityAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay': (body: DC.ReqActivityPlayAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 修改活动玩法详情-3
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/updateDetail': (body: DC.ReqActivityPlayDetailDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods': (body: DC.ReqActivityPlayGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask': (body: DC.ReqActivityPlayTaskAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes': (body: DC.ReqActivityPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 揭晓获胜队伍-3
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/win': (body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm': (body: DC.ReqActivityPlayVotesTurmAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 修改轮次状态-3
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/updateStatus': (
    body: DC.ReqActivityPlayVotesTurmUpdateStatusDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags banner
   */
  '/api/sys/v1/banner': (body: DC.BannerAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 保存与修改
   * @tags 系统配置
   */
  '/api/sys/v1/config': (body: DC.MapStringString & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents': (body: DC.ReqContentsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 修改
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/updateContents': (body: DC.ReqContentsUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts': (body: DC.ReqFrequentContactsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods': (body: DC.ReqGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 状态变更
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/{id}/changeStatus': (body: DC.PublicStatusDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode': (body: DC.ReqInvitationCodeAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 批量创建-1
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/addList': (body: DC.ReqInvitationCodeAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 添加
   * @tags 素材库
   */
  '/api/sys/v1/material': (body: DC.MaterialAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group': (body: DC.MaterialGroupAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 封禁/解封-1
   * @tags 会员
   */
  '/api/sys/v1/member/changeFail': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 批量状态变更
   * @tags 会员
   */
  '/api/sys/v1/member/changeStatusList': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 状态变更
   * @tags 会员
   */
  '/api/sys/v1/member/{id}/changeStatus': (body: DC.PublicStatusDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery': (body: DC.ReqMemberLotteryAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 抽奖-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/lottery': (body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListMemberDto>
  /**
   * @summary 批量发货
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/sendList': (body: DC.ReqMemberLotteryAddDto2 & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改发货
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/updateSend': (body: DC.ReqMemberLotteryAddDto1 & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 中奖名单-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/lotteryMember': (body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListMemberDto>
  /**
   * @summary 添加
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders': (body: DC.ReqOrdersAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 核销-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/writeOff': (body: DC.ReqWriteOffCodeDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @summary 添加
   * @tags 页面
   */
  '/api/sys/v1/page': (body: DC.SysPageAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 批量删除页面
   * @tags 页面
   */
  '/api/sys/v1/page/delList': (body: DC.SysPageDelDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play': (body: DC.ReqPlayAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 新增盲盒玩法
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/addPlay': (body: DC.ReqPlayAllAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改盲盒玩法
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/updatePlay': (body: DC.ReqPlayAllAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods': (body: DC.ReqPlayGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask': (body: DC.ReqPlayTaskAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds': (body: DC.PopupAdsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 资源
   */
  '/api/sys/v1/resource': (body: DC.ResourceAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 富文本
   */
  '/api/sys/v1/richtext': (body: DC.RichTextAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 角色
   */
  '/api/sys/v1/role': (body: DC.SysRoleAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig': (body: DC.ReqTicketingConfigAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 新增票务玩法-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/addTicketingConfig': (body: DC.ReqPlayTicketingAddOrUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改票务玩法-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/updateTicketingConfig': (
    body: DC.ReqPlayTicketingAddOrUpdateDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 用户
   */
  '/api/sys/v1/user': (body: DC.SysUserAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 状态变更
   * @tags 用户
   */
  '/api/sys/v1/user/changeStatus': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 过期密码修改
   * @tags 用户
   */
  '/api/sys/v1/user/passwordExpiration': (body: DC.SysUserModifyPwdExpirationDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes': (body: DC.ReqVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 新增投票规则-3
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/addVotes': (body: DC.ReqPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改投票规则-3
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/updateVotes': (body: DC.ReqPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 添加
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord': (body: DC.ReqVotesRecordAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 添加
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff': (body: DC.ReqWriteOffAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @summary 完成活动
   * @tags 活动
   */
  '/api/member/v1/activity/completeTask': (body: DC.ReqMemberRewardAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 抽奖
   * @tags 活动
   */
  '/api/member/v1/activity/prizeDraw': (body: DC.ReqMemberLotteryAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberLotteryDto>
  /**
   * @summary 领奖-3
   * @tags 活动
   */
  '/api/member/v1/activity/receive': (body: DC.ReqMemberLotteryReceiveDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 新增地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/add': (body: DC.ReqMemberAddressAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 新用户助力
   * @tags 助力
   */
  '/api/member/v1/assist/assist': (body: DC.ReqMemberAssistAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberAssistDto>
  /**
   * @summary 新增联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts': (body: DC.ReqFrequentContactsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 根据经纬度计算是否在范围内-3
   * @tags 用户地址授权 管理接口
   */
  '/api/member/v1/memberAddressAuthorize/add': (option: {
    query: DC.ApiMemberV1MemberAddressAuthorizeAddPostParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 取消预约-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/cancel': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultInt>
  /**
   * @summary 提交预约-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/submit': (body: DC.ReqOrdersAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @summary 订阅-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/subscribe': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 刷新核销码-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/updateAdmissionNo': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @summary 验证邀请码-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/verifyInvitationCode': (
    body: DC.ReqVerifyInvitationCodeDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResInvitationCodeDto>
  /**
   * @summary 核销-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/writeOff': (body: DC.ReqWriteOffCodeDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @summary 添加订阅
   * @tags 订阅 接口
   */
  '/api/member/v1/subscription': (body: DC.ReqSubscriptionAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 投票-3
   * @tags 投票记录 管理接口
   */
  '/api/member/v1/votesRecord/add': (option: { query: DC.ApiMemberV1VotesRecordAddPostParams; requestConfig?: RequestConfig }) => Promise<DC.JsonResultLong>
  /**
   * @summary 订阅-3
   * @tags 投票记录 管理接口
   */
  '/api/member/v1/votesRecord/update': (option: {
    query: DC.ApiMemberV1VotesRecordUpdatePostParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultLong>
  /**
   * @summary 统一登录
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/login': (
    body: {
      /** 验证码:仅用于图形验证码 */
      code?: string
      /** 登录方式: MOBILE:手机号验证码登录\PASSWORD:密码登录\WX_MINI:小程序code登录 */
      loginType?: 'MOBILE' | 'PASSWORD' | 'WX_MINI'
      /** 密码\短信验证码\小程序code */
      password?: string
      /** 用户名\手机号 */
      username?: string
      /** 登录端 CONSOLE_PC:后管 MEMBER:会员 QI_WEI:企微 */
      side: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
}

export interface APIDELETE {
  /**
   * @summary 删除
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags banner
   */
  '/api/sys/v1/banner/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 素材库
   */
  '/api/sys/v1/material': (query: DC.ApiSysV1MaterialDeleteParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 素材库
   */
  '/api/sys/v1/material/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 页面
   */
  '/api/sys/v1/page/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 资源
   */
  '/api/sys/v1/resource/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 富文本
   */
  '/api/sys/v1/richtext/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 角色
   */
  '/api/sys/v1/role/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 用户
   */
  '/api/sys/v1/user/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/delete/{id}': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 删除联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts': (query: DC.ApiMemberV1FrequentContactsDeleteParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 注销-1
   * @tags 会员
   */
  '/api/member/v1/member/logOff': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
}

export interface APIPUT {
  /**
   * @summary 编辑
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/update/{id}': (body: DC.ReqActivityUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 活动修改状态
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/updateState': (body: DC.ActivityStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 活动tab状态
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/updateTabState': (body: DC.ActivityStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/update/{id}': (
    body: DC.ReqActivityPlayUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/update/{id}': (
    body: DC.ReqActivityPlayGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/update/{id}': (
    body: DC.ReqActivityPlayTaskUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/update/{id}': (
    body: DC.ReqActivityPlayVotesUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/update/{id}': (
    body: DC.ReqActivityPlayVotesTurmUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags banner
   */
  '/api/sys/v1/banner/update/{id}': (body: DC.BannerUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 显示
   * @tags banner
   */
  '/api/sys/v1/banner/updateEnable': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/update/{id}': (body: DC.ReqContentsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/update/{id}': (
    body: DC.ReqFrequentContactsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/update/{id}': (body: DC.ReqGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/update/{id}': (
    body: DC.ReqInvitationCodeUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 移动
   * @tags 素材库
   */
  '/api/sys/v1/material/move': (body: DC.MaterialMoveDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 素材库
   */
  '/api/sys/v1/material/update/{id}': (body: DC.MaterialUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/update/{id}': (
    body: DC.MaterialGroupUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/update/{id}': (
    body: DC.ReqMemberLotteryUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/update/{id}': (body: DC.ReqOrdersUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 页面
   */
  '/api/sys/v1/page/update/{id}': (body: DC.SysPageUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/update/{id}': (body: DC.ReqPlayUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/update/{id}': (body: DC.ReqPlayGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/update/{id}': (body: DC.ReqPlayTaskUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/update/{id}': (body: DC.PopupAdsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 显示
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/updateShow': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 资源
   */
  '/api/sys/v1/resource/update/{id}': (body: DC.ResourceUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 富文本
   */
  '/api/sys/v1/richtext/update/{id}': (body: DC.RichTextUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 角色
   */
  '/api/sys/v1/role/update/{id}': (body: DC.SysRoleUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/update/{id}': (
    body: DC.ReqTicketingConfigUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改当前用户密码
   * @tags 用户
   */
  '/api/sys/v1/user/modifyPwd': (body: DC.SysUserModifyPasswordDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 重置密码
   * @tags 用户
   */
  '/api/sys/v1/user/reset': (option: { query: DC.ApiSysV1UserResetPutParams; requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserLoginExtendDto>
  /**
   * @summary 编辑
   * @tags 用户
   */
  '/api/sys/v1/user/update/{id}': (body: DC.SysUserUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/update/{id}': (body: DC.ReqVotesUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/update/{id}': (
    body: DC.ReqVotesRecordUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @summary 编辑
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/update/{id}': (body: DC.ReqWriteOffUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/update': (body: DC.ReqMemberAddressUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 修改联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts': (body: DC.ReqFrequentContactsUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 保存用户信息（昵称、头像）
   * @tags 会员
   */
  '/api/member/v1/member/saveUserInfo': (option: {
    query: DC.ApiMemberV1MemberSaveUserInfoPutParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultVoid>
  /**
   * @summary 用户修改手机号
   * @tags 会员
   */
  '/api/member/v1/member/updateMobile': (body: DC.BindingMobileDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
}

export interface APIOPTIONS {}

export interface API {
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 预览
   */
  '/api/qrCode/preview_POST': (body: DC.CharSequence & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 获取预览参数
   */
  '/api/qrCode/getPreview_POST': (option: { query: DC.ApiQrCodeGetPreviewPostParams; requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取微信手机号
   * @tags public/小程序
   */
  '/api/wx/getMobile/{code}_GET': (query: { code: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPhoneNumDTO>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 获取小程序码 - getUnlimited
   * @tags public/小程序, web/小程序码
   */
  '/api/wx/qrCode/getUnlimited_POST': (
    body: {
      /** 参数 */
      scene: string
      /** 页面 */
      page?: string
      /** 版本 默认"release" 要打开的小程序版本。正式版为 "release"，体验版为 "trial"，开发版为 "develop" */
      version?: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 获取小程序urlLink
   * @tags public/小程序, sys/W-P-平台分享API
   */
  '/api/wx/urlLink_POST': (
    body: {
      /** 小程序页面路径 */
      path: string
      /** scene参数 */
      scene?: string
      /** 环境版本 */
      version?: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 云存储信息
   * @tags public/云存储, web/云存储
   */
  '/api/oss/info_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapStringObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 注销
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/logout_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 尝试请求
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/try_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取分享id
   * @tags public/分享, flow-manage-mini/W-F-流量主管理小程序核心API(登录、获取手机号)
   */
  '/api/share_GET': (query: DC.ApiShareGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据分享id获取参数值
   * @tags public/分享, flow-manage-mini/W-F-流量主管理小程序核心API(登录、获取手机号)
   */
  '/api/share/{id}/value_GET': (query: { id: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity_GET': (query: DC.ApiSysV1ActivityGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity_POST': (body: DC.ReqActivityAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 所有活动查询
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/getAll_GET': (query: DC.ApiSysV1ActivityGetAllGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/update/{id}_PUT': (
    body: DC.ReqActivityUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 活动修改状态
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/updateState_PUT': (body: DC.ActivityStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 活动tab状态
   * @tags 活动主表 管理接口
   */
  '/api/sys/v1/activity/updateTabState_PUT': (body: DC.ActivityStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay_POST': (body: DC.ReqActivityPlayAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 新分页查询
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/list_GET': (
    query: DC.ApiSysV1ActivityPlayListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 玩法票档-1
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/queryFile_GET': (
    query: DC.ApiSysV1ActivityPlayQueryFileGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityPlayTicketingFilesDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/update/{id}_PUT': (
    body: DC.ReqActivityPlayUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改活动玩法详情-3
   * @tags 活动玩法绑定表 管理接口-3
   */
  '/api/sys/v1/activityPlay/updateDetail_POST': (body: DC.ReqActivityPlayDetailDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods_GET': (
    query: DC.ApiSysV1ActivityPlayGoodsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods_POST': (body: DC.ReqActivityPlayGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 活动玩法中奖商品 管理接口
   */
  '/api/sys/v1/activityPlayGoods/update/{id}_PUT': (
    body: DC.ReqActivityPlayGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask_GET': (
    query: DC.ApiSysV1ActivityPlayTaskGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayTaskDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask_POST': (body: DC.ReqActivityPlayTaskAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayTaskDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 活动玩法任务 管理接口
   */
  '/api/sys/v1/activityPlayTask/update/{id}_PUT': (
    body: DC.ReqActivityPlayTaskUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes_GET': (
    query: DC.ApiSysV1ActivityPlayVotesGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes_POST': (body: DC.ReqActivityPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityPlayVotesDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/update/{id}_PUT': (
    body: DC.ReqActivityPlayVotesUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 揭晓获胜队伍-3
   * @tags 活动玩法投票规则 管理接口-3
   */
  '/api/sys/v1/activityPlayVotes/win_POST': (body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm_GET': (
    query: DC.ApiSysV1ActivityPlayVotesTurmGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesTurmDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm_POST': (body: DC.ReqActivityPlayVotesTurmAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/get/{id}_GET': (
    query: { id: number } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResActivityPlayVotesTurmDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询-3
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/list_GET': (
    query: DC.ApiSysV1ActivityPlayVotesTurmListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResActivityPlayVotesTurmDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/update/{id}_PUT': (
    body: DC.ReqActivityPlayVotesTurmUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改轮次状态-3
   * @tags 投票轮次 管理接口-3
   */
  '/api/sys/v1/activityPlayVotesTurm/updateStatus_POST': (
    body: DC.ReqActivityPlayVotesTurmUpdateStatusDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 地址列表
   * @tags 收货地址接口
   */
  '/api/sys/v1/address/getList_GET': (
    query: DC.ApiSysV1AddressGetListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResMemberAddressDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags banner
   */
  '/api/sys/v1/banner_GET': (query: DC.ApiSysV1BannerGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultBannerDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags banner
   */
  '/api/sys/v1/banner_POST': (body: DC.BannerAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags banner
   */
  '/api/sys/v1/banner/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags banner
   */
  '/api/sys/v1/banner/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultBannerDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags banner
   */
  '/api/sys/v1/banner/update/{id}_PUT': (body: DC.BannerUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 显示
   * @tags banner
   */
  '/api/sys/v1/banner/updateEnable_PUT': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询所有配置项
   * @tags 系统配置
   */
  '/api/sys/v1/config_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysConfigDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 保存与修改
   * @tags 系统配置
   */
  '/api/sys/v1/config_POST': (body: DC.MapStringString & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据键值查询
   * @tags 系统配置
   */
  '/api/sys/v1/config/queryByKey_GET': (query: DC.ApiSysV1ConfigQueryByKeyGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据多个键值查询，多个按逗号分割
   * @tags 系统配置
   */
  '/api/sys/v1/config/queryByMultipleKey_GET': (
    query: DC.ApiSysV1ConfigQueryByMultipleKeyGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultMapStringString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents_GET': (query: DC.ApiSysV1ContentsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResContentsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents_POST': (body: DC.ReqContentsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResContentsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/update/{id}_PUT': (
    body: DC.ReqContentsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改
   * @tags 内容管理 管理接口
   */
  '/api/sys/v1/contents/updateContents_POST': (body: DC.ReqContentsUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts_GET': (
    query: DC.ApiSysV1FrequentContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts_POST': (body: DC.ReqFrequentContactsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 常用联系人 管理接口-1
   */
  '/api/sys/v1/frequentContacts/update/{id}_PUT': (
    body: DC.ReqFrequentContactsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods_GET': (query: DC.ApiSysV1GoodsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods_POST': (body: DC.ReqGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/export_GET': (query: DC.ApiSysV1GoodsExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 新分页查询
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/list_GET': (query: DC.ApiSysV1GoodsListGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/update/{id}_PUT': (body: DC.ReqGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 状态变更
   * @tags 权益表(奖品商品) 管理接口
   */
  '/api/sys/v1/goods/{id}/changeStatus_POST': (
    body: DC.PublicStatusDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode_GET': (
    query: DC.ApiSysV1InvitationCodeGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResInvitationCodeDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode_POST': (body: DC.ReqInvitationCodeAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 批量创建-1
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/addList_POST': (body: DC.ReqInvitationCodeAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出-1
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/export_GET': (query: DC.ApiSysV1InvitationCodeExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResInvitationCodeDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 邀请码 管理接口-1
   */
  '/api/sys/v1/invitationCode/update/{id}_PUT': (
    body: DC.ReqInvitationCodeUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 素材库
   */
  '/api/sys/v1/material_GET': (query: DC.ApiSysV1MaterialGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultMaterialDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 素材库
   */
  '/api/sys/v1/material_POST': (body: DC.MaterialAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 素材库
   */
  '/api/sys/v1/material_DELETE': (query: DC.ApiSysV1MaterialDeleteParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 素材库
   */
  '/api/sys/v1/material/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 素材库
   */
  '/api/sys/v1/material/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMaterialDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 移动
   * @tags 素材库
   */
  '/api/sys/v1/material/move_PUT': (body: DC.MaterialMoveDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 素材库
   */
  '/api/sys/v1/material/update/{id}_PUT': (body: DC.MaterialUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group_POST': (body: DC.MaterialGroupAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMaterialGroupDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 树列表
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/tree_GET': (
    query: DC.ApiSysV1MaterialGroupTreeGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListTreeLong>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 素材库分组
   */
  '/api/sys/v1/material/group/update/{id}_PUT': (
    body: DC.MaterialGroupUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询-1
   * @tags 会员
   */
  '/api/sys/v1/member_GET': (query: DC.ApiSysV1MemberGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 封禁/解封-1
   * @tags 会员
   */
  '/api/sys/v1/member/changeFail_POST': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 批量状态变更
   * @tags 会员
   */
  '/api/sys/v1/member/changeStatusList_POST': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出
   * @tags 会员
   */
  '/api/sys/v1/member/export_GET': (query: DC.ApiSysV1MemberExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 爽约导出
   * @tags 会员
   */
  '/api/sys/v1/member/exportFail_GET': (query: DC.ApiSysV1MemberExportFailGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 会员基本信息
   * @tags 会员
   */
  '/api/sys/v1/member/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 会员详情
   * @tags 会员
   */
  '/api/sys/v1/member/getDetail/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 状态变更
   * @tags 会员
   */
  '/api/sys/v1/member/{id}/changeStatus_POST': (
    body: DC.PublicStatusDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 压测
   * @tags 会员
   */
  '/api/sys/v1/member/addUser_GET': (query: DC.ApiSysV1MemberAddUserGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery_GET': (
    query: DC.ApiSysV1MemberLotteryGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery_POST': (body: DC.ReqMemberLotteryAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/export_GET': (query: DC.ApiSysV1MemberLotteryExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/exportMember_GET': (
    query: DC.ApiSysV1MemberLotteryExportMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 抽奖-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/lottery_POST': (body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 批量发货
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/sendList_POST': (body: DC.ReqMemberLotteryAddDto2 & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/update/{id}_PUT': (
    body: DC.ReqMemberLotteryUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改发货
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/updateSend_POST': (body: DC.ReqMemberLotteryAddDto1 & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 中奖名单-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/lotteryMember_POST': (
    body: DC.ReqActivityPlayVotesWinDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 消息-3
   * @tags 用户抽奖记录 管理接口
   */
  '/api/sys/v1/memberLottery/send_GET': (query: DC.ApiSysV1MemberLotterySendGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 操作日志
   */
  '/api/sys/v1/operationLog_GET': (
    query: DC.ApiSysV1OperationLogGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultReqOperateLogsDTO>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders_GET': (query: DC.ApiSysV1OrdersGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResOrdersDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders_POST': (body: DC.ReqOrdersAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 参与人订单查询-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/contactsOrder_GET': (
    query: DC.ApiSysV1OrdersContactsOrderGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出数据-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/export_GET': (query: DC.ApiSysV1OrdersExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出全部参与人-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContacts_GET': (query: DC.ApiSysV1OrdersExportContactsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 票务核销明细导出-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContactsAll_GET': (
    query: DC.ApiSysV1OrdersExportContactsAllGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 参与人订单导出-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/exportContactsList_GET': (
    query: DC.ApiSysV1OrdersExportContactsListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 预约详情-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/getContactsByOrderId_GET': (
    query: DC.ApiSysV1OrdersGetContactsByOrderIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询核销信息-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/getOrderContacts_GET': (
    query: DC.ApiSysV1OrdersGetOrderContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 票务活动数据统计-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/statistics_GET': (
    query: DC.ApiSysV1OrdersStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrdersstatisticsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/update/{id}_PUT': (body: DC.ReqOrdersUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 核销-1
   * @tags 票务预约记录 管理接口-1
   */
  '/api/sys/v1/orders/writeOff_POST': (body: DC.ReqWriteOffCodeDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 页面
   */
  '/api/sys/v1/page_GET': (query: DC.ApiSysV1PageGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysPageDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 页面
   */
  '/api/sys/v1/page_POST': (body: DC.SysPageAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 批量删除页面
   * @tags 页面
   */
  '/api/sys/v1/page/delList_POST': (body: DC.SysPageDelDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 页面
   */
  '/api/sys/v1/page/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 页面
   */
  '/api/sys/v1/page/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysPageDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取所有页面
   * @tags 页面
   */
  '/api/sys/v1/page/select_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysPageDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 页面
   */
  '/api/sys/v1/page/update/{id}_PUT': (body: DC.SysPageUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play_GET': (query: DC.ApiSysV1PlayGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play_POST': (body: DC.ReqPlayAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新增盲盒玩法
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/addPlay_POST': (body: DC.ReqPlayAllAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 所有玩法查询
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/getAll_GET': (query: DC.ApiSysV1PlayGetAllGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/update/{id}_PUT': (body: DC.ReqPlayUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改盲盒玩法
   * @tags 玩法 管理接口
   */
  '/api/sys/v1/play/updatePlay_POST': (body: DC.ReqPlayAllAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods_GET': (query: DC.ApiSysV1PlayGoodsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods_POST': (body: DC.ReqPlayGoodsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayGoodsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 玩法奖品 管理接口
   */
  '/api/sys/v1/playGoods/update/{id}_PUT': (
    body: DC.ReqPlayGoodsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask_GET': (query: DC.ApiSysV1PlayTaskGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResPlayTaskDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask_POST': (body: DC.ReqPlayTaskAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayTaskDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 玩法任务 管理接口
   */
  '/api/sys/v1/playTask/update/{id}_PUT': (
    body: DC.ReqPlayTaskUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds_GET': (query: DC.ApiSysV1PopupAdsGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultPopupAdsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds_POST': (body: DC.PopupAdsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPopupAdsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/update/{id}_PUT': (body: DC.PopupAdsUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 显示
   * @tags 弹窗广告
   */
  '/api/sys/v1/popupAds/updateShow_PUT': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 资源
   */
  '/api/sys/v1/resource_POST': (body: DC.ResourceAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 资源
   */
  '/api/sys/v1/resource/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 资源
   */
  '/api/sys/v1/resource/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResourceDetailDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 树列表
   * @tags 资源
   */
  '/api/sys/v1/resource/tree_GET': (query: DC.ApiSysV1ResourceTreeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListTreeLong>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 资源
   */
  '/api/sys/v1/resource/update/{id}_PUT': (body: DC.ResourceUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 富文本
   */
  '/api/sys/v1/richtext_POST': (body: DC.RichTextAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 富文本
   */
  '/api/sys/v1/richtext/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 富文本
   */
  '/api/sys/v1/richtext/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultRichTextDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 富文本
   */
  '/api/sys/v1/richtext/update/{id}_PUT': (body: DC.RichTextUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 角色
   */
  '/api/sys/v1/role_GET': (query: DC.ApiSysV1RoleGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysRoleDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 角色
   */
  '/api/sys/v1/role_POST': (body: DC.SysRoleAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 角色
   */
  '/api/sys/v1/role/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 角色
   */
  '/api/sys/v1/role/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysRoleDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取所有角色
   * @tags 角色
   */
  '/api/sys/v1/role/select_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysRoleSelectDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 角色
   */
  '/api/sys/v1/role/update/{id}_PUT': (body: DC.SysRoleUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig_GET': (
    query: DC.ApiSysV1TicketingConfigGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResTicketingConfigDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig_POST': (body: DC.ReqTicketingConfigAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新增票务玩法-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/addTicketingConfig_POST': (
    body: DC.ReqPlayTicketingAddOrUpdateDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResTicketingConfigDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 票务玩法详情-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/getTicketingPlayId_GET': (
    query: DC.ApiSysV1TicketingConfigGetTicketingPlayIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResPlayTicketingDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/update/{id}_PUT': (
    body: DC.ReqTicketingConfigUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改票务玩法-1
   * @tags 票务玩法配置 管理接口-1
   */
  '/api/sys/v1/ticketingConfig/updateTicketingConfig_POST': (
    body: DC.ReqPlayTicketingAddOrUpdateDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 用户
   */
  '/api/sys/v1/user_GET': (query: DC.ApiSysV1UserGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultSysUserDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 用户
   */
  '/api/sys/v1/user_POST': (body: DC.SysUserAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 状态变更
   * @tags 用户
   */
  '/api/sys/v1/user/changeStatus_POST': (body: DC.PublicStatusDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取当前用户权限
   * @tags 用户
   */
  '/api/sys/v1/user/current-authorities_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserAuthDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 用户
   */
  '/api/sys/v1/user/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 导出
   * @tags 用户
   */
  '/api/sys/v1/user/export_GET': (query: DC.ApiSysV1UserExportGetParams & { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 用户
   */
  '/api/sys/v1/user/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 修改当前用户密码
   * @tags 用户
   */
  '/api/sys/v1/user/modifyPwd_PUT': (body: DC.SysUserModifyPasswordDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 过期密码修改
   * @tags 用户
   */
  '/api/sys/v1/user/passwordExpiration_POST': (body: DC.SysUserModifyPwdExpirationDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 重置密码
   * @tags 用户
   */
  '/api/sys/v1/user/reset_PUT': (option: { query: DC.ApiSysV1UserResetPutParams; requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysUserLoginExtendDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 用户
   */
  '/api/sys/v1/user/update/{id}_PUT': (body: DC.SysUserUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes_GET': (query: DC.ApiSysV1VotesGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResVotesDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes_POST': (body: DC.ReqVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新增投票规则-3
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/addVotes_POST': (body: DC.ReqPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResVotesDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 投票玩法详情-1
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/getPlayId_GET': (query: DC.ApiSysV1VotesGetPlayIdGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResPlayDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/update/{id}_PUT': (body: DC.ReqVotesUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 修改投票规则-3
   * @tags 投票规则 管理接口-3
   */
  '/api/sys/v1/votes/updateVotes_POST': (body: DC.ReqPlayVotesAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord_GET': (
    query: DC.ApiSysV1VotesRecordGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultResVotesRecordDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord_POST': (body: DC.ReqVotesRecordAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResVotesRecordDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 抽奖用户名单-3
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/lotteryList_GET': (
    query: DC.ApiSysV1VotesRecordLotteryListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 投票统计-3
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/statistics_GET': (
    query: DC.ApiSysV1VotesRecordStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResVotesRecordStatisticsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 投票记录 管理接口-3
   */
  '/api/sys/v1/votesRecord/update/{id}_PUT': (
    body: DC.ReqVotesRecordUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 分页查询
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff_GET': (query: DC.ApiSysV1WriteOffGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedResultResWriteOffDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff_POST': (body: DC.ReqWriteOffAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultObject>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 简要信息
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResWriteOffDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 可选择人员查询-1
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/queryAllMember_GET': (
    query: DC.ApiSysV1WriteOffQueryAllMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedResultMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 编辑
   * @tags 票务核销人员关联表 管理接口-1
   */
  '/api/sys/v1/writeOff/update/{id}_PUT': (
    body: DC.ReqWriteOffUpdateDto & { query: { id: number }; requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取活动详情内容
   * @tags 活动
   */
  '/api/member/v1/activity/activity_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据经纬度计算是否在范围内-3
   * @tags 活动
   */
  '/api/member/v1/activity/addressDistance_GET': (
    query: DC.ApiMemberV1ActivityAddressDistanceGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultBoolean>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 完成活动
   * @tags 活动
   */
  '/api/member/v1/activity/completeTask_POST': (body: DC.ReqMemberRewardAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 核销人员可核销活动-1
   * @tags 活动
   */
  '/api/member/v1/activity/getActivityList_GET': (
    query: DC.ApiMemberV1ActivityGetActivityListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询活动任务抽奖记录
   * @tags 活动
   */
  '/api/member/v1/activity/getLotteryList_GET': (
    query: DC.ApiMemberV1ActivityGetLotteryListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 最近中奖数据
   * @tags 活动
   */
  '/api/member/v1/activity/getNowLottery_GET': (
    query: DC.ApiMemberV1ActivityGetNowLotteryGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 任务资格明细
   * @tags 活动
   */
  '/api/member/v1/activity/getRewardList_GET': (
    query: DC.ApiMemberV1ActivityGetRewardListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberRewardDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 用户可领取中奖数量
   * @tags 活动
   */
  '/api/member/v1/activity/lotteryNum_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapIntInt>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 抽奖
   * @tags 活动
   */
  '/api/member/v1/activity/prizeDraw_POST': (body: DC.ReqMemberLotteryAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 领奖-3
   * @tags 活动
   */
  '/api/member/v1/activity/receive_POST': (body: DC.ReqMemberLotteryReceiveDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取活动详情内容-1
   * @tags 活动
   */
  '/api/member/v1/activity/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResActivityDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据订单Id获取退款规则-1
   * @tags 退票规则-1
   */
  '/api/member/v1/activityPlayTicketingRefundRule/getRule_GET': (
    query: DC.ApiMemberV1ActivityPlayTicketingRefundRuleGetRuleGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResActivityPlayTicketingRefundRuleDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新增地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/add_POST': (body: DC.ReqMemberAddressAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/delete/{id}_DELETE': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 地址详情
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getById_GET': (
    query: DC.ApiMemberV1AddressGetByIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResMemberAddressDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 默认收货地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getDefault_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberAddressDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 地址列表
   * @tags 收货地址接口
   */
  '/api/member/v1/address/getList_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedScrollResultResMemberAddressDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 修改地址
   * @tags 收货地址接口
   */
  '/api/member/v1/address/update_PUT': (body: DC.ReqMemberAddressUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新用户助力
   * @tags 助力
   */
  '/api/member/v1/assist/assist_POST': (body: DC.ReqMemberAssistAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResMemberAssistDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 助力列表
   * @tags 助力
   */
  '/api/member/v1/assist/getAssistList_GET': (
    query: DC.ApiMemberV1AssistGetAssistListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResMemberAssistDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询banner金刚区列表
   * @tags Banner
   */
  '/api/member/v1/banner/list/{type}_GET': (query: { type: string } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListBannerDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据key查询
   * @tags 系统配置
   */
  '/api/member/v1/config/getByKey_GET': (query: DC.ApiMemberV1ConfigGetByKeyGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据keys查询，多个按逗号分割
   * @tags 系统配置
   */
  '/api/member/v1/config/getByMultipleKey_GET': (
    query: DC.ApiMemberV1ConfigGetByMultipleKeyGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultMapStringString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询所有配置项
   * @tags 系统配置
   */
  '/api/member/v1/config/query_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListSysConfigDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 所有内容
   * @tags 内容管理 管理接口
   */
  '/api/member/v1/contents/list_GET': (
    query: DC.ApiMemberV1ContentsListGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResContentsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListResFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 新增联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts_POST': (body: DC.ReqFrequentContactsAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 修改联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts_PUT': (body: DC.ReqFrequentContactsUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 删除联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts_DELETE': (
    query: DC.ApiMemberV1FrequentContactsDeleteParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 根据id查询联系人-1
   * @tags 常用联系人-1
   */
  '/api/member/v1/frequentContacts/getById_GET': (
    query: DC.ApiMemberV1FrequentContactsGetByIdGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 判断用户手机号是否注册过
   * @tags 会员
   */
  '/api/member/v1/member/existMobile_GET': (
    query: DC.ApiMemberV1MemberExistMobileGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultBoolean>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 会员详情
   * @tags 会员
   */
  '/api/member/v1/member/getUserDetail_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDetailDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取用户信息
   * @tags 会员
   */
  '/api/member/v1/member/getUserInfo_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMemberDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.delete方式调用
   * @summary 注销-1
   * @tags 会员
   */
  '/api/member/v1/member/logOff_DELETE': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 保存用户信息（昵称、头像）
   * @tags 会员
   */
  '/api/member/v1/member/saveUserInfo_PUT': (option: {
    query: DC.ApiMemberV1MemberSaveUserInfoPutParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.put方式调用
   * @summary 用户修改手机号
   * @tags 会员
   */
  '/api/member/v1/member/updateMobile_PUT': (body: DC.BindingMobileDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 根据经纬度计算是否在范围内-3
   * @tags 用户地址授权 管理接口
   */
  '/api/member/v1/memberAddressAuthorize/add_POST': (option: {
    query: DC.ApiMemberV1MemberAddressAuthorizeAddPostParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 中奖名单-3
   * @tags 中奖记录-3
   */
  '/api/member/v1/memberLottery/getLotteryMember_GET': (
    query: DC.ApiMemberV1MemberLotteryGetLotteryMemberGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultListResMemberLotteryDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 预约列表分页-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders_GET': (query: DC.ApiMemberV1OrdersGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultPagedScrollResultResOrdersDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 取消预约-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/cancel_POST': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultInt>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 预约详情-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/detail_GET': (query: DC.ApiMemberV1OrdersDetailGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 查询核销信息-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/getOrderContacts_GET': (
    query: DC.ApiMemberV1OrdersGetOrderContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 核销详情-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/orderContactsDetail_GET': (
    query: DC.ApiMemberV1OrdersOrderContactsDetailGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 核销预约列表分页-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/pageContacts_GET': (
    query: DC.ApiMemberV1OrdersPageContactsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultPagedScrollResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 票务活动数据统计-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/statistics_GET': (
    query: DC.ApiMemberV1OrdersStatisticsGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResOrdersstatisticsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 提交预约-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/submit_POST': (body: DC.ReqOrdersAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrdersDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 订阅-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/subscribe_POST': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 刷新核销码-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/updateAdmissionNo_POST': (body: DC.ReqOrdersUpdateDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 验证邀请码-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/verifyInvitationCode_POST': (
    body: DC.ReqVerifyInvitationCodeDto & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultResInvitationCodeDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 核销-1
   * @tags 预约记录-1
   */
  '/api/member/v1/orders/writeOff_POST': (body: DC.ReqWriteOffCodeDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultResOrderFrequentContactsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取自定义页面内容
   * @tags 自定义页面
   */
  '/api/member/v1/page/get/{id}_GET': (query: { id: number } & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultSysPageSimpleDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 弹窗列表
   * @tags 弹窗广告
   */
  '/api/member/v1/popupAds_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultListPopupAdsDto>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取富文本内容
   * @tags 富文本
   */
  '/api/member/v1/richtext_GET': (query: DC.ApiMemberV1RichtextGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 发送短信验证码
   * @tags 短信服务
   */
  '/api/member/v1/sms/sendCode_GET': (query: DC.ApiMemberV1SmsSendCodeGetParams & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 验证短信验证码
   * @tags 短信服务
   */
  '/api/member/v1/sms/verificationCode_GET': (
    query: DC.ApiMemberV1SmsVerificationCodeGetParams & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 获取订阅关系
   * @tags 订阅 接口
   */
  '/api/member/v1/subscription_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.JsonResultMapIntString>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 添加订阅
   * @tags 订阅 接口
   */
  '/api/member/v1/subscription_POST': (body: DC.ReqSubscriptionAddDto & { requestConfig?: RequestConfig }) => Promise<DC.JsonResultVoid>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 投票-3
   * @tags 投票记录 管理接口
   */
  '/api/member/v1/votesRecord/add_POST': (option: {
    query: DC.ApiMemberV1VotesRecordAddPostParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultLong>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 订阅-3
   * @tags 投票记录 管理接口
   */
  '/api/member/v1/votesRecord/update_POST': (option: {
    query: DC.ApiMemberV1VotesRecordUpdatePostParams
    requestConfig?: RequestConfig
  }) => Promise<DC.JsonResultLong>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.get方式调用
   * @summary 未命名接口
   */
  '/api/sms/sendMsm_GET': (data?: { requestConfig?: RequestConfig }) => Promise<DC.CharSequence>
  /**
   * @deprecated 此调用方式已废弃且会在下个主版本移除。请使用api.post方式调用
   * @summary 统一登录
   * @tags public/授权, 账号/手机号 登录 Api
   */
  '/api/auth/login_POST': (
    body: {
      /** 验证码:仅用于图形验证码 */
      code?: string
      /** 登录方式: MOBILE:手机号验证码登录\PASSWORD:密码登录\WX_MINI:小程序code登录 */
      loginType?: 'MOBILE' | 'PASSWORD' | 'WX_MINI'
      /** 密码\短信验证码\小程序code */
      password?: string
      /** 用户名\手机号 */
      username?: string
      /** 登录端 CONSOLE_PC:后管 MEMBER:会员 QI_WEI:企微 */
      side: string
    } & { requestConfig?: RequestConfig }
  ) => Promise<DC.JsonResultString>
}
