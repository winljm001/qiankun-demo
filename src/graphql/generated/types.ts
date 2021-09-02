export type Maybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** java.math.BigDecimal */
  BigDecimal: number
  /** An RFC-3339 compliant Full Date Scalar */
  Date: number
  /** Long type */
  Long: number
  _FieldSet: any
}

/**  报表相关枚举 */
export type BaseSelectOption = {
  __typename?: 'BaseSelectOption'
  label: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
  disable: Maybe<Scalars['Boolean']>
}

export type Category = {
  __typename?: 'Category'
  /** 品类id */
  categoryId: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 品类排序 */
  categorySort: Maybe<Scalars['Int']>
  /** 语言 */
  nameLocale: Maybe<Array<Maybe<NamePayload>>>
}

export type CategoryInput = {
  /**  商品分类id */
  categoryId?: Maybe<Scalars['Int']>
  /**  商品分类名称 */
  nameLocale?: Maybe<Array<Maybe<NameInput>>>
  /**  商品类型id */
  commodityTypeId: Scalars['Int']
  /**  排序 */
  categorySort: Scalars['Int']
}

export type CategoryPage = {
  __typename?: 'CategoryPage'
  records: Maybe<Array<Maybe<Category>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

export type CommodityDetailPayload = {
  __typename?: 'CommodityDetailPayload'
  /**  商品id */
  commodityId: Maybe<Scalars['Int']>
  /**  商品名称 */
  commodityName: Maybe<Scalars['String']>
  /**  商品类型id */
  commodityTypeId: Maybe<Scalars['String']>
  /**  商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /**  商品品类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /**  商品品种名称 */
  commodityVarietyName: Maybe<Scalars['String']>
  /**  商品产地名称 */
  commodityPlaceOriginName: Maybe<Scalars['String']>
  /**  英语 */
  englishName: Maybe<Scalars['String']>
  /**  泰语 */
  thailandName: Maybe<Scalars['String']>
  /**  越南语 */
  vietnamName: Maybe<Scalars['String']>
}

export type CommodityModifyInput = {
  commodityId?: Maybe<Scalars['Int']>
  commoditySpecs?: Maybe<Array<Maybe<CommoditySpecInput>>>
}

export type CommodityPagePayload = {
  __typename?: 'CommodityPagePayload'
  /**  商品id */
  commodityId: Maybe<Scalars['Int']>
  /**  商品名称 */
  commodityName: Maybe<Scalars['String']>
  /**  商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /**  商品品类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /**  商品品种名称 */
  commodityVarietyName: Maybe<Scalars['String']>
  /**  商品产地名称 */
  commodityPlaceOriginName: Maybe<Scalars['String']>
  /**  激活状态 */
  status: Maybe<Scalars['Int']>
  /**  sku总数 */
  skuSum: Maybe<Scalars['Int']>
}

/** 商品分页对象 */
export type CommodityPageResult = {
  __typename?: 'CommodityPageResult'
  records: Maybe<Array<Maybe<CommodityPagePayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

export type CommoditySkuInputSave = {
  commoditySkuSaveInput?: Maybe<Array<Maybe<CommoditySkuSaveInput>>>
}

export type CommoditySkuSaveInput = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 规格类型不可为空 */
  commoditySpecIdList: Array<Scalars['Int']>
  /** 规格选项不可为空 */
  commoditySpecOptionIdsList: Array<Scalars['Int']>
}

export type CommoditySpecDetailPayload = {
  __typename?: 'CommoditySpecDetailPayload'
  /**  商品规格ID */
  commoditySpecId: Maybe<Scalars['Int']>
  /**  商品规格名称 */
  commoditySpecName: Maybe<Scalars['String']>
  /**  商品规格排序 */
  commoditySpecSort: Maybe<Scalars['Int']>
  /**  商品规格选项列表信息 */
  commoditySpecOptionDetailPayload: Maybe<Array<Maybe<CommoditySpecOptionDetailPayload>>>
}

export type CommoditySpecInput = {
  commoditySpecId?: Maybe<Scalars['Int']>
  commoditySpecName?: Maybe<Scalars['String']>
  commoditySpecOptionList?: Maybe<Array<Maybe<CommoditySpecOptionInput>>>
  commoditySpecSort?: Maybe<Scalars['Int']>
  nameLocale?: Maybe<NameLocale>
}

export type CommoditySpecOptionConditionInput = {
  /** 规格id */
  commoditySpecId?: Maybe<Scalars['Int']>
  /** 规格选项id */
  commoditySpecOptionId?: Maybe<Scalars['Int']>
}

export type CommoditySpecOptionDetailPayload = {
  __typename?: 'CommoditySpecOptionDetailPayload'
  /**  规格选项id */
  commoditySpecOptionId: Maybe<Scalars['Int']>
  /**  规格选项名称 */
  commoditySpecOptionName: Maybe<Scalars['String']>
}

export type CommoditySpecOptionInput = {
  commoditySpecOptionId?: Maybe<Scalars['Int']>
  commoditySpecOptionName?: Maybe<Scalars['String']>
  nameLocale?: Maybe<NameLocale>
  commoditySpecOptionSort?: Maybe<Scalars['Int']>
}

export type CommoditySpecOptionPayload = {
  __typename?: 'CommoditySpecOptionPayload'
  commoditySpecOptionId: Maybe<Scalars['Int']>
  commoditySpecOptionName: Maybe<Scalars['String']>
  nameLocale: Maybe<NameLocalePayload>
  commoditySpecOptionSort: Maybe<Scalars['Int']>
}

export type CommoditySpecPayload = {
  __typename?: 'CommoditySpecPayload'
  commoditySpecId: Maybe<Scalars['Int']>
  commoditySpecName: Maybe<Scalars['String']>
  commoditySpecOptionList: Maybe<Array<Maybe<CommoditySpecOptionPayload>>>
  commoditySpecSort: Maybe<Scalars['Int']>
  nameLocale: Maybe<NameLocalePayload>
}

export type CommodityTypePayload = {
  __typename?: 'CommodityTypePayload'
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 上级类型id */
  parentCommodityTypeId: Maybe<Scalars['Int']>
}

export type CreateOrgGroupInput = {
  name?: Maybe<Scalars['String']>
}

/** 添加sku */
export type CreateVarietyGroupSkuInput = {
  group: Scalars['Int']
  skuId: Array<Maybe<Scalars['Int']>>
}

/**  当前用户信息 */
export type CurrentUserPayload = {
  __typename?: 'CurrentUserPayload'
  /** 用户ID */
  userId: Maybe<Scalars['Int']>
  /** 用户名称 */
  userName: Maybe<Scalars['String']>
  /** 联系方式 */
  phone: Maybe<Scalars['String']>
  /** 团队角色 */
  roleNames: Maybe<Array<Maybe<Scalars['String']>>>
  /** 头像 */
  avatar: Maybe<Scalars['String']>
  /** 公司名称 */
  organizationName: Maybe<Scalars['String']>
}

export type CustomerDistributionInput = {
  /**  配送ID */
  distributionId?: Maybe<Scalars['Int']>
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  配送名称 */
  distributionName?: Maybe<Scalars['String']>
  /**  联系人 */
  contacts?: Maybe<Scalars['String']>
  /**  联系电话 */
  phoneNum?: Maybe<Scalars['String']>
  /**  配送地址 */
  distributionAddr?: Maybe<Scalars['String']>
}

export type CustomerDistributionVo = {
  __typename?: 'CustomerDistributionVO'
  /**  配送ID */
  distributionId: Maybe<Scalars['Int']>
  /**  客户ID */
  customerId: Maybe<Scalars['Int']>
  /**  配送名称 */
  distributionName: Maybe<Scalars['String']>
  /**  联系人 */
  contacts: Maybe<Scalars['String']>
  /**  联系电话 */
  phoneNum: Maybe<Scalars['String']>
  /**  配送地址 */
  distributionAddr: Maybe<Scalars['String']>
}

/** 客户分组实体 */
export type CustomerGroupResponse = {
  __typename?: 'CustomerGroupResponse'
  customerGroupId: Maybe<Scalars['Int']>
  customerGroupName: Maybe<Scalars['String']>
}

export type CustomerInput = {
  /**  配送ID */
  distributionId?: Maybe<Scalars['Int']>
  /**  客户ID */
  customerId?: Maybe<Scalars['Int']>
  /**  配送名称 */
  distributionName?: Maybe<Scalars['String']>
  /**  联系人 */
  contacts?: Maybe<Scalars['String']>
  /**  联系电话 */
  phoneNum?: Maybe<Scalars['String']>
  /**  配送地址 */
  distributionAddr?: Maybe<Scalars['String']>
}

/** 客户分页实体 */
export type CustomerPageResult = {
  __typename?: 'CustomerPageResult'
  records: Maybe<Array<Maybe<CustomerVo>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

/**  客户类型 */
export enum CustomerType {
  /** 个人 */
  Personal = 'PERSONAL',
  /** 公司 */
  Company = 'COMPANY',
  /** 零售 */
  Retail = 'RETAIL',
}

/** 客户返回实体 */
export type CustomerVo = {
  __typename?: 'CustomerVO'
  /**  客户ID */
  customerId: Maybe<Scalars['Int']>
  /**  客户分组ID */
  customerGroupId: Maybe<Scalars['Int']>
  /**  客户分组名称 */
  customerGroupName: Maybe<Scalars['String']>
  /**  客户名称 */
  customerName: Maybe<Scalars['String']>
  /**  客户简称 */
  customerShortName: Maybe<Scalars['String']>
  /**  备注信息 */
  remark: Maybe<Scalars['String']>
  /**  创建时间 */
  createTime: Maybe<Scalars['Long']>
  /**  配送信息 */
  customerDistribution: Maybe<Array<Maybe<CustomerDistributionVo>>>
}

/** 批量删除 */
export type DelVarietyGroupSkuInput = {
  varietyGroupSkuId: Array<Maybe<Scalars['Int']>>
}

export enum ErrorDetail {
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
}

export enum ErrorType {
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
}

export type File = {
  __typename?: 'File'
  fileId: Maybe<Scalars['String']>
  fileUrl: Maybe<Scalars['String']>
  filename: Maybe<Scalars['String']>
}

export type FileInput = {
  fileId?: Maybe<Scalars['String']>
  fileUrl?: Maybe<Scalars['String']>
  filename?: Maybe<Scalars['String']>
}

export type FinishedPageProductPaload = {
  __typename?: 'FinishedPageProductPaload'
  /**  商品skuId */
  commoditySkuId: Maybe<Scalars['Int']>
  /**  商品id */
  commodityId: Maybe<Scalars['Int']>
  /**  商品名称 */
  commodityName: Maybe<Scalars['String']>
  /**  商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /**  商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /**  商品规格 */
  specText: Maybe<Array<Maybe<Scalars['String']>>>
  /**  商品分类id */
  commodityCategoryId: Maybe<Scalars['Int']>
  /**  商品分类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /**  商品品种 */
  varietyName: Maybe<Scalars['String']>
  /**  商品产地 */
  placeOriginName: Maybe<Scalars['String']>
}

/** 品种组sku选择列表 */
export type GroupSkuInput = {
  typeId?: Maybe<Scalars['Int']>
  categoryId?: Maybe<Scalars['Int']>
  varietyId?: Maybe<Scalars['Int']>
  origin?: Maybe<Scalars['Int']>
  specId?: Maybe<Array<Maybe<Scalars['Int']>>>
  optionId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/**  入库类型 */
export enum InBoundType {
  /**  采购入库 */
  Purchasing = 'PURCHASING',
  /**  盘盈入库 */
  InventoryProfit = 'INVENTORY_PROFIT',
  /**  退货入库 */
  Returns = 'RETURNS',
  /**  其他入库 */
  EntryOther = 'ENTRY_OTHER',
}

export type InsertCommodityInput = {
  commodityId?: Maybe<Scalars['Int']>
  /**  商品名称 */
  commodityName: Scalars['String']
  /**  商品类型id */
  commodityTypeId: Scalars['Int']
  /**  商品品类id */
  commodityCategoryId: Scalars['Int']
  /**  商品品种id */
  commodityVarietyId?: Maybe<Scalars['Int']>
  /**  商品产地id */
  commodityPlaceOriginId?: Maybe<Scalars['Int']>
  /**  多语言c */
  nameLocale?: Maybe<NameLocale>
  /**  规格信息 */
  commoditySpecs: Array<Maybe<InsertCommoditySpecInput>>
}

export type InsertCommoditySpecInput = {
  /**  商品规格id */
  commoditySpecId?: Maybe<Scalars['Int']>
  /**  商品规格名称 */
  commoditySpecName: Scalars['String']
  /**  商品规格排序 */
  commoditySpecSort: Scalars['Int']
  /**  多语言 */
  nameLocale?: Maybe<NameLocale>
  /**  商品规格选项列表信息 */
  commoditySpecOptions: Array<Maybe<InsertCommoditySpecOptionInput>>
}

export type InsertCommoditySpecOptionInput = {
  /**  商品规格选项ID */
  commoditySpecOptionId?: Maybe<Scalars['Int']>
  /**  商品规格选项名称 */
  commoditySpecOptionName: Scalars['String']
  /**  多语言 */
  nameLocale?: Maybe<NameLocale>
  /**  规则选项排序 */
  commoditySpecOptionSort: Scalars['Int']
}

export type ListSku = {
  __typename?: 'ListSku'
  /** sku Id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 规格选项 */
  skuOption: Maybe<Array<Maybe<SkuOption>>>
  /** 总计类型 */
  total: Maybe<Scalars['String']>
  /** 单位数量 */
  unit: Maybe<Scalars['String']>
  /** 状态 */
  status: Maybe<Scalars['Int']>
  /** 变更状态 */
  change: Maybe<Scalars['Int']>
  /** 属性 */
  property: Maybe<Array<Maybe<Scalars['String']>>>
}

/**  登陆参数 */
export type LoginInput = {
  /**  手机号 */
  phone: Scalars['String']
  /**  验证码 */
  code: Scalars['String']
}

export type MerchantIdInput = {
  /**  商户ID */
  id: Scalars['Int']
}

/**  修改商户 */
export type MerchantInput = {
  /**  id */
  id?: Maybe<Scalars['Int']>
  /** 商户名称 */
  name?: Maybe<Scalars['String']>
  /** 组织架构ID */
  orgGroupId: Scalars['Int']
  /**  组织ID */
  orgId: Scalars['Int']
  /** 负责人ID */
  userId: Scalars['Int']
  /** 负责人名称 */
  userName?: Maybe<Scalars['String']>
  /** 登陆手机号 */
  phone?: Maybe<Scalars['String']>
}

/** 获取商户列表入参 */
export type MerchantPageInput = {
  pageCurrent: Scalars['Int']
  pageSize: Scalars['Int']
  /** 商户名称 */
  name?: Maybe<Scalars['String']>
  /** 登陆手机号 */
  phone?: Maybe<Scalars['String']>
  /** 负责人名称 */
  userName?: Maybe<Scalars['String']>
}

/** 商户分页信息 */
export type MerchantPagePayload = {
  __typename?: 'MerchantPagePayload'
  records: Maybe<Array<Maybe<MerchantPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Int']>
}

/** 商户列表返回 */
export type MerchantPayload = {
  __typename?: 'MerchantPayload'
  /** 商户id */
  id: Maybe<Scalars['Int']>
  /** 商户名称 */
  name: Maybe<Scalars['String']>
  /** 负责人名称 */
  userName: Maybe<Scalars['String']>
  /** 登陆手机号 */
  phone: Maybe<Scalars['String']>
  /** 所属组织架构名称 */
  orgGroupName: Maybe<Scalars['String']>
  /** 所属组织架构ID */
  orgGroupId: Maybe<Scalars['Int']>
  /** 所属组织名称 */
  orgName: Maybe<Scalars['String']>
  /** 所属组织ID */
  orgId: Maybe<Scalars['Int']>
  /** 操作ID */
  userId: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** 新增sku */
  doSaveSkuList: Maybe<Array<Maybe<Scalars['Int']>>>
  /**  新增或修改品种 */
  modifyCategoryVariety: Maybe<Scalars['Int']>
  /**  删除品种 */
  deleteCategoryVariety: Maybe<Scalars['Boolean']>
  /**  新增或修改场地关联关系 */
  modifyCategoryPlace: Maybe<Scalars['Int']>
  /**  删除场地关联关系 */
  deleteCategoryPlace: Maybe<Scalars['Boolean']>
  modifyPlace: Maybe<Scalars['Int']>
  deletePlace: Maybe<Scalars['Boolean']>
  /**  创建商品分类 */
  createCategory: Maybe<Category>
  /**  修改商品分类 */
  updateCategory: Maybe<Category>
  /**  删除商品分类接口 */
  deleteCategory: Maybe<Scalars['Boolean']>
  /**     新增商品 */
  doInsertCommodity: Maybe<Scalars['Int']>
  /**     修改商品名称 */
  doUpdateCommodityName: Maybe<Scalars['Int']>
  updateSpec: Maybe<Scalars['Int']>
  /**  编辑品种组 */
  updateVarietyGroup: Maybe<VarietyGroup>
  /**  新增品种组 */
  createVarietyGroup: Maybe<VarietyGroup>
  /** 批量删除 */
  delVarietyGroupSku: Maybe<Scalars['Boolean']>
  /** 添加sku */
  createVarietyGroupSku: Maybe<Scalars['Boolean']>
  /**  创建客户 */
  createCustomer: Maybe<Scalars['Int']>
  /**  更新客户 */
  updateCustomer: Maybe<Scalars['Int']>
  /**  删除客户 */
  deleteCustomer: Maybe<Scalars['Boolean']>
  /**  创建客户地址 */
  createCustomerDistribution: Maybe<Scalars['Int']>
  /**  更新客户地址 */
  updateCustomerDistribution: Maybe<Scalars['Int']>
  /**  删除客户地址 */
  deleteCustomerDistribution: Maybe<Scalars['Boolean']>
  /**  创建供应商 */
  createSupplier: Maybe<Scalars['Int']>
  /**  更新供应商 */
  updateSupplier: Maybe<Scalars['Int']>
  /**  删除供应商 */
  deleteSupplier: Maybe<Scalars['Boolean']>
  /** 登陆,返回登陆令牌token */
  login: Maybe<Scalars['String']>
  /** 发送验证码 */
  sendCodeMsg: Maybe<Scalars['Boolean']>
  /** 刷新token */
  refreshToken: Maybe<Scalars['String']>
  /** 创建用户 */
  createUserMange: Maybe<Scalars['String']>
  /** 修改用户 */
  updateUserManage: Maybe<Scalars['Boolean']>
  /** 修改密码 */
  updatePassword: Maybe<Scalars['Boolean']>
  /** 创建商户 */
  creteMerchant: Maybe<Scalars['Boolean']>
  /** 修改商户 */
  updateMerchant: Maybe<Scalars['Boolean']>
  /**  创建组织架构 */
  createOrgGroup: Maybe<Scalars['Boolean']>
  /**  创建组织 */
  createOrg: Maybe<Scalars['Boolean']>
  /**  修改组织 */
  updateOrg: Maybe<Scalars['Boolean']>
  /** 新增bom */
  pitayaSaveCommodityBom: Maybe<Scalars['Int']>
  /** 修改bom */
  pitayaUpdateCommodityBom: Maybe<Scalars['Int']>
  /** 删除bom */
  pitayaDeleteCommodityBom: Maybe<Scalars['Boolean']>
  /** 添加sku */
  pitayaCreateCommoditySku: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 编辑sku */
  pitayaUpdateCommoditySku: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 编辑sku状态 */
  pitayaUpdateSkuStatus: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 添加商品 */
  pitayaCreateCommodity: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态变更 */
  pitayaUpdateCommodityStatus: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 添加sku */
  peachCreateCommoditySku: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 编辑sku状态 */
  peachUpdateSkuStatus: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 添加商品 */
  peachCreateCommodity: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品状态变更 */
  peachUpdateCommodityStatus: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationDoSaveSkuListArgs = {
  commoditySkus?: Maybe<CommoditySkuInputSave>
}

export type MutationModifyCategoryVarietyArgs = {
  varietyInput?: Maybe<VarietyInput>
}

export type MutationDeleteCategoryVarietyArgs = {
  varietyId: Scalars['Int']
}

export type MutationModifyCategoryPlaceArgs = {
  placeInput?: Maybe<PlaceInput>
}

export type MutationDeleteCategoryPlaceArgs = {
  placeInput?: Maybe<PlaceInput>
}

export type MutationModifyPlaceArgs = {
  placeInput?: Maybe<PlaceInput>
}

export type MutationDeletePlaceArgs = {
  placeId: Scalars['Int']
}

export type MutationCreateCategoryArgs = {
  categoryInput?: Maybe<CategoryInput>
}

export type MutationUpdateCategoryArgs = {
  categoryInput?: Maybe<CategoryInput>
}

export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Int']
}

export type MutationDoInsertCommodityArgs = {
  insertCommodityInput?: Maybe<InsertCommodityInput>
}

export type MutationDoUpdateCommodityNameArgs = {
  updateCommodityNameInput?: Maybe<UpdateCommodityNameInput>
}

export type MutationUpdateSpecArgs = {
  commodityModifyInput?: Maybe<CommodityModifyInput>
}

export type MutationUpdateVarietyGroupArgs = {
  varietyGroupInput?: Maybe<VarietyGroupInput>
}

export type MutationCreateVarietyGroupArgs = {
  groupName: Scalars['String']
}

export type MutationDelVarietyGroupSkuArgs = {
  delVarietyGroupSkuInput?: Maybe<DelVarietyGroupSkuInput>
}

export type MutationCreateVarietyGroupSkuArgs = {
  createVarietyGroupSkuInput?: Maybe<CreateVarietyGroupSkuInput>
}

export type MutationCreateCustomerArgs = {
  customerInput?: Maybe<CustomerInput>
}

export type MutationUpdateCustomerArgs = {
  customerInput?: Maybe<CustomerInput>
}

export type MutationDeleteCustomerArgs = {
  customerId?: Maybe<Scalars['Int']>
}

export type MutationCreateCustomerDistributionArgs = {
  customerDistributionInput?: Maybe<CustomerDistributionInput>
}

export type MutationUpdateCustomerDistributionArgs = {
  customerDistributionInput?: Maybe<CustomerDistributionInput>
}

export type MutationDeleteCustomerDistributionArgs = {
  distributionId?: Maybe<Scalars['Int']>
}

export type MutationCreateSupplierArgs = {
  supplierInput?: Maybe<SupplierInput>
}

export type MutationUpdateSupplierArgs = {
  supplierInput?: Maybe<SupplierInput>
}

export type MutationDeleteSupplierArgs = {
  supplierId?: Maybe<Scalars['Int']>
}

export type MutationLoginArgs = {
  input?: Maybe<LoginInput>
}

export type MutationSendCodeMsgArgs = {
  input?: Maybe<SendCodeMsgInput>
}

export type MutationCreateUserMangeArgs = {
  input?: Maybe<UserMangerInput>
}

export type MutationUpdateUserManageArgs = {
  input?: Maybe<UserMangerInput>
}

export type MutationUpdatePasswordArgs = {
  input?: Maybe<UpdatePasswordInput>
}

export type MutationCreteMerchantArgs = {
  input?: Maybe<MerchantInput>
}

export type MutationUpdateMerchantArgs = {
  input?: Maybe<MerchantInput>
}

export type MutationCreateOrgGroupArgs = {
  input?: Maybe<CreateOrgGroupInput>
}

export type MutationCreateOrgArgs = {
  input?: Maybe<OrgInput>
}

export type MutationUpdateOrgArgs = {
  input?: Maybe<OrgInput>
}

export type MutationPitayaSaveCommodityBomArgs = {
  saveCommodityBomInput?: Maybe<PitayaSaveBomInput>
}

export type MutationPitayaUpdateCommodityBomArgs = {
  updateCommodityBomInput?: Maybe<PitayaUpdateBomInput>
}

export type MutationPitayaDeleteCommodityBomArgs = {
  bomId?: Maybe<Scalars['Int']>
}

export type MutationPitayaCreateCommoditySkuArgs = {
  commoditySkuId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationPitayaUpdateCommoditySkuArgs = {
  updateCommoditySkuInput?: Maybe<PitayaUpdateCommoditySkuInput>
}

export type MutationPitayaUpdateSkuStatusArgs = {
  updateStatusInput?: Maybe<PitayaUpdateStatusInput>
}

export type MutationPitayaCreateCommodityArgs = {
  createCommodityInput?: Maybe<PitayaListCreateCommodityInput>
}

export type MutationPitayaUpdateCommodityStatusArgs = {
  updateCommodityStatusInput?: Maybe<PitayaUpdateCommodityStatusInput>
}

export type MutationPeachCreateCommoditySkuArgs = {
  commoditySkuId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type MutationPeachUpdateSkuStatusArgs = {
  updateStatusInput?: Maybe<PeachUpdateStatusInput>
}

export type MutationPeachCreateCommodityArgs = {
  createCommodityInput?: Maybe<PeachListCreateCommodityInput>
}

export type MutationPeachUpdateCommodityStatusArgs = {
  updateCommodityStatusInput?: Maybe<PeachUpdateCommodityStatusInput>
}

export type NameInput = {
  locale?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type NameLocale = {
  chineseName?: Maybe<Scalars['String']>
  englishName?: Maybe<Scalars['String']>
  thailandName?: Maybe<Scalars['String']>
  vietnamName?: Maybe<Scalars['String']>
}

export type NameLocalePayload = {
  __typename?: 'NameLocalePayload'
  chineseName: Maybe<Scalars['String']>
  englishName: Maybe<Scalars['String']>
  thailandName: Maybe<Scalars['String']>
  vietnamName: Maybe<Scalars['String']>
}

export type NamePayload = {
  __typename?: 'NamePayload'
  locale: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
}

/**
 * sku列表
 * 可选sku
 */
export type NotChosenSkuOption = {
  __typename?: 'NotChosenSkuOption'
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 规格选项 */
  optionId: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Option = {
  __typename?: 'Option'
  label: Maybe<Scalars['String']>
  value: Maybe<Scalars['Int']>
}

export type Option2 = {
  __typename?: 'Option2'
  label: Maybe<Scalars['String']>
  value: Maybe<Scalars['String']>
}

export type OptionList = {
  __typename?: 'OptionList'
  options: Maybe<Array<Maybe<BaseSelectOption>>>
}

/**  列表集合对象 */
export type OrderReportFormListPayload = {
  __typename?: 'OrderReportFormListPayload'
  /**  主键 */
  id: Maybe<Scalars['Long']>
  /**  订单号 */
  orderCode: Maybe<Scalars['String']>
  /**  商品及数量 */
  productAndCount: Maybe<Array<Maybe<ProductObj>>>
  /**  所属商户 */
  merchant: Maybe<Scalars['String']>
  /**  客户类型 */
  customerType: Maybe<Scalars['String']>
  /**  客户名称 */
  customerName: Maybe<Scalars['String']>
  /**  销售员 */
  salesmanName: Maybe<Scalars['String']>
  /**  收银员 */
  cashierName: Maybe<Scalars['String']>
  /**  总数量 */
  totalQuantity: Maybe<Scalars['BigDecimal']>
  /**  应收金额 */
  totalMoney: Maybe<Scalars['BigDecimal']>
  /**  实收金额 */
  receivableMoney: Maybe<Scalars['BigDecimal']>
  /**  优惠金额 */
  discountMoney: Maybe<Scalars['BigDecimal']>
  /**  现金支付金额 */
  cashMoney: Maybe<Scalars['BigDecimal']>
  /**  电子支付金额 */
  elecpayMoney: Maybe<Scalars['BigDecimal']>
  /**  账期支付金额 */
  arrearsMoney: Maybe<Scalars['BigDecimal']>
  /**  支付方式 */
  payMethod: Maybe<Array<Maybe<Scalars['String']>>>
  /**  开单时间 */
  billingTime: Maybe<Scalars['Long']>
  /**  支付时间 */
  payTime: Maybe<Scalars['Long']>
}

/**  列表分页入参 */
export type OrderReportFormPageInput = {
  orderReportFormQueryInput?: Maybe<OrderReportFormQueryInput>
  /**  分页入参 */
  pageInput: Page
}

/**  列表分页对象 */
export type OrderReportFormPagePayload = {
  __typename?: 'OrderReportFormPagePayload'
  records: Maybe<Array<Maybe<OrderReportFormListPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

/**  列表通用查询入参 */
export type OrderReportFormQueryInput = {
  /**  商户ID */
  merchantId?: Maybe<Scalars['Long']>
  /**  订单号 */
  orderCode?: Maybe<Scalars['String']>
  /**  客户类型 */
  customerType?: Maybe<CustomerType>
  /**  客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**  销售员 */
  salesmanName?: Maybe<Scalars['String']>
  /**  收银员 */
  cashierName?: Maybe<Scalars['String']>
  /**  支付方式 */
  payMethod?: Maybe<Array<Maybe<PayMethod>>>
  /**  支付时间起 */
  payStartTime?: Maybe<Scalars['Long']>
  /**  支付时间终 */
  payEndTime?: Maybe<Scalars['Long']>
}

export type OrgGroupPayload = {
  __typename?: 'OrgGroupPayload'
  id: Maybe<Scalars['Int']>
  /** 名称 */
  name: Maybe<Scalars['String']>
}

/** 组织请求参数 */
export type OrgInput = {
  id?: Maybe<Scalars['Int']>
  /** 组织名称 */
  orgName: Scalars['String']
  /** 上级组织ID */
  parentId: Scalars['Int']
  /** 组织架构ID */
  orgGroupId: Scalars['Int']
  /** 多语言 例子：{"zh-CN":"南部榴莲7厂","th-TH":"ภาพใต้แผง7"} */
  nameLocale: Scalars['String']
  /** 国家 1 中国 3 泰国 2 越南 */
  country: Scalars['Int']
  /** 负责人 */
  leadingCadre?: Maybe<Scalars['String']>
  /** 负责人联系电话 */
  phone?: Maybe<Scalars['String']>
  /** 备注 */
  remark?: Maybe<Scalars['String']>
  /** 地址 */
  address?: Maybe<Scalars['String']>
  /** 纬度 */
  lat?: Maybe<Scalars['String']>
  /** 经度 */
  lng?: Maybe<Scalars['String']>
  /** 企业名称 */
  businessName?: Maybe<Scalars['String']>
  /** 法定代表人 */
  legalRep?: Maybe<Scalars['String']>
  /** 社会信用代码 */
  socialCreditCode?: Maybe<Scalars['String']>
  /** 企业地址 */
  businessAddress?: Maybe<Scalars['String']>
  /** 营业执照 */
  bizLicense?: Maybe<Array<Maybe<FileInput>>>
  /** 开户证明 */
  accountCert?: Maybe<Array<Maybe<FileInput>>>
}

/** 组织信息 */
export type OrgPayload = {
  __typename?: 'OrgPayload'
  id: Maybe<Scalars['Int']>
  /** 组织名称 */
  orgName: Scalars['String']
  /** 多语言 例子：{"zh-CN":"南部榴莲7厂","th-TH":"ภาพใต้แผง7"} */
  nameLocale: Scalars['String']
  /** 国家 1 中国 3 泰国 2 越南 */
  country: Scalars['Int']
  /** 负责人 */
  leadingCadre: Maybe<Scalars['String']>
  /** 负责人联系电话 */
  phone: Maybe<Scalars['String']>
  /** 备注 */
  remark: Maybe<Scalars['String']>
  /** 地址 */
  address: Maybe<Scalars['String']>
  /** 纬度 */
  lat: Maybe<Scalars['String']>
  /** 经度 */
  lng: Maybe<Scalars['String']>
  /** 企业名称 */
  businessName: Maybe<Scalars['String']>
  /** 法定代表人 */
  legalRep: Maybe<Scalars['String']>
  /** 社会信用代码 */
  socialCreditCode: Maybe<Scalars['String']>
  /** 企业地址 */
  businessAddress: Maybe<Scalars['String']>
  /** 营业执照 */
  bizLicense: Maybe<Array<Maybe<File>>>
  /** 开户证明 */
  accountCert: Maybe<Array<Maybe<File>>>
  /** 上级组织名称 */
  parentName: Maybe<Scalars['String']>
  /** 上级组织ID */
  parentId: Maybe<Scalars['Int']>
}

export type OrgTreeInput = {
  id?: Maybe<Scalars['Int']>
}

export type OrgTreePayload = {
  __typename?: 'OrgTreePayload'
  /** json数据 格式{key:1,parentId:2,name:"中国",children:[]} */
  treeJson: Maybe<Scalars['String']>
}

/**  列表集合对象 */
export type OutBoundReportFormListPayload = {
  __typename?: 'OutBoundReportFormListPayload'
  /**  主键 */
  id: Maybe<Scalars['Long']>
  /**  出库单号 */
  outboundCode: Maybe<Scalars['String']>
  /**  批次号 */
  batchStockCode: Maybe<Scalars['String']>
  /**  所属商户 */
  merchant: Maybe<Scalars['String']>
  /**  所属仓库 */
  repository: Maybe<Scalars['String']>
  /**  商品名称 */
  productName: Maybe<Scalars['String']>
  /**  出库类型 */
  outboundType: Maybe<Scalars['String']>
  /**  数量 */
  quantity: Maybe<Scalars['BigDecimal']>
  /**  数量单位 */
  unit: Maybe<Scalars['String']>
  /**  出库时间 */
  outboundTime: Maybe<Scalars['Long']>
}

/**  列表分页入参 */
export type OutBoundReportFormPageInput = {
  outBoundReportFormQueryInput?: Maybe<OutBoundReportFormQueryInput>
  /**  分页入参 */
  pageInput: Page
}

/**  列表分页对象 */
export type OutBoundReportFormPagePayload = {
  __typename?: 'OutBoundReportFormPagePayload'
  records: Maybe<Array<Maybe<OutBoundReportFormListPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

/**  列表通用查询入参 */
export type OutBoundReportFormQueryInput = {
  /**  商户ID */
  merchantId?: Maybe<Scalars['Long']>
  /**  出库单号 */
  outBoundNum?: Maybe<Scalars['String']>
  /**  批次号 */
  batchCode?: Maybe<Scalars['String']>
  /**  商品 */
  product?: Maybe<Scalars['String']>
  /**  出库类型 */
  outBoundType?: Maybe<OutBoundType>
  /**  出库时间起 */
  outBoundStartTime?: Maybe<Scalars['Long']>
  /**  出库时间终 */
  outBoundEndTime?: Maybe<Scalars['Long']>
}

/**  出库类型 */
export enum OutBoundType {
  /**  销售出库 */
  Market = 'MARKET',
  /**  盘亏出库 */
  ProfitLoss = 'PROFIT_LOSS',
  /**  调拨出库 */
  Transfer = 'TRANSFER',
  /**  报损出库 */
  Breakage = 'BREAKAGE',
  /**  其他出库 */
  ComeOther = 'COME_OTHER',
}

export type Page = {
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

export type PageCategoryInput = {
  /**  分页参数 */
  page?: Maybe<Page>
  /**  商品类型id */
  commodityTypeId?: Maybe<Scalars['Int']>
  /**  商品分类名称（模糊查询） */
  categoryName?: Maybe<Scalars['String']>
}

export type PageOrgGroupInput = {
  pageCurrent: Scalars['Int']
  pageSize: Scalars['Int']
  /** 组织架构名称 */
  name?: Maybe<Scalars['String']>
}

/** 组织架构分页数据 */
export type PageOrgGroupPayload = {
  __typename?: 'PageOrgGroupPayload'
  records: Maybe<Array<Maybe<OrgGroupPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Int']>
}

/**  盘点记录列表 */
export type PageTakeStockRecordListPayload = {
  __typename?: 'PageTakeStockRecordListPayload'
  records: Maybe<Array<Maybe<TakeStockRecordPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Int']>
}

/** 获取员工列表入参 */
export type PageUserInput = {
  pageCurrent: Scalars['Int']
  pageSize: Scalars['Int']
  /** 组织架构Id */
  orgGroupId?: Maybe<Scalars['Int']>
  /** 组织Id */
  orgId?: Maybe<Scalars['Int']>
  /** 名称 */
  name?: Maybe<Scalars['String']>
}

export type PageVarietyGroupPayload = {
  __typename?: 'PageVarietyGroupPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<VarietyGroup>>>
}

export type PageVarietyGroupSkuPayload = {
  __typename?: 'PageVarietyGroupSkuPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<VarietyGroupSku>>>
}

/**  支付方式 */
export enum PayMethod {
  /**  现金 */
  Cash = 'CASH',
  /**  欠款 */
  Period = 'PERIOD',
  /**  二维码 */
  OrCode = 'OR_CODE',
}

export type PeachCreateCommodityInput = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
  /**  商品品类ID */
  commodityCategoryId: Scalars['Int']
}

export type PeachHeadOther = {
  __typename?: 'PeachHeadOther'
  key: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type PeachHeadSpec = {
  __typename?: 'PeachHeadSpec'
  /** 选项id */
  specId: Maybe<Scalars['Int']>
  /** 选项名称 */
  specName: Maybe<Scalars['String']>
}

export type PeachListCommodityPayLoad = {
  __typename?: 'PeachListCommodityPayLoad'
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品类型 */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 品类id */
  categoryId: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName: Maybe<Scalars['String']>
  /** 品种id */
  varietyId: Maybe<Scalars['Int']>
  /** 品种名称 */
  varietyName: Maybe<Scalars['String']>
  /** 产地id */
  originId: Maybe<Scalars['Int']>
  /** 产地名称 */
  originName: Maybe<Scalars['String']>
  /** sku数量 */
  skuQuantity: Maybe<Scalars['Int']>
  /** 状态 */
  status: Maybe<Scalars['Int']>
}

/**
 * 未添加商品列表
 * 添加商品
 */
export type PeachListCreateCommodityInput = {
  createCommodityInput: Array<Maybe<PeachCreateCommodityInput>>
}

export type PeachListSku = {
  __typename?: 'PeachListSku'
  /** sku Id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 规格选项 */
  skuOption: Maybe<Array<Maybe<SkuOption>>>
  /** 状态 */
  status: Maybe<Scalars['Int']>
}

export type PeachNoCommodityPayload = {
  __typename?: 'PeachNoCommodityPayload'
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品品类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /** 商品品种名称 */
  commodityVarietyName: Maybe<Scalars['String']>
  /** 商品产地名称 */
  commodityPlaceOriginName: Maybe<Scalars['String']>
  /**  商品品类ID */
  commodityCategoryId: Maybe<Scalars['Int']>
}

/** 可选sku */
export type PeachNotChosenSkuOption = {
  __typename?: 'PeachNotChosenSkuOption'
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 规格选项 */
  optionId: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** 商品管理列表 */
export type PeachPageCommodityInput = {
  /** 商品类型 */
  typeId?: Maybe<Scalars['Int']>
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** spu名称 */
  commodityName?: Maybe<Scalars['String']>
}

export type PeachPageCommodityPayload = {
  __typename?: 'PeachPageCommodityPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PeachListCommodityPayLoad>>>
}

/**
 * 商品管理列表
 * 未添加商品列表
 */
export type PeachPageNoCommodityInput = {
  /** 商品类型 */
  typeId?: Maybe<Scalars['Int']>
  /** 品类 */
  categoryId?: Maybe<Scalars['Int']>
  /** 品种 */
  varietyId?: Maybe<Scalars['Int']>
  /** 产地 */
  originId?: Maybe<Scalars['Int']>
}

export type PeachPageNoCommodityPayload = {
  __typename?: 'PeachPageNoCommodityPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PeachNoCommodityPayload>>>
}

/** sku列表 */
export type PeachPageSkuInput = {
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 规格筛选 */
  skuCondition?: Maybe<Array<Maybe<SkuCondition>>>
  /** 分页对象 */
  page?: Maybe<Page>
}

export type PeachPageSkuPayload = {
  __typename?: 'PeachPageSkuPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PeachListSku>>>
}

export type PeachSkuCondition = {
  /** 规格id */
  specId?: Maybe<Scalars['Int']>
  /** 规格选项id */
  optionId?: Maybe<Scalars['Int']>
}

export type PeachSkuOption = {
  __typename?: 'PeachSkuOption'
  /** 规格id */
  specId: Maybe<Scalars['Int']>
  /** 规格选项名称 */
  optionName: Maybe<Scalars['String']>
}

/** sku列表表头 */
export type PeachTableHeadPayload = {
  __typename?: 'PeachTableHeadPayload'
  spec: Maybe<Array<Maybe<PeachHeadSpec>>>
  other: Maybe<Array<Maybe<PeachHeadOther>>>
}

/**
 * 添加商品
 * 商品状态变更
 */
export type PeachUpdateCommodityStatusInput = {
  status?: Maybe<Scalars['Int']>
  commodityId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** 编辑sku状态 */
export type PeachUpdateStatusInput = {
  /** 状态 */
  status?: Maybe<Scalars['Int']>
  /** sku id */
  commoditySkuId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/**  权限列表 */
export type PermissionPayload = {
  __typename?: 'PermissionPayload'
  /** 权限码 */
  code: Maybe<Scalars['String']>
  /** 待办数量 */
  todoCount: Maybe<Scalars['Int']>
}

/** 新增bom明细 */
export type PitayaBomDetailInput = {
  /** sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /**  数量单位 */
  quantityUnit?: Maybe<Scalars['Int']>
}

/** 配料列表 */
export type PitayaBomDetailPayload = {
  __typename?: 'PitayaBomDetailPayload'
  /** 配料id */
  commodityBomDetailId: Maybe<Scalars['Int']>
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 商品分类id */
  commodityCategoryId: Maybe<Scalars['Int']>
  /** 商品分类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 商品规格选项名称 */
  commoditySpecOptionName: Maybe<Array<Maybe<Scalars['String']>>>
  /** 数量 */
  quantity: Maybe<Scalars['BigDecimal']>
  /** 数量单位 */
  quantityUnit: Maybe<Scalars['Int']>
  /** 数量单位名称 */
  quantityUnitName: Maybe<Scalars['String']>
}

export type PitayaBomPayload = {
  __typename?: 'PitayaBomPayload'
  /** bom id */
  commodityBomId: Maybe<Scalars['Int']>
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 商品类型 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 商品分类 */
  commodityCategoryName: Maybe<Scalars['String']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品规格选项 */
  commoditySpecOptionName: Maybe<Array<Maybe<Scalars['String']>>>
}

export type PitayaCommodityBomPagePayload = {
  __typename?: 'PitayaCommodityBomPagePayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PitayaBomPayload>>>
}

/**
 * 编辑sku状态
 * sku详情
 */
export type PitayaCommoditySkuDetailPayload = {
  __typename?: 'PitayaCommoditySkuDetailPayload'
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 商品类型 */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 单位数量 */
  unitQuantity: Maybe<Scalars['BigDecimal']>
  /** 单位数量单位 */
  unitType: Maybe<Scalars['Int']>
  /** 总计类型 */
  totalType: Maybe<Scalars['Int']>
  /** sku属性 */
  property: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 状态 */
  status: Maybe<Scalars['Int']>
  /** 变更标识 */
  change: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 品类id */
  categoryId: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName: Maybe<Scalars['String']>
  /** 品种id */
  varietyId: Maybe<Scalars['Int']>
  /** 品种名称 */
  varietyName: Maybe<Scalars['String']>
  /** 产地id */
  placeOriginId: Maybe<Scalars['Int']>
  /** 产地名称 */
  placeOriginName: Maybe<Scalars['String']>
  /** 商品规格id */
  commoditySpecId: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 商品规格选项id */
  commoditySpecOptionId: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 规格名称集合 */
  commoditySpecName: Maybe<Array<Maybe<Scalars['String']>>>
  /** 规格选项名称集合 */
  commoditySpecOptionName: Maybe<Array<Maybe<Scalars['String']>>>
}

/** 条件获取sku列表 */
export type PitayaConditionToGetSkuInput = {
  commodityTypeId?: Maybe<Array<Maybe<Scalars['Int']>>>
  commodityName?: Maybe<Scalars['String']>
  commoditySpecName?: Maybe<Scalars['String']>
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 是否未配置bom */
  noBom?: Maybe<Scalars['Int']>
  /** 排除商品id */
  excludeSkuIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type PitayaConditionToGetSkuPayload = {
  __typename?: 'PitayaConditionToGetSkuPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PitayaSkuDetailPayload>>>
}

export type PitayaCreateCommodityInput = {
  /** 商品id */
  commodityId: Scalars['Int']
  /** 商品类型id */
  commodityTypeId: Scalars['Int']
}

export type PitayaHeadOther = {
  __typename?: 'PitayaHeadOther'
  key: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
}

export type PitayaHeadSpec = {
  __typename?: 'PitayaHeadSpec'
  /** 选项id */
  specId: Maybe<Scalars['Int']>
  /** 选项名称 */
  specName: Maybe<Scalars['String']>
}

export type PitayaListCommodityPayLoad = {
  __typename?: 'PitayaListCommodityPayLoad'
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品类型 */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 品类id */
  categoryId: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName: Maybe<Scalars['String']>
  /** 品种id */
  varietyId: Maybe<Scalars['Int']>
  /** 品种名称 */
  varietyName: Maybe<Scalars['String']>
  /** 产地id */
  originId: Maybe<Scalars['Int']>
  /** 产地名称 */
  originName: Maybe<Scalars['String']>
  /** sku数量 */
  skuQuantity: Maybe<Scalars['Int']>
  /** 状态 */
  status: Maybe<Scalars['Int']>
}

/**
 * 未添加商品列表
 * 添加商品
 */
export type PitayaListCreateCommodityInput = {
  createCommodityInput: Array<Maybe<PitayaCreateCommodityInput>>
}

export type PitayaNoCommodityPayload = {
  __typename?: 'PitayaNoCommodityPayload'
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品品类名称 */
  commodityCategoryName: Maybe<Scalars['String']>
  /** 商品品种名称 */
  commodityVarietyName: Maybe<Scalars['String']>
  /** 商品产地名称 */
  commodityPlaceOriginName: Maybe<Scalars['String']>
}

/** bom列表请求参数 */
export type PitayaPageCommodityBomInput = {
  /** 商品名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 分页参数 */
  page?: Maybe<Page>
}

/** 商品管理列表 */
export type PitayaPageCommodityInput = {
  /** 商品类型 */
  typeId?: Maybe<Scalars['Int']>
  /** 品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** spu名称 */
  commodityName?: Maybe<Scalars['String']>
  /** 排除商品id */
  excludeCommodityIds?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 状态 */
  status?: Maybe<Scalars['Int']>
}

export type PitayaPageCommodityPayload = {
  __typename?: 'PitayaPageCommodityPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PitayaListCommodityPayLoad>>>
}

/**
 * 商品管理列表
 * 未添加商品列表
 */
export type PitayaPageNoCommodityInput = {
  /** 商品类型 */
  typeId?: Maybe<Scalars['Int']>
  /** 品类 */
  categoryId?: Maybe<Scalars['Int']>
  /** 品种 */
  varietyId?: Maybe<Scalars['Int']>
  /** 产地 */
  originId?: Maybe<Scalars['Int']>
}

export type PitayaPageNoCommodityPayload = {
  __typename?: 'PitayaPageNoCommodityPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<PitayaNoCommodityPayload>>>
}

/**
 * sku列表表头
 * sku列表
 */
export type PitayaPageSkuInput = {
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 规格筛选 */
  skuCondition?: Maybe<Array<Maybe<SkuCondition>>>
}

export type PitayaPageSkuPayload = {
  __typename?: 'PitayaPageSkuPayload'
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
  records: Maybe<Array<Maybe<ListSku>>>
}

/** 新增bom */
export type PitayaSaveBomInput = {
  /** sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 配料列表 */
  saveCommodityBomDetailInput?: Maybe<Array<Maybe<PitayaBomDetailInput>>>
}

export type PitayaSkuDetailPayload = {
  __typename?: 'PitayaSkuDetailPayload'
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 商品名称 */
  commodityName: Maybe<Scalars['String']>
  /** 商品类型id */
  commodityTypeId: Maybe<Scalars['Int']>
  /** 商品类型名称 */
  commodityTypeName: Maybe<Scalars['String']>
  /** sku id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 商品规格选项名称 */
  commoditySpecOptionName: Maybe<Array<Maybe<Scalars['String']>>>
  /** 商品单位id */
  unitId: Maybe<Scalars['Int']>
  /** 商品单位名称 */
  unitName: Maybe<Scalars['String']>
  /** 商品分类id */
  categoryId: Maybe<Scalars['Int']>
  /** 商品分类名称 */
  categoryName: Maybe<Scalars['String']>
  /** 品种id */
  varietyId: Maybe<Scalars['Int']>
  /** 品种名称 */
  varietyName: Maybe<Scalars['String']>
  /** 产地id */
  placeOriginId: Maybe<Scalars['Int']>
  /** 产地名称 */
  placeOriginName: Maybe<Scalars['String']>
}

/**
 * sku详情
 * sku列表表头
 */
export type PitayaTableHeadPayload = {
  __typename?: 'PitayaTableHeadPayload'
  spec: Maybe<Array<Maybe<PitayaHeadSpec>>>
  other: Maybe<Array<Maybe<PitayaHeadOther>>>
}

/** 更新bom明细 */
export type PitayaUpdateBomDetailInput = {
  /** 配料id */
  commodityBomDetailId?: Maybe<Scalars['Int']>
  /** sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 数量 */
  quantity?: Maybe<Scalars['BigDecimal']>
  /** 数量单位 */
  quantityUnit?: Maybe<Scalars['Int']>
}

/** 修改bom */
export type PitayaUpdateBomInput = {
  /** bom id */
  commodityBomId?: Maybe<Scalars['Int']>
  /** sku id */
  commoditySkuId?: Maybe<Scalars['Int']>
  /** 配料列表 */
  updateCommodityBomDetailInput?: Maybe<Array<Maybe<PitayaUpdateBomDetailInput>>>
}

/** 编辑sku */
export type PitayaUpdateCommoditySkuInput = {
  /** 单位数量 */
  unitQuantity?: Maybe<Scalars['BigDecimal']>
  /** 单位数量单位 */
  unitType: Scalars['Int']
  /** 总计类型 */
  totalType?: Maybe<Scalars['Int']>
  /** sku属性 */
  property?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** 状态 */
  status: Scalars['Int']
  /** sku id */
  skuId: Array<Scalars['Int']>
}

/**
 * 添加商品
 * 商品状态变更
 */
export type PitayaUpdateCommodityStatusInput = {
  status?: Maybe<Scalars['Int']>
  commodityId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/**
 * 编辑sku
 * 编辑sku状态
 */
export type PitayaUpdateStatusInput = {
  /** 状态 */
  status?: Maybe<Scalars['Int']>
  /** sku id */
  commoditySkuId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Place = {
  __typename?: 'Place'
  placeId: Maybe<Scalars['Int']>
  placeName: Maybe<Scalars['String']>
  placePid: Maybe<Scalars['Int']>
}

export type PlaceInput = {
  placeId?: Maybe<Scalars['Int']>
  placePid?: Maybe<Scalars['Int']>
  placeName?: Maybe<Scalars['String']>
  categoryId?: Maybe<Scalars['Int']>
}

export type ProductObj = {
  __typename?: 'ProductObj'
  productName: Maybe<Scalars['String']>
  quantity: Maybe<Scalars['BigDecimal']>
  unit: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  /**     商品品类下拉接口列表 */
  listSpuCategoryOption: Maybe<Array<Maybe<Option>>>
  /**     品种下拉接口 */
  listCommodityVarietyOption: Maybe<Array<Maybe<Option>>>
  /**     产地下拉接口 */
  listCommodityOriginOption: Maybe<Array<Maybe<Option>>>
  /**     sku列表表头 */
  listSkuListColumn: Maybe<Array<Maybe<SkuColumnSpecPayload>>>
  /**     sku列表筛选项 */
  listSkuQueryCondition: Maybe<Array<Maybe<SkuOptionsPayLoad>>>
  /**     sku列表 */
  pageSku: Maybe<SkuPagePayload>
  /**     sku详情 */
  getSkuDetail: Maybe<SkuDetailPayload>
  /**     单位下拉列表 */
  listUnitOptions: Maybe<Array<Maybe<Option>>>
  /** sku属性下拉 */
  listPropertyOptions: Maybe<Array<Maybe<Option>>>
  /**     已选择sku列表 */
  listSkuSelectedCombination: Maybe<Array<Maybe<Array<Maybe<Scalars['Int']>>>>>
  /** 品种组sku选择列表 */
  pageGroupSku: Maybe<SkuPagePayload>
  selectVarietyByCategoryId: Maybe<Array<Maybe<Variety>>>
  selectPlaceByCategoryId: Maybe<Array<Maybe<Place>>>
  /**  获取产地树形列表 */
  selectPlaceTree: Maybe<Array<Maybe<Place>>>
  /**  品类详情数据【分页】 */
  pageCategoryDetails: Maybe<CategoryPage>
  /**  根据categoryId 获取详情 */
  categoryDetail: Maybe<Category>
  /**     品类总数 */
  countCategory: Maybe<Scalars['Long']>
  /**     商品分页列表 */
  pageCommodity: Maybe<CommodityPageResult>
  /**     查询商品信息 */
  getCommodity: Maybe<CommodityDetailPayload>
  /**     商品名称重复验证 */
  isSpuNameRepeat: Maybe<Scalars['Boolean']>
  /** 商品分类下拉列表 */
  typeOption: Maybe<Array<Maybe<Option>>>
  specList: Maybe<Array<Maybe<CommoditySpecPayload>>>
  verifySpecName: Maybe<Scalars['Boolean']>
  listCommoditySpecAndOptionByCommodityId: Maybe<Array<Maybe<CommoditySpecPayload>>>
  /**  规格列表 */
  specs: Maybe<Array<Maybe<SpecsPayload>>>
  /**  品种组分页列表 */
  pageVarietyGroup: Maybe<PageVarietyGroupPayload>
  /**  品种组详情 */
  varietyGroupDetail: Maybe<VarietyGroup>
  /** 品种组sku列表 */
  pageVarietyGroupSku: Maybe<PageVarietyGroupSkuPayload>
  /**  客户列表 */
  customers: Maybe<CustomerPageResult>
  /**  客户详情 */
  customer: Maybe<CustomerVo>
  /**  客户分组列表 */
  customerGroups: Maybe<Array<Maybe<CustomerGroupResponse>>>
  supplierPages: Maybe<SupplierPageResult>
  supplier: Maybe<SupplierResponse>
  /** 获取当前用户信息 */
  getCurrentUser: Maybe<CurrentUserPayload>
  /** 获取权限列表 */
  getPermission: Maybe<Array<Maybe<PermissionPayload>>>
  /** 分页获取用户信息 */
  pageUserManage: Maybe<UserPagePayload>
  /** 获取员工信息 */
  userManage: Maybe<UserManagePayload>
  /** 分页获取商户列表 */
  pageMerchant: Maybe<MerchantPagePayload>
  /** 获取商户信息 */
  merchant: Maybe<MerchantPayload>
  /** 获取商户下拉 */
  merchantOption: Maybe<Array<Maybe<Option>>>
  /** 搜索员工 */
  searchUser: Maybe<Array<Maybe<SearchUserPayload>>>
  /** 分页获取组织架构 */
  pageOrgGroup: Maybe<PageOrgGroupPayload>
  /** 组织架构下拉 */
  listOrgGroupOption: Maybe<Array<Maybe<Option>>>
  /** 获取组织信息 */
  org: Maybe<OrgPayload>
  /** 获取组织树 */
  orgTree: Maybe<OrgTreePayload>
  /** 获取全部组织树 */
  orgAllTree: Maybe<OrgTreePayload>
  /** bom列表 */
  pitayaPageCommodityBom: Maybe<PitayaCommodityBomPagePayload>
  /** 条件获取sku列表 */
  pitayaPageConditionToGetSku: Maybe<PitayaConditionToGetSkuPayload>
  /** 根据bom id获取配料列表 */
  pitayaListBurden: Maybe<Array<Maybe<PitayaBomDetailPayload>>>
  /** sku详情 */
  pitayaCommoditySkuDetail: Maybe<PitayaCommoditySkuDetailPayload>
  /** sku列表表头 */
  pitayaTableHead: Maybe<PitayaTableHeadPayload>
  /** sku列表 */
  pitayaPageSku: Maybe<PitayaPageSkuPayload>
  /** 未选择sku选项id集合 */
  pitayaNotChosenSkuOption: Maybe<Array<Maybe<NotChosenSkuOption>>>
  /** 商品管理列表 */
  pitayaPageCommodityManage: Maybe<PitayaPageCommodityPayload>
  /** 品类下拉列表 */
  pitayaCategoryOption: Maybe<Array<Maybe<Option>>>
  /** 商品类型下拉列表 */
  pitayaCommodityTypeOption: Maybe<Array<Maybe<Option>>>
  /** 商品品种下拉列表 */
  pitayaVarietyOption: Maybe<Array<Maybe<Option>>>
  /** 商品产地下拉列表 */
  pitayaOriginOption: Maybe<Array<Maybe<Option>>>
  /** 未添加商品列表 */
  pitayaPageNoCommodity: Maybe<PitayaPageNoCommodityPayload>
  /**  分页查询盘点记录 */
  pageTakeStockRecord: Maybe<PageTakeStockRecordListPayload>
  /**  根据盘点记录id获取本次盘点详情 */
  getTakeStockRecordDetail: Maybe<TakeStockRecordDetailPayload>
  /** 仓库下拉列表 */
  listWarehouseOption: Maybe<Array<Maybe<WarehouseOptionPayload>>>
  /**  出入库记录类型下拉 */
  listStockTypeOption: Maybe<StockTypeOptionPayload>
  /**  列表接口 */
  pageOutBoundReportForm: Maybe<OutBoundReportFormPagePayload>
  /**  列表导出 */
  exportOutBoundReportForm: Maybe<Scalars['String']>
  /**  所属商户下拉 */
  listMerchantOption: Maybe<OptionList>
  /**  出库类型下拉 */
  listOutboundOption: Maybe<OptionList>
  /**  支付方式下拉 */
  listPayMethodOption: Maybe<OptionList>
  /**  客户类型下拉 */
  listCustomerTypeOption: Maybe<OptionList>
  /**  列表接口 */
  pageOrderReportForm: Maybe<OrderReportFormPagePayload>
  /**  列表导出 */
  exportOrderReportForm: Maybe<Scalars['String']>
  /**  列表接口 */
  pageSalesReportForm: Maybe<SalesReportFormPagePayload>
  /**  列表导出 */
  exportSalesReportForm: Maybe<Scalars['String']>
  /** sku列表表头 */
  peachTableHead: Maybe<PeachTableHeadPayload>
  /** sku列表 */
  peachPageSku: Maybe<PeachPageSkuPayload>
  /** 未选择sku选项id集合 */
  peachNotChosenSkuOption: Maybe<Array<Maybe<NotChosenSkuOption>>>
  /** 商品管理列表 */
  peachPageCommodityManage: Maybe<PeachPageCommodityPayload>
  /** 品类下拉列表 */
  peachCategoryOption: Maybe<Array<Maybe<Option>>>
  /** 商品类型下拉列表 */
  peachCommodityTypeOption: Maybe<Array<Maybe<Option>>>
  /** 商品品种下拉列表 */
  peachVarietyOption: Maybe<Array<Maybe<Option>>>
  /** 商品产地下拉列表 */
  peachOriginOption: Maybe<Array<Maybe<Option>>>
  /** 未添加商品列表 */
  peachPageNoCommodity: Maybe<PeachPageNoCommodityPayload>
  _service: Maybe<_Service>
}

export type QueryListSpuCategoryOptionArgs = {
  commodityTypeId: Scalars['Int']
}

export type QueryListCommodityVarietyOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryListCommodityOriginOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryListSkuListColumnArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryListSkuQueryConditionArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryPageSkuArgs = {
  skuListConditionInput?: Maybe<SkuListConditionInput>
}

export type QueryGetSkuDetailArgs = {
  commodityId?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type QueryListUnitOptionsArgs = {
  commodityTypeId?: Maybe<Scalars['Int']>
}

export type QueryListPropertyOptionsArgs = {
  commodityTypeId?: Maybe<Scalars['Int']>
}

export type QueryListSkuSelectedCombinationArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryPageGroupSkuArgs = {
  groupSkuInput?: Maybe<GroupSkuInput>
  page?: Maybe<Page>
}

export type QuerySelectVarietyByCategoryIdArgs = {
  categoryId?: Maybe<Scalars['Int']>
}

export type QuerySelectPlaceByCategoryIdArgs = {
  categoryId?: Maybe<Scalars['Int']>
}

export type QueryPageCategoryDetailsArgs = {
  pageCategoryInput?: Maybe<PageCategoryInput>
}

export type QueryCategoryDetailArgs = {
  categoryId: Scalars['Int']
}

export type QueryPageCommodityArgs = {
  commodityName?: Maybe<Scalars['String']>
  page?: Maybe<Page>
}

export type QueryGetCommodityArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryIsSpuNameRepeatArgs = {
  updateCommodityNameInput?: Maybe<UpdateCommodityNameInput>
}

export type QuerySpecListArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryVerifySpecNameArgs = {
  specName?: Maybe<Scalars['String']>
}

export type QueryListCommoditySpecAndOptionByCommodityIdArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QuerySpecsArgs = {
  specsInput?: Maybe<SpecsInput>
}

export type QueryPageVarietyGroupArgs = {
  name?: Maybe<Scalars['String']>
  page?: Maybe<Page>
}

export type QueryVarietyGroupDetailArgs = {
  id: Scalars['Int']
}

export type QueryPageVarietyGroupSkuArgs = {
  groupId: Scalars['Int']
  page?: Maybe<Page>
}

export type QueryCustomersArgs = {
  page?: Maybe<Page>
  keyword?: Maybe<Scalars['String']>
}

export type QueryCustomerArgs = {
  customerId?: Maybe<Scalars['Int']>
}

export type QuerySupplierPagesArgs = {
  page?: Maybe<Page>
  supplierCondition?: Maybe<SupplierCondition>
}

export type QuerySupplierArgs = {
  supplierId?: Maybe<Scalars['Int']>
}

export type QueryPageUserManageArgs = {
  input?: Maybe<PageUserInput>
}

export type QueryUserManageArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPageMerchantArgs = {
  input?: Maybe<MerchantPageInput>
}

export type QueryMerchantArgs = {
  input?: Maybe<MerchantIdInput>
}

export type QuerySearchUserArgs = {
  input?: Maybe<SearchUserInput>
}

export type QueryPageOrgGroupArgs = {
  input?: Maybe<PageOrgGroupInput>
}

export type QueryOrgArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryOrgTreeArgs = {
  id?: Maybe<Scalars['Int']>
}

export type QueryPitayaPageCommodityBomArgs = {
  commodityName?: Maybe<Scalars['String']>
  page?: Maybe<Page>
}

export type QueryPitayaPageConditionToGetSkuArgs = {
  conditionToGetSkuInput?: Maybe<PitayaConditionToGetSkuInput>
  page?: Maybe<Page>
}

export type QueryPitayaListBurdenArgs = {
  bomId?: Maybe<Scalars['Int']>
}

export type QueryPitayaCommoditySkuDetailArgs = {
  commoditySkuId?: Maybe<Scalars['Int']>
}

export type QueryPitayaTableHeadArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryPitayaPageSkuArgs = {
  pageSku?: Maybe<PitayaPageSkuInput>
  page?: Maybe<Page>
}

export type QueryPitayaNotChosenSkuOptionArgs = {
  commodityId: Scalars['Int']
}

export type QueryPitayaPageCommodityManageArgs = {
  pageCommodityInput?: Maybe<PitayaPageCommodityInput>
  page?: Maybe<Page>
}

export type QueryPitayaVarietyOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryPitayaOriginOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryPitayaPageNoCommodityArgs = {
  pageNoCommodityInput?: Maybe<PitayaPageNoCommodityInput>
  page?: Maybe<Page>
}

export type QueryPageTakeStockRecordArgs = {
  input?: Maybe<TakeStockRecordInput>
}

export type QueryGetTakeStockRecordDetailArgs = {
  input?: Maybe<TakeStockRecordDetailInput>
}

export type QueryListWarehouseOptionArgs = {
  input?: Maybe<WarehouseOptionInput>
}

export type QueryListStockTypeOptionArgs = {
  input?: Maybe<StockTypeOptionInput>
}

export type QueryPageOutBoundReportFormArgs = {
  input?: Maybe<OutBoundReportFormPageInput>
}

export type QueryExportOutBoundReportFormArgs = {
  input?: Maybe<OutBoundReportFormQueryInput>
}

export type QueryPageOrderReportFormArgs = {
  input?: Maybe<OrderReportFormPageInput>
}

export type QueryExportOrderReportFormArgs = {
  input?: Maybe<OrderReportFormQueryInput>
}

export type QueryPageSalesReportFormArgs = {
  input?: Maybe<SalesReportFormPageInput>
}

export type QueryExportSalesReportFormArgs = {
  input?: Maybe<SalesReportFormQueryInput>
}

export type QueryPeachTableHeadArgs = {
  commodityId?: Maybe<Scalars['Int']>
}

export type QueryPeachPageSkuArgs = {
  pageSku?: Maybe<PeachPageSkuInput>
}

export type QueryPeachNotChosenSkuOptionArgs = {
  commodityId: Scalars['Int']
}

export type QueryPeachPageCommodityManageArgs = {
  pageCommodityInput?: Maybe<PeachPageCommodityInput>
  page?: Maybe<Page>
}

export type QueryPeachVarietyOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryPeachOriginOptionArgs = {
  categoryId: Scalars['Int']
}

export type QueryPeachPageNoCommodityArgs = {
  pageNoCommodityInput?: Maybe<PeachPageNoCommodityInput>
  page?: Maybe<Page>
}

/**  列表集合对象 */
export type SalesReportFormListPayload = {
  __typename?: 'SalesReportFormListPayload'
  /**  主键 */
  id: Maybe<Scalars['Long']>
  /**  所属商户 */
  merchant: Maybe<Scalars['String']>
  /**  付款类型 */
  payMethod: Maybe<Array<Maybe<Scalars['String']>>>
  /**  手工单编号 */
  orderCode: Maybe<Scalars['String']>
  /**  客户ID */
  customerId: Maybe<Scalars['Long']>
  /**  客户名称 */
  customerName: Maybe<Scalars['String']>
  /**  销售时间 */
  payTime: Maybe<Scalars['Long']>
  /**  客户类型 */
  customerType: Maybe<Scalars['String']>
  /**  SKUID */
  productId: Maybe<Scalars['Long']>
  /**  SKU名称 */
  productName: Maybe<Scalars['String']>
  /**  批次号 */
  batchStockCode: Maybe<Scalars['String']>
  /**  单位 */
  unit: Maybe<Scalars['String']>
  /**  数量 */
  quantity: Maybe<Scalars['BigDecimal']>
  /**  单价 */
  unitPrice: Maybe<Scalars['BigDecimal']>
  /**  合计金额 */
  totalMoney: Maybe<Scalars['BigDecimal']>
  /**  结余数量 */
  numberOfBalances: Maybe<Scalars['BigDecimal']>
  /**  备注 */
  remark: Maybe<Scalars['String']>
  /**  品种组ID */
  varietyGroupId: Maybe<Scalars['Int']>
  /**  品种组 */
  varietyGroup: Maybe<Scalars['String']>
}

/**  列表分页入参 */
export type SalesReportFormPageInput = {
  salesReportFormQueryInput?: Maybe<SalesReportFormQueryInput>
  /**  分页入参 */
  pageInput: Page
}

/**  列表分页对象 */
export type SalesReportFormPagePayload = {
  __typename?: 'SalesReportFormPagePayload'
  records: Maybe<Array<Maybe<SalesReportFormListPayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

/**  列表通用查询入参 */
export type SalesReportFormQueryInput = {
  /**  商户ID */
  merchantId?: Maybe<Scalars['Long']>
  /**  付款类型 */
  payMethod?: Maybe<Array<Maybe<PayMethod>>>
  /**  手工单编号 */
  orderCode?: Maybe<Scalars['String']>
  /**  批次号 */
  batchStockCode?: Maybe<Scalars['String']>
  /**  客户类型 */
  customerType?: Maybe<CustomerType>
  /**  客户名称 */
  customerName?: Maybe<Scalars['String']>
  /**  销售时间起 */
  payStartTime?: Maybe<Scalars['Long']>
  /**  销售时间终 */
  payEndTime?: Maybe<Scalars['Long']>
}

/**  查找用户信息 */
export type SearchUserInput = {
  /**  关键词：手机号/用户名称 */
  keyword?: Maybe<Scalars['String']>
  /**  组织ID */
  orgId: Scalars['Int']
}

export type SearchUserPayload = {
  __typename?: 'SearchUserPayload'
  /** 用户ID */
  userId: Maybe<Scalars['Int']>
  /** 用户名 */
  userName: Maybe<Scalars['String']>
  /** 手机号 */
  phone: Maybe<Scalars['String']>
  /** 是否被使用 0未使用，1已使用 */
  used: Maybe<Scalars['Int']>
}

/**  发送验证码参数 */
export type SendCodeMsgInput = {
  /**  手机号 */
  phone: Scalars['String']
}

/** sku列表规格表头 */
export type SkuColumnSpecPayload = {
  __typename?: 'SkuColumnSpecPayload'
  /** 规格id */
  commoditySpecId: Maybe<Scalars['Int']>
  /** 规格名称 */
  commoditySpecName: Maybe<Scalars['String']>
}

export type SkuCommoditySpecOption = {
  __typename?: 'SkuCommoditySpecOption'
  specId: Maybe<Scalars['Int']>
  optionName: Maybe<Scalars['String']>
}

export type SkuCommoditySpecOptionPayLoad = {
  __typename?: 'SkuCommoditySpecOptionPayLoad'
  /** 规格选项id */
  commoditySpecOptionId: Maybe<Scalars['Int']>
  /** 规格选项名称 */
  commoditySpecOptionName: Maybe<Scalars['String']>
}

export type SkuCondition = {
  /** 规格id */
  specId?: Maybe<Scalars['Int']>
  /** 规格选项id */
  optionId?: Maybe<Scalars['Int']>
}

export type SkuDetailPayload = {
  __typename?: 'SkuDetailPayload'
  skuDetailVOResponse: Maybe<Array<Maybe<SkuDetailVoResponse>>>
}

export type SkuDetailVoResponse = {
  __typename?: 'SkuDetailVOResponse'
  skuName: Maybe<Scalars['String']>
  commoditySkuId: Maybe<Scalars['Int']>
  commodityId: Maybe<Scalars['Int']>
  commoditySpecs: Maybe<Array<Maybe<SpecPayload>>>
  commoditySpecOption: Maybe<Array<Maybe<SpecOptionPayload>>>
}

export type SkuListColumnCommoditySkuUnitPayLoad = {
  __typename?: 'SkuListColumnCommoditySkuUnitPayLoad'
  /** key */
  key: Maybe<Scalars['String']>
  /** title */
  title: Maybe<Scalars['String']>
}

export type SkuListConditionInput = {
  page?: Maybe<Page>
  /** 商品id */
  commodityId?: Maybe<Scalars['Int']>
  /** 规格选项 */
  commoditySpecOptionConditionInput?: Maybe<Array<Maybe<CommoditySpecOptionConditionInput>>>
}

export type SkuOption = {
  __typename?: 'SkuOption'
  /** 规格id */
  specId: Maybe<Scalars['Int']>
  /** 规格选项名称 */
  optionName: Maybe<Scalars['String']>
}

export type SkuOptionsPayLoad = {
  __typename?: 'SkuOptionsPayLoad'
  /** 规格id */
  commoditySpecId: Maybe<Scalars['Int']>
  /** 规格名称 */
  commoditySpecName: Maybe<Scalars['String']>
  /** 规格选项 */
  commoditySpecOptionVOList: Maybe<Array<Maybe<SkuCommoditySpecOptionPayLoad>>>
}

export type SkuPagePayload = {
  __typename?: 'SkuPagePayload'
  records: Maybe<Array<Maybe<SkuPayLoad>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

export type SkuPayLoad = {
  __typename?: 'SkuPayLoad'
  /** sku Id */
  commoditySkuId: Maybe<Scalars['Int']>
  /** 规格选项 */
  skuCommoditySpecOptionList: Maybe<Array<Maybe<SkuCommoditySpecOption>>>
}

export type SpecOption = {
  __typename?: 'SpecOption'
  /** id */
  optionId: Maybe<Scalars['Int']>
  /** 名称 */
  optionName: Maybe<Scalars['String']>
  /** 规格id */
  specId: Maybe<Scalars['Int']>
  /** 商品id */
  optionSort: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 多语言 */
  nameLocale: Maybe<Array<Maybe<NamePayload>>>
}

export type SpecOptionPayload = {
  __typename?: 'SpecOptionPayload'
  commoditySpecOptionId: Maybe<Scalars['Int']>
  commoditySpecOptionName: Maybe<Scalars['String']>
}

export type SpecPayload = {
  __typename?: 'SpecPayload'
  commoditySpecId: Maybe<Scalars['Int']>
  commoditySpecName: Maybe<Scalars['String']>
}

export type SpecsInput = {
  /** 商品类型id */
  typeId?: Maybe<Scalars['Int']>
  /** 商品品类id */
  categoryId?: Maybe<Scalars['Int']>
  /** 品种id */
  varietyId?: Maybe<Scalars['Int']>
  /** 产地id */
  origin?: Maybe<Scalars['Int']>
}

export type SpecsPayload = {
  __typename?: 'SpecsPayload'
  /** 规格id */
  specId: Maybe<Scalars['Int']>
  /** 规格名称 */
  specName: Maybe<Scalars['String']>
  /** 规格排序 */
  specSort: Maybe<Scalars['Int']>
  /** 商品id */
  commodityId: Maybe<Scalars['Int']>
  /** 多语言 */
  nameLocale: Maybe<Array<Maybe<NamePayload>>>
  /** sku选项列表 */
  specOption: Maybe<Array<Maybe<SpecOption>>>
}

export enum StockRecordType {
  /**  未知 */
  Unrecognized = 'UNRECOGNIZED',
  /**  入库 */
  In = 'IN',
  /**  出库 */
  Out = 'OUT',
  /**  所有类型 */
  All = 'ALL',
}

export type StockTypeOptionInput = {
  /**  出入库类型 */
  stockRecordType?: Maybe<StockRecordType>
}

export type StockTypeOptionPayload = {
  __typename?: 'StockTypeOptionPayload'
  option: Maybe<Array<Maybe<Option2>>>
}

export type SupplierCondition = {
  keyword?: Maybe<Scalars['String']>
  commodityId?: Maybe<Scalars['Int']>
}

export type SupplierInput = {
  supplierId?: Maybe<Scalars['Int']>
  supplierName?: Maybe<Scalars['String']>
  supplierShortName?: Maybe<Scalars['String']>
  commodityTypeId?: Maybe<Scalars['Int']>
  commodityType?: Maybe<Scalars['Int']>
  phoneNum?: Maybe<Scalars['String']>
  supplierAddress?: Maybe<Scalars['String']>
  houseNum?: Maybe<Scalars['String']>
  remark?: Maybe<Scalars['String']>
}

/** 客户分页实体 */
export type SupplierPageResult = {
  __typename?: 'SupplierPageResult'
  records: Maybe<Array<Maybe<SupplierResponse>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Long']>
}

export type SupplierResponse = {
  __typename?: 'SupplierResponse'
  supplierId: Maybe<Scalars['Int']>
  supplierName: Maybe<Scalars['String']>
  supplierShortName: Maybe<Scalars['String']>
  commodityTypeId: Maybe<Scalars['Int']>
  commodityType: Maybe<Scalars['Int']>
  phoneNum: Maybe<Scalars['String']>
  supplierAddress: Maybe<Scalars['String']>
  houseNum: Maybe<Scalars['String']>
  remark: Maybe<Scalars['String']>
  createTime: Maybe<Scalars['Date']>
}

/**  盘点商品详情 */
export type TakeStockCommodityDetailPayload = {
  __typename?: 'TakeStockCommodityDetailPayload'
  /**  盘点状态 */
  checkStatus: Maybe<Scalars['Int']>
  /**  入库/出库 单号 */
  stockOrderCode: Maybe<Scalars['String']>
  /**  商品名称 */
  commoditySkuName: Maybe<Scalars['String']>
  /**  系统库存 */
  unitQuantity: Maybe<Scalars['BigDecimal']>
  /**  盘点库存 */
  checkUnitQuantity: Maybe<Scalars['BigDecimal']>
  /**  1:盘盈 2:盘亏 3:正常 */
  orderType: Maybe<Scalars['Int']>
  /**  异常原因 */
  remark: Maybe<Scalars['String']>
  /** 批次号 */
  batchCode: Maybe<Scalars['String']>
  /** skuId */
  skuId: Maybe<Scalars['Int']>
}

/**  盘点记录详情 */
export type TakeStockRecordDetailInput = {
  /**  盘点id */
  checkId?: Maybe<Scalars['Int']>
}

/**  盘点详情 */
export type TakeStockRecordDetailPayload = {
  __typename?: 'TakeStockRecordDetailPayload'
  /**  盘点仓库名称 */
  warehouseName: Maybe<Scalars['String']>
  /**  盘点日期 */
  checkDate: Maybe<Scalars['Long']>
  /**  盘点商品数量 */
  checkCount: Maybe<Scalars['Int']>
  /**  存在异常数量 */
  abnormalQuantity: Maybe<Scalars['Int']>
  /**  盘点人 */
  username: Maybe<Scalars['String']>
  /**  备注信息 */
  remark: Maybe<Scalars['String']>
  /** 盘点提交时间 */
  createTime: Maybe<Scalars['Long']>
  /** 盘点商户名称 */
  orgName: Maybe<Scalars['String']>
  /** 盘点商户id */
  orgId: Maybe<Scalars['Int']>
  records: Maybe<Array<Maybe<TakeStockCommodityDetailPayload>>>
}

/**  盘点记录 */
export type TakeStockRecordInput = {
  /** 盘点商户 */
  orgId?: Maybe<Scalars['Int']>
  /**  盘点仓库 */
  warehouseId?: Maybe<Scalars['Int']>
  /**  起始时间 */
  startDate?: Maybe<Scalars['Long']>
  /**  截止时间 */
  expireDate?: Maybe<Scalars['Long']>
  pageCurrent?: Maybe<Scalars['Int']>
  pageSize?: Maybe<Scalars['Int']>
}

/**  盘点记录信息 */
export type TakeStockRecordPayload = {
  __typename?: 'TakeStockRecordPayload'
  /**  盘点记录Id */
  checkId: Maybe<Scalars['Int']>
  /** 盘点商户 */
  orgName: Maybe<Scalars['String']>
  /**  盘点日期 */
  checkDate: Maybe<Scalars['Long']>
  /**  库存状态 */
  totalStatus: Maybe<Scalars['Int']>
  /**  盘点仓库 */
  warehouseName: Maybe<Scalars['String']>
  /**  盘点数量 */
  checkNum: Maybe<Scalars['BigDecimal']>
  /**  操作人 */
  username: Maybe<Scalars['String']>
  /**  提交时间 */
  createTime: Maybe<Scalars['Long']>
  /** 备注 */
  remark: Maybe<Scalars['String']>
}

export type UpdateCommodityNameInput = {
  /**  商品id */
  commodityId: Scalars['Int']
  /**  商品名称 */
  commodityName: Scalars['String']
  /**  多语言 */
  nameLocale?: Maybe<NameLocale>
}

export type UpdatePasswordInput = {
  id?: Maybe<Scalars['Int']>
  /** 密码 */
  password?: Maybe<Scalars['String']>
}

export type UpdateSkuStatusInput = {
  /** sku id集合 */
  commoditySkuIdList?: Maybe<Array<Maybe<Scalars['Int']>>>
  /**     状态（1激活，0禁用） */
  status?: Maybe<Scalars['Int']>
}

/** 用户管理信息 */
export type UserManagePayload = {
  __typename?: 'UserManagePayload'
  /** id */
  id: Maybe<Scalars['Int']>
  /** 名称 */
  name: Maybe<Scalars['String']>
  /** 手机号 */
  phone: Maybe<Scalars['String']>
  /** 用户账号 */
  userAccount: Maybe<Scalars['String']>
  /** 所属组织架构名称 */
  orgGroupName: Maybe<Scalars['String']>
  /** 所属组织架构ID */
  orgGroupId: Maybe<Scalars['Int']>
  /** 所属组织名称 */
  orgName: Maybe<Scalars['String']>
  /** 所属组织ID */
  orgId: Maybe<Scalars['Int']>
  /** 关联组织IDs */
  relOrgIds: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type UserMangerInput = {
  id?: Maybe<Scalars['Int']>
  /** 组织Id */
  orgId: Scalars['Int']
  /** 组织架构Id */
  orgGroupId: Scalars['Int']
  /** 手机号 */
  phone: Scalars['String']
  /** 用户账号 */
  userAccount: Scalars['String']
  /** 名称 */
  name: Scalars['String']
  /** 关联组织ID */
  relOrgIds?: Maybe<Array<Maybe<Scalars['Int']>>>
}

/** 分页信息 */
export type UserPagePayload = {
  __typename?: 'UserPagePayload'
  records: Maybe<Array<Maybe<UserManagePayload>>>
  pageCurrent: Maybe<Scalars['Int']>
  pageSize: Maybe<Scalars['Int']>
  totalRecords: Maybe<Scalars['Int']>
}

/**  用户信息 */
export type UserPayload = {
  __typename?: 'UserPayload'
  /** 用户ID */
  userId: Maybe<Scalars['Int']>
  /** 用户名称 */
  userName: Maybe<Scalars['String']>
  /** 联系方式 */
  phone: Maybe<Scalars['String']>
  /** 头像 */
  avatar: Maybe<Scalars['String']>
}

export type Variety = {
  __typename?: 'Variety'
  varietyId: Maybe<Scalars['Int']>
  varietyName: Maybe<Scalars['String']>
}

export type VarietyGroup = {
  __typename?: 'VarietyGroup'
  /** 品种组id */
  groupId: Maybe<Scalars['Int']>
  /** 品种组名称 */
  groupName: Maybe<Scalars['String']>
}

export type VarietyGroupInput = {
  /** 品种组id */
  groupId: Scalars['Int']
  /** 品种组名称 */
  groupName: Scalars['String']
}

export type VarietyGroupSku = {
  __typename?: 'VarietyGroupSku'
  /** 主键id */
  varietySkuId: Maybe<Scalars['Int']>
  /** 品种组id */
  groupId: Maybe<Scalars['Int']>
  /** sku id */
  skuId: Maybe<Scalars['Int']>
  /** 品类名称 */
  categoryName: Maybe<Scalars['String']>
  /** spu名称 */
  spuName: Maybe<Scalars['String']>
  /** sku名称 */
  skuName: Maybe<Scalars['String']>
}

export type VarietyInput = {
  varietyId?: Maybe<Scalars['Int']>
  varietyName: Scalars['String']
  categoryId?: Maybe<Scalars['Int']>
}

export type WarehouseOptionInput = {
  /** 商户id */
  orgId?: Maybe<Scalars['Int']>
}

export type WarehouseOptionPayload = {
  __typename?: 'WarehouseOptionPayload'
  /** 仓库id */
  id: Maybe<Scalars['Int']>
  /** 仓库名称 */
  name: Maybe<Scalars['String']>
}

export type _Service = {
  __typename?: '_Service'
  sdl: Scalars['String']
}
