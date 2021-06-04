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

class CommodityDTO {
  /** 商品品类id */
  commodityCategoryId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品产地id */
  commodityPlaceOriginId = undefined

  /** 规格信息 */
  commoditySpecDTOS = []

  /** 商品类型id */
  commodityTypeId = undefined

  /** 商品品种id */
  commodityVarietyId = undefined
}

class CommodityGroupVO {
  /** 商品产地列表 */
  commodityPlaceOriginVOS = []

  /** 商品品种列表 */
  commodityVarietyVOS = []
}

class CommodityNameDTO {
  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''
}

class CommodityPlaceOriginVO {
  /** 品类id */
  categoryId = undefined

  /** 产地id */
  placeOriginId = undefined

  /** 产地名称 */
  placeOriginName = undefined
}

class CommoditySpecDTO {
  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptionDTOS = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

class CommoditySpecModifyDTO {
  /** 商品规格ID */
  commoditySpecId = ''

  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptionDTOS = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

class CommoditySpecOptionDTO {
  /** 商品SpecificationsAndOptions名称 */
  commoditySpecOptionName = ''
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
  commoditySpecOptionVOList = []
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
  skuListColumnCommoditySkuUnitVOList = []

  /** SkuList规格表头 */
  skuListColumnCommoditySpecVOList = []
}

class SkuList {
  /** 变更状态：0未变更，1变更 */
  change = undefined

  /** sku Id */
  commoditySkuId = undefined

  /** SpecificationsAndOptions */
  skuCommoditySpecOptionMap = undefined

  /** 状态（1激活，0禁用） */
  status = undefined

  /** 总计类型（sku单位；副单位） */
  totalTypeText = ''

  /** 单位数量（sku净重；换算比率） */
  unitQuantityText = ''
}

class SkuListFilterCondition {
  /** 商品id */
  commodityId = undefined

  /** SpecificationsAndOptions */
  commoditySpecOptionDTOList = []

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
  /** SpecificationsAndOptionsid */
  commoditySpecOptionId = undefined

  /** SpecificationsAndOptions名称 */
  commoditySpecOptionName = ''
}

class SpecificationsAndOptions0 {
  /** SpecificationsAndOptionsid */
  commoditySpecOptionId = undefined

  /** SpecificationsAndOptions名称 */
  commoditySpecOptionName = ''
}

class SpecificationsAndTypes {
  /** 商品规格ID */
  commoditySpecId = ''

  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptionVOList = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

export const commodityService = {
  ApiResult,
  CommodityCategoryVO,
  CommodityDTO,
  CommodityGroupVO,
  CommodityNameDTO,
  CommodityPlaceOriginVO,
  CommoditySpecDTO,
  CommoditySpecModifyDTO,
  CommoditySpecOptionDTO,
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
  SpecificationsAndOptions0,
  SpecificationsAndTypes
}
