class ApiResult {
  /** data */
  data = new CommodityCategoryVO()

  /** errCode */
  errCode = undefined

  /** errMsg */
  errMsg = ''
}

class CommodityCategoryVO {
  /** categoryId */
  categoryId = undefined

  /** categoryName */
  categoryName = ''

  /** placeOriginId */
  placeOriginId = undefined

  /** varietyId */
  varietyId = undefined
}

class CommodityGroupVO {
  /** 商品产地列表 */
  commodityPlaceOriginVOS = []

  /** 商品品种列表 */
  commodityVarietyVOS = []
}

class CommodityPlaceOriginVO {
  /** 品类id */
  categoryId = undefined

  /** 产地id */
  placeOriginId = undefined

  /** 产地名称 */
  placeOriginName = undefined
}

class CommodityStatusDTO {
  /** 商品id */
  commodityId = undefined

  /** 激活状态 */
  status = undefined
}

class CommodityTypeVO {
  /** 商品类型id */
  commodityTypeId = undefined

  /** 商品类型名称 */
  commodityTypeName = ''

  /** 上级类型id */
  parentCommodityTypeId = undefined
}

class CommodityVO {
  /** 商品品类名称 */
  commodityCategoryName = ''

  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品产地名称 */
  commodityPlaceOriginName = ''

  /** 商品类型名称 */
  commodityTypeName = ''

  /** 商品品种名称 */
  commodityVarietyName = ''

  /** sku总数 */
  skuSum = undefined

  /** 激活状态 */
  status = undefined
}

class CommodityVarietyVO {
  /** 品类id */
  categoryId = undefined

  /** 品种id */
  varietyId = undefined

  /** 品种名称 */
  varietyName = undefined
}

class DefaultPageResult {
  /** pageCurrent */
  pageCurrent = undefined

  /** pageSize */
  pageSize = undefined

  /** records */
  records = []

  /** totalRecords */
  totalRecords = undefined
}

class ModifyTheSkuStatus {
  /** sku id */
  commoditySkuIds = []

  /** 状态（1激活，0禁用） */
  status = undefined
}

class ModifyTheSpu {
  /** sku id */
  commoditySkuIds = []

  /** 状态（1激活，0禁用） */
  status = undefined

  /** 总计类型（sku单位；副单位） */
  totalType = undefined

  /** 单位数量（sku净重；换算比率） */
  unitQuantity = undefined

  /** 单位类型（sku净重单位；最小单位） */
  unitType = undefined
}

class Option {
  /** label */
  label = ''

  /** selected */
  selected = false

  /** value */
  value = undefined
}

class ScreeningSkuList {
  /** 规格id */
  commoditySpecId = undefined

  /** 规格名称 */
  commoditySpecName = ''

  /** SpecificationsAndOptions */
  commoditySpecOptionVOS = []
}

class SkuDetails {
  /** sku id */
  commoditySkuId = undefined

  /** 状态（1激活，0禁用） */
  status = undefined

  /** 总计类型（sku单位；副单位） */
  totalType = undefined

  /** 单位数量（sku净重；换算比率） */
  unitQuantity = undefined

  /** 单位类型（sku净重单位；最小单位） */
  unitType = undefined
}

class SkuHeader {
  /** SkuListHeader */
  skuListColumnCommoditySkuUnitVOS = []

  /** SkuList规格表头 */
  skuListColumnCommoditySpecVOS = []
}

class SkuList {
  /** sku Id */
  commoditySkuId = undefined

  /** SpecificationsAndOptions */
  skuListCommoditySpecVOS = []

  /** 状态（1激活，0禁用） */
  status = undefined

  /** 总计类型（sku单位；副单位） */
  totalType = ''

  /** 单位数量（sku净重；换算比率） */
  unitQuantity = ''
}

class SkuListFilterCondition {
  /** 商品id */
  commodityId = undefined

  /** SpecificationsAndOptions */
  commoditySpecOptionDTOS = []

  /** pageCurrent */
  pageCurrent = undefined

  /** pageSize */
  pageSize = undefined

  /** sortBys */
  sortBys = []
}

class SkuListHeader {
  /** key */
  key = ''

  /** title */
  title = ''
}

class SkuSpecificationOptionsHeaderList {
  /** 规格id */
  commoditySpecId = undefined

  /** 规格名称 */
  commoditySpecName = ''
}

class SpecificationsAndOptions {
  /** 规格id */
  commoditySpecId = undefined

  /** SpecificationsAndOptionsid */
  commoditySpecOptionIds = undefined
}

class SpecificationsAndOptions0 {
  /** 规格id */
  commoditySpecId = undefined

  /** 选项名称 */
  commoditySpecOptionName = ''
}

export const commodityService = {
  ApiResult,
  CommodityCategoryVO,
  CommodityGroupVO,
  CommodityPlaceOriginVO,
  CommodityStatusDTO,
  CommodityTypeVO,
  CommodityVO,
  CommodityVarietyVO,
  DefaultPageResult,
  ModifyTheSkuStatus,
  ModifyTheSpu,
  Option,
  ScreeningSkuList,
  SkuDetails,
  SkuHeader,
  SkuList,
  SkuListFilterCondition,
  SkuListHeader,
  SkuSpecificationOptionsHeaderList,
  SpecificationsAndOptions,
  SpecificationsAndOptions0
}
