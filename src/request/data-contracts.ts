export interface OpenTokenReqDTO {
  /** 客户标识码 由后台分配告知客户 */
  appId?: string;

  /** 加密信息 */
  sign?: string;
}

export interface OpenServerRoomInfo {
  /** 机房地址 */
  address: string;

  /** 机房联系人 */
  contactPersonName?: string;

  /** 机房联系方式 */
  contactPersonPhone?: string;

  /** 机房名称 */
  dataCenterName?: string;

  /** 机房管理单元 */
  dataCenterUnit?: string;
}

export interface OpenOrderReqDTO {
  /** 请求来源 标识三方客户 */
  source?: string;

  /** 外部订单号 */
  outOrderNo: string;

  /** 请求行为 PRE_DISPATCH:预派单,DISPATCH:派单,CANCEL:撤单(预约前),ROLLBACK:回退(预约前),UPDATE:修改 */
  action: 'CANCEL' | 'DISPATCH' | 'PRE_DISPATCH' | 'ROLLBACK' | 'UPDATE';

  /** 幂等键(请求排重) */
  unqKey: string;

  /** 工单类型 UP:上架工单 */
  type: 'SURVEY' | 'UP';

  /** 处理方案 */
  solution?: string;

  /** sla */
  sla?: string;

  /**
   * 期望上门时间 yyyy-MM-dd
   * @format date-time
   */
  gmtExpect?: string;
  customerInfo?: OpenCustomerInfo;

  /** 设备信息 */
  deviceInfoList?: OpenDeviceInfo[];
  serverRoomInfo?: OpenServerRoomInfo;
}

export interface OpenDeviceInfo {
  /** 设备整机编码 */
  deviceCode?: string;

  /** 设备型号 */
  deviceModel?: string;

  /** 设备名称 */
  deviceName?: string;

  /** SN码 */
  deviceSnCode: string;
}

export interface OpenCustomerInfo {
  /** 客户联系人 */
  contactPerson?: string;

  /** 客户联系方式 */
  contactPersonPhone?: string;

  /** 客户名称 */
  customerName: string;
}

export interface OpenApiSecurityVo {
  /** 客户标识码 */
  appId?: string;

  /** 加解密钥 */
  appSecret?: string;

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

  /** 请求方名称 */
  source?: string;
}

export interface OpenApiSecurityUpdateDto {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /**
   * 结束时间
   * @format date-time
   */
  endTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

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

  /** 请求方名称 */
  source?: string;
}

export interface OpenApiSecurityAddDto {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

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
   * 当前页码
   * @format int32
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @format int32
   */
  pageSize?: number;

  /** 请求方名称 */
  source?: string;
}

export interface MaintainInfo {
  ActualRepairTime?: string;
  CertificateUpload?: string;
  ChangeReason?: string;
  CompletionPlan?: string;
  CustomerChangedTime?: string;
  EngineerArriveTime?: string;
  IsOfflineApplyFax?: string;
  PromiseOnsiteTime?: string;
  Remarks?: string;
  RepairEndTime?: string;
}

export interface HQOrderInfoReqDTO {
  CaseId?: string;
  VendorTaskId?: string;
}

export interface HQOrderInfoCallback {
  CaseId?: string;
  CaseStatus?: string;
  Engineers?: Engineer[];
  ExpectShelfTime?: string;
  MaintainInfo?: MaintainInfo;
  Timestamp?: string;
  VendorTaskId?: string;
}

export interface Engineer {
  EngineerIDNo?: string;
  EngineerName?: string;
  EngineerPhone?: string;
}

export interface WybOrderContentResDTO {
  /** @format int64 */
  customerId?: number;

  /** @format int64 */
  serverRoomId?: number;
  snCodes?: DeviceSnInfo[];
}

export interface HQOrderContentReqDto {
  customerInfo?: HQCustomerInfoReqDTO;
  eventParts?: HQEventPartReqDTO[];
  expectTime?: string;
  generateTime?: string;
  handlerPlan?: string;
  scene?: string;
  serveType?: string;
  serverInfo?: HQServerInfoReqDTO;
  shelfList?: HQShelfReqDTO[];
  sla?: string;
  status?: string;
  vendorTaskId?: string;
}

export interface HqOrderReqDTO {
  Action?: string;
  Content?: HQOrderContentReqDTO;
}

export interface HQShelfReqDTO {
  CustomerPo?: string;
  DeliveryAdress?: string;
  ErpPo?: string;
  ServerSN?: string;
  WoDesc?: string;
}

export interface HQServerInfoReqDTO {
  AssetId?: string;
  DeviceClassName?: string;
  DeviceDescription?: string;
  IdcName?: string;
  PosCode?: string;
  RackName?: string;
  ServerModel?: string;
  ServerSN?: string;
  SvrShelfTime?: string;
  SvrVersion?: string;
}

export interface HQOrderContentReqDTO {
  EventParts?: HQEventPartReqDTO[];
  ExpectTime?: string;
  GenerateTime?: string;
  HandlerPlan?: string;
  OpenCustomerInfo?: HQCustomerInfoReqDTO;
  SLA?: string;
  Scene?: string;
  ServeType?: string;
  ServerInfo?: HQServerInfoReqDTO;
  ShelfList?: HQShelfReqDTO[];
  Status?: string;
  VendorTaskId?: string;
}

export interface HQEventPartReqDTO {
  AssistDiagnoseInfo?: string;
  EventDesc?: string;
  EventSource?: string;
  EventType?: string;
  ExpectTime?: string;
  Level?: string;
  LogisticsCode?: string;
  OrderNo?: string;
  PN?: string;
  PartInputTime?: string;
  PartType?: string;
  RmaCode?: string;
  SN?: string;
  ServerSN?: string;
  Slot?: string;
}

export interface HQCustomerInfoReqDTO {
  Contacts?: string;
  CustomerName?: string;
  IdcAddress?: string;
  LinkMan?: string;
  LinkPhone?: string;
}

export interface SurveyWorkOrderAuditDto {
  /** 工勘内容 */
  content?: string;

  /**
   * 工单id
   * @format int64
   */
  id?: number;

  /** 照片凭证 */
  proofImg?: string;

  /** 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭 */
  state?: 'BACK' | 'CLOSED' | 'COMPLETED' | 'INIT' | 'WAIT_UPDATE';
}

export interface UpWorkOrderAppointmentHistoryListVo {
  /** 改约原因 */
  changeReason?: string;

  /**
   * 预约上门时间
   * @format date-time
   */
  gmtAppointment?: string;

  /**
   * 提交时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 工单id
   * @format int64
   */
  orderId?: number;

  /** 指定三方工程师名(中文) */
  thirdWorkerNameZh?: string;
}

export interface UpWorkOrderAppointmentChangeDto {
  /** 改约原因 */
  changeReason?: string;

  /**
   * 预约上架时间
   * @format date-time
   */
  gmtAppointment?: string;

  /**
   * 工单id
   * @format int64
   */
  id?: number;
}

export interface QueryMessagesRes {
  /**
   * Id
   * @format int64
   */
  id?: number;

  /**
   * 已读未读 0:未读 1:已读
   * @format int32
   */
  isRead?: number;

  /** 消息描述 */
  messageDescription?: string;

  /**
   * 消息类型: 1=上架工单, 2=人员盘点, 3=备件盘点, 4=工勘工单
   * @format int32
   */
  messageType?: number;

  /** 订单编码 */
  orderCode?: string;

  /**
   * 用户ID
   * @format int64
   */
  userId?: number;

  /**
   * 生成时间
   * @format date-time
   */
  viewTime?: string;
}

export interface EmployeeResetPasswordDTO {
  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /** 新密码 */
  newPassword?: string;
}

export interface ReqJpushDTO {
  /** 具体内容 */
  alter?: string;

  /** extras 业务参数传递 */
  extras?: Record<string, string>;

  /**
   * 设备标识，客户端集成 SDK 后可获取到该值。
   *      * 推送唯一ID  用户表中保存字段-registration_id
   *      * 如果当前字段为空默认 推送ALL
   */
  registrationId?: string;

  /** 标题,例如：推送标题  XXX点赞通知 */
  title?: string;

  /** 调整路径 */
  urlPath?: string;
}

export interface UpdateServerRoomStatusReq {
  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;
}

export interface UpdateEmployeeRoleStatusReq {
  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;
}

export interface UpWorkOrderAddDto {
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;

  /** 客户系统订单号 */
  customerOrderNo?: string;

  /** 上架服务器id列表 */
  deviceSnIds?: number[];

  /**
   * 期望上门时间
   * @format date-time
   */
  gmtExpect?: string;

  /**
   * 机房id
   * @format int64
   */
  roomId?: number;

  /** 处理方案 */
  solution?: string;

  /** 派单来源 */
  source?: string;
}

export interface UpWorkOrderDetailVo {
  auditInfo?: UpWorkOrderAuditHistoryInfoVo;
  customerInfo?: CustomerInfoVo;
  serverRoomInfo?: ServerRoomInfoVo;
  surveyWorkOrderInfo?: SurveyWorkOrderInfoVo;
  upWorkOrderInfo?: UpWorkOrderInfoVo;
}

export interface UpWorkRelVo {
  /**
   * 工单ID
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;
}

/**
 * 个人信息编辑请求DTO
 */
export interface EmployeeBaseInfoEditDTO {
  /** 姓名英文 */
  employeeNameEn?: string;

  /** 姓名中文 */
  employeeNameZh?: string;

  /**
   * 性别
   * @format int32
   */
  gender?: number;

  /** 头像 */
  headImg?: string;

  /** @format int64 */
  id?: number;
}

export interface DeviceSnInfoImportDTO {
  deviceSnIds?: string[];

  /** @format int64 */
  roomId?: number;
}

export interface WebEmployeeInfoVO {
  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /** 用户头像 */
  headImg?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface LoginResponseVo {
  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /** 头像 */
  headImg?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 登录手机号 */
  loginPhone?: string;

  /** 权限 */
  permissions?: string[];

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;

  /** token */
  token?: string;
}

export interface WebLoginDto {
  /** 用户名 */
  mobile?: string;

  /** 密码 */
  password?: string;

  /** 设备id */
  registrationId?: string;
}

export interface UserInfoVo {
  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /** 头像 */
  headImg?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface UpWorkHistoryPageVO {
  /**
   * 审核时间
   * @format date-time
   */
  gmtAudit?: string;

  /**
   * 签到时间
   * @format date-time
   */
  gmtSignIn?: string;

  /** 审核内容 */
  reviewContent?: string;

  /** 审核凭证 */
  reviewImg?: string;

  /** 签到照片 */
  signInImg?: string;

  /** 签到备注 */
  signInRemark?: string;

  /**
   * 审核状态:0-待审核,1-审核通过,2-审核不通过
   * @format int32
   */
  state?: number;
}

export interface ThirdPartyEngineerVO {
  /** 第三方工程师英文名字 */
  employeeNameEn?: string;

  /** 第三方工程师中文名字 */
  employeeNameZh?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface EmployeeInfoResetPasswordRes {
  /** 新密码 */
  password?: string;
}

export interface UpdateCustomerStatusReq {
  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;
}

export interface ProjectPageVO {
  /** 合同单号 */
  contractNumber?: string;

  /** 客户名称英文 */
  customerNameEn?: string;

  /** 客户名称中文 */
  customerNameZh?: string;

  /** 机房名称英文 */
  dataCenterNameEn?: string;

  /** 机房名称中文 */
  dataCenterNameZh?: string;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * 主键id
   * @format int64
   */
  id?: number;

  /** 人力盘点人员名英文 */
  manpowerInventoryEmployeeNameEn?: string;

  /** 人力盘点人员名中文 */
  manpowerInventoryEmployeeNameZh?: string;

  /**
   * 人力盘点状态：0 通过，1 未通过
   * @format int32
   */
  manpowerInventoryStatus?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 项目名称英文 */
  projectNameEn?: string;

  /** 项目名称中文 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /**
   * 项目单单据状态：0 待人员&备件盘点，1 未开始，2 进行中，3 已结束
   * @format int32
   */
  projectStatus?: number;

  /** 项目目标 */
  projectTargetQuantity?: string;

  /**
   * 项目类型
   * @format int32
   */
  projectType?: number;

  /**
   * 服务器设备数量
   * @format int32
   */
  serverSnEquipmentQuantity?: number;

  /** 服务结束时间 */
  serviceEndTime?: string;

  /** 服务开始时间 */
  serviceStartTime?: string;

  /**
   * 站点类型：0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /** 备件盘点人员名英文 */
  sparePartsInventoryEmployeeNameEn?: string;

  /** 备件盘点人员名中文 */
  sparePartsInventoryEmployeeNameZh?: string;

  /**
   * 备件盘点状态：0 通过，1 未通过
   * @format int32
   */
  sparePartsInventoryStatus?: number;

  /** 终端客户英文 */
  terminalCustomerEn?: string;

  /** 终端客户中文 */
  terminalCustomerZh?: string;
}

/**
 * 项目列表编辑请求DTO
 */
export interface ProjectEditInputDTO {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 客户名称对应id
   * @format int64
   */
  customerId?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 人力盘点人员对应id
   * @format int64
   */
  manpowerInventoryId?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 项目名称英文 */
  projectNameEn?: string;

  /** 项目名称中文 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /** 项目目标 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 机房ID
   * @format int32
   */
  roomId?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息 0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点人员对应id
   * @format int64
   */
  sparePartsInventoryId?: number;
}

/**
 * 项目列表编辑请求DTO
 */
export interface ProjectDetailsVO {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 客户名称对应id
   * @format int64
   */
  customerId?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 人力盘点人员对应id
   * @format int64
   */
  manpowerInventoryId?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 项目名称英文 */
  projectNameEn?: string;

  /** 项目名称中文 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /** 项目目标 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 机房ID
   * @format int32
   */
  roomId?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息 0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点人员对应id
   * @format int64
   */
  sparePartsInventoryId?: number;
}

/**
 * 项目列表新增请求DTO
 */
export interface ProjectAddInputDTO {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 客户名称对应id
   * @format int64
   */
  customerId?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * 人力盘点人员对应id
   * @format int64
   */
  manpowerInventoryId?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 项目名称英文 */
  projectNameEn?: string;

  /** 项目名称中文 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /** 项目目标 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 机房ID
   * @format int32
   */
  roomId?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息 0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点人员对应id
   * @format int64
   */
  sparePartsInventoryId?: number;
}

export interface EmployeeInfoPageVO {
  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /** 员工角色 */
  employeeRole?: string;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 员工id
   * @format int64
   */
  id?: number;

  /** 身份证 */
  idCard?: string;

  /** 登录密码 */
  loginPassword?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;

  /**
   * 账号状态 0 禁用 1 启用
   * @format int32
   */
  status?: number;
}

/**
 * 员工列表编辑请求DTO
 */
export interface EmployeeInfoEditInputDTO {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int64
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 身份证 */
  idCard?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

/**
 * 员工列表新增请求DTO
 */
export interface EmployeeInfoAddInputDTO {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int32
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /** 身份证 */
  idCard?: string;

  /** 登录密码 */
  loginPassword?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

/**
 * 员工列表编辑请求DTO
 */
export interface EmployeeDetailsVO {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int64
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 身份证 */
  idCard?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface DeviceSnInfoImportVO {
  /** 设备型号英文 */
  deviceModelEn?: string;

  /** 设备型号中文 */
  deviceModelZh?: string;

  /** 设备SN码 */
  deviceSnCode?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface UpWorkOrderAdminListVo {
  /** 机房地址(英文) */
  addressEn?: string;

  /** 机房地址(中文) */
  addressZh?: string;

  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /** 客户名称(英文) */
  customerNameEn?: string;

  /** 客户名称(中文) */
  customerNameZh?: string;

  /** 客户系统订单号 */
  customerOrderNo?: string;

  /** 机房名称(英文) */
  dataCenterNameEn?: string;

  /** 机房名称(中文) */
  dataCenterNameZh?: string;

  /**
   * 服务器数量
   * @format int32
   */
  deviceNum?: number;

  /** 执行人员英文名称 */
  employeeNameEn?: string;

  /** 执行人员中文名称 */
  employeeNameZh?: string;

  /**
   * 完成时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 处理方案 */
  solution?: string;

  /** 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭 */
  state?:
    | 'BACK'
    | 'CLOSED'
    | 'COMPLETED'
    | 'IN_APPOINTMENT'
    | 'IN_AUDIT'
    | 'IN_SIGN'
    | 'IN_SURVEY'
    | 'IN_UP'
    | 'WAIT_UPDATE';
}

export interface UpWorkOrderAdminDetailVo {
  auditInfo?: UpWorkOrderAuditHistoryInfoVo;
  customerInfo?: CustomerInfoVo;
  serverRoomInfo?: ServerRoomInfoVo;
  surveyWorkOrderInfo?: SurveyWorkOrderInfoVo;
  upWorkOrderInfo?: UpWorkOrderInfoVo;
}

export interface UpWorkOrderWebListVo {
  /** 机房地址(英文) */
  addressEn?: string;

  /** 机房地址(中文) */
  addressZh?: string;

  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /** 客户名称(英文) */
  customerNameEn?: string;

  /** 客户名称(中文) */
  customerNameZh?: string;

  /** 客户系统订单号 */
  customerOrderNo?: string;

  /** 机房名称(英文) */
  dataCenterNameEn?: string;

  /** 机房名称(中文) */
  dataCenterNameZh?: string;

  /**
   * 服务器数量
   * @format int32
   */
  deviceNum?: number;

  /** 执行人员英文名称 */
  employeeNameEn?: string;

  /** 执行人员中文名称 */
  employeeNameZh?: string;

  /**
   * 完成时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 处理方案 */
  solution?: string;

  /** 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭 */
  state?:
    | 'BACK'
    | 'CLOSED'
    | 'COMPLETED'
    | 'IN_APPOINTMENT'
    | 'IN_AUDIT'
    | 'IN_SIGN'
    | 'IN_SURVEY'
    | 'IN_UP'
    | 'WAIT_UPDATE';

  /** 工勘工单编号 */
  surveyOrderNo?: string;
}

export interface UpWorkOrderWebDetailVo {
  auditInfo?: UpWorkOrderAuditHistoryInfoVo;
  customerInfo?: CustomerInfoVo;
  serverRoomInfo?: ServerRoomInfoVo;
  surveyWorkOrderInfo?: SurveyWorkOrderInfoVo;
  upWorkOrderInfo?: UpWorkOrderInfoVo;
}

export interface UpWorkOrderUpDto {
  /**
   * 工单id
   * @format int64
   */
  id?: number;

  /** 上架处理记录 */
  upContent?: string;

  /** 上架凭证 */
  upImg?: string;
}

export interface UpWorkOrderSignInDto {
  /**
   * 工单id
   * @format int64
   */
  id?: number;

  /** 签到照片 */
  signInImg?: string;

  /** 签到备注 */
  signInRemark?: string;
}

export interface UpWorkOrderInfoVo {
  /** 改约原因 */
  changeReason?: string;

  /** 是否改约 */
  changeTip?: boolean;

  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 服务完成时限 */
  completeHour?: number;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /**
   * 当前审核id
   * @format int64
   */
  currentAuditId?: number;

  /**
   * 客户id
   * @format int64
   */
  customerId?: number;

  /** 客户系统订单号 */
  customerOrderNo?: string;

  /**
   * 服务器数量
   * @format int32
   */
  deviceNum?: number;

  /** 执行人员英文名称 */
  employeeNameEn?: string;

  /** 执行人员中文名称 */
  employeeNameZh?: string;

  /**
   * 期望上架时间
   * @format date-time
   */
  gmtAppointment?: string;

  /**
   * 期望上架提交时间
   * @format date-time
   */
  gmtAppointmentApply?: string;

  /**
   * 完成时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 期望上门时间
   * @format date-time
   */
  gmtExpect?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * 主键
   * @format int64
   */
  id?: number;

  /**
   * 上次审核id
   * @format int64
   */
  lastAuditId?: number;

  /** 工单编号 */
  no?: string;

  /**
   * 可操作者id
   * @format int64
   */
  operatorId?: number;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 服务响应时限 */
  replyHour?: number;

  /**
   * 机房id
   * @format int64
   */
  roomId?: number;

  /** 处理方案 */
  solution?: string;

  /** 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭 */
  state?:
    | 'BACK'
    | 'CLOSED'
    | 'COMPLETED'
    | 'IN_APPOINTMENT'
    | 'IN_AUDIT'
    | 'IN_SIGN'
    | 'IN_SURVEY'
    | 'IN_UP'
    | 'WAIT_UPDATE';

  /**
   * 工勘工单id
   * @format int64
   */
  surveyOrderId?: number;

  /** 工勘工单编号 */
  surveyOrderNo?: string;

  /**
   * 分配第三方工程师id
   * @format int64
   */
  thirdWorkerId?: number;

  /** 指定三方工程师 */
  thirdWorkerNameZh?: string;

  /**
   * 分配己方工程师id
   * @format int64
   */
  workerId?: number;
}

export interface UpWorkOrderAuditHistoryInfoVo {
  /**
   * 审核时间
   * @format date-time
   */
  gmtAudit?: string;

  /**
   * 签到时间
   * @format date-time
   */
  gmtSignIn?: string;

  /**
   * 上架时间
   * @format date-time
   */
  gmtUp?: string;

  /** 审核内容 */
  reviewContent?: string;

  /** 审核凭证 */
  reviewImg?: string;

  /** 签到照片 */
  signInImg?: string;

  /** 签到备注 */
  signInRemark?: string;

  /** 总人天 */
  totalManDay?: number;

  /** 总费用 */
  totalPrice?: number;

  /** 上架处理记录 */
  upContent?: string;

  /** 上架凭证 */
  upImg?: string;
}

export interface UpWorkOrderAuditDto {
  /**
   * 工单id
   * @format int64
   */
  id?: number;

  /** 审核内容 */
  reviewContent?: string;

  /** 审核凭证 */
  reviewImg?: string;

  /** 审核状态:INIT-待审核,PASS-审核通过,REJECT-审核驳回 */
  state?: 'INIT' | 'PASS' | 'REJECT';

  /** 总人天 */
  totalManDay?: number;

  /** 总费用 */
  totalPrice?: number;
}

export interface UpWorkOrderAppointmentDto {
  /**
   * 预约上架时间
   * @format date-time
   */
  gmtAppointment?: string;

  /**
   * 工单id
   * @format int64
   */
  id?: number;

  /**
   * 分配第三方工程师id
   * @format int64
   */
  thirdWorkerId?: number;
}

export interface DeviceSnInfoListVo {
  /** 英文版本的设备型号 */
  deviceModelEn?: string;

  /** 中文版本的设备型号 */
  deviceModelZh?: string;

  /** 设备SN码 */
  deviceSnCode?: string;

  /**
   * 设备id
   * @format int64
   */
  id?: number;
}

export interface SurveyWorkOrderAdminListVo {
  /** 机房地址(英文) */
  addressEn?: string;

  /** 机房地址(中文) */
  addressZh?: string;

  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /** 客户名称(英文) */
  customerNameEn?: string;

  /** 客户名称(中文) */
  customerNameZh?: string;

  /** 机房名称(英文) */
  dataCenterNameEn?: string;

  /** 机房名称(中文) */
  dataCenterNameZh?: string;

  /** 执行人员英文名称 */
  employeeNameEn?: string;

  /** 执行人员中文名称 */
  employeeNameZh?: string;

  /**
   * 完成时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭 */
  state?: 'BACK' | 'CLOSED' | 'COMPLETED' | 'INIT' | 'WAIT_UPDATE';
}

export interface SurveyWorkOrderWebListVo {
  /** 机房地址(英文) */
  addressEn?: string;

  /** 机房地址(中文) */
  addressZh?: string;

  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /** 客户名称(英文) */
  customerNameEn?: string;

  /** 客户名称(中文) */
  customerNameZh?: string;

  /** 机房名称(英文) */
  dataCenterNameEn?: string;

  /** 机房名称(中文) */
  dataCenterNameZh?: string;

  /**
   * 完成时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭 */
  state?: 'BACK' | 'CLOSED' | 'COMPLETED' | 'INIT' | 'WAIT_UPDATE';
}

export interface SurveyWorkOrderAdminDetailVo {
  customerInfo?: CustomerInfoVo;
  serverRoomInfo?: ServerRoomInfoVo;
  surveyWorkOrderInfo?: SurveyWorkOrderInfoVo;
}

export interface SlaConfigUpdateDto {
  /** 执行时间 */
  completeHour?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 上门时间 */
  reachHour?: number;

  /** 响应时间 */
  replyHour?: number;
}

export interface SlaConfig {
  /** 执行时间 */
  completeHour?: number;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** sla等级 */
  level?: string;
  modified?: boolean;
  modifyUser?: string;

  /** 上门时间 */
  reachHour?: number;

  /** 响应时间 */
  replyHour?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 配置类型:UP_WORKER_ORDER-上架工单,SURVEY_WORKER_ORDER-工勘工单,SPARE_PART-备件发货/备件维修 */
  type?: 'SPARE_PART' | 'SURVEY_WORKER_ORDER' | 'UP_WORKER_ORDER';
}

export interface SurveyWorkOrderQueryDto {
  /**
   * 开始时间
   * @format date-time
   */
  beginTime?: string;

  /** 查询条件 */
  condition?: string;

  /** 客户名称 */
  customerName?: string;

  /** 机房名称 */
  dataCenterName?: string;

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

  /** 工单编号 */
  no?: string;

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

  /** 工单状态 */
  state?: 'CLOSED' | 'COMPLETED' | 'INIT';
}

export interface SurveyWorkOrderListVo {
  /** 客户名称(英文) */
  customerNameEn?: string;

  /** 客户名称(中文) */
  customerNameZh?: string;

  /** 机房名称(英文) */
  dataCenterNameEn?: string;

  /** 机房名称(中文) */
  dataCenterNameZh?: string;

  /**
   * 服务完成截止
   * @format date-time
   */
  gmtCompleteDeadline?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 服务响应截止
   * @format date-time
   */
  gmtReplyDeadline?: string;

  /** @format int32 */
  id?: number;

  /** 工单编号 */
  no?: string;

  /** 机房地址(英文) */
  roomLocationEn?: string;

  /** 机房地址(中文) */
  roomLocationZh?: string;

  /** 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭 */
  state?: 'CLOSED' | 'COMPLETED' | 'INIT';
}

export interface SurveyWorkOrderInfoVo {
  /**
   * 服务执行截止-前端展示
   * @format date-time
   */
  completeDeadline?: string;

  /** 执行时间时限 */
  completeHour?: number;

  /** 是否逾期执行 */
  completeOverDueStr?: string;

  /** 工勘内容 */
  content?: string;

  /**
   * 客户id
   * @format int64
   */
  customerId?: number;

  /** 执行人员英文名称 */
  employeeNameEn?: string;

  /** 执行人员中文名称 */
  employeeNameZh?: string;

  /**
   * 审核提交时间
   * @format date-time
   */
  gmtComplete?: string;

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 期待上门时间
   * @format date-time
   */
  gmtExpect?: string;

  /**
   * 响应时间
   * @format date-time
   */
  gmtView?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 工单编号 */
  no?: string;

  /**
   * 可操作者id
   * @format int64
   */
  operatorId?: number;

  /** 照片凭证 */
  proofImg?: string;

  /** 上门时间时限 */
  reachHour?: number;

  /** 是否逾期响应 */
  replayOverDueStr?: string;

  /**
   * 服务响应截止-前端展示
   * @format date-time
   */
  replyDeadline?: string;

  /** 响应时间时限 */
  replyHour?: number;

  /**
   * 机房id
   * @format int64
   */
  roomId?: number;

  /** 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭 */
  state?: 'BACK' | 'CLOSED' | 'COMPLETED' | 'INIT' | 'WAIT_UPDATE';

  /**
   * 分配工程师id
   * @format int64
   */
  workerId?: number;
}

export interface SurveyWorkOrderDetailVo {
  customerInfo?: CustomerInfoVo;
  serverRoomInfo?: ServerRoomInfoVo;
  surveyWorkOrderInfo?: SurveyWorkOrderInfoVo;

  /** 关联上架工单 */
  upWorkRelList?: UpWorkRelVo[];
}

export interface ServerRoomInfoVo {
  /** 英文版本的机房地址 */
  addressEn?: string;

  /** 中文版本的机房地址 */
  addressZh?: string;

  /** 英文版本的机房名称 */
  dataCenterNameEn?: string;

  /** 中文版本的机房名称 */
  dataCenterNameZh?: string;
}

export interface CustomerInfoVo {
  /** 英文版本的客户联系人 */
  contactPersonEn?: string;

  /** 联系人手机 */
  contactPersonPhone?: string;

  /** 中文版本的客户联系人 */
  contactPersonZh?: string;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;
}

export interface SurveyWorkOrderAddDto {
  /**
   * 客户id
   * @format int64
   */
  customerId?: number;

  /**
   * 期望上门时间
   * @format date-time
   */
  gmtExpect?: string;

  /**
   * 机房id
   * @format int64
   */
  roomId?: number;

  /**
   * 己方工程师id
   * @format int64
   */
  workerId?: number;
}

export interface PopupAdsDto {
  /**
   * 每日展示次数
   * @format int32
   */
  dailyShowNumber?: number;

  /** 是否删除 */
  deleted?: boolean;

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

  /**
   * id
   * @format int64
   */
  id?: number;

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

export interface MemberOutputDto {
  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;

  /**
   * 禁用状态（0：否，1：是）
   * @format int32
   */
  disableStatus?: number;

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
}

export interface MallConfPageSimpleOutputDto {
  /** 页面内容 */
  content?: string;

  /** 页面标题 */
  title?: string;
}

export interface BannerPositionOutputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 图片地址 */
  imgUrl?: string;

  /** 名称 */
  name?: string;

  /** 跳转地址 */
  url?: string;

  /**
   * 跳转类型
   * @format int32
   */
  urlType?: number;
}

export interface UserRolesDto {
  roleIds?: number[];

  /** @format int64 */
  userId?: number;
}

export interface UserChangeStatusInputDto {
  /**
   * 用户id
   * @format int64
   */
  id?: number;

  /**
   * 状态 1：正常 0：禁用
   * @format int32
   */
  status?: number;
}

export interface UpdateServerRoomInfoReq {
  /** 英文版本的机房地址 */
  addressEn?: string;

  /** 中文版本的机房地址 */
  addressZh?: string;

  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 英文版本的机房联系人姓名 */
  contactPersonNameEn?: string;

  /** 中文版本的机房联系人姓名 */
  contactPersonNameZh?: string;

  /** 机房联系人手机号 */
  contactPersonPhone?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /** 英文版本的机房名称 */
  dataCenterNameEn?: string;

  /** 中文版本的机房名称 */
  dataCenterNameZh?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否是国内 0:否 1:是
   * @format int32
   */
  isDomestic?: number;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 国家名（英文版本） */
  provinceNameEn?: string;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @format int32
   */
  surveyStatus?: number;
}

export interface UpdateProjectInfoReq {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 人力盘点ID
   * @format int32
   */
  manpowerInventoryId?: number;

  /**
   * 人力盘点状态：0 通过，1 未通过
   * @format int32
   */
  manpowerInventoryStatus?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 英文版本的项目名称 */
  projectNameEn?: string;

  /** 中文版本的项目名称 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /**
   * 项目单单据状态：0 待人员&备件盘点，1 未开始，2 进行中，3 已结束
   * @format int32
   */
  projectStatus?: number;

  /** 项目目标数量 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 服务器SN设备数量
   * @format int32
   */
  serverSnEquipmentQuantity?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息：0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点ID
   * @format int32
   */
  sparePartsInventoryId?: number;

  /**
   * 备件盘点状态：0 通过，1 未通过
   * @format int32
   */
  sparePartsInventoryStatus?: number;
}

export interface UpdateEmployeeRoleReq {
  /** 员工单据权限 ：上架工单 2：工勘工单 */
  employeePermissions?: string[];

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface UpdateEmployeeInfoReq {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int32
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否是国内
   * @format int32
   */
  isDomestic?: number;

  /** 登录密码 */
  loginPassword?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface UpdateDeviceWcInfoReq {
  /** 英文版本的设备型号 */
  deviceModelEn?: string;

  /** 中文版本的设备型号 */
  deviceModelZh?: string;

  /** 英文版本的设备名称 */
  deviceNameEn?: string;

  /** 中文版本的设备名称 */
  deviceNameZh?: string;

  /** 设备WC码 */
  deviceWcCode?: string;

  /**
   * id
   * @format int64
   */
  id?: number;
}

export interface UpdateDeviceSnInfoReq {
  /**
   * 所属客户ID
   * @format int64
   */
  customerId?: number;

  /** 设备SN码 */
  deviceSnCode?: string;

  /**
   * WC关联ID
   * @format int64
   */
  deviceWcId?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 归属项目单编号 */
  projectOrderNumber?: string;

  /**
   * 所在机房ID
   * @format int64
   */
  serverRoomId?: number;

  /** 英文版本的第三方服务商 */
  serviceProviderEn?: string;

  /** 中文版本的第三方服务商 */
  serviceProviderZh?: string;

  /**
   * 上架日期
   * @format date-time
   */
  shelfDate?: string;

  /**
   * SLAId
   * @format int64
   */
  sla?: number;

  /**
   * 过保日期
   * @format date-time
   */
  warrantyExpirationDate?: string;
}

export interface UpdateCustomerInfoReq {
  /** 英文版本的客户联系人 */
  contactPersonEn?: string;

  /** 联系人手机 */
  contactPersonPhone?: string;

  /** 中文版本的客户联系人 */
  contactPersonZh?: string;

  /**
   * 客户级别
   * @format int32
   */
  customerLevel?: number;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 英文版本的终端客户 */
  terminalCustomerEn?: string;

  /** 中文版本的终端客户 */
  terminalCustomerZh?: string;
}

export interface UnlimitedInputDto {
  /** 页面 */
  page?: string;
  scene?: string;

  /** 版本 */
  version?: string;
}

export interface TreeResourceVo {
  /** 子资源集合 */
  children?: TreeResourceVo[];

  /** 资源代码 */
  code?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** key */
  key?: string;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;

  /** 资源名称 */
  name?: string;

  /**
   * 上级ID
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 优先级
   * @format int32
   */
  sortNum?: number;

  /** 标题 */
  title?: string;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysUserVo {
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

export interface SysUserModifyInputDto {
  /** 部门ID集合 */
  deptIds?: number[];

  /** 邮箱 */
  email?: string;

  /**
   * 员工id
   * @format int64
   */
  id?: number;

  /** 电话 */
  mobile?: string;

  /** 角色id集合 */
  roleIds?: number[];

  /** 用户名 */
  username?: string;
}

export interface SysUserCreateInputDto {
  /** 部门ID集合 */
  deptIds?: number[];

  /** 邮箱 */
  email?: string;

  /** 电话 */
  mobile?: string;

  /** 角色id集合 */
  roleIds?: number[];

  /** 用户名 */
  username?: string;
}

export interface SysRoleSelectOutputDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 角色名称 */
  name?: string;
}

export interface SysRoleOutputDto {
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

export interface SysRoleModifyInputDto {
  /** 描述 */
  description?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 角色名 */
  name?: string;

  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysRoleDetailOutputDto {
  /** 接口集合 */
  apiIds?: number[];

  /** 角色权限标识 */
  authority?: string;

  /** 按钮集合 */
  buttonIds?: number[];

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

  /** 菜单集合 */
  menuIds?: number[];

  /** 角色名称 */
  name?: string;

  /**
   * 员工数量
   * @format int64
   */
  userNum?: number;
}

export interface SysRoleCreateInputDto {
  /** 描述 */
  description?: string;

  /** 角色名 */
  name?: string;

  /** 资源 id 集合 */
  resourceIds?: number[];
}

export interface SysRole {
  authority?: string;
  createUser?: string;
  deleted?: boolean;
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;
  name?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface SysResourceRes {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;
  transient?: boolean;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysResourceReq {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysResource {
  /** 资源代码 */
  code?: string;
  createUser?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** 图标，为菜单时不空 */
  icon?: string;

  /** @format int64 */
  id?: number;

  /** 备注 */
  memo?: string;

  /** 请求方式，为接口时不为空 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /**
   * 父级资源ID，资源类型只能为菜单
   * @format int64
   */
  parentId?: number;

  /** 访问地址，为按钮时可为空 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** @format int32 */
  status?: number;

  /** 资源名称 */
  title?: string;
  transient?: boolean;

  /**
   * 资源类型|0:菜单,1:按钮,2:接口
   * @format int32
   */
  type?: number;

  /** 是否可见 */
  visible?: boolean;
}

export interface SysDeptVo {
  /** 子部门 */
  children?: SysDeptVo[];

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

  /** 部门名称 */
  name?: string;

  /**
   * pid
   * @format int64
   */
  pid?: number;

  /**
   * 员工数量
   * @format int32
   */
  userNum?: number;
}

export interface SysDeptModifyInputDto {
  /**
   * 部门id
   * @format int64
   */
  id?: number;

  /** 部门名称 */
  name?: string;

  /**
   * 上级ID，不传默认0
   * @format int64
   */
  pid?: number;
}

export interface SysDeptCreateInputDto {
  /** 部门名称 */
  name?: string;

  /**
   * 上级ID，不传默认0
   * @format int64
   */
  pid?: number;
}

export interface SysAuthVo {
  /** 登录人有权限的接口 */
  apis?: SysResource[];

  /** 登录人有权限的按钮 */
  buttons?: string[];

  /** 登录人邮箱 */
  email?: string;

  /** 登录人有权限的菜单（树状） */
  menusTree?: TreeResourceVo[];

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

export interface SysApiRes {
  createUser?: string;

  /** 描述 */
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 请求方式 */
  method?: string;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** 请求uri */
  uri?: string;
}

export interface SysApiReq {
  createUser?: string;

  /** 描述 */
  description?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** 请求方式 */
  method?: string;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /** 请求uri */
  uri?: string;
}

export interface ShowDto {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;
}

export interface ServerRoomInfo {
  addressEn?: string;
  addressZh?: string;

  /** @format int64 */
  areaId?: number;
  areaName?: string;

  /** @format int64 */
  cityId?: number;
  cityName?: string;
  cityNameEn?: string;
  contactPersonNameEn?: string;
  contactPersonNameZh?: string;
  contactPersonPhone?: string;
  createUser?: string;

  /** @format int64 */
  customerId?: number;
  dataCenterNameEn?: string;
  dataCenterNameZh?: string;

  /** @format int32 */
  deleted?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** @format int32 */
  isDomestic?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int64 */
  provinceId?: number;
  provinceName?: string;
  provinceNameEn?: string;

  /** @format int32 */
  serverQuantity?: number;
  serverRoomCode?: string;

  /** @format int32 */
  status?: number;

  /** @format int32 */
  surveyStatus?: number;
  transient?: boolean;
}

export interface RoleResourceSaveDto {
  resourceIds?: number[];

  /** @format int64 */
  roleId?: number;
}

export interface RichText {
  content?: string;
  createUser?: string;

  /** @format int32 */
  dataId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modifyUser?: string;

  /** @format int32 */
  status?: number;
}

export interface ResourceUpdateDto {
  /** 关联的API列表 */
  apis?: SysApiReq[];

  /** 图标 */
  icon?: string;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由路径 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /** 是否显示 */
  visible?: boolean;
}

export interface ResourceDetailVo {
  /** 关联的API列表 */
  apis?: SysApiRes[];

  /**
   * 子菜单数量
   * @format int32
   */
  childrenMenuCnt?: number;

  /** 代码 */
  code?: string;

  /** 图标 */
  icon?: string;

  /**
   * ID
   * @format int64
   */
  id?: number;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /**
   * 类型
   * @format int32
   */
  type?: number;

  /** 是否显示 */
  visible?: boolean;
}

export interface ResourceCreateDto {
  /** 关联的API列表 */
  apis?: SysApiReq[];

  /** 代码 */
  code?: string;

  /** 图标 */
  icon?: string;

  /** 备注 */
  memo?: string;

  /**
   * 父菜单ID
   * @format int64
   */
  parentId?: number;

  /** 路由地址 */
  path?: string;

  /**
   * 排序号
   * @format int32
   */
  sortNum?: number;

  /** 描述 */
  title?: string;

  /**
   * 资源类型
   * @format int32
   */
  type?: number;

  /** 是否显示 */
  visible?: boolean;
}

export interface ResetPwdParam {
  /** 新密码 */
  newPassword?: string;

  /** 原密码 */
  password?: string;
}

export interface QueryServerRoomInfoRes {
  /** 英文版本的机房地址 */
  addressEn?: string;

  /** 中文版本的机房地址 */
  addressZh?: string;

  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 英文版本的机房联系人姓名 */
  contactPersonNameEn?: string;

  /** 中文版本的机房联系人姓名 */
  contactPersonNameZh?: string;

  /** 机房联系人手机号 */
  contactPersonPhone?: string;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;

  /** 英文版本的机房名称 */
  dataCenterNameEn?: string;

  /** 中文版本的机房名称 */
  dataCenterNameZh?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 是否是国内
   * @format int32
   */
  isDomestic?: number;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 国家名（英文版本） */
  provinceNameEn?: string;

  /**
   * 机房服务器数量
   * @format int32
   */
  serverQuantity?: number;

  /** 机房编码 */
  serverRoomCode?: string;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @format int32
   */
  surveyStatus?: number;

  /** 英文版本的终端客户 */
  terminalCustomerEn?: string;

  /** 中文版本的终端客户 */
  terminalCustomerZh?: string;
}

export interface QueryProjectInfoRes {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * 人力盘点ID
   * @format int32
   */
  manpowerInventoryId?: number;

  /**
   * 人力盘点状态：0 通过，1 未通过
   * @format int32
   */
  manpowerInventoryStatus?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 英文版本的项目名称 */
  projectNameEn?: string;

  /** 中文版本的项目名称 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /**
   * 项目单单据状态：0 待人员&备件盘点，1 未开始，2 进行中，3 已结束
   * @format int32
   */
  projectStatus?: number;

  /** 项目目标数量 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 服务器SN设备数量
   * @format int32
   */
  serverSnEquipmentQuantity?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息：0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点ID
   * @format int32
   */
  sparePartsInventoryId?: number;

  /**
   * 备件盘点状态：0 通过，1 未通过
   * @format int32
   */
  sparePartsInventoryStatus?: number;
}

export interface QueryEmployeeRoleRes {
  /** 员工单据权限 ["survey_work", "up_work"] */
  employeePermissions?: string[];

  /**
   * 创建时间
   * @format date-time
   */
  gmtCreated?: string;

  /**
   * 角色id
   * @format int64
   */
  id?: number;

  /** 角色名称 */
  roleName?: string;

  /**
   * 账号状态 0 禁用 1 有效
   * @format int32
   */
  status?: number;
}

export interface QueryEmployeeInfoRes {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int32
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * 是否是国内
   * @format int32
   */
  isDomestic?: number;

  /** 登录密码 */
  loginPassword?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface QueryDeviceWcInfoRes {
  /** 客户ID */
  customerIds?: string;

  /** 英文版本的客户名称 */
  customerNameEn?: string[];

  /** 中文版本的客户名称 */
  customerNameZh?: string[];

  /** 英文版本的设备型号 */
  deviceModelEn?: string;

  /** 中文版本的设备型号 */
  deviceModelZh?: string;

  /** 英文版本的设备名称 */
  deviceNameEn?: string;

  /** 中文版本的设备名称 */
  deviceNameZh?: string;

  /** 设备WC码 */
  deviceWcCode?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 设备SN总数量
   * @format int32
   */
  totalQuantity?: number;
}

export interface QueryDeviceSnInfoRes {
  /** 英文版本的机房地址 */
  addressEn?: string;

  /** 中文版本的机房地址 */
  addressZh?: string;

  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;

  /** 英文版本的机房名称 */
  dataCenterNameEn?: string;

  /** 中文版本的机房名称 */
  dataCenterNameZh?: string;

  /** 英文版本的设备型号 */
  deviceModelEn?: string;

  /** 中文版本的设备型号 */
  deviceModelZh?: string;

  /** 英文版本的设备名称 */
  deviceNameEn?: string;

  /** 中文版本的设备名称 */
  deviceNameZh?: string;

  /** 设备SN码 */
  deviceSnCode?: string;

  /** 设备WC码 */
  deviceWcCode?: string;

  /**
   * WC关联ID
   * @format int64
   */
  deviceWcId?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** SLA名称 */
  level?: string;

  /** 归属项目单编号 */
  projectOrderNumber?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 国家名（英文版本） */
  provinceNameEn?: string;

  /**
   * 所在机房ID
   * @format int32
   */
  serverRoomId?: number;

  /** 英文版本的第三方服务商 */
  serviceProviderEn?: string;

  /** 中文版本的第三方服务商 */
  serviceProviderZh?: string;

  /**
   * 上架日期
   * @format date-time
   */
  shelfDate?: string;

  /**
   * SLAId
   * @format int32
   */
  sla?: number;

  /**
   * SLAId
   * @format int64
   */
  slaId?: number;

  /** 英文版本的终端客户 */
  terminalCustomerEn?: string;

  /** 中文版本的终端客户 */
  terminalCustomerZh?: string;

  /**
   * 过保日期
   * @format date-time
   */
  warrantyExpirationDate?: string;
}

export interface QueryCustomerInfoRes {
  /** 英文版本的客户联系人 */
  contactPersonEn?: string;

  /** 联系人手机 */
  contactPersonPhone?: string;

  /** 中文版本的客户联系人 */
  contactPersonZh?: string;

  /** 客户编码 */
  customerCode?: string;

  /**
   * 客户级别
   * @format int32
   */
  customerLevel?: number;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;

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
   * 项目数量
   * @format int32
   */
  projectNum?: number;

  /**
   * 服务器设备数量
   * @format int32
   */
  serverEquipmentNum?: number;

  /**
   * 机房数量
   * @format int32
   */
  serverRoomNum?: number;

  /**
   * 数据状态 0 无效 1 有效
   * @format int32
   */
  status?: number;

  /** 英文版本的终端客户 */
  terminalCustomerEn?: string;

  /** 中文版本的终端客户 */
  terminalCustomerZh?: string;
}

export interface ProjectInfo {
  contractNumber?: string;
  createUser?: string;

  /** @format int32 */
  customerId?: number;

  /** @format int32 */
  deleted?: number;

  /** @format date-time */
  expectedInventoryCompletionTime?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** @format int32 */
  manpowerInventoryId?: number;

  /** @format int32 */
  manpowerInventoryStatus?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  projectHealth?: number;
  projectNameEn?: string;
  projectNameZh?: string;
  projectOrderNumber?: string;

  /** @format int32 */
  projectStatus?: number;
  projectTargetQuantity?: string;

  /** @format int32 */
  projectType?: number;

  /** @format int32 */
  serverSnEquipmentQuantity?: number;

  /** @format date-time */
  serviceEndTime?: string;

  /** @format date-time */
  serviceStartTime?: string;

  /** @format int32 */
  siteInfo?: number;

  /** @format int32 */
  sparePartsInventoryId?: number;

  /** @format int32 */
  sparePartsInventoryStatus?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface MenuTreeOutputDto {
  children?: MenuTreeOutputDto[];

  /** 是否前端展示 */
  frontShow?: boolean;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 名称 */
  name?: string;
  pic?: string;

  /**
   * pid
   * @format int64
   */
  pid?: number;

  /**
   * 排序
   * @format int32
   */
  sort?: number;
}

export interface MemberDetailOutputDto {
  /** 微信应用id */
  appId?: string;

  /**
   * 可用积分
   * @format int32
   */
  availableScore?: number;

  /** 账户余额 */
  balance?: number;

  /**
   * 出生年月
   * @format date-time
   */
  birthday?: string;

  /**
   * 禁用状态（0：否，1：是）
   * @format int32
   */
  disableStatus?: number;

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

  /**
   * 累计积分
   * @format int32
   */
  totalScore?: number;

  /** 用户微信全局唯一编号 */
  unionId?: string;
}

export interface MaterialVo {
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

export interface MaterialMoveParam {
  /**
   * 移动到的分组id
   * @format int64
   */
  groupId?: number;

  /** 移动的素材id数组 */
  ids?: number[];
}

export interface MaterialModifyParam {
  /** 扩展参数 */
  extendParams?: object;

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

export interface MaterialGroupVo {
  /** 下级分组 */
  children?: MaterialGroupVo[];

  /**
   * id
   * @format int64
   */
  id?: number;

  /**
   * 素材数量
   * @format int32
   */
  mateNum?: number;

  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 类型 0图片 1分组
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupModifyParam {
  /**
   * id
   * @format int64
   */
  id?: number;

  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialGroupAddParam {
  /** 分组名称 */
  name?: string;

  /**
   * 上级id
   * @format int64
   */
  pid?: number;

  /**
   * 分组类型 0图片 1视频
   * @format int32
   */
  type?: number;
}

export interface MaterialAddParam {
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

export interface MallConfPageOutputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 最后修改时间
   * @format date-time
   */
  gmtModified?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface MallConfPageModifyInputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface MallConfPageCreateInputDto {
  /** 页面内容 */
  content?: string;

  /**
   * 设为首页 0 否 1 是
   * @format int32
   */
  homePage?: number;

  /** 页面名称 */
  name?: string;

  /** 页面底色 */
  pageBgColor?: string;

  /** 页面标题 */
  title?: string;
}

export interface LoginOutputDto {
  /** 密码 */
  password?: string;

  /** 用户名 */
  username?: string;
}

export interface LoginDto {
  /** 密码 */
  password?: string;

  /** 用户名 */
  username?: string;
}

export interface HotKeywordUpdateDto {
  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface HotKeywordSaveDto {
  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface HotKeywordDto {
  /**
   * 更新时间
   * @format date-time
   */
  gmtModified?: string;

  /** 热词 */
  hotKeyword?: string;

  /** 热词说明 */
  hotKeywordDescription?: string;

  /** 图标 */
  icon?: string;

  /**
   * id
   * @format int64
   */
  id?: number;

  /** 是否显示 */
  show?: boolean;

  /**
   * 排序
   * @format int32
   */
  sort?: number;

  /** 跳转链接 */
  url?: string;
}

export interface ForgotPasswordDto {
  /** 验证码 */
  code?: string;

  /** 手机号 */
  mobile?: string;

  /** 密码 */
  password?: string;
}

export interface EmployeeRole {
  createUser?: string;

  /** @format int32 */
  deleted?: number;
  employeePermissions?: string[];

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;
  roleName?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface EmployeeInfo {
  /** @format int64 */
  areaId?: number;
  areaName?: string;
  areaNameEn?: string;

  /** @format int64 */
  cityId?: number;
  cityName?: string;
  cityNameEn?: string;
  createUser?: string;

  /** @format int32 */
  deleted?: number;
  employeeNameEn?: string;
  employeeNameZh?: string;

  /** @format int32 */
  employeeRoleId?: number;

  /** @format int32 */
  gender?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;

  /** @format int32 */
  isDomestic?: number;
  loginPassword?: string;
  loginPhone?: string;
  modified?: boolean;
  modifyUser?: string;

  /** @format int64 */
  provinceId?: number;
  provinceName?: string;
  provinceNameEn?: string;

  /** @format int32 */
  status?: number;
  transient?: boolean;
}

export interface DeviceWcInfo {
  createUser?: string;
  customerIds?: string;

  /** @format int32 */
  deleted?: number;
  deviceModelEn?: string;
  deviceModelZh?: string;
  deviceNameEn?: string;
  deviceNameZh?: string;
  deviceWcCode?: string;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  status?: number;

  /** @format int32 */
  totalQuantity?: number;
  transient?: boolean;
}

export interface DeviceSnInfo {
  createUser?: string;

  /** @format int64 */
  customerId?: number;

  /** @format int32 */
  deleted?: number;
  deviceSnCode?: string;

  /** @format int64 */
  deviceWcId?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;
  projectOrderNumber?: string;

  /** @format int64 */
  serverRoomId?: number;
  serviceProviderEn?: string;
  serviceProviderZh?: string;

  /** @format date-time */
  shelfDate?: string;

  /** @format int64 */
  sla?: number;

  /** @format int32 */
  status?: number;
  transient?: boolean;

  /** @format date-time */
  warrantyExpirationDate?: string;
}

export interface CustomerInfo {
  contactPersonEn?: string;
  contactPersonPhone?: string;
  contactPersonZh?: string;
  createUser?: string;
  customerCode?: string;

  /** @format int32 */
  customerLevel?: number;
  customerNameEn?: string;
  customerNameZh?: string;

  /** @format int32 */
  deleted?: number;

  /** @format date-time */
  gmtCreated?: string;

  /** @format date-time */
  gmtModified?: string;

  /** @format int64 */
  id?: number;
  modified?: boolean;
  modifyUser?: string;

  /** @format int32 */
  projectNum?: number;

  /** @format int32 */
  serverEquipmentNum?: number;

  /** @format int32 */
  serverRoomNum?: number;

  /** @format int32 */
  status?: number;
  terminalCustomerEn?: string;
  terminalCustomerZh?: string;
  transient?: boolean;
}

export interface CreateServerRoomInfoReq {
  /** 英文版本的机房地址 */
  addressEn?: string;

  /** 中文版本的机房地址 */
  addressZh?: string;

  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /** 英文版本的机房联系人姓名 */
  contactPersonNameEn?: string;

  /** 中文版本的机房联系人姓名 */
  contactPersonNameZh?: string;

  /** 机房联系人手机号 */
  contactPersonPhone?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /** 英文版本的机房名称 */
  dataCenterNameEn?: string;

  /** 中文版本的机房名称 */
  dataCenterNameZh?: string;

  /**
   * 是否是国内 0:否 1:是
   * @format int32
   */
  isDomestic?: number;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 国家名（英文版本） */
  provinceNameEn?: string;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @format int32
   */
  surveyStatus?: number;
}

export interface CreateProjectInfoReq {
  /** 合同单号 */
  contractNumber?: string;

  /**
   * 所属客户ID
   * @format int32
   */
  customerId?: number;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /**
   * 盘点预计完成时间
   * @format date-time
   */
  expectedInventoryCompletionTime?: string;

  /**
   * 人力盘点ID
   * @format int32
   */
  manpowerInventoryId?: number;

  /**
   * 人力盘点状态：0 通过，1 未通过
   * @format int32
   */
  manpowerInventoryStatus?: number;

  /**
   * 项目健康度
   * @format int32
   */
  projectHealth?: number;

  /** 英文版本的项目名称 */
  projectNameEn?: string;

  /** 中文版本的项目名称 */
  projectNameZh?: string;

  /** 项目单编号 */
  projectOrderNumber?: string;

  /**
   * 项目单单据状态：0 待人员&备件盘点，1 未开始，2 进行中，3 已结束
   * @format int32
   */
  projectStatus?: number;

  /** 项目目标数量 */
  projectTargetQuantity?: string;

  /**
   * 项目类型：0 维修，1 上架，2 上架+维修，3 备件，4 改造（不含配件），5 改造（含配件），6 搬迁（含物流），7 搬迁（不含物流），8 备件RMA
   * @format int32
   */
  projectType?: number;

  /**
   * 服务器SN设备数量
   * @format int32
   */
  serverSnEquipmentQuantity?: number;

  /**
   * 服务结束时间
   * @format date-time
   */
  serviceEndTime?: string;

  /**
   * 服务开始时间
   * @format date-time
   */
  serviceStartTime?: string;

  /**
   * 站点信息：0 新站点，1 老站点
   * @format int32
   */
  siteInfo?: number;

  /**
   * 备件盘点ID
   * @format int32
   */
  sparePartsInventoryId?: number;

  /**
   * 备件盘点状态：0 通过，1 未通过
   * @format int32
   */
  sparePartsInventoryStatus?: number;
}

export interface CreateEmployeeRoleReq {
  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /** 员工单据权限 ：上架工单 2：工勘工单 */
  employeePermissions?: string[];

  /** 角色名称 */
  roleName?: string;
}

export interface CreateEmployeeInfoReq {
  /**
   * 区域id
   * @format int64
   */
  areaId?: number;

  /** 区域名（中文版本） */
  areaName?: string;

  /** 区域名（英文版本） */
  areaNameEn?: string;

  /**
   * 市id
   * @format int64
   */
  cityId?: number;

  /** 城市名（中文版本） */
  cityName?: string;

  /** 城市名（英文版本） */
  cityNameEn?: string;

  /**
   * 是否删除 0 正常 1 删除
   * @format int32
   */
  deleted?: number;

  /** 员工英文名称 */
  employeeNameEn?: string;

  /** 员工中文名称 */
  employeeNameZh?: string;

  /**
   * 员工角色Id
   * @format int32
   */
  employeeRoleId?: number;

  /**
   * 性别：0 男，1 女
   * @format int32
   */
  gender?: number;

  /**
   * 是否是国内
   * @format int32
   */
  isDomestic?: number;

  /** 登录密码 */
  loginPassword?: string;

  /** 登录手机号 */
  loginPhone?: string;

  /**
   * 省id
   * @format int64
   */
  provinceId?: number;

  /** 省份名（中文版本） */
  provinceName?: string;

  /** 省份名（英文版本） */
  provinceNameEn?: string;
}

export interface CreateDeviceWcInfoReq {
  /** 英文版本的设备型号 */
  deviceModelEn?: string;

  /** 中文版本的设备型号 */
  deviceModelZh?: string;

  /** 英文版本的设备名称 */
  deviceNameEn?: string;

  /** 中文版本的设备名称 */
  deviceNameZh?: string;

  /** 设备WC码 */
  deviceWcCode?: string;
}

export interface CreateDeviceSnInfoReq {
  /**
   * 所属客户ID
   * @format int64
   */
  customerId?: number;

  /** 设备SN码 */
  deviceSnCode?: string;

  /**
   * WC关联ID
   * @format int64
   */
  deviceWcId?: number;

  /** 归属项目单编号 */
  projectOrderNumber?: string;

  /**
   * 所在机房ID
   * @format int64
   */
  serverRoomId?: number;

  /** 英文版本的第三方服务商 */
  serviceProviderEn?: string;

  /** 中文版本的第三方服务商 */
  serviceProviderZh?: string;

  /**
   * 上架日期
   * @format date-time
   */
  shelfDate?: string;

  /**
   * SLAId
   * @format int64
   */
  sla?: number;

  /**
   * 过保日期
   * @format date-time
   */
  warrantyExpirationDate?: string;
}

export interface CreateCustomerInfoReq {
  /** 英文版本的客户联系人 */
  contactPersonEn?: string;

  /** 联系人手机 */
  contactPersonPhone?: string;

  /** 中文版本的客户联系人 */
  contactPersonZh?: string;

  /**
   * 客户级别
   * @format int32
   */
  customerLevel?: number;

  /** 英文版本的客户名称 */
  customerNameEn?: string;

  /** 中文版本的客户名称 */
  customerNameZh?: string;

  /** 英文版本的终端客户 */
  terminalCustomerEn?: string;

  /** 中文版本的终端客户 */
  terminalCustomerZh?: string;
}

export interface ConfConfigOutputDto {
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

export interface BannerOutputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface BannerModifyStatusInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;
}

export interface BannerModifyInputDto {
  /**
   * 编号
   * @format int64
   */
  id?: number;

  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface BannerCreateInputDto {
  /** 图片链接 */
  imgUrl: string;

  /** 名称 */
  name?: string;

  /** 显示位置 */
  position?: string;

  /**
   * 显示状态 1显示0不显示
   * @format int32
   */
  showStatus: number;

  /**
   * 排序值
   * @format int32
   */
  sort: number;

  /** 外链地址 */
  url?: string;

  /**
   * 外链类型
   * @format int32
   */
  urlType?: number;
}

export interface PageInfoOpenApiSecurityVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: OpenApiSecurityVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoOpenApiSecurityVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoOpenApiSecurityVo;
  msg?: string;
}

export interface JsonResultHQOrderInfoCallback {
  /** @format int32 */
  code?: number;
  data?: HQOrderInfoCallback;
  msg?: string;
}

export interface JsonResultWybOrderContentResDTO {
  /** @format int32 */
  code?: number;
  data?: WybOrderContentResDTO;
  msg?: string;
}

export interface JsonResultObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface PageInfoUpWorkOrderAppointmentHistoryListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: UpWorkOrderAppointmentHistoryListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoUpWorkOrderAppointmentHistoryListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoUpWorkOrderAppointmentHistoryListVo;
  msg?: string;
}

export interface PagedResultQueryMessagesRes {
  list?: QueryMessagesRes[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultQueryMessagesRes {
  /** @format int32 */
  code?: number;
  data?: QueryMessagesRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryMessagesRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryMessagesRes;
  msg?: string;
}

export interface JsonResultQueryDeviceSnInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryDeviceSnInfoRes;
  msg?: string;
}

export interface JsonResultListLong {
  /** @format int32 */
  code?: number;
  data?: number[];
  msg?: string;
}

export interface JsonResultUpWorkOrderDetailVo {
  /** @format int32 */
  code?: number;
  data?: UpWorkOrderDetailVo;
  msg?: string;
}

export interface JsonResultListDeviceSnInfoImportVO {
  /** @format int32 */
  code?: number;
  data?: DeviceSnInfoImportVO[];
  msg?: string;
}

export interface JsonResultWebEmployeeInfoVO {
  /** @format int32 */
  code?: number;
  data?: WebEmployeeInfoVO;
  msg?: string;
}

export interface JsonResultLoginResponseVo {
  /** @format int32 */
  code?: number;
  data?: LoginResponseVo;
  msg?: string;
}

export interface PageInfoUpWorkHistoryPageVO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: UpWorkHistoryPageVO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoThirdPartyEngineerVO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: ThirdPartyEngineerVO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultUserInfoVo {
  /** @format int32 */
  code?: number;
  data?: UserInfoVo;
  msg?: string;
}

export interface JsonResultPageInfoUpWorkHistoryPageVO {
  /** @format int32 */
  code?: number;
  data?: PageInfoUpWorkHistoryPageVO;
  msg?: string;
}

export interface JsonResultPageInfoThirdPartyEngineerVO {
  /** @format int32 */
  code?: number;
  data?: PageInfoThirdPartyEngineerVO;
  msg?: string;
}

export interface JsonResultEmployeeInfoResetPasswordRes {
  /** @format int32 */
  code?: number;
  data?: EmployeeInfoResetPasswordRes;
  msg?: string;
}

export interface PageInfoProjectPageVO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: ProjectPageVO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoEmployeeInfoPageVO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: EmployeeInfoPageVO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoDeviceSnInfoImportVO {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: DeviceSnInfoImportVO[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultProjectDetailsVO {
  /** @format int32 */
  code?: number;

  /** 项目列表编辑请求DTO */
  data?: ProjectDetailsVO;
  msg?: string;
}

export interface JsonResultPageInfoProjectPageVO {
  /** @format int32 */
  code?: number;
  data?: PageInfoProjectPageVO;
  msg?: string;
}

export interface JsonResultPageInfoEmployeeInfoPageVO {
  /** @format int32 */
  code?: number;
  data?: PageInfoEmployeeInfoPageVO;
  msg?: string;
}

export interface JsonResultPageInfoDeviceSnInfoImportVO {
  /** @format int32 */
  code?: number;
  data?: PageInfoDeviceSnInfoImportVO;
  msg?: string;
}

export interface JsonResultEmployeeDetailsVO {
  /** @format int32 */
  code?: number;

  /** 员工列表编辑请求DTO */
  data?: EmployeeDetailsVO;
  msg?: string;
}

export interface PageInfoUpWorkOrderAdminListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: UpWorkOrderAdminListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultUpWorkOrderAdminDetailVo {
  /** @format int32 */
  code?: number;
  data?: UpWorkOrderAdminDetailVo;
  msg?: string;
}

export interface JsonResultPageInfoUpWorkOrderAdminListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoUpWorkOrderAdminListVo;
  msg?: string;
}

export interface PageInfoUpWorkOrderWebListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: UpWorkOrderWebListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface PageInfoDeviceSnInfoListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: DeviceSnInfoListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultUpWorkOrderWebDetailVo {
  /** @format int32 */
  code?: number;
  data?: UpWorkOrderWebDetailVo;
  msg?: string;
}

export interface JsonResultPageInfoUpWorkOrderWebListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoUpWorkOrderWebListVo;
  msg?: string;
}

export interface JsonResultPageInfoDeviceSnInfoListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoDeviceSnInfoListVo;
  msg?: string;
}

export interface PageInfoSurveyWorkOrderAdminListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: SurveyWorkOrderAdminListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultPageInfoSurveyWorkOrderAdminListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoSurveyWorkOrderAdminListVo;
  msg?: string;
}

export interface PageInfoSurveyWorkOrderWebListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: SurveyWorkOrderWebListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultSurveyWorkOrderAdminDetailVo {
  /** @format int32 */
  code?: number;
  data?: SurveyWorkOrderAdminDetailVo;
  msg?: string;
}

export interface JsonResultPageInfoSurveyWorkOrderWebListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoSurveyWorkOrderWebListVo;
  msg?: string;
}

export interface JsonResultSlaConfig {
  /** @format int32 */
  code?: number;
  data?: SlaConfig;
  msg?: string;
}

export interface JsonResultListSlaConfig {
  /** @format int32 */
  code?: number;
  data?: SlaConfig[];
  msg?: string;
}

export interface PageInfoSurveyWorkOrderListVo {
  /** @format int64 */
  endRow?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  list?: SurveyWorkOrderListVo[];

  /** @format int32 */
  navigateFirstPage?: number;

  /** @format int32 */
  navigateLastPage?: number;

  /** @format int32 */
  navigatePages?: number;
  navigatepageNums?: number[];

  /** @format int32 */
  nextPage?: number;

  /** @format int32 */
  pageNum?: number;

  /** @format int32 */
  pageSize?: number;

  /** @format int32 */
  pages?: number;

  /** @format int32 */
  prePage?: number;

  /** @format int32 */
  size?: number;

  /** @format int64 */
  startRow?: number;

  /** @format int64 */
  total?: number;
}

export interface JsonResultSurveyWorkOrderDetailVo {
  /** @format int32 */
  code?: number;
  data?: SurveyWorkOrderDetailVo;
  msg?: string;
}

export interface JsonResultPageInfoSurveyWorkOrderListVo {
  /** @format int32 */
  code?: number;
  data?: PageInfoSurveyWorkOrderListVo;
  msg?: string;
}

export interface JsonResultBoolean {
  /** @format int32 */
  code?: number;
  data?: boolean;
  msg?: string;
}

export interface JsonResultMemberOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberOutputDto;
  msg?: string;
}

export interface JsonResultMallConfPageSimpleOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageSimpleOutputDto;
  msg?: string;
}

export interface JsonResultListPopupAdsDto {
  /** @format int32 */
  code?: number;
  data?: PopupAdsDto[];
  msg?: string;
}

export interface JsonResultListHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: HotKeywordDto[];
  msg?: string;
}

export interface JsonResultListBannerPositionOutputDto {
  /** @format int32 */
  code?: number;
  data?: BannerPositionOutputDto[];
  msg?: string;
}

export interface PagedResultSysUserVo {
  list?: SysUserVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysRoleOutputDto {
  list?: SysRoleOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysResource {
  list?: SysResourceRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultSysDeptVo {
  list?: SysDeptVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryServerRoomInfoRes {
  list?: QueryServerRoomInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryProjectInfoRes {
  list?: QueryProjectInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryEmployeeRoleRes {
  list?: QueryEmployeeRoleRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryEmployeeInfoRes {
  list?: QueryEmployeeInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryDeviceWcInfoRes {
  list?: QueryDeviceWcInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryDeviceSnInfoRes {
  list?: QueryDeviceSnInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultQueryCustomerInfoRes {
  list?: QueryCustomerInfoRes[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMemberDetailOutputDto {
  list?: MemberDetailOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMaterialVo {
  list?: MaterialVo[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultMallConfPageOutputDto {
  list?: MallConfPageOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultHotKeywordDto {
  list?: HotKeywordDto[];

  /** @format int64 */
  total?: number;
}

export interface PagedResultBannerOutputDto {
  list?: BannerOutputDto[];

  /** @format int64 */
  total?: number;
}

export interface JsonResultString {
  /** @format int32 */
  code?: number;
  data?: string;
  msg?: string;
}

export interface JsonResultLong {
  /** @format int32 */
  code?: number;

  /** @format int64 */
  data?: number;
  msg?: string;
}

export interface JsonResultVoid {
  /** @format int32 */
  code?: number;
  msg?: string;
}

export interface JsonResultSysRoleDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleDetailOutputDto;
  msg?: string;
}

export interface JsonResultSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResourceRes;
  msg?: string;
}

export interface JsonResultSysAuthVo {
  /** @format int32 */
  code?: number;
  data?: SysAuthVo;
  msg?: string;
}

export interface JsonResultServerRoomInfo {
  /** @format int32 */
  code?: number;
  data?: ServerRoomInfo;
  msg?: string;
}

export interface JsonResultResourceDetailVo {
  /** @format int32 */
  code?: number;
  data?: ResourceDetailVo;
  msg?: string;
}

export interface JsonResultProjectInfo {
  /** @format int32 */
  code?: number;
  data?: ProjectInfo;
  msg?: string;
}

export interface JsonResultPagedResultSysUserVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysUserVo;
  msg?: string;
}

export interface JsonResultPagedResultSysRoleOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysRoleOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultSysResource {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysResource;
  msg?: string;
}

export interface JsonResultPagedResultSysDeptVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultSysDeptVo;
  msg?: string;
}

export interface JsonResultPagedResultQueryServerRoomInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryServerRoomInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryProjectInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryProjectInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryEmployeeRoleRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryEmployeeRoleRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryEmployeeInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryEmployeeInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryDeviceWcInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryDeviceWcInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryDeviceSnInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryDeviceSnInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultQueryCustomerInfoRes {
  /** @format int32 */
  code?: number;
  data?: PagedResultQueryCustomerInfoRes;
  msg?: string;
}

export interface JsonResultPagedResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultMaterialVo {
  /** @format int32 */
  code?: number;
  data?: PagedResultMaterialVo;
  msg?: string;
}

export interface JsonResultPagedResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultMallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultPagedResultHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultHotKeywordDto;
  msg?: string;
}

export interface JsonResultPagedResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: PagedResultBannerOutputDto;
  msg?: string;
}

export interface JsonResultMemberDetailOutputDto {
  /** @format int32 */
  code?: number;
  data?: MemberDetailOutputDto;
  msg?: string;
}

export interface JsonResultMapStringString {
  /** @format int32 */
  code?: number;
  data?: Record<string, string>;
  msg?: string;
}

export interface JsonResultMapStringObject {
  /** @format int32 */
  code?: number;
  data?: object;
  msg?: string;
}

export interface JsonResultMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto;
  msg?: string;
}

export interface JsonResultLoginOutputDto {
  /** @format int32 */
  code?: number;
  data?: LoginOutputDto;
  msg?: string;
}

export interface JsonResultListTreeResourceVo {
  /** @format int32 */
  code?: number;
  data?: TreeResourceVo[];
  msg?: string;
}

export interface JsonResultListSysRole {
  /** @format int32 */
  code?: number;
  data?: SysRole[];
  msg?: string;
}

export interface JsonResultListSysRoleSelectOutputDto {
  /** @format int32 */
  code?: number;
  data?: SysRoleSelectOutputDto[];
  msg?: string;
}

export interface JsonResultListSysResource {
  /** @format int32 */
  code?: number;
  data?: SysResource[];
  msg?: string;
}

export interface JsonResultListSysApi {
  /** @format int32 */
  code?: number;
  data?: SysApiRes[];
  msg?: string;
}

export interface JsonResultListQueryServerRoomInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryServerRoomInfoRes[];
  msg?: string;
}

export interface JsonResultListQueryProjectInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryProjectInfoRes[];
  msg?: string;
}

export interface JsonResultListQueryEmployeeRoleRes {
  /** @format int32 */
  code?: number;
  data?: QueryEmployeeRoleRes[];
  msg?: string;
}

export interface JsonResultListQueryEmployeeInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryEmployeeInfoRes[];
  msg?: string;
}

export interface JsonResultListQueryDeviceWcInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryDeviceWcInfoRes[];
  msg?: string;
}

export interface JsonResultListQueryDeviceSnInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryDeviceSnInfoRes[];
  msg?: string;
}

export interface JsonResultListQueryCustomerInfoRes {
  /** @format int32 */
  code?: number;
  data?: QueryCustomerInfoRes[];
  msg?: string;
}

export interface JsonResultListMenuTreeOutputDto {
  /** @format int32 */
  code?: number;
  data?: MenuTreeOutputDto[];
  msg?: string;
}

export interface JsonResultListMaterialGroupVo {
  /** @format int32 */
  code?: number;
  data?: MaterialGroupVo[];
  msg?: string;
}

export interface JsonResultListMallConfPageOutputDto {
  /** @format int32 */
  code?: number;
  data?: MallConfPageOutputDto[];
  msg?: string;
}

export interface JsonResultListConfConfigOutputDto {
  /** @format int32 */
  code?: number;
  data?: ConfConfigOutputDto[];
  msg?: string;
}

export interface JsonResultHotKeywordDto {
  /** @format int32 */
  code?: number;
  data?: HotKeywordDto;
  msg?: string;
}

export interface JsonResultEmployeeRole {
  /** @format int32 */
  code?: number;
  data?: EmployeeRole;
  msg?: string;
}

export interface JsonResultEmployeeInfo {
  /** @format int32 */
  code?: number;
  data?: EmployeeInfo;
  msg?: string;
}

export interface JsonResultDeviceWcInfo {
  /** @format int32 */
  code?: number;
  data?: DeviceWcInfo;
  msg?: string;
}

export interface JsonResultDeviceSnInfo {
  /** @format int32 */
  code?: number;
  data?: DeviceSnInfo;
  msg?: string;
}

export interface JsonResultCustomerInfo {
  /** @format int32 */
  code?: number;
  data?: CustomerInfo;
  msg?: string;
}

export interface JsonResultBannerOutputDto {
  /** @format int32 */
  code?: number;
  data?: BannerOutputDto;
  msg?: string;
}

export interface AdminApiMallConfMaterialDeleteDeleteParams {
  /**
   * ids
   * @example
   */
  ids: string;
}

export interface AdminApiMallConfMaterialQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 分组id
   * @example
   */
  groupId?: number;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 类型 0 图片 1 视频
   * @example
   */
  type?: number;
}

export interface AdminApiMallConfMaterialGroupDeleteDeleteParams {
  /**
   * id
   * @example
   */
  id: number;
}

export interface AdminApiMallConfMaterialGroupQueryListAllGetParams {
  /**
   * 分组名称
   * @example
   */
  name?: string;

  /**
   * 分组类型 0图片 1视频
   * @example
   */
  type?: number;
}

export interface AdminApiMemberExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户名称/手机号/id
   * @example
   */
  searchString?: string;

  /**
   * 状态 1：正常 0：禁用
   * @example
   */
  status?: number;
}

export interface AdminApiMemberQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 用户名称/手机号/id
   * @example
   */
  searchString?: string;

  /**
   * 状态 1：正常 0：禁用
   * @example
   */
  status?: number;
}

export interface AdminApiSmsSendCodeGetParams {
  /**
   * mobile
   * @example
   */
  mobile?: string;

  /**
   * scene
   * @example
   */
  scene?: string;
}

export interface AdminApiSurveyWorkOrderPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 客户名称
   * @example
   */
  customerName?: string;

  /**
   * 机房名称
   * @example
   */
  dataCenterName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单编号
   * @example
   */
  no?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  state?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface AdminApiSysDeptDeleteDeleteParams {
  /**
   * 部门id
   * @example
   */
  id?: number;
}

export interface AdminApiSysDeptQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 部门名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiSysResourceGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 资源名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 父级菜单ID
   * @example
   */
  parentId?: number;

  /**
   * 资源类型
   * @example
   */
  type?: string;
}

export interface AdminApiSysResourceTreeGetParams {
  /**
   * 资源名称
   * @example
   */
  name?: string;

  /**
   * 父级ID
   * @example
   */
  parentId?: number;

  /**
   * 资源类型
   * @example
   */
  type?: string;
}

export interface AdminApiSysRoleDeleteDeleteParams {
  /**
   * 角色id
   * @example
   */
  id?: number;
}

export interface AdminApiSysRoleQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 角色名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiSysUserDeleteDeleteParams {
  /**
   * 员工id
   * @example
   */
  id?: number;
}

export interface AdminApiSysUserExportGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 员工名称
   * @example
   */
  username?: string;
}

export interface AdminApiSysUserQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 员工名称
   * @example
   */
  username?: string;
}

export interface AdminApiSysUserResetDefaultDeleteParams {
  /**
   * 员工id
   * @example
   */
  id?: number;
}

export interface AdminApiUpWorkOrderHistoryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 上架工单id
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiUpWorkOrderPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 客户名称
   * @example
   */
  customerName?: string;

  /**
   * 客户系统订单号
   * @example
   */
  customerOrderNo?: string;

  /**
   * 机房名称
   * @example
   */
  dataCenterName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单编号
   * @example
   */
  no?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  state?: string;

  /**
   * 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  stateList?: string[];
}

export interface AdminApiUpWorkOrderDeviceRelationPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单id
   * @example
   */
  orderId?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminCustomerQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 联系人手机
   * @example
   */
  contactPersonPhone?: string;

  /**
   * 中文版本的客户联系人
   * @example
   */
  contactPersonZh?: string;

  /**
   * 客户编码
   * @example
   */
  customerCode?: string;

  /**
   * 客户级别
   * @example
   */
  customerLevel?: number;

  /**
   * 中文版本的客户名称
   * @example
   */
  customerNameZh?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @example
   */
  surveyStatus?: number;

  /**
   * 中文版本的终端客户
   * @example
   */
  terminalCustomerZh?: string;
}

export interface AdminCustomerQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 联系人手机
   * @example
   */
  contactPersonPhone?: string;

  /**
   * 中文版本的客户联系人
   * @example
   */
  contactPersonZh?: string;

  /**
   * 客户编码
   * @example
   */
  customerCode?: string;

  /**
   * 客户级别
   * @example
   */
  customerLevel?: number;

  /**
   * 中文版本的客户名称
   * @example
   */
  customerNameZh?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @example
   */
  surveyStatus?: number;

  /**
   * 中文版本的终端客户
   * @example
   */
  terminalCustomerZh?: string;
}

export interface AdminDeviceSnInfoQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的设备型号
   * @example
   */
  deviceModelZh?: string;

  /**
   * 中文版本的设备名称
   * @example
   */
  deviceNameZh?: string;

  /**
   * 设备SN码
   * @example
   */
  deviceSnCode?: string;

  /**
   * 设备WC码
   * @example
   */
  deviceWcCode?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 归属项目单编号
   * @example
   */
  projectOrderNumber?: string;

  /**
   * 所属机房ID
   * @example
   */
  serverRoomId?: number;
}

export interface AdminDeviceSnInfoQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的设备型号
   * @example
   */
  deviceModelZh?: string;

  /**
   * 中文版本的设备名称
   * @example
   */
  deviceNameZh?: string;

  /**
   * 设备SN码
   * @example
   */
  deviceSnCode?: string;

  /**
   * 设备WC码
   * @example
   */
  deviceWcCode?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 归属项目单编号
   * @example
   */
  projectOrderNumber?: string;

  /**
   * 所属机房ID
   * @example
   */
  serverRoomId?: number;
}

export interface AdminDeviceWcQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的设备型号
   * @example
   */
  deviceModelZh?: string;

  /**
   * 中文版本的设备名称
   * @example
   */
  deviceNameZh?: string;

  /**
   * 设备WC码
   * @example
   */
  deviceWcCode?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminDeviceWcQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的设备型号
   * @example
   */
  deviceModelZh?: string;

  /**
   * 中文版本的设备名称
   * @example
   */
  deviceNameZh?: string;

  /**
   * 设备WC码
   * @example
   */
  deviceWcCode?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminEmployeeRoleQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 员工单据权限 survey_work、up_work
   * @example
   */
  employeePermissions?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 角色名称
   * @example
   */
  roleName?: string;
}

export interface AdminEmployeeRoleQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 员工单据权限 survey_work、up_work
   * @example
   */
  employeePermissions?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 角色名称
   * @example
   */
  roleName?: string;
}

export interface AdminEmployeeInfoPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 员工名称/手机号
   * @example
   */
  content?: string;

  /**
   * 员工角色Id
   * @example
   */
  employeeRoleId?: number;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 账号状态 0 禁用 1 启用
   * @example
   */
  status?: number;
}

export interface AdminHotKeywordGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 热词
   * @example
   */
  hotKeyword?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminMallBannerQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 名称
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 显示状态 1显示0不显示
   * @example
   */
  showStatus?: number;
}

export interface AdminMallConfigQueryByKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface AdminMallConfigQueryByMultipleKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface AdminMallPageDeleteDeleteParams {
  /**
   * 自定义页面id
   * @example
   */
  id: number;
}

export interface AdminMallPageDetailGetParams {
  /**
   * 自定义页面id
   * @example
   */
  id?: number;
}

export interface AdminMallPageQueryGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminProjectPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 客户id
   * @example
   */
  customerId?: number;

  /**
   * 客户名称
   * @example
   */
  customerName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 项目名称
   * @example
   */
  projectName?: string;

  /**
   * 项目单编号
   * @example
   */
  projectOrderNumber?: string;

  /**
   * 站点类型 0 新站点，1 老站点
   * @example
   */
  siteInfo?: number;
}

export interface AdminRichtextGetParams {
  /**
   * id
   * @example
   */
  id?: number;
}

export interface AdminServerRoomQueryListGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的机房名称
   * @example
   */
  dataCenterNameZh?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 机房编码
   * @example
   */
  serverRoomCode?: string;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @example
   */
  surveyStatus?: number;
}

export interface AdminServerRoomQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 所属客户ID
   * @example
   */
  customerId?: number;

  /**
   * 中文版本的机房名称
   * @example
   */
  dataCenterNameZh?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 机房编码
   * @example
   */
  serverRoomCode?: string;

  /**
   * 数据状态 0 未工勘 1 已工勘
   * @example
   */
  surveyStatus?: number;
}

export interface WechatApiSmsSendCodeGetParams {
  /**
   * mobile
   * @example
   */
  mobile?: string;

  /**
   * scene
   * @example
   */
  scene?: string;
}

export interface WechatApiSurveyWorkOrderPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 客户名称
   * @example
   */
  customerName?: string;

  /**
   * 机房名称
   * @example
   */
  dataCenterName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单编号
   * @example
   */
  no?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 工单状态:INIT-待工勘,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  state?: string;

  /**
   * 用户id
   * @example
   */
  userId?: number;
}

export interface WechatApiUpWorkOrderHistoryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 上架工单id
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatApiUpWorkOrderPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 客户名称
   * @example
   */
  customerName?: string;

  /**
   * 客户系统订单号
   * @example
   */
  customerOrderNo?: string;

  /**
   * 机房名称
   * @example
   */
  dataCenterName?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单编号
   * @example
   */
  no?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  state?: string;

  /**
   * 工单状态:IN_SURVEY-待工勘,IN_APPOINTMENT-待预约时间,IN_SIGN-待签到,IN_UP-待上架,IN_AUDIT-待审核,COMPLETED-已完成,CLOSED-已关闭
   * @example
   */
  stateList?: string[];
}

export interface WechatApiUpWorkOrderDeviceRelationPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单id
   * @example
   */
  orderId?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatAuthTestGetParams {
  /**
   * id
   * @example
   */
  id: number;

  /**
   * registrationId
   * @example
   */
  registrationId: string;
}

export interface WechatEmployeeInfoThirdPartyEngineerPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 第三方工程师名字
   * @example
   */
  name?: string;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatMallConfigQueryByKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface WechatMallConfigQueryByMultipleKeyGetParams {
  /**
   * key
   * @example
   */
  key?: string;
}

export interface WechatRichtextGetParams {
  /**
   * id
   * @example
   */
  id?: number;
}

export interface WechatWebMemberDecodePhoneGetParams {
  /**
   * code
   * @example
   */
  code?: string;

  /**
   * encrypted
   * @example
   */
  encrypted?: string;

  /**
   * iv
   * @example
   */
  iv?: string;
}

export interface WechatWebMemberDecodeUserInfoGetParams {
  /**
   * code
   * @example
   */
  code?: string;

  /**
   * encrypted
   * @example
   */
  encrypted?: string;

  /**
   * iv
   * @example
   */
  iv?: string;
}

export interface WechatWebMemberExistsUnionIdGetParams {
  /**
   * code
   * @example
   */
  code?: string;
}

export interface WechatWebMemberSaveUserInfoPutParams {
  /**
   * 用户头像
   * @example
   */
  avatarUrl?: string;

  /**
   * 出生年月
   * @example
   */
  birthday?: string;

  /**
   * 性别 1男 2女 0未知
   * @example
   */
  gender?: string;

  /**
   * 用户昵称
   * @example
   */
  nickName?: string;
}

export interface WechatWebMemberUpdateMobilePutParams {
  /**
   * 验证码
   * @example
   */
  code?: string;

  /**
   * 手机号
   * @example
   */
  mobile?: string;
}

export interface WechatMessagesQueryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface WechatApiUpWorkOrderAppointmentHistoryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单id
   * @example
   */
  orderId?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiUpWorkOrderAppointmentHistoryPageGetParams {
  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 工单id
   * @example
   */
  orderId?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;
}

export interface AdminApiOpenApiSecurityPageGetParams {
  /**
   * 客户标识码
   * @example
   */
  appId?: string;

  /**
   * 开始时间
   * @example
   */
  beginTime?: string;

  /**
   * 查询条件
   * @example
   */
  condition?: string;

  /**
   * 结束时间
   * @example
   */
  endTime?: string;

  /**
   * 主键
   * @example
   */
  id?: number;

  /**
   * 当前页码
   * @example
   */
  pageNum?: number;

  /**
   * 每页数据量
   * @example
   */
  pageSize?: number;

  /**
   * 请求方名称
   * @example
   */
  source?: string;
}

export interface WechatApiUpWorkOrderGetAddressGetParams {
  /**
   * itude
   * @example
   */
  itude?: string;
}
