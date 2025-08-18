/* eslint-disable object-shorthand */
/* eslint-disable max-lines */
/* eslint-disable id-length */
export interface BannerAddDto {
  /** 导航名称 */
  name?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  target: BannerTargetDto;
  /**
   * 类型 1:轮播图; 2:金刚区; 3:卡片设置; 4:主推单品
   * @format int32
   */
  type: number;
  /** 轮播图/视频链接 */
  url: string;
  /**
   * 链接类型 1图片2视频
   * @format int32
   */
  urlType: number;
}

export interface BannerDto {
  /** 显示状态 true 显示 false 不显示 */
  enable?: boolean;
  /** 导航名称 */
  name?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  target: BannerTargetDto;
  /**
   * 类型 1:轮播图; 2:金刚区; 3:卡片设置; 4:主推单品
   * @format int32
   */
  type: number;
  /** 轮播图/视频链接 */
  url: string;
  /**
   * 链接类型 1图片2视频
   * @format int32
   */
  urlType: number;
}

export interface BannerTargetDto {
  /** 小程序APPID */
  appId?: string;
  /** 跳转描述 */
  describe: string;
  /**
   * 商品分类（一级）
   * @format int64
   */
  firstCategoryId?: number;
  /** 商品编码 */
  goodsNo?: string;
  /**
   * 自定义页面ID
   * @format int64
   */
  pageId?: number;
  /**
   * 商品分类（二级）
   * @format int64
   */
  secondCategoryId?: number;
  /**
   * 类型：1功能页面；2商品分类；3商品详情；4自定义页面；5自定义链接
   * @format int32
   */
  type: number;
  /** h5链接/小程序页面路径 */
  url?: string;
}

export interface BannerUpdateDto {
  /** 导航名称 */
  name?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  target: BannerTargetDto;
  /**
   * 类型 1:轮播图; 2:金刚区; 3:卡片设置; 4:主推单品
   * @format int32
   */
  type: number;
  /** 轮播图/视频链接 */
  url: string;
  /**
   * 链接类型 1图片2视频
   * @format int32
   */
  urlType: number;
}

export type CharSequence = object;

export type CharSequence1 = object;

export type CharSequence2 = object;

export type ComparableObject = object;

export type ComparableObject1 = object;

export type ComparableObject2 = object;

export interface JsonResultBannerDto {
  /** @format int32 */
  code?: number;
  data?: BannerDto;
  msg?: string;
}

export interface JsonResultListSysConfigDto {
  /** @format int32 */
  code?: number;
  data?: SysConfigDto[];
  msg?: string;
}

export interface JsonResultListSysPageDto {
  /** @format int32 */
  code?: number;
  data?: SysPageDto[];
  msg?: string;
}

export interface JsonResultListSysRoleSelectDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleSelectDto[];
  msg?: string;
}

export interface JsonResultListTreeLong {
  /** @format int32 */
  code?: number;
  data?: TreeLong[];
  msg?: string;
}

export interface JsonResultMapStringString {
  /** @format int32 */
  code?: number;
  data?: Record<string, string>;
  msg?: string;
}

export interface JsonResultMaterialDto {
  /** @format int32 */
  code?: number;
  data?: MaterialDto;
  msg?: string;
}

export interface JsonResultMaterialGroupDto {
  /** @format int32 */
  code?: number;
  data?: MaterialGroupDto;
  msg?: string;
}

export interface JsonResultMemberDetailDto {
  /** @format int32 */
  code?: number;
  data?: MemberDetailDto;
  msg?: string;
}

export interface JsonResultPagedResultBannerDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBannerDto;
  msg?: string;
}

export interface JsonResultPagedResultMaterialDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMaterialDto;
  msg?: string;
}

export interface JsonResultPagedResultMemberDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemberDto;
  msg?: string;
}

export interface JsonResultPagedResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultPopupAdsDto;
  msg?: string;
}

export interface JsonResultPagedResultReqOperateLogsDTO {
  /** @format int32 */
  code?: number;
  data?: PagedResultReqOperateLogsDTO;
  msg?: string;
}

export interface JsonResultPagedResultResActivityDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityDto;
  msg?: string;
}

export interface JsonResultPagedResultResActivityPlayDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityPlayDto;
  msg?: string;
}

export interface JsonResultPagedResultResActivityPlayGoodsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityPlayGoodsDto;
  msg?: string;
}

export interface JsonResultPagedResultResActivityPlayTaskDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityPlayTaskDto;
  msg?: string;
}

export interface JsonResultPagedResultResGoodsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResGoodsDto;
  msg?: string;
}

export interface JsonResultPagedResultResMemberAddressDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResMemberAddressDto;
  msg?: string;
}

export interface JsonResultPagedResultResPlayDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResPlayDto;
  msg?: string;
}

export interface JsonResultPagedResultResPlayGoodsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResPlayGoodsDto;
  msg?: string;
}

export interface JsonResultPagedResultResPlayTaskDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResPlayTaskDto;
  msg?: string;
}

export interface JsonResultPagedResultSysPageDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysPageDto;
  msg?: string;
}

export interface JsonResultPagedResultSysRoleDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysRoleDto;
  msg?: string;
}

export interface JsonResultPagedResultSysUserDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysUserDto;
  msg?: string;
}

export interface JsonResultPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto;
  msg?: string;
}

export interface JsonResultResActivityDto {
  /** @format int32 */
  code?: number;
  /** 活动主表 请求响应对象 */
  data?: ResActivityDto;
  msg?: string;
}

export interface JsonResultResActivityPlayDto {
  /** @format int32 */
  code?: number;
  /** 活动玩法绑定表 请求响应对象 */
  data?: ResActivityPlayDto;
  msg?: string;
}

export interface JsonResultResActivityPlayGoodsDto {
  /** @format int32 */
  code?: number;
  /** 活动玩法中奖商品 请求响应对象 */
  data?: ResActivityPlayGoodsDto;
  msg?: string;
}

export interface JsonResultResActivityPlayTaskDto {
  /** @format int32 */
  code?: number;
  /** 活动玩法任务 请求响应对象 */
  data?: ResActivityPlayTaskDto;
  msg?: string;
}

export interface JsonResultResGoodsDto {
  /** @format int32 */
  code?: number;
  /** 权益表(奖品商品) 请求响应对象 */
  data?: ResGoodsDto;
  msg?: string;
}

export interface JsonResultResPlayDto {
  /** @format int32 */
  code?: number;
  /** 玩法 请求响应对象 */
  data?: ResPlayDto;
  msg?: string;
}

export interface JsonResultResPlayGoodsDto {
  /** @format int32 */
  code?: number;
  /** 玩法奖品 请求响应对象 */
  data?: ResPlayGoodsDto;
  msg?: string;
}

export interface JsonResultResPlayTaskDto {
  /** @format int32 */
  code?: number;
  /** 玩法任务 请求响应对象 */
  data?: ResPlayTaskDto;
  msg?: string;
}

export interface JsonResultResourceDetailDto {
  /** @format int32 */
  code?: number;
  data?: ResourceDetailDto;
  msg?: string;
}

export interface JsonResultRichTextDto {
  /** @format int32 */
  code?: number;
  data?: RichTextDto;
  msg?: string;
}

export interface JsonResultSysPageDto {
  /** @format int32 */
  code?: number;
  data?: SysPageDto;
  msg?: string;
}

export interface JsonResultSysRoleDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleDto;
  msg?: string;
}

export interface JsonResultSysUserAuthDto {
  /** @format int32 */
  code?: number;
  /** 授权员工模型 */
  data?: SysUserAuthDto;
  msg?: string;
}

export interface JsonResultSysUserDto {
  /** @format int32 */
  code?: number;
  data?: SysUserDto;
  msg?: string;
}

export interface JsonResultSysUserLoginExtendDto {
  /** @format int32 */
  code?: number;
  data?: SysUserLoginExtendDto;
  msg?: string;
}

export interface JsonResultVoid {
  /** @format int32 */
  code?: number;
  msg?: string;
}

export interface JsonResultObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultString {
  /** @format int32 */
  code?: number;
  data?: string;
  msg?: string;
}

export type MapStringString = Record<string, string>;

export interface MaterialAddDto {
  /** 扩展参数 */
  extendParams?: object;
  /**
   * 分组id
   * @format int64
   */
  groupId?: number;
  /** 路径 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MaterialDto {
  /** 扩展参数 */
  extendParams?: object;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * 修改时间
   * @format date-time
   */
  gmtModified?: string;
  /**
   * 分组id
   * @format int64
   */
  groupId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 路径 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupAddDto {
  /** 分组名称 */
  name?: string;
  /**
   * pid
   * @format int64
   */
  pid?: number;
  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 分组名称 */
  name?: string;
  /**
   * pid
   * @format int64
   */
  pid?: number;
  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupUpdateDto {
  /** 分组名称 */
  name?: string;
  /**
   * pid
   * @format int64
   */
  pid?: number;
  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialMoveDto {
  /**
   * 移动到的分组id
   * @format int64
   */
  groupId?: number;
  /** 移动的素材id数组 */
  ids?: number[];
}

export interface MaterialUpdateDto {
  /** 扩展参数 */
  extendParams?: object;
  /**
   * 分组id
   * @format int64
   */
  groupId?: number;
  /** 路径 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface MemberDetailDto {
  /** 微信应用id */
  appId?: string;
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;
  /** 禁用备注 */
  enableText?: string;
  /**
   * 是否爽约用户0否1是
   * @format int32
   */
  failStatus?: number;
  /** 性别 1男 2女 0未知 */
  gender?: string;
  /**
   * 注册时间
   * @format date-time
   */
  gmtCreated?: string;
  /** 头像 */
  headImg?: string;
  /**
   * 用户id
   * @format int64
   */
  id?: number;
  /** 身份证号 */
  idCard?: string;
  /**
   * 会员年龄
   * @format int32
   */
  memberAge?: number;
  /** 用户全局唯一编号 */
  memberNo?: string;
  /** 用户手机号 */
  mobile?: string;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /** 真实姓名 */
  realName?: string;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /** 用户微信全局唯一编号 */
  unionId?: string;
}

export interface MemberDto {
  /** 收获地址详情 */
  address?: string;
  /** 微信应用id */
  appId?: string;
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;
  /**
   * 成为会员天数
   * @format int64
   */
  day?: number;
  /** 禁用备注 */
  enableText?: string;
  /**
   * 爽约封禁结束时间
   * @format date-time
   */
  failEndTime?: string;
  /**
   * 爽约封禁开始时间
   * @format date-time
   */
  failStartTime?: string;
  /**
   * 是否爽约用户0否1是
   * @format int32
   */
  failStatus?: number;
  /** 爽约封禁备注 */
  failText?: string;
  /** 性别 1男 2女 0未知 */
  gender?: string;
  /**
   * 注册时间
   * @format date-time
   */
  gmtCreated?: string;
  /** 头像 */
  headImg?: string;
  /**
   * 用户id
   * @format int64
   */
  id?: number;
  /** 身份证号 */
  idCard?: string;
  /**
   * 会员年龄
   * @format int32
   */
  memberAge?: number;
  /** 用户全局唯一编号 */
  memberNo?: string;
  /** 用户手机号 */
  mobile?: string;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /** 真实姓名 */
  realName?: string;
  /** 用户收货地址 请求响应对象 */
  resMemberAddressDto?: ResMemberAddressDto;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /** 用户微信全局唯一编号 */
  unionId?: string;
  /** 是否是核销人员 */
  writeOffStatus?: boolean;
}

export interface PagedResultBannerDto {
  list?: BannerDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultMaterialDto {
  list?: MaterialDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultMemberDto {
  list?: MemberDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultPopupAdsDto {
  list?: PopupAdsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultReqOperateLogsDTO {
  list?: ReqOperateLogsDTO[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResActivityDto {
  list?: ResActivityDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResActivityPlayDto {
  list?: ResActivityPlayDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResActivityPlayGoodsDto {
  list?: ResActivityPlayGoodsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResActivityPlayTaskDto {
  list?: ResActivityPlayTaskDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResGoodsDto {
  list?: ResGoodsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResMemberAddressDto {
  list?: ResMemberAddressDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResPlayDto {
  list?: ResPlayDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResPlayGoodsDto {
  list?: ResPlayGoodsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResPlayTaskDto {
  list?: ResPlayTaskDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultSysPageDto {
  list?: SysPageDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultSysRoleDto {
  list?: SysRoleDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultSysUserDto {
  list?: SysUserDto[];
  /** @format int64 */
  total?: number;
}

export interface PopupAdsAddDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;
  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;
  /** 图片链接 */
  imgUrl?: string;
  /** 是否显示 */
  show?: boolean;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 标题 */
  title?: string;
  /** 外链地址 */
  url?: string;
}

export interface PopupAdsDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;
  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;
  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;
  /** 图片链接 */
  imgUrl?: string;
  /** 是否显示 */
  show?: boolean;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 标题 */
  title?: string;
  /** 外链地址 */
  url?: string;
}

export interface PopupAdsUpdateDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;
  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;
  /** 图片链接 */
  imgUrl?: string;
  /** 是否显示 */
  show?: boolean;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /** 标题 */
  title?: string;
  /** 外链地址 */
  url?: string;
}

export interface PublicStatusDto {
  /** 状态 */
  enable?: boolean;
  /** 备注 */
  enableText?: string;
  /**
   * 爽约封禁结束时间
   * @format date-time
   */
  failEndTime?: string;
  /**
   * 爽约封禁开始时间
   * @format date-time
   */
  failStartTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** id集合，拼接 */
  idList?: string;
}

/**
 * 活动主表 请求添加对象
 */
export interface ReqActivityAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /** 活动图 */
  activityImg?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStart?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /** 自定义页面 */
  customPage?: string;
  /** 活动名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 分享图 */
  shareImg?: string;
  /** 分享标题 */
  shareTitle?: string;
  /** 分享跳转链接 */
  shareUrl?: string;
  /** 是否tab展示0不展示1展示 */
  tabStatus?: boolean;
  /**
   * 参与条件0无限制1所有会员
   * @format int32
   */
  type?: number;
}

/**
 * 活动玩法绑定表 请求添加对象
 */
export interface ReqActivityPlayAddDto {
  /**
   * 活动id
   * @format int64
   */
  acitvityId?: number;
  content?: string;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 活动玩法中奖商品 请求添加对象
 */
export interface ReqActivityPlayGoodsAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 中奖数量
   * @format int32
   */
  lotteryNum?: number;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 活动玩法中奖商品 请求修改对象
 */
export interface ReqActivityPlayGoodsUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 中奖数量
   * @format int32
   */
  lotteryNum?: number;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 活动玩法任务 请求添加对象
 */
export interface ReqActivityPlayTaskAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 任务名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋友圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 活动玩法任务 请求修改对象
 */
export interface ReqActivityPlayTaskUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 任务名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋友圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 活动玩法绑定表 请求修改对象
 */
export interface ReqActivityPlayUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  acitvityId?: number;
  content?: string;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 活动主表 请求修改对象
 */
export interface ReqActivityUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /** 活动图 */
  activityImg?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStart?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /** 自定义页面 */
  customPage?: string;
  /** 活动名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 分享图 */
  shareImg?: string;
  /** 分享标题 */
  shareTitle?: string;
  /** 分享跳转链接 */
  shareUrl?: string;
  /** 是否tab展示0不展示1展示 */
  tabStatus?: boolean;
  /**
   * 参与条件0无限制1所有会员
   * @format int32
   */
  type?: number;
}

/**
 * 权益表(奖品商品) 请求添加对象
 */
export interface ReqGoodsAddDto {
  /**
   * 优惠券类型
   * @format int32
   */
  couponType?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /** 满减减X */
  fullMinus?: number;
  /** 满减满X */
  fullReduction?: number;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /** 封面图 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 领取结束日期
   * @format date-time
   */
  receiveEnd?: string;
  /**
   * 最多领取X
   * @format int32
   */
  receiveNum?: number;
  /**
   * 领取开始日期
   * @format date-time
   */
  receiveStart?: string;
  /**
   * 领取规则0不限1最多
   * @format int32
   */
  receiveType?: number;
  /** 说明 */
  remark?: string;
  /**
   * 库存数
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /** 使用平台 */
  usePlatform?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 权益表(奖品商品) 请求修改对象
 */
export interface ReqGoodsUpdateDto {
  /**
   * 优惠券类型
   * @format int32
   */
  couponType?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /** 满减减X */
  fullMinus?: number;
  /** 满减满X */
  fullReduction?: number;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /** 封面图 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 领取结束日期
   * @format date-time
   */
  receiveEnd?: string;
  /**
   * 最多领取X
   * @format int32
   */
  receiveNum?: number;
  /**
   * 领取开始日期
   * @format date-time
   */
  receiveStart?: string;
  /**
   * 领取规则0不限1最多
   * @format int32
   */
  receiveType?: number;
  /** 说明 */
  remark?: string;
  /**
   * 库存数
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /** 使用平台 */
  usePlatform?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 操作日志
 */
export interface ReqOperateLogsDTO {
  /** 业务id */
  bizNo?: string;
  /** 成功操作内容 */
  content?: string;
  /** 详细信息 */
  details?: string;
  /** 错误消息 */
  errorMsg?: string;
  /**
   * 操作花费的时间 单位：ms
   * @format int64
   */
  executeTime?: number;
  /** @format int64 */
  id?: number;
  /** 模块 */
  module?: string;
  /**
   * 操作时间，标准日期格式
   * @format date-time
   */
  operateDateTime?: string;
  /** 操作描述 */
  operateDesc?: string;
  /**
   * 操作时间 时间戳单位：ms
   * @format int64
   */
  operateTime?: number;
  /** 操作类型 */
  operateType?: string;
  /** 操作者 */
  operator?: string;
  /** 操作者名称 */
  operatorName?: string;
  /** 平台 */
  platform?: string;
  /** 执行后返回的json字符串 */
  result?: string;
  /** 是否调用成功 */
  success?: boolean;
  /** 租户 */
  tenant?: string;
}

/**
 * 玩法 请求添加对象
 */
export interface ReqPlayAddDto {
  /** 自定义页面 */
  customPage?: string;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 玩法奖品 请求添加对象
 */
export interface ReqPlayGoodsAddDto {
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 玩法奖品 请求修改对象
 */
export interface ReqPlayGoodsUpdateDto {
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 玩法任务 请求添加对象
 */
export interface ReqPlayTaskAddDto {
  /** 任务名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 玩法任务 请求修改对象
 */
export interface ReqPlayTaskUpdateDto {
  /** 任务名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 玩法 请求修改对象
 */
export interface ReqPlayUpdateDto {
  /** 自定义页面 */
  customPage?: string;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 活动主表 请求响应对象
 */
export interface ResActivityDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /** 活动图 */
  activityImg?: string;
  /**
   * 活动状态0活动未开始1进行中2活动已结束
   * @format int32
   */
  activityIng?: number;
  /** 关联玩法 */
  activityPlayDtos?: ResActivityPlayDto[];
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStart?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /** 创建人 */
  createUser?: string;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 距离结束时间(毫秒)
   * @format int64
   */
  endTimeNum?: number;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 可抽奖次数
   * @format int32
   */
  lotteryNum?: number;
  /** 活动名称 */
  name?: string;
  /** 备注 */
  remark?: string;
  /** 分享图 */
  shareImg?: string;
  /** 分享标题 */
  shareTitle?: string;
  /** 分享跳转链接 */
  shareUrl?: string;
  /** 是否tab展示0不展示1展示 */
  tabStatus?: boolean;
  /**
   * 参与条件0无限制1所有会员
   * @format int32
   */
  type?: number;
}

/**
 * 活动玩法绑定表 请求响应对象
 */
export interface ResActivityPlayDto {
  /**
   * 活动id
   * @format int64
   */
  acitvityId?: number;
  /** 活动名称 */
  activityName?: string;
  /** 活动票务信息 请求响应对象 */
  activityPlayTicketingConfigDto?: ResActivityPlayTicketingConfigDto;
  /** 票档名称信息 */
  activityPlayTicketingFilesNameDtos?: ResActivityPlayTicketingFilesNameDto[];
  /** 售后规则信息 */
  activityPlayTicketingRefundRuleDtos?: ResActivityPlayTicketingRefundRuleDto[];
  content?: string;
  /** 自定义页面 */
  customPage?: string;
  /** 商品集合 */
  goodsDtos?: ResActivityPlayGoodsDto[];
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 中奖人数
   * @format int32
   */
  lotteryNum?: number;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与人数
   * @format int32
   */
  memberNum?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /** 玩法名称 */
  playName?: string;
  /**
   * 可抽奖次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 抽奖次数累计
   * @format int32
   */
  rewardNumAll?: number;
  /**
   * 状态
   * @format int32
   */
  status?: number;
  /** 任务集合 */
  taskDtos?: ResActivityPlayTaskDto[];
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
  /** 活动玩法投票规则 请求响应对象 */
  votesDto?: ResActivityPlayVotesDto;
}

/**
 * 活动玩法中奖商品 请求响应对象
 */
export interface ResActivityPlayGoodsDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /** 权益表(奖品商品) 请求响应对象 */
  goodsDto?: ResGoodsDto;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 中奖数量
   * @format int32
   */
  lotteryNum?: number;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 活动玩法任务 请求响应对象
 */
export interface ResActivityPlayTaskDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 总完成次数
   * @format int32
   */
  completeNum?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 任务名称 */
  name?: string;
  /**
   * 当前完成次数
   * @format int32
   */
  nowCompleteNum?: number;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 可抽奖次数
   * @format int32
   */
  rewardAllNum?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋友圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 权益表(奖品商品) 请求响应对象
 */
export interface ResGoodsDto {
  /**
   * 优惠券类型
   * @format int32
   */
  couponType?: number;
  /** 优惠券链接 */
  couponUrl?: string;
  /** 满减减X */
  fullMinus?: number;
  /** 满减满X */
  fullReduction?: number;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 封面图 */
  imgUrl?: string;
  /** 名称 */
  name?: string;
  /**
   * 已发放数量
   * @format int32
   */
  num?: number;
  /** 关联玩法 */
  playGoodsDtos?: ResPlayGoodsDto[];
  /** 关联玩法名称 */
  playName?: string;
  /**
   * 领取结束日期
   * @format date-time
   */
  receiveEnd?: string;
  /**
   * 最多领取X
   * @format int32
   */
  receiveNum?: number;
  /**
   * 领取开始日期
   * @format date-time
   */
  receiveStart?: string;
  /**
   * 领取规则0不限1最多
   * @format int32
   */
  receiveType?: number;
  /** 说明 */
  remark?: string;
  /**
   * 状态0禁用1启用
   * @format int32
   */
  status?: number;
  /**
   * 库存数
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /** 使用平台 */
  usePlatform?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 用户收货地址 请求响应对象
 */
export interface ResMemberAddressDto {
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 是否默认，0-非默认，1-默认 */
  isDefault: boolean;
  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;
  /** 收货人手机号 */
  mobile: string;
  /** 收货人姓名 */
  name: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /** 详细地址 */
  singleAddress?: string;
}

/**
 * 玩法 请求响应对象
 */
export interface ResPlayDto {
  /** 参与活动 */
  activityPlayDtos?: ResActivityPlayDto[];
  /** 创建人 */
  createUser?: string;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /** 商品集合 */
  goodsDtos?: ResPlayGoodsDto[];
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /** 投票规则 请求响应对象 */
  resVotesDto?: ResVotesDto;
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /** 任务集合 */
  taskDtos?: ResPlayTaskDto[];
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 玩法奖品 请求响应对象
 */
export interface ResPlayGoodsDto {
  /** 优惠券链接 */
  couponUrl?: string;
  /** 权益表(奖品商品) 请求响应对象 */
  goodsDto?: ResGoodsDto;
  /**
   * 奖品id
   * @format int64
   */
  goodsId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /** 玩法名称 */
  playName?: string;
  /** 中奖比例 */
  proportionVal?: number;
  /**
   * 奖品数量
   * @format int32
   */
  stock?: number;
  /**
   * 库存类型0不限1最多
   * @format int32
   */
  stockType?: number;
  /**
   * 领取后使用天数
   * @format int32
   */
  useDay?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
  /**
   * 优惠券使用类型0时间范围1按领取后多少天内
   * @format int32
   */
  useType?: number;
}

/**
 * 玩法任务 请求响应对象
 */
export interface ResPlayTaskDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 任务名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 重置类型0限制总次数1每日2每周3每月
   * @format int32
   */
  resetType?: number;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励总上线
   * @format int32
   */
  rewardOnline?: number;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

export interface ResourceAddDto {
  /** 关联的API列表 */
  apis?: SysApiDto[];
  /** 代码 */
  code?: string;
  /** 图标 */
  icon?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;
  /** 资源名称 */
  title?: string;
  /**
   * 资源类型 0：菜单 1：按钮
   * @format int32
   */
  type?: number;
  /** 是否显示 */
  visible?: boolean;
}

export interface ResourceDetailDto {
  /** 关联的API列表 */
  apis?: SysApiDto[];
  /** 代码 */
  code?: string;
  /** 图标 */
  icon?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;
  /** 资源名称 */
  title?: string;
  /**
   * 资源类型 0：菜单 1：按钮
   * @format int32
   */
  type?: number;
  /** 是否显示 */
  visible?: boolean;
}

export interface ResourceUpdateDto {
  /** 关联的API列表 */
  apis?: SysApiDto[];
  /** 代码 */
  code?: string;
  /** 图标 */
  icon?: string;
  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;
  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;
  /** 资源名称 */
  title?: string;
  /**
   * 资源类型 0：菜单 1：按钮
   * @format int32
   */
  type?: number;
  /** 是否显示 */
  visible?: boolean;
}

export interface RichTextAddDto {
  /** 内容 */
  content?: string;
  /**
   * data id
   * @format int32
   */
  dataId?: number;
}

export interface RichTextDto {
  /** 内容 */
  content?: string;
  /**
   * data id
   * @format int32
   */
  dataId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface RichTextUpdateDto {
  /** 内容 */
  content?: string;
  /**
   * data id
   * @format int32
   */
  dataId?: number;
}

export interface SysApiDto {
  description?: string;
  method?: string;
  uri?: string;
}

export interface SysConfigDto {
  /** 字段key */
  fieldKey?: string;
  /** 字段值 */
  fieldValue?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 字段类型(用于分组，方便查询，详见代码枚举)
   * @format int32
   */
  type?: number;
}

export interface SysPageAddDto {
  /** 页面内容 */
  content?: string;
  /** 页面名称 */
  name?: string;
  /** 页面底色 */
  pageBgColor?: string;
  /** 页面标题 */
  title?: string;
}

/**
 * 页面批量删除 请求添加对象
 */
export interface SysPageDelDto {
  /** 页面id列表 */
  ids?: number[];
}

export interface SysPageDto {
  /** 页面内容 */
  content?: string;
  /**
   * 最后修改时间
   * @format date-time
   */
  gmtModified?: string;
  /** 设为首页 0 否 1 是 */
  homePage?: boolean;
  /** 页面名称 */
  name?: string;
  /** 页面底色 */
  pageBgColor?: string;
  /** 页面标题 */
  title?: string;
}

export interface SysPageUpdateDto {
  /** 页面内容 */
  content?: string;
  /** 设为首页 0 否 1 是 */
  homePage?: boolean;
  /** 页面名称 */
  name?: string;
  /** 页面底色 */
  pageBgColor?: string;
  /** 页面标题 */
  title?: string;
}

export interface SysRoleAddDto {
  /** 描述 */
  description?: string;
  /** 名称 */
  name?: string;
  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysRoleDto {
  /** 角色权限标识 */
  authority?: string;
  /** 描述 */
  description?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 角色名称 */
  name?: string;
  /**
   * 员工数量
   * @format int64
   */
  userNum?: number;
}

export interface SysRoleSelectDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 角色名称 */
  name?: string;
}

export interface SysRoleUpdateDto {
  /** 描述 */
  description?: string;
  /** 名称 */
  name?: string;
  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysUserAddDto {
  /** 部门ID集合 */
  deptIds?: number[];
  /** 用户邮箱 */
  email?: string;
  /** 用户手机号码 */
  mobile?: string;
  /** 角色id集合 */
  roleIds?: number[];
  /** 用户名称 */
  username?: string;
}

/**
 * 授权员工模型
 */
export interface SysUserAuthDto {
  /** 登录人有权限的按钮 */
  buttons?: string[];
  /** 登录人邮箱 */
  email?: string;
  /** 登录人有权限的菜单（树状） */
  menusTree?: TreeLong[];
  /** 手机号 */
  mobile?: string;
  /**
   * id
   * @format int64
   */
  userId?: number;
  /** 登录人名称 */
  username?: string;
}

export interface SysUserDto {
  /** 绑定的部门ID["部门ID","部门ID"] 部门ID必须双引号包裹 */
  deptIds?: string;
  /** 所属部门 */
  deptNames?: string;
  /** 邮箱 */
  email?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 电话 */
  mobile?: string;
  /** 绑定的角色ID["角色id","角色id"] 角色id必须双引号包裹  */
  roleIds?: string;
  /** 所属角色 */
  roleNames?: string;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /** 用户名 */
  username?: string;
}

export interface SysUserLoginExtendDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 密码 */
  password?: string;
  /** 用户名 */
  username?: string;
}

export interface SysUserModifyPasswordDto {
  /** 新密码 */
  newPassword?: string;
  /** 原密码 */
  password?: string;
}

export interface SysUserModifyPwdExpirationDto {
  /** 新密码 */
  newPassword?: string;
  /** 原密码 */
  password?: string;
  /** 用户名 */
  username?: string;
}

export interface SysUserUpdateDto {
  /** 部门ID集合 */
  deptIds?: number[];
  /** 用户邮箱 */
  email?: string;
  /** 用户手机号码 */
  mobile?: string;
  /** 角色id集合 */
  roleIds?: number[];
  /** 用户名称 */
  username?: string;
}

export interface TreeNodeConfig {
  childrenKey?: string;
  /** @format int32 */
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
}

export interface TreeNodeConfig1 {
  childrenKey?: string;
  /** @format int32 */
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
}

export interface TreeNodeConfig2 {
  childrenKey?: string;
  /** @format int32 */
  deep?: number;
  idKey?: string;
  nameKey?: string;
  parentIdKey?: string;
  weightKey?: string;
}

export type TreeLong = Record<string, object>;

export type TreeLong1 = Record<string, object>;

export type TreeLong2 = Record<string, object>;

export interface ActivityStatusDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStart?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /** 是否自动上线 */
  automaticState?: boolean;
  /** 备注 */
  enableText?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 活动名称 */
  name?: string;
  /** 是否tab展示0不展示1展示 */
  tabStatus?: boolean;
}

export interface JsonResultPagedResultResMemberLotteryDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResMemberLotteryDto;
  msg?: string;
}

export interface JsonResultResMemberLotteryDto {
  /** @format int32 */
  code?: number;
  /** 用户抽奖记录 请求响应对象 */
  data?: ResMemberLotteryDto;
  msg?: string;
}

export interface PagedResultResMemberLotteryDto {
  list?: ResMemberLotteryDto[];
  /** @format int64 */
  total?: number;
}

/**
 * 用户抽奖记录 请求添加对象
 */
export interface ReqMemberLotteryAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 发放状态0未发放1已发放2发放失败
   * @format int32
   */
  grantState?: number;
  /**
   * 发放时间
   * @format date-time
   */
  grantTime?: string;
  /** 封面图 */
  imgUrl?: string;
  /** 奖品等级 */
  levelName?: string;
  /** 物流公司 */
  logisticsName?: string;
  /** 物流单号 */
  logisticsNo?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 收货人手机号 */
  mobile?: string;
  /** 收货人姓名 */
  name?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /** 购票订单截图 */
  orderImg?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /** 玩法名称 */
  playName?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /** 备注 */
  remark?: string;
  /**
   * 完成任务记录id
   * @format int64
   */
  rewardId?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
}

/**
 * 用户抽奖记录 请求修改对象
 */
export interface ReqMemberLotteryUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 发放状态0未发放1已发放2发放失败
   * @format int32
   */
  grantState?: number;
  /**
   * 发放时间
   * @format date-time
   */
  grantTime?: string;
  /** 封面图 */
  imgUrl?: string;
  /** 奖品等级 */
  levelName?: string;
  /** 物流公司 */
  logisticsName?: string;
  /** 物流单号 */
  logisticsNo?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 收货人手机号 */
  mobile?: string;
  /** 收货人姓名 */
  name?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /** 购票订单截图 */
  orderImg?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /** 玩法名称 */
  playName?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /** 备注 */
  remark?: string;
  /**
   * 完成任务记录id
   * @format int64
   */
  rewardId?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
}

/**
 * 用户抽奖记录 请求响应对象
 */
export interface ResMemberLotteryDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /** 优惠券链接 */
  couponUrl?: string;
  /**
   * 抽奖时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * 奖品类型扩展0站外1邮寄2站外领取
   * @format int32
   */
  goodType?: number;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 发放状态0未发放1已发放2发放失败
   * @format int32
   */
  grantState?: number;
  /**
   * 发放时间
   * @format date-time
   */
  grantTime?: string;
  /** 头像 */
  headImg?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 封面图 */
  imgUrl?: string;
  /** 奖品等级 */
  levelName?: string;
  /** 物流公司 */
  logisticsName?: string;
  /** 物流单号 */
  logisticsNo?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  memberMobile?: string;
  /** 收货人手机号 */
  mobile?: string;
  /** 收货人姓名 */
  name?: string;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /** 购票订单截图 */
  orderImg?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /** 玩法名称 */
  playName?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /** 真实姓名 */
  realName?: string;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /** 备注 */
  remark?: string;
  /**
   * 完成任务记录id
   * @format int64
   */
  rewardId?: number;
  /** 详细地址 */
  singleAddress?: string;
  /** 是否即将超时 */
  timeState?: boolean;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 结束使用时间
   * @format date-time
   */
  useEnd?: string;
  /**
   * 开始使用时间
   * @format date-time
   */
  useStart?: string;
}

export interface BindingMobileDto {
  /** 验证码 */
  code?: string;
  /** 新手机号 */
  mobile?: string;
}

export interface JsonResultListBannerDto {
  /** @format int32 */
  code?: number;
  data?: BannerDto[];
  msg?: string;
}

export interface JsonResultListPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto[];
  msg?: string;
}

export interface JsonResultMapIntString {
  /** @format int32 */
  code?: number;
  data?: Record<string, string>;
  msg?: string;
}

export interface JsonResultMemberDto {
  /** @format int32 */
  code?: number;
  data?: MemberDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultResMemberAddressDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResMemberAddressDto;
  msg?: string;
}

export interface JsonResultResMemberAddressDto {
  /** @format int32 */
  code?: number;
  /** 用户收货地址 请求响应对象 */
  data?: ResMemberAddressDto;
  msg?: string;
}

export interface JsonResultSysPageSimpleDto {
  /** @format int32 */
  code?: number;
  data?: SysPageSimpleDto;
  msg?: string;
}

export interface JsonResultBoolean {
  /** @format int32 */
  code?: number;
  data?: boolean;
  msg?: string;
}

export type MapIntString = Record<string, string>;

export interface PagedScrollResultResMemberAddressDto {
  isLastPage?: boolean;
  list?: ResMemberAddressDto[];
  /** @format int64 */
  nextToken?: number;
}

/**
 * 用户收货地址 请求添加对象
 */
export interface ReqMemberAddressAddDto {
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /** 是否默认，0-非默认，1-默认 */
  isDefault: boolean;
  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;
  /** 收货人手机号 */
  mobile: string;
  /** 收货人姓名 */
  name: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /** 详细地址 */
  singleAddress?: string;
}

/**
 * 用户收货地址 请求修改对象
 */
export interface ReqMemberAddressUpdateDto {
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /** 是否默认，0-非默认，1-默认 */
  isDefault: boolean;
  /**
   * 用户ID
   * @format int64
   */
  memberId?: number;
  /** 收货人手机号 */
  mobile: string;
  /** 收货人姓名 */
  name: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /** 详细地址 */
  singleAddress?: string;
}

/**
 * 添加订阅 请求对象
 */
export interface ReqSubscriptionAddDto {
  /**
   * 订阅类型 1:订单待付款通知; 2:订单发货通知; 3:商品到货通知; 4:券过期提醒; 5:邀请成功通知; 6:收益到账提醒; 7:奖励领取通知
   * @format int32
   */
  type?: number;
}

export interface SysPageSimpleDto {
  /** 页面内容 */
  content?: string;
  /** 页面标题 */
  title?: string;
}

export interface JsonResultListResActivityDto {
  /** @format int32 */
  code?: number;
  data?: ResActivityDto[];
  msg?: string;
}

export interface JsonResultListResPlayDto {
  /** @format int32 */
  code?: number;
  data?: ResPlayDto[];
  msg?: string;
}

export interface JsonResultPagedScrollResultResMemberLotteryDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResMemberLotteryDto;
  msg?: string;
}

export interface JsonResultPagedScrollResultResMemberRewardDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResMemberRewardDto;
  msg?: string;
}

export interface PagedScrollResultResMemberLotteryDto {
  isLastPage?: boolean;
  list?: ResMemberLotteryDto[];
  /** @format int64 */
  nextToken?: number;
}

export interface PagedScrollResultResMemberRewardDto {
  isLastPage?: boolean;
  list?: ResMemberRewardDto[];
  /** @format int64 */
  nextToken?: number;
}

/**
 * 用户获取抽奖资格记录 请求添加对象
 */
export interface ReqMemberRewardAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动任务id
   * @format int64
   */
  activityPlayTaskId?: number;
  /**
   * 助力用户id
   * @format int64
   */
  assistId?: number;
  /** 助力结果0失败1成功 */
  assistState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 任务名称 */
  name?: string;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励剩余次数
   * @format int32
   */
  rewardRemainingNum?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋友圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 用户获取抽奖资格记录 请求响应对象
 */
export interface ResMemberRewardDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动任务id
   * @format int64
   */
  activityPlayTaskId?: number;
  /**
   * 助力用户id
   * @format int64
   */
  assistId?: number;
  /** 助力结果0失败1成功 */
  assistState?: boolean;
  /**
   * 注册时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 任务名称 */
  name?: string;
  /** 助力用户昵称 */
  nickName?: string;
  /** 助力用户真实名称 */
  realName?: string;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
  /**
   * 奖励剩余次数
   * @format int32
   */
  rewardRemainingNum?: number;
  /**
   * 任务类型0每日签到1邀请好友参与活动2分享活动到群聊3分享活动到朋友圈4加入会员5添加官方小助手微信6加入官方社群
   * @format int32
   */
  type?: number;
}

/**
 * 玩法 请求添加对象
 */
export interface ReqPlayAllAddDto {
  /** 自定义页面 */
  customPage?: string;
  /** 玩法商品权益集合 */
  goodsAddDtos?: ReqPlayGoodsAddDto[];
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /** 玩法任务集合 */
  taskAddDtos?: ReqPlayTaskAddDto[];
  /**
   * 类型 0开盲盒  1票务
   * @format int32
   */
  type?: number;
}

export interface JsonResultListResMemberLotteryDto {
  /** @format int32 */
  code?: number;
  data?: ResMemberLotteryDto[];
  msg?: string;
}

export interface JsonResultPagedScrollResultResMemberAssistDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResMemberAssistDto;
  msg?: string;
}

export interface JsonResultResMemberAssistDto {
  /** @format int32 */
  code?: number;
  /** 助力记录 请求响应对象 */
  data?: ResMemberAssistDto;
  msg?: string;
}

export interface PagedScrollResultResMemberAssistDto {
  isLastPage?: boolean;
  list?: ResMemberAssistDto[];
  /** @format int64 */
  nextToken?: number;
}

/**
 * 助力记录 请求添加对象
 */
export interface ReqMemberAssistAddDto {
  /**
   * 助力活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动玩法任务id
   * @format int64
   */
  activityPlayTaskId?: number;
  /**
   * 助力用户id
   * @format int64
   */
  assistId?: number;
  /** 助力结果0失败1成功 */
  assistState?: boolean;
  /**
   * 分享用户id
   * @format int64
   */
  memberId?: number;
  /** 助力用户昵称 */
  nickName?: string;
  /** 助力用户真实名称 */
  realName?: string;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
}

/**
 * 用户领奖 请求添加对象
 */
export interface ReqMemberLotteryReceiveDto {
  /**
   * 收获地址id
   * @format int64
   */
  addressId?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 中奖记录id
   * @format int64
   */
  id?: number;
  /** 收货人手机号 */
  mobile?: string;
  /** 收货人姓名 */
  name?: string;
  /** 购票订单截图 */
  orderImg?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /** 详细地址 */
  singleAddress?: string;
}

/**
 * 助力记录 请求响应对象
 */
export interface ResMemberAssistDto {
  /**
   * 助力活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动玩法任务id
   * @format int64
   */
  activityPlayTaskId?: number;
  /**
   * 助力用户id
   * @format int64
   */
  assistId?: number;
  /** 助力结果0失败1成功 */
  assistState?: boolean;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 分享用户id
   * @format int64
   */
  memberId?: number;
  /** 助力用户昵称 */
  nickName?: string;
  /** 助力用户真实名称 */
  realName?: string;
  /**
   * 奖励次数
   * @format int32
   */
  rewardNum?: number;
}

export interface JsonResultLong {
  /** @format int32 */
  code?: number;
  /** @format int64 */
  data?: number;
  msg?: string;
}

/**
 * 活动玩法商品任务修改 请求添加对象
 */
export interface ReqActivityPlayDetailDto {
  /** 活动票务信息 请求修改对象 */
  activityPlayTicketingConfigUpdateDto?: ReqActivityPlayTicketingConfigUpdateDto;
  /** 票档名称信息 */
  activityPlayTicketingFilesNameAddDtos?: ReqActivityPlayTicketingFilesNameUpdateDto[];
  /** 售后规则信息 */
  activityPlayTicketingRefundRuleAddDtos?: ReqActivityPlayTicketingRefundRuleAddDto[];
  /** 活动玩法投票规则 请求修改对象 */
  activityPlayVotesUpdateDtos?: ReqActivityPlayVotesUpdateDto;
  /** 自定义页面 */
  customPage?: string;
  /** 活动玩法商品集合 */
  goodsAddDtos?: ReqActivityPlayGoodsUpdateDto[];
  /**
   * 活动玩法id
   * @format int64
   */
  id?: number;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   *  中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /** 名字 */
  name?: string;
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /** 活动玩法任务集合 */
  taskAddDtos?: ReqActivityPlayTaskAddDto[];
}

export interface JsonResultMapIntInt {
  /** @format int32 */
  code?: number;
  data?: Record<string, number>;
  msg?: string;
}

export type MapIntInt = Record<string, object>;

export interface ResPhoneNumDTO {
  /** 区号 */
  countryCode?: string;
  /** 手机号（不带区号） */
  phoneNumber?: string;
  wasMember?: boolean;
}

export interface JsonResultMapStringObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultResPhoneNumDTO {
  /** @format int32 */
  code?: number;
  data?: ResPhoneNumDTO;
  msg?: string;
}

/**
 * 用户抽奖记录 请求添加对象
 */
export interface ReqMemberLotteryAddDto1 {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 物流公司 */
  logisticsName?: string;
  /** 物流单号 */
  logisticsNo?: string;
}

/**
 * 用户抽奖记录 请求添加对象
 */
export interface ReqMemberLotteryAddDto2 {
  /** 导入数据 */
  sendDtos?: ReqMemberLotteryAddDto1[];
}

export interface JsonResultListResActivityPlayTicketingFilesDto {
  /** @format int32 */
  code?: number;
  data?: ResActivityPlayTicketingFilesDto[];
  msg?: string;
}

export interface JsonResultListResOrderFrequentContactsDto {
  /** @format int32 */
  code?: number;
  data?: ResOrderFrequentContactsDto[];
  msg?: string;
}

export interface JsonResultPagedResultResFrequentContactsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResFrequentContactsDto;
  msg?: string;
}

export interface JsonResultPagedResultResInvitationCodeDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResInvitationCodeDto;
  msg?: string;
}

export interface JsonResultPagedResultResOrderFrequentContactsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResOrderFrequentContactsDto;
  msg?: string;
}

export interface JsonResultPagedResultResOrdersDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResOrdersDto;
  msg?: string;
}

export interface JsonResultPagedResultResTicketingConfigDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResTicketingConfigDto;
  msg?: string;
}

export interface JsonResultPagedResultResWriteOffDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResWriteOffDto;
  msg?: string;
}

export interface JsonResultResFrequentContactsDto {
  /** @format int32 */
  code?: number;
  /** 常用联系人 请求响应对象 */
  data?: ResFrequentContactsDto;
  msg?: string;
}

export interface JsonResultResInvitationCodeDto {
  /** @format int32 */
  code?: number;
  /** 邀请码 请求响应对象 */
  data?: ResInvitationCodeDto;
  msg?: string;
}

export interface JsonResultResOrdersDto {
  /** @format int32 */
  code?: number;
  /** 票务预约记录 请求响应对象 */
  data?: ResOrdersDto;
  msg?: string;
}

export interface JsonResultResOrdersstatisticsDto {
  /** @format int32 */
  code?: number;
  /** 票务预约记录统计 请求响应对象 */
  data?: ResOrdersstatisticsDto;
  msg?: string;
}

export interface JsonResultResPlayTicketingDto {
  /** @format int32 */
  code?: number;
  /** 玩法 请求响应对象 */
  data?: ResPlayTicketingDto;
  msg?: string;
}

export interface JsonResultResTicketingConfigDto {
  /** @format int32 */
  code?: number;
  /** 票务配置 请求响应对象 */
  data?: ResTicketingConfigDto;
  msg?: string;
}

export interface JsonResultResWriteOffDto {
  /** @format int32 */
  code?: number;
  /** 票务核销人员关联表 请求响应对象 */
  data?: ResWriteOffDto;
  msg?: string;
}

export interface PagedResultResFrequentContactsDto {
  list?: ResFrequentContactsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResInvitationCodeDto {
  list?: ResInvitationCodeDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResOrderFrequentContactsDto {
  list?: ResOrderFrequentContactsDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResOrdersDto {
  list?: ResOrdersDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResTicketingConfigDto {
  list?: ResTicketingConfigDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResWriteOffDto {
  list?: ResWriteOffDto[];
  /** @format int64 */
  total?: number;
}

/**
 * 活动票务信息 请求修改对象
 */
export interface ReqActivityPlayTicketingConfigUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 收货地址
   * @format int32
   */
  addressStatus?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 承诺函 */
  commitmentLetterRich?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 活动开始前X天停止报名
   * @format int32
   */
  deadlineDay?: number;
  /**
   * 截止时间
   * @format date-time
   */
  deadlineTime?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * 手机号
   * @format int32
   */
  mobieStatus?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 实名制
   * @format int32
   */
  realNameStatus?: number;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 报名截止类型0固定时间1活动开始前X天停止报名
   * @format int32
   */
  registrationDeadlineType?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
}

/**
 * 活动票档 请求添加对象
 */
export interface ReqActivityPlayTicketingFilesAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /** 票档名称 */
  name?: string;
  /** 价格 */
  price?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
}

/**
 * 活动票档 请求筛选对象
 */
export interface ReqActivityPlayTicketingFilesQuery {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

/**
 * 票务活动退款规则 请求添加对象
 */
export interface ReqActivityPlayTicketingRefundRuleAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * 具体退款金额
   * @format int64
   */
  refundAmount?: number;
  /**
   * 退款规则0按原价百分比1按金额退
   * @format int32
   */
  refundAmountType?: number;
  /**
   * 退票活动开始前X天
   * @format int32
   */
  refundDay?: number;
  /**
   * 退票结束时间
   * @format date-time
   */
  refundEndTime?: string;
  /**
   * 退款比例%
   * @format int32
   */
  refundProportion?: number;
  /**
   * 退票开始时间
   * @format date-time
   */
  refundStartTime?: string;
  /** 是否满足当前时间退票 */
  refundStatus?: boolean;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
}

/**
 * 常用联系人 请求添加对象
 */
export interface ReqFrequentContactsAddDto {
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证2港澳居民来往内地通行证3台湾居民来往大陆通行证4外国人永久居留身份证5护照
   * @format int32
   */
  certificateType?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
}

/**
 * 常用联系人 请求修改对象
 */
export interface ReqFrequentContactsUpdateDto {
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证2港澳居民来往内地通行证3台湾居民来往大陆通行证4外国人永久居留身份证5护照
   * @format int32
   */
  certificateType?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
}

/**
 * 邀请码 请求添加对象
 */
export interface ReqInvitationCodeAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  codeStatus?: number;
  /** 邀请码 */
  invitationCode?: string;
  /**
   * 数量
   * @format int32
   */
  num?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /** 创建批次 */
  taskId?: string;
}

/**
 * 邀请码 请求修改对象
 */
export interface ReqInvitationCodeUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  codeStatus?: number;
  /** 邀请码 */
  invitationCode?: string;
  /**
   * 数量
   * @format int32
   */
  num?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /** 创建批次 */
  taskId?: string;
}

/**
 * 预约单常用人关联表 请求添加对象
 */
export interface ReqOrderFrequentContactsAddDto {
  /** 入场编号 */
  admissionNo?: string;
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证
   * @format int32
   */
  certificateType?: number;
  /**
   * 常用联系人id
   * @format int64
   */
  frequentContactsId?: number;
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /**
   * 预约id
   * @format int64
   */
  orderId?: number;
  /** 核销码 */
  qrCode?: string;
  /**
   * 核销人id
   * @format int64
   */
  writeOffId?: number;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  writeOffStatus?: number;
  /**
   * 核销时间
   * @format date-time
   */
  writeOffTime?: string;
  /**
   * 核销端0后台1小程序
   * @format int32
   */
  writeOffType?: number;
}

/**
 * 票务预约记录 请求添加对象
 */
export interface ReqOrdersAddDto {
  /**
   * 活动票务id
   * @format int64
   */
  activityConfigId?: number;
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 取消时间
   * @format date-time
   */
  cancelTime?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 票档id
   * @format int64
   */
  filesId?: number;
  /** 票档名称 */
  filesName?: string;
  /** 主图 */
  hostImg?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消
   * @format int32
   */
  orderStatus?: number;
  /** 支付金额 */
  payAmount?: number;
  /**
   * 预约成功时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /** 详细地址 */
  singleAddress?: string;
  /** 温馨提示 */
  subscriptionText?: string;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /** 单价 */
  unitPrice?: number;
}

/**
 * 票务预约记录 请求修改对象
 */
export interface ReqOrdersUpdateDto {
  /**
   * 活动票务id
   * @format int64
   */
  activityConfigId?: number;
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /**
   * 取消时间
   * @format date-time
   */
  cancelTime?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 票档id
   * @format int64
   */
  filesId?: number;
  /** 票档名称 */
  filesName?: string;
  /** 主图 */
  hostImg?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消
   * @format int32
   */
  orderStatus?: number;
  /** 支付金额 */
  payAmount?: number;
  /**
   * 预约成功时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /** 详细地址 */
  singleAddress?: string;
  /** 温馨提示 */
  subscriptionText?: string;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /** 单价 */
  unitPrice?: number;
}

/**
 * 票务 请求添加对象
 */
export interface ReqPlayTicketingAddOrUpdateDto {
  /** 自定义页面 */
  customPage?: string;
  /** 票档名称信息 */
  filesNameUpdateDtos?: ReqTicketingFilesNameUpdateDto[];
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 玩法名称 */
  name?: string;
  /** 退票规则 */
  ruleUpdateDtos?: ReqTicketingRefundRuleUpdateDto[];
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /** 票务配置 请求修改对象 */
  ticketingConfigUpdateDto?: ReqTicketingConfigUpdateDto;
  /**
   * 类型 0开盲盒  1票务
   * @format int32
   */
  type?: number;
}

/**
 * 票务配置 请求添加对象
 */
export interface ReqTicketingConfigAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 收货地址
   * @format int32
   */
  addressStatus?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 承诺函 */
  commitmentLetterRich?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 活动开始前X天停止报名
   * @format int32
   */
  deadlineDay?: number;
  /**
   * 截止时间
   * @format date-time
   */
  deadlineTime?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * 手机号
   * @format int32
   */
  mobieStatus?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 实名制
   * @format int32
   */
  realNameStatus?: number;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 报名截止类型0固定时间1活动开始前X天停止报名
   * @format int32
   */
  registrationDeadlineType?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
}

/**
 * 票务配置 请求修改对象
 */
export interface ReqTicketingConfigUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 收货地址
   * @format int32
   */
  addressStatus?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 承诺函 */
  commitmentLetterRich?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 活动开始前X天停止报名
   * @format int32
   */
  deadlineDay?: number;
  /**
   * 截止时间
   * @format date-time
   */
  deadlineTime?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * 手机号
   * @format int32
   */
  mobieStatus?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 实名制
   * @format int32
   */
  realNameStatus?: number;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 报名截止类型0固定时间1活动开始前X天停止报名
   * @format int32
   */
  registrationDeadlineType?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
}

/**
 * 票务挡位 请求修改对象
 */
export interface ReqTicketingFilesUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /** 票档名称 */
  name?: string;
  /**
   * 票档名称id
   * @format int64
   */
  nameId?: number;
  /** 价格 */
  price?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

/**
 * 票务退款规则 请求修改对象
 */
export interface ReqTicketingRefundRuleUpdateDto {
  /**
   * 具体退款金额
   * @format int64
   */
  refundAmount?: number;
  /**
   * 退款规则0按原价百分比1按金额退
   * @format int32
   */
  refundAmountType?: number;
  /**
   * 退票活动开始前X天
   * @format int32
   */
  refundDay?: number;
  /**
   * 退票结束时间
   * @format date-time
   */
  refundEndTime?: string;
  /**
   * 退款比例%
   * @format int32
   */
  refundProportion?: number;
  /**
   * 退票开始时间
   * @format date-time
   */
  refundStartTime?: string;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

/**
 * 票务核销人员关联表 请求添加对象
 */
export interface ReqWriteOffAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
}

/**
 * 票务核销人员关联表 请求修改对象
 */
export interface ReqWriteOffUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
}

/**
 * 活动票务信息 请求响应对象
 */
export interface ResActivityPlayTicketingConfigDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 收货地址
   * @format int32
   */
  addressStatus?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 承诺函 */
  commitmentLetterRich?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 活动开始前X天停止报名
   * @format int32
   */
  deadlineDay?: number;
  /**
   * 截止时间
   * @format date-time
   */
  deadlineTime?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 手机号
   * @format int32
   */
  mobieStatus?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 实名制
   * @format int32
   */
  realNameStatus?: number;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 报名截止类型0固定时间1活动开始前X天停止报名
   * @format int32
   */
  registrationDeadlineType?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
}

/**
 * 活动票档 请求响应对象
 */
export interface ResActivityPlayTicketingFilesDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动票务票档名称id
   * @format int64
   */
  activityPlayTicketingFilesNameId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * 当前状态0未开始1已结束2库存不足3截止
   * @format int32
   */
  fileStatus?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /**
   * 已预约
   * @format int32
   */
  orderNum?: number;
  /** 价格 */
  price?: number;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
  /**
   * 已订阅
   * @format int32
   */
  subscribeNum?: number;
  /**
   * 已核销
   * @format int32
   */
  writeOffNum?: number;
}

/**
 * 票务活动退款规则 请求响应对象
 */
export interface ResActivityPlayTicketingRefundRuleDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 具体退款金额
   * @format int64
   */
  refundAmount?: number;
  /**
   * 退款规则0按原价百分比1按金额退
   * @format int32
   */
  refundAmountType?: number;
  /**
   * 退票活动开始前X天
   * @format int32
   */
  refundDay?: number;
  /**
   * 退票结束时间
   * @format date-time
   */
  refundEndTime?: string;
  /**
   * 退款比例%
   * @format int32
   */
  refundProportion?: number;
  /**
   * 退票开始时间
   * @format date-time
   */
  refundStartTime?: string;
  /** 是否满足当前时间退票 */
  refundStatus?: boolean;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
}

/**
 * 常用联系人 请求响应对象
 */
export interface ResFrequentContactsDto {
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证2港澳居民来往内地通行证3台湾居民来往大陆通行证4外国人永久居留身份证5护照
   * @format int32
   */
  certificateType?: number;
  /**
   * 时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
}

/**
 * 邀请码 请求响应对象
 */
export interface ResInvitationCodeDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEnd?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  codeStatus?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 邀请码 */
  invitationCode?: string;
  /**
   * 数量
   * @format int32
   */
  num?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /** 票务预约记录 请求响应对象 */
  resOrdersDto?: ResOrdersDto;
  /** 创建批次 */
  taskId?: string;
}

/**
 * 预约单常用人关联表 请求响应对象
 */
export interface ResOrderFrequentContactsDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /** 活动名称 */
  activityName?: string;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证2港澳居民来往内地通行证3台湾居民来往大陆通行证4外国人永久居留身份证5护照
   * @format int32
   */
  certificateType?: number;
  /** 票档名称 */
  filesName?: string;
  /**
   * 常用联系人id
   * @format int64
   */
  frequentContactsId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 备注 */
  mark?: string;
  /** 手机号 */
  mobile?: string;
  /** 提示 */
  msg?: string;
  /** 姓名 */
  name?: string;
  /**
   * 预约id
   * @format int64
   */
  orderId?: number;
  /** 预约编号 */
  orderNo?: string;
  /** 票务预约记录 请求响应对象 */
  ordersDto?: ResOrdersDto;
  /** 核销码 */
  qrCode?: string;
  /** 核销结果 */
  result?: boolean;
  /**
   * 核销人id
   * @format int64
   */
  writeOffId?: number;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消
   * @format int32
   */
  writeOffStatus?: number;
  /**
   * 核销时间
   * @format date-time
   */
  writeOffTime?: string;
  /**
   * 核销端0后台1小程序
   * @format int32
   */
  writeOffType?: number;
}

/**
 * 票务预约记录 请求响应对象
 */
export interface ResOrdersDto {
  /**
   * 活动票务id
   * @format int64
   */
  activityConfigId?: number;
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /**
   * 取消时间
   * @format date-time
   */
  cancelTime?: string;
  /** 证件号 */
  cardNo?: string;
  /**
   * 证件类型0身份证1港澳台身份证2港澳居民来往内地通行证3台湾居民来往大陆通行证4外国人永久居留身份证5护照
   * @format int32
   */
  certificateType?: number;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 关联人集合 */
  contactsDtos?: ResOrderFrequentContactsDto[];
  /** 国家名 */
  countryName?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /**
   * 爽约次数
   * @format int32
   */
  failToKeepAnAppointmentNum?: number;
  /**
   * 票档id
   * @format int64
   */
  filesId?: number;
  /** 票档名称 */
  filesName?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 姓名 */
  name?: string;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消
   * @format int32
   */
  orderStatus?: number;
  /** 支付金额 */
  payAmount?: number;
  /**
   * 预约成功时间
   * @format date-time
   */
  payTime?: string;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 数量
   * @format int32
   */
  quantity?: number;
  /** 是否可取消订单 */
  refundStatus?: boolean;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /** 单价 */
  unitPrice?: number;
}

/**
 * 票务预约记录统计 请求响应对象
 */
export interface ResOrdersstatisticsDto {
  /**
   * 总参与人数
   * @format int64
   */
  allNum?: number;
  /**
   * 我的核销
   * @format int64
   */
  myWriteOffNum?: number;
  /**
   * 待核销数量
   * @format int64
   */
  noWriteOffNum?: number;
  /**
   * 已预约
   * @format int32
   */
  orderNum?: number;
  /**
   * 已订阅
   * @format int64
   */
  subscribeNum?: number;
  /**
   * 已核销
   * @format int64
   */
  writeOffNum?: number;
}

/**
 * 玩法 请求响应对象
 */
export interface ResPlayTicketingDto {
  /** 创建人 */
  createUser?: string;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 抽奖结束时间
   * @format date-time
   */
  lotteryEnd?: string;
  /**
   * 抽奖开始时间
   * @format date-time
   */
  lotteryStart?: string;
  /**
   * 中奖类型0一个用户每个奖品只能中奖一次1一个用户只能中奖一次2不限制中奖次数
   * @format int32
   */
  lotteryType?: number;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /** 玩法名称 */
  name?: string;
  /** 票档名称信息 */
  nameDtos?: ResTicketingFilesNameDto[];
  /** 售后信息 */
  refundRuleDtos?: ResTicketingRefundRuleDto[];
  /**
   * 0禁用1启用
   * @format int32
   */
  status?: number;
  /** 票务配置 请求响应对象 */
  ticketingConfigDto?: ResTicketingConfigDto;
  /**
   * 类型 0开盲盒  1票务 2投票
   * @format int32
   */
  type?: number;
}

/**
 * 票务配置 请求响应对象
 */
export interface ResTicketingConfigDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 收货地址
   * @format int32
   */
  addressStatus?: number;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /** 区域名 */
  areaName?: string;
  /** 取消规则文案 */
  cancelRich?: string;
  /** 群聊图片 */
  chatImg?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /** 城市名 */
  cityName?: string;
  /** 承诺函 */
  commitmentLetterRich?: string;
  /** 国家名 */
  countryName?: string;
  /**
   * 活动开始前X天停止报名
   * @format int32
   */
  deadlineDay?: number;
  /**
   * 截止时间
   * @format date-time
   */
  deadlineTime?: string;
  /** 电子码页活动提示 */
  electronicCodeRich?: string;
  /** 主图 */
  hostImg?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 手机号
   * @format int32
   */
  mobieStatus?: number;
  /**
   * 最大人数限制
   * @format int32
   */
  peopleNum?: number;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /** 省份名 */
  provinceName?: string;
  /**
   * 实名制
   * @format int32
   */
  realNameStatus?: number;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 报名截止类型0固定时间1活动开始前X天停止报名
   * @format int32
   */
  registrationDeadlineType?: number;
  /** 详细地址 */
  singleAddress?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
}

/**
 * 票务挡位 请求响应对象
 */
export interface ResTicketingFilesDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /**
   * 票档名称id
   * @format int64
   */
  nameId?: number;
  /** 价格 */
  price?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

/**
 * 票务退款规则 请求响应对象
 */
export interface ResTicketingRefundRuleDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 具体退款金额
   * @format int64
   */
  refundAmount?: number;
  /**
   * 退款规则0按原价百分比1按金额退
   * @format int32
   */
  refundAmountType?: number;
  /**
   * 退票活动开始前X天
   * @format int32
   */
  refundDay?: number;
  /**
   * 退票结束时间
   * @format date-time
   */
  refundEndTime?: string;
  /**
   * 退款比例%
   * @format int32
   */
  refundProportion?: number;
  /**
   * 退票开始时间
   * @format date-time
   */
  refundStartTime?: string;
  /**
   * 退票时间类型0时间范围1活动开始前X天
   * @format int32
   */
  refundType?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

/**
 * 票务核销人员关联表 请求响应对象
 */
export interface ResWriteOffDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 用户手机号 */
  mobile?: string;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
}

export interface JsonResultListResFrequentContactsDto {
  /** @format int32 */
  code?: number;
  data?: ResFrequentContactsDto[];
  msg?: string;
}

export interface JsonResultListResActivityPlayTicketingRefundRuleDto {
  /** @format int32 */
  code?: number;
  data?: ResActivityPlayTicketingRefundRuleDto[];
  msg?: string;
}

export interface JsonResultPagedScrollResultResOrdersDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResOrdersDto;
  msg?: string;
}

export interface JsonResultResOrderFrequentContactsDto {
  /** @format int32 */
  code?: number;
  /** 预约单常用人关联表 请求响应对象 */
  data?: ResOrderFrequentContactsDto;
  msg?: string;
}

export interface PagedScrollResultResOrdersDto {
  isLastPage?: boolean;
  list?: ResOrdersDto[];
  /** @format int64 */
  nextToken?: number;
}

/**
 * 核销码 请求添加对象
 */
export interface ReqWriteOffCodeDto {
  /** 邀请码 */
  admissionNo?: string;
}

/**
 * 校验邀请码 请求添加对象
 */
export interface ReqVerifyInvitationCodeDto {
  /** 邀请码 */
  invitationCode?: string;
}

export interface JsonResultInt {
  /** @format int32 */
  code?: number;
  /** @format int32 */
  data?: number;
  msg?: string;
}

/**
 * 活动票档 请求修改对象
 */
export interface ReqActivityPlayTicketingFilesUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动票务票档名称id
   * @format int64
   */
  activityPlayTicketingFilesNameId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * 入场结束时间
   * @format date-time
   */
  admissionEndTime?: string;
  /**
   * 入场开始时间
   * @format date-time
   */
  admissionStartTime?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /** 价格 */
  price?: number;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  /**
   * 库存
   * @format int32
   */
  stock?: number;
}

export interface JsonResultPagedScrollResultResOrderFrequentContactsDto {
  /** @format int32 */
  code?: number;
  data?: PagedScrollResultResOrderFrequentContactsDto;
  msg?: string;
}

export interface PagedScrollResultResOrderFrequentContactsDto {
  isLastPage?: boolean;
  list?: ResOrderFrequentContactsDto[];
  /** @format int64 */
  nextToken?: number;
}

export interface JsonResultListResContentsDto {
  /** @format int32 */
  code?: number;
  data?: ResContentsDto[];
  msg?: string;
}

/**
 * 内容管理 请求响应对象
 */
export interface ResContentsDto {
  /** 内容 */
  content?: string;
  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 标题 */
  title?: string;
}

export interface JsonResultPagedResultResContentsDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResContentsDto;
  msg?: string;
}

export interface JsonResultResContentsDto {
  /** @format int32 */
  code?: number;
  /** 内容管理 请求响应对象 */
  data?: ResContentsDto;
  msg?: string;
}

export interface PagedResultResContentsDto {
  list?: ResContentsDto[];
  /** @format int64 */
  total?: number;
}

/**
 * 内容管理 请求添加对象
 */
export interface ReqContentsAddDto {
  /** 内容 */
  content?: string;
  /** 标题 */
  title?: string;
}

/**
 * 内容管理 请求修改对象
 */
export interface ReqContentsUpdateDto {
  /** 内容 */
  content?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 标题 */
  title?: string;
}

/**
 * 活动玩法票务票档名称 请求修改对象
 */
export interface ReqActivityPlayTicketingFilesNameUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 票档信息 */
  activityPlayTicketingFilesAddDtos?: ReqActivityPlayTicketingFilesUpdateDto[];
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /** 名称 */
  name?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/**
 * 票档名称 请求修改对象
 */
export interface ReqTicketingFilesNameUpdateDto {
  /** 票档信息 */
  filesUpdateDtos?: ReqTicketingFilesUpdateDto[];
  /** 票档名称 */
  name?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

/**
 * 活动玩法票务票档名称 请求响应对象
 */
export interface ResActivityPlayTicketingFilesNameDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 票档信息 */
  activityPlayTicketingFilesDtos?: ResActivityPlayTicketingFilesDto[];
  /**
   * 票务id
   * @format int64
   */
  activityTicketingId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string;
  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

/**
 * 票档名称 请求响应对象
 */
export interface ResTicketingFilesNameDto {
  /** 票档信息 */
  filesDtos?: ResTicketingFilesDto[];
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /**
   * 排序值
   * @format int32
   */
  sort?: number;
  /**
   * 票务id
   * @format int64
   */
  ticketingId?: number;
}

export interface JsonResultListResVotesRecordStatisticsDto {
  /** @format int32 */
  code?: number;
  data?: ResVotesRecordStatisticsDto[];
  msg?: string;
}

export interface JsonResultPagedResultResActivityPlayVotesDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityPlayVotesDto;
  msg?: string;
}

export interface JsonResultPagedResultResActivityPlayVotesTurmDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResActivityPlayVotesTurmDto;
  msg?: string;
}

export interface JsonResultPagedResultResVotesDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResVotesDto;
  msg?: string;
}

export interface JsonResultPagedResultResVotesRecordDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultResVotesRecordDto;
  msg?: string;
}

export interface JsonResultResActivityPlayVotesDto {
  /** @format int32 */
  code?: number;
  /** 活动玩法投票规则 请求响应对象 */
  data?: ResActivityPlayVotesDto;
  msg?: string;
}

export interface JsonResultResActivityPlayVotesTurmDto {
  /** @format int32 */
  code?: number;
  /** 投票轮次 请求响应对象 */
  data?: ResActivityPlayVotesTurmDto;
  msg?: string;
}

export interface JsonResultResVotesDto {
  /** @format int32 */
  code?: number;
  /** 投票规则 请求响应对象 */
  data?: ResVotesDto;
  msg?: string;
}

export interface JsonResultResVotesRecordDto {
  /** @format int32 */
  code?: number;
  /** 投票记录 请求响应对象 */
  data?: ResVotesRecordDto;
  msg?: string;
}

export interface PagedResultResActivityPlayVotesDto {
  list?: ResActivityPlayVotesDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResActivityPlayVotesTurmDto {
  list?: ResActivityPlayVotesTurmDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResVotesDto {
  list?: ResVotesDto[];
  /** @format int64 */
  total?: number;
}

export interface PagedResultResVotesRecordDto {
  list?: ResVotesRecordDto[];
  /** @format int64 */
  total?: number;
}

/**
 * 活动玩法投票规则 请求添加对象
 */
export interface ReqActivityPlayVotesAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 大屏展示百分比0不展示1展示
   * @format int32
   */
  largeScreenStatus?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
  /**
   * 状态-1未开启定位0无1开始投票2投票结束3公布获胜队伍4开始抽奖5领取奖品
   * @format int32
   */
  votesStatus?: number;
  /**
   * 胜利队伍1队伍1 2队伍2
   * @format int32
   */
  winTeamType?: number;
}

/**
 * 投票轮次 请求添加对象
 */
export interface ReqActivityPlayVotesTurmAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动规则投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * 序号
   * @format int32
   */
  sort?: number;
  /**
   * 状态0未开启1开启2暂停3截止
   * @format int32
   */
  turmStatus?: number;
}

/**
 * 投票轮次 请求修改对象
 */
export interface ReqActivityPlayVotesTurmUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动规则投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * 序号
   * @format int32
   */
  sort?: number;
  /**
   * 状态0未开启1开启2暂停3截止
   * @format int32
   */
  turmStatus?: number;
}

/**
 * 活动玩法投票规则 请求修改对象
 */
export interface ReqActivityPlayVotesUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /**
   * 大屏展示百分比0不展示1展示
   * @format int32
   */
  largeScreenStatus?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
  /**
   * 状态-1未开启定位0无1开始投票2投票结束3公布获胜队伍4开始抽奖5领取奖品
   * @format int32
   */
  votesStatus?: number;
  /**
   * 胜利队伍1队伍1 2队伍2
   * @format int32
   */
  winTeamType?: number;
}

/**
 * 投票玩法 请求添加对象
 */
export interface ReqPlayVotesAddDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 玩法名称 */
  name?: string;
  /** 中奖商品 */
  playGoodsUpdateDtos?: ReqPlayGoodsUpdateDto[];
  /** 投票规则 请求修改对象 */
  votesUpdateDto?: ReqVotesUpdateDto;
}

/**
 * 投票规则 请求添加对象
 */
export interface ReqVotesAddDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
}

/**
 * 投票记录 请求添加对象
 */
export interface ReqVotesRecordAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /**
   * 轮次
   * @format int32
   */
  sort?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 投票方 */
  teamName?: string;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}

/**
 * 投票记录 请求修改对象
 */
export interface ReqVotesRecordUpdateDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /**
   * 轮次
   * @format int32
   */
  sort?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 投票方 */
  teamName?: string;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}

/**
 * 投票规则 请求修改对象
 */
export interface ReqVotesUpdateDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
}

/**
 * 活动玩法投票规则 请求响应对象
 */
export interface ResActivityPlayVotesDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /** 商品封面图 */
  goodsImg?: string;
  /** 商品名称 */
  goodsName?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 大屏展示百分比0不展示1展示
   * @format int32
   */
  largeScreenStatus?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 中奖记录id
   * @format int64
   */
  lotteryId?: number;
  /** 是否中奖 */
  lotteryStatus?: boolean;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 用户已投票数
   * @format int32
   */
  memberVoteNum?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 是否已领奖 */
  receiveStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /** 轮次集合 */
  turmDtos?: ResActivityPlayVotesTurmDto[];
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
  /**
   * 最后一次投票队伍1第一队2第二队
   * @format int32
   */
  voteTeamType?: number;
  /**
   * 状态-1未开启定位0无1开始投票2投票结束3公布获胜队伍4开始抽奖5领取奖品
   * @format int32
   */
  votesStatus?: number;
  /**
   * 胜利队伍1队伍1 2队伍2
   * @format int32
   */
  winTeamType?: number;
}

/**
 * 投票轮次 请求响应对象
 */
export interface ResActivityPlayVotesTurmDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动规则投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 序号
   * @format int32
   */
  sort?: number;
  /** 队伍1名称 */
  teamOneName?: string;
  /**
   * 队伍1票数
   * @format int32
   */
  teamOneNum?: number;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 队伍2票数
   * @format int32
   */
  teamTwoNum?: number;
  /**
   * 状态0未开启1开启2暂停3截止
   * @format int32
   */
  turmStatus?: number;
}

/**
 * 投票规则 请求响应对象
 */
export interface ResVotesDto {
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动开始时间
   * @format date-time
   */
  activityStartTime?: string;
  /**
   * 活动结束后30个工作日包邮寄出
   * @format int32
   */
  awardType?: number;
  /** 自定义页面 */
  customPage?: string;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 参与门槛:0无限制1全部会员
   * @format int32
   */
  memberType?: number;
  /**
   * 每个用户中奖次数
   * @format int32
   */
  memberWinningNum?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 抽奖队伍0失败1胜利
   * @format int32
   */
  prizeTeam?: number;
  /** 半径 */
  radius?: number;
  /** 距离校验 */
  radiusStatus?: boolean;
  /** 活动规则 */
  ruleText?: string;
  /** 活动规则标题 */
  ruleTitle?: string;
  /**
   * 消息订阅状态0未打开1打开
   * @format int32
   */
  subscriptionStatus?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 队伍1图片 */
  teamOneImg?: string;
  /** 队伍1名称 */
  teamOneName?: string;
  /** 队伍2图片 */
  teamTwoImg?: string;
  /** 队伍2名称 */
  teamTwoName?: string;
  /**
   * 轮次
   * @format int32
   */
  turmNum?: number;
  /**
   * 是否需要上传截图
   * @format int32
   */
  uploadStatus?: number;
  /**
   * 投票次数
   * @format int32
   */
  voteNum?: number;
}

/**
 * 投票记录 请求响应对象
 */
export interface ResVotesRecordDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * id
   * @format int64
   */
  id?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /**
   * 轮次
   * @format int32
   */
  sort?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 投票方 */
  teamName?: string;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}

/**
 * 投票记录统计 请求响应对象
 */
export interface ResVotesRecordStatisticsDto {
  /** 名称 */
  name?: string;
  /**
   * 票数
   * @format int32
   */
  num?: number;
  /** 占比 */
  proportion?: number;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}

/**
 * 投票轮次状态修改 请求修改对象
 */
export interface ReqActivityPlayVotesTurmUpdateStatusDto {
  /**
   * id
   * @format int64
   */
  id?: number;
  /**
   * 状态0未开启1开启2暂停3截止
   * @format int32
   */
  turmStatus?: number;
  /**
   * 活动投票id
   * @format int64
   */
  votesId?: number;
}

export interface JsonResultListMemberDto {
  /** @format int32 */
  code?: number;
  data?: MemberDto[];
  msg?: string;
}

/**
 * 揭晓胜利队伍 请求修改对象
 */
export interface ReqActivityPlayVotesWinDto {
  /**
   * id
   * @format int64
   */
  id?: number;
}

/**
 * 用户地址授权 请求添加对象
 */
export interface ReqMemberAddressAuthorizeAddDto {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
}

export interface ApiQrCodeGetPreviewPostParams {
  /**
   * key
   * @example "key"
   */
  key?: string;
}

export interface ApiShareGetParams {
  /**
   * share
   * @example ""
   */
  share?: string;
}

export interface ApiSysV1ActivityGetParams {
  /**
   * 活动开始时间
   * @format date-time
   */
  activityBeginTime?: string;
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 活动名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityGetAllGetParams {
  /**
   * 活动开始时间
   * @format date-time
   */
  activityBeginTime?: string;
  /**
   * 活动结束时间
   * @format date-time
   */
  activityEndTime?: string;
  /**
   * 活动状态0待配置1待上线2未开始3进行中4已结束5已取消
   * @format int32
   */
  activityStatus?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 活动名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityPlayListGetParams {
  /**
   * 活动id
   * @format int64
   */
  acitvityId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 玩法ids */
  playIds?: number[];
}

export interface ApiSysV1ActivityPlayQueryFileGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 票档名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityPlayGoodsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityPlayTaskGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityPlayVotesGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1ActivityPlayVotesTurmGetParams {
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 状态0未开启1开启2暂停3截止
   * @format int32
   */
  turmStatus?: number;
  /**
   * 投票id
   * @format int64
   */
  votesId?: number;
}

export interface ApiSysV1ActivityPlayVotesTurmListGetParams {
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
}

export interface ApiSysV1AddressGetListGetParams {
  /**
   * memberId
   * @format int64
   */
  memberId?: number;
}

export interface ApiSysV1BannerGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 显示状态 true 显示 false 不显示 */
  enable?: boolean;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 1banner2金刚区
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1ConfigQueryByKeyGetParams {
  /** key */
  key?: string;
}

export interface ApiSysV1ConfigQueryByMultipleKeyGetParams {
  /** key */
  key?: string;
}

export interface ApiSysV1ContentsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 标题 */
  title?: string;
}

export interface ApiSysV1FrequentContactsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1GoodsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 关联玩法
   * @format int64
   */
  playId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1GoodsExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 关联玩法
   * @format int64
   */
  playId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1GoodsListGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 关联玩法
   * @format int64
   */
  playId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1InvitationCodeGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  codeStatus?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 邀请口令 */
  invitationCode?: string;
  /** 订单联系人手机号 */
  mobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 创建批次 */
  taskId?: string;
}

export interface ApiSysV1InvitationCodeExportGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 状态0未使用1已使用2已过期
   * @format int32
   */
  codeStatus?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 邀请口令 */
  invitationCode?: string;
  /** 订单联系人手机号 */
  mobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 创建批次 */
  taskId?: string;
}

export interface ApiSysV1MaterialGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 分组id
   * @format int64
   */
  groupId?: number;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 类型 0 图片 1 视频
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1MaterialDeleteParams {
  /** ids */
  ids: string;
}

export interface ApiSysV1MaterialGroupTreeGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1MemberGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 详细地址 */
  address?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 是否爽约用户0否1是
   * @format int32
   */
  failStatus?: number;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 手机号 */
  mobile?: string;
  /** 用户名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** openid */
  openid?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  memberIds?: number[];
}

export interface ApiSysV1MemberExportGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 详细地址 */
  address?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 是否爽约用户0否1是
   * @format int32
   */
  failStatus?: number;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 手机号 */
  mobile?: string;
  /** 用户名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** openid */
  openid?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  memberIds?: number[];
}

export interface ApiSysV1MemberExportFailGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /** 详细地址 */
  address?: string;
  /**
   * 区域id
   * @format int32
   */
  areaId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 市id
   * @format int32
   */
  cityId?: number;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 是否爽约用户0否1是
   * @format int32
   */
  failStatus?: number;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 手机号 */
  mobile?: string;
  /** 用户名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** openid */
  openid?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 省id
   * @format int32
   */
  provinceId?: number;
  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
  memberIds?: number[];
}

export interface ApiSysV1MemberAddUserGetParams {
  /**
   * num
   * @format int32
   */
  num?: number;
}

export interface ApiSysV1MemberLotteryGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品id集合 */
  goodsIds?: number[];
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  memberMobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1MemberLotteryExportGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品id集合 */
  goodsIds?: number[];
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  memberMobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1MemberLotteryExportMemberGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品id集合 */
  goodsIds?: number[];
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  memberMobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1MemberLotterySendGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1OperationLogGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 模块 */
  module?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 操作类型 */
  operateType?: string;
  /** 用户名称 */
  operatorName?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1OrdersGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersContactsOrderGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersExportGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersExportContactsGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersExportContactsAllGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersExportContactsListGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiSysV1OrdersGetContactsByOrderIdGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1OrdersGetOrderContactsGetParams {
  /** admissionNo */
  admissionNo?: string;
}

export interface ApiSysV1OrdersStatisticsGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1PageGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 页面名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1PlayGetParams {
  /**
   * 关联主题
   * @format int64
   */
  activityId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 创建人 */
  createUser?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 类型 0开盲盒  1票务
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1PlayGetAllGetParams {
  /**
   * 关联主题
   * @format int64
   */
  activityId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 创建人 */
  createUser?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 玩法名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 类型 0开盲盒  1票务
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1PlayGoodsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 玩法id
   * @format int64
   */
  playId?: number;
}

export interface ApiSysV1PlayTaskGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1PopupAdsGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 到期时间
   * @format date-time
   */
  expirationTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 标题 */
  title?: string;
}

export interface ApiSysV1ResourceTreeGetParams {
  /** 资源名称 */
  name?: string;
  /**
   * 资源类型 0：菜单 1：按钮
   * @format int32
   */
  type?: number;
}

export interface ApiSysV1RoleGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 角色名称 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1TicketingConfigGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1TicketingConfigGetTicketingPlayIdGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1UserGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 员工名称 */
  username?: string;
}

export interface ApiSysV1UserExportGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 员工名称 */
  username?: string;
}

export interface ApiSysV1UserResetPutParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1VotesGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1VotesGetPlayIdGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiSysV1VotesRecordGetParams {
  /** 活动玩法id集合 */
  activityPlayIdList?: number[];
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1VotesRecordLotteryListGetParams {
  /**
   * activityPlayVotesId
   * @format int64
   */
  activityPlayVotesId?: number;
}

export interface ApiSysV1VotesRecordStatisticsGetParams {
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
}

export interface ApiSysV1WriteOffGetParams {
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 用户手机号 */
  mobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiSysV1WriteOffQueryAllMemberGetParams {
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 用户手机号 */
  mobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiMemberV1ActivityAddressDistanceGetParams {
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
  /** latitude */
  latitude?: string;
  /** longitude */
  longitude?: string;
}

export interface ApiMemberV1ActivityGetActivityListGetParams {
  /** keyWords */
  keyWords?: string;
}

export interface ApiMemberV1ActivityGetLotteryListGetParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 中奖商品id
   * @format int64
   */
  goodsId?: number;
  /** 中奖商品id集合 */
  goodsIds?: number[];
  /** 中奖商品名称 */
  goodsName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 奖品等级 */
  levelName?: string;
  /** 中奖状态0未中奖1中奖 */
  lotteryState?: boolean;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 手机号 */
  memberMobile?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 昵称 */
  nickName?: string;
  /** 用户当前应用唯一标识 */
  openId?: string;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  playId?: number;
  /**
   * 领取状态0未领取(不可复制)1可领取(可复制)2已领取3已过期
   * @format int32
   */
  receiveState?: number;
  /**
   * 奖品类型0优惠券1实物
   * @format int32
   */
  type?: number;
}

export interface ApiMemberV1ActivityGetNowLotteryGetParams {
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
}

export interface ApiMemberV1ActivityGetRewardListGetParams {
  /**
   * activityId
   * @format int64
   */
  activityId?: number;
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
  /** assistState */
  assistState?: boolean;
}

export interface ApiMemberV1ActivityPlayTicketingRefundRuleGetRuleGetParams {
  /**
   * fileId
   * @format int64
   */
  fileId?: number;
}

export interface ApiMemberV1AddressGetByIdGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1AssistGetAssistListGetParams {
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动玩法任务id
   * @format int64
   */
  activityPlayTaskId?: number;
  /** 助力结果0失败1成功 */
  assistState?: boolean;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
}

export interface ApiMemberV1ConfigGetByKeyGetParams {
  /** key */
  key?: string;
}

export interface ApiMemberV1ConfigGetByMultipleKeyGetParams {
  /** key */
  key?: string;
}

export interface ApiMemberV1ContentsListGetParams {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /** 标题 */
  title?: string;
}

export interface ApiMemberV1FrequentContactsDeleteParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1FrequentContactsGetByIdGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1MemberExistMobileGetParams {
  /** mobile */
  mobile: string;
}

export interface ApiMemberV1MemberSaveUserInfoPutParams {
  /** 用户头像 */
  avatarUrl?: string;
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;
  /** 性别 1男 2女 0未知 */
  gender?: string;
  /** 用户昵称 */
  nickName?: string;
}

export interface ApiMemberV1MemberAddressAuthorizeAddPostParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
}

export interface ApiMemberV1MemberLotteryGetLotteryMemberGetParams {
  /**
   * activityPlayId
   * @format int64
   */
  activityPlayId?: number;
}

export interface ApiMemberV1OrdersGetParams {
  /** 活动名称 */
  activityName?: string;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /** 活动玩法名称 */
  activityPlayName?: string;
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /** 常用联系人手机号 */
  contactsMobile?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /** 票档名称 */
  filesName?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 预约id集合 */
  ids?: string;
  /** 邀请口令 */
  invitationCode?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /** 订单联系人手机号 */
  mobile?: string;
  /** 参与人姓名 */
  name?: string;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /** 用户昵称 */
  nickName?: string;
  /** 用户openid */
  openid?: string;
  /** 预约编号 */
  orderNo?: string;
  /**
   * 状态0待支付1已支付2已核销3已失效4已取消5已失效+已取消
   * @format int32
   */
  orderStatus?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 预约类型0线上预约1内部邀请
   * @format int32
   */
  type?: number;
  /**
   * 核销开始时间
   * @format date-time
   */
  writeOffBeginTime?: string;
  /**
   * 核销结束时间
   * @format date-time
   */
  writeOffEndTime?: string;
  /** 核销人姓名 */
  writeOffName?: string;
  /**
   * 状态0未使用1已使用2已过期3已取消4已过期+已取消
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiMemberV1OrdersDetailGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1OrdersGetOrderContactsGetParams {
  /** admissionNo */
  admissionNo?: string;
}

export interface ApiMemberV1OrdersOrderContactsDetailGetParams {
  /** admissionNo */
  admissionNo?: string;
}

export interface ApiMemberV1OrdersPageContactsGetParams {
  /** 入场编号 */
  admissionNo?: string;
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;
  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;
  /**
   * 票档id
   * @format int64
   */
  fileId?: number;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /**
   * nextToken
   * @format int64
   */
  nextToken?: number;
  /**
   * 当前页码
   * @format int32
   */
  pageNum?: number;
  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;
  /**
   * 状态0未核销1已核销2已过期3已取消4我核销的
   * @format int32
   */
  writeOffStatus?: number;
}

export interface ApiMemberV1OrdersStatisticsGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1RichtextGetParams {
  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface ApiMemberV1SmsSendCodeGetParams {
  /** 手机号 */
  mobile?: string;
  /** 场景值 CURRENT_MOBILE_CHECK:现手机号验证。WECHAT_MOBILE_CHANGE：用户修改手机号 */
  scene?: string;
}

export interface ApiMemberV1SmsVerificationCodeGetParams {
  /** 手机号 */
  mobile?: string;
  /** 场景值 CURRENT_MOBILE_CHECK:现手机号验证。WECHAT_MOBILE_CHANGE：用户修改手机号 */
  scene?: string;
  /** code */
  code?: string;
}

export interface ApiMemberV1VotesRecordAddPostParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /**
   * 轮次
   * @format int32
   */
  sort?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 投票方 */
  teamName?: string;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}

export interface ApiMemberV1VotesRecordUpdatePostParams {
  /**
   * 活动id
   * @format int64
   */
  activityId?: number;
  /**
   * 活动玩法id
   * @format int64
   */
  activityPlayId?: number;
  /**
   * 活动投票id
   * @format int64
   */
  activityPlayVotesId?: number;
  /** 纬度 */
  latitude?: string;
  /** 经度 */
  longitude?: string;
  /**
   * 用户id
   * @format int64
   */
  memberId?: number;
  /**
   * 推送状态0未推送1已推送
   * @format int32
   */
  pushStatus?: number;
  /**
   * 活动开始提醒订阅状态0未订阅1已订阅
   * @format int32
   */
  remindStatus?: number;
  /**
   * 轮次
   * @format int32
   */
  sort?: number;
  /** 温馨提示 */
  subscriptionText?: string;
  /** 投票方 */
  teamName?: string;
  /**
   * 队伍1  2
   * @format int32
   */
  teamType?: number;
}
