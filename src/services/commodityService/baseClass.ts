class ApiResult {
  /** data */
  data = new CommoditySpuVO()

  /** errCode */
  errCode = undefined

  /** errMsg */
  errMsg = ''
}

class CommodityDTO {
  /** 商品品类id */
  commodityCategoryId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品产地id */
  commodityPlaceOriginId = undefined

  /** 规格信息 */
  commoditySpecs = []

  /** 商品类型id */
  commodityTypeId = undefined

  /** 商品品种id */
  commodityVarietyId = undefined
}

class CommodityModifyDTO {
  /** 商品id */
  commodityId = undefined

  /** 商品规格对象 */
  commoditySpecs = []
}

class CommodityNameDTO {
  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''
}

class CommodityPageVO {
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

class CommoditySkuSaveDTO {
  /** commodityId */
  commodityId = undefined

  /** commoditySpecId */
  commoditySpecId = []

  /** commoditySpecOptionIdsList */
  commoditySpecOptionIdsList = []
}

class CommoditySpecDTO {
  /** 商品规格id */
  commoditySpecId = undefined

  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptions = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

class CommoditySpecModifyDTO {
  /** 商品规格ID */
  commoditySpecId = undefined

  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptions = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

class CommoditySpecOptionConditionDTO {
  /** 规格id */
  commoditySpecId = undefined

  /** SpecificationsAndOptionsid */
  commoditySpecOptionId = undefined
}

class CommoditySpecOptionDTO {
  /** 商品SpecificationsAndOptionsID */
  commoditySpecOptionId = undefined

  /** 商品SpecificationsAndOptions名称 */
  commoditySpecOptionName = ''
}

class CommoditySpuVO {
  /** 商品品类名称 */
  commodityCategoryName = ''

  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品产地名称 */
  commodityPlaceOriginName = ''

  /** 规格信息 */
  commoditySpecs = []

  /** 商品类型id */
  commodityTypeId = undefined

  /** 商品类型名称 */
  commodityTypeName = ''

  /** 商品品种名称 */
  commodityVarietyName = ''

  /** sku总数 */
  skuSum = undefined

  /** 激活状态 */
  status = undefined
}

class CommodityStatusDTO {
  /** 商品id */
  commodityId = undefined

  /** 激活状态 */
  status = undefined
}

class CommodityVerifyDTO {
  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''
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

  /** 商品类型，1水果，2食品 */
  commodityTypeId = undefined

  /** 状态（1激活，0禁用） */
  status = undefined

  /** 总计类型（sku单位；副单位） */
  totalType = undefined

  /** 总计类型（sku单位；副单位） */
  totalTypeName = ''

  /** 单位数量（sku净重；换算比率） */
  unitQuantity = undefined

  /** 单位类型（sku净重单位；最小单位） */
  unitType = undefined

  /** 单位类型名称（sku净重单位；最小单位） */
  unitTypeName = ''
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

class SkuListConditionDTO {
  /** 商品id */
  commodityId = undefined

  /** SpecificationsAndOptions */
  commoditySpecOptionConditionDTOList = []

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

class SpecificationsAndTypes {
  /** 商品规格ID */
  commoditySpecId = undefined

  /** 商品规格名称 */
  commoditySpecName = ''

  /** 商品SpecificationsAndOptions */
  commoditySpecOptions = []

  /** 商品规格排序 */
  commoditySpecSort = undefined
}

class SubsidiaryDTO {
  /** 商品品类id */
  commodityCategoryId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 规格信息 */
  commoditySpecs = []
}

class SubsidiaryPageVo {
  /** 商品分类名称（原品类） */
  commodityCategoryName = ''

  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** sku总数 */
  skuSum = undefined

  /** 激活状态 */
  status = undefined
}

class SubsidiarySpuVO {
  /** 商品分类名称（原品类） */
  commodityCategoryName = ''

  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 规格信息 */
  commoditySpecs = []

  /** sku总数 */
  skuSum = undefined

  /** 激活状态 */
  status = undefined
}

class SubsidiaryUpdateDTO {
  /** 商品id */
  commodityId = undefined

  /** 商品名称 */
  commodityName = ''

  /** 商品分类id */
  commodityTypeId = undefined
}

class UpdateSkuDTO {
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

export const commodityService = {
  ApiResult,
  CommodityDTO,
  CommodityModifyDTO,
  CommodityNameDTO,
  CommodityPageVO,
  CommoditySkuSaveDTO,
  CommoditySpecDTO,
  CommoditySpecModifyDTO,
  CommoditySpecOptionConditionDTO,
  CommoditySpecOptionDTO,
  CommoditySpuVO,
  CommodityStatusDTO,
  CommodityVerifyDTO,
  DefaultPageResult,
  ModifyTheSkuStatus,
  Option,
  ScreeningSkuList,
  SkuDetails,
  SkuHeader,
  SkuList,
  SkuListConditionDTO,
  SkuListHeader,
  SkuSpecificationOptionsHeaderList,
  SpecificationsAndOptions,
  SpecificationsAndTypes,
  SubsidiaryDTO,
  SubsidiaryPageVo,
  SubsidiarySpuVO,
  SubsidiaryUpdateDTO,
  UpdateSkuDTO
}
