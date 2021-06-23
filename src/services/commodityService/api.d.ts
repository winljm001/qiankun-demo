type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace commodityService {
    export class ApiResult<T0 = any> {
      /** data */
      data?: T0

      /** errCode */
      errCode?: number

      /** errMsg */
      errMsg?: string
    }

    export class CommodityBomDetailListVO {
      /** 配料id */
      commodityBomDetailId?: number

      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品SpecificationsAndOptions名称 */
      commoditySpecOptionName?: Array<string>

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 数量 */
      quantity?: number

      /** 数量单位 */
      quantityUnit?: number

      /** 数量单位名称 */
      quantityUnitName?: string
    }

    export class CommodityBomListVO {
      /** bom id */
      commodityBomId?: number

      /** 商品分类 */
      commodityCategoryName?: string

      /** 商品名称 */
      commodityName?: string

      /** 商品SpecificationsAndOptions */
      commoditySpecOptionName?: Array<string>

      /** 商品类型 */
      commodityTypeName?: string
    }

    export class CommodityDTO {
      /** 商品品类id */
      commodityCategoryId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品产地id */
      commodityPlaceOriginId?: number

      /** 规格信息 */
      commoditySpecs?: Array<defs.commodityService.CommoditySpecDTO>

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品品种id */
      commodityVarietyId?: number
    }

    export class CommodityModifyDTO {
      /** 商品id */
      commodityId?: number

      /** 商品规格对象 */
      commoditySpecs?: Array<defs.commodityService.CommoditySpecModifyDTO>
    }

    export class CommodityNameDTO {
      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string
    }

    export class CommodityPageVO {
      /** 商品品类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品产地名称 */
      commodityPlaceOriginName?: string

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 商品品种名称 */
      commodityVarietyName?: string

      /** sku总数 */
      skuSum?: number

      /** 激活状态 */
      status?: number
    }

    export class CommoditySkuSaveDTO {
      /** commodityId */
      commodityId: number

      /** commoditySpecId */
      commoditySpecId?: Array<number>

      /** commoditySpecOptionIdsList */
      commoditySpecOptionIdsList?: Array<Array<any>>
    }

    export class CommoditySpecDTO {
      /** 商品规格id */
      commoditySpecId?: number

      /** 商品规格名称 */
      commoditySpecName?: string

      /** 商品SpecificationsAndOptions */
      commoditySpecOptions?: Array<defs.commodityService.CommoditySpecOptionDTO>

      /** 商品规格排序 */
      commoditySpecSort?: number
    }

    export class CommoditySpecModifyDTO {
      /** 商品规格ID */
      commoditySpecId?: number

      /** 商品规格名称 */
      commoditySpecName?: string

      /** 商品SpecificationsAndOptions */
      commoditySpecOptions?: Array<defs.commodityService.CommoditySpecOptionDTO>

      /** 商品规格排序 */
      commoditySpecSort?: number
    }

    export class CommoditySpecOptionConditionDTO {
      /** 规格id */
      commoditySpecId?: number

      /** SpecificationsAndOptionsid */
      commoditySpecOptionId?: number
    }

    export class CommoditySpecOptionDTO {
      /** 商品SpecificationsAndOptionsID */
      commoditySpecOptionId?: number

      /** 商品SpecificationsAndOptions名称 */
      commoditySpecOptionName?: string
    }

    export class CommoditySpuVO {
      /** 商品品类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品产地名称 */
      commodityPlaceOriginName?: string

      /** 规格信息 */
      commoditySpecs?: Array<defs.commodityService.SpecificationsAndTypes>

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 商品品种名称 */
      commodityVarietyName?: string

      /** sku总数 */
      skuSum?: number

      /** 激活状态 */
      status?: number
    }

    export class CommodityStatusDTO {
      /** 商品id */
      commodityId?: number

      /** 激活状态 */
      status?: number
    }

    export class CommodityTypeVO {
      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 上级类型id */
      parentCommodityTypeId?: number
    }

    export class CommodityVerifyDTO {
      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string
    }

    export class DefaultPageResult<T0 = any> {
      /** pageCurrent */
      pageCurrent?: number

      /** pageSize */
      pageSize?: number

      /** records */
      records?: Array<T0>

      /** totalRecords */
      totalRecords?: number
    }

    export class FinishedGoodsReturnedList {
      /** 商品分类 */
      categoryText?: string

      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品skuId */
      commoditySkuId?: number

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品产地 */
      placeOriginName?: string

      /** 商品规格 */
      specText?: Array<string>

      /** 商品品种 */
      varietyName?: string
    }

    export class FinishedProductVO {
      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品产地名称 */
      commodityPlaceOriginName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品SpecificationsAndOptions名称 */
      commoditySpecOptionName?: Array<string>

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 商品品种名称 */
      commodityVarietyName?: string
    }

    export class FoodAccessoriesListVO {
      /** 商品分类id */
      categoryId?: number

      /** 商品分类名称 */
      categoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品SpecificationsAndOptions名称 */
      commoditySpecOptionName?: Array<string>

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 商品单位id */
      unitId?: number

      /** 商品单位名称 */
      unitName?: string
    }

    export class FruitListVO {
      /** 商品分类id */
      categoryId?: number

      /** 商品分类名称 */
      categoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 商品类型id */
      commodityTypeId?: number

      /** 商品类型名称 */
      commodityTypeName?: string

      /** 产地id */
      placeOriginId?: number

      /** 产地名称 */
      placeOriginName?: string

      /** 商品单位id */
      unitId?: number

      /** 商品单位名称 */
      unitName?: string

      /** 商品品种id */
      varietyId?: number

      /** 商品品种名称 */
      varietyName?: string
    }

    export class ModifyTheSkuStatus {
      /** sku id */
      commoditySkuIds?: Array<number>

      /** 状态（1激活，0禁用） */
      status?: number
    }

    export class Option<T0 = any, T1 = any> {
      /** label */
      label?: string

      /** selected */
      selected?: boolean

      /** value */
      value?: number
    }

    export class SaveCommodityBomDTO {
      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品类型id */
      commodityTypeId?: number

      /** 配料列表 */
      saveCommodityBomDetailDTOS?: Array<
        defs.commodityService.SaveCommodityBomDetailDTO
      >
    }

    export class SaveCommodityBomDetailDTO {
      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品类型id */
      commodityTypeId?: number

      /** 数量 */
      quantity?: number

      /** 数量单位 */
      quantityUnit?: number
    }

    export class ScreeningSkuList {
      /** 规格id */
      commoditySpecId?: number

      /** 规格名称 */
      commoditySpecName?: string

      /** SpecificationsAndOptions */
      commoditySpecOptionVOList?: Array<
        defs.commodityService.SpecificationsAndOptions
      >
    }

    export class SkuDetailVO {
      /** 商品产地id */
      commodityPlaceOriginId?: number

      /** sku id */
      commoditySkuId?: number

      /** 商品类型，1水果，2食品 */
      commodityTypeId?: number

      /** sku属性 */
      commodityTypes?: Array<defs.commodityService.CommodityTypeVO>

      /** 商品品类id */
      commodityVarietyId?: number

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalType?: number

      /** 总计类型（sku单位；副单位） */
      totalTypeName?: string

      /** 单位数量（sku净重；换算比率） */
      unitQuantity?: number

      /** 单位类型（sku净重单位；最小单位） */
      unitType?: number

      /** 单位类型名称（sku净重单位；最小单位） */
      unitTypeName?: string
    }

    export class SkuDetails {
      /** sku id */
      commoditySkuId?: number

      /** 商品类型，1水果，2食品 */
      commodityTypeId?: number

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalType?: number

      /** 总计类型（sku单位；副单位） */
      totalTypeName?: string

      /** 单位数量（sku净重；换算比率） */
      unitQuantity?: number

      /** 单位类型（sku净重单位；最小单位） */
      unitType?: number

      /** 单位类型名称（sku净重单位；最小单位） */
      unitTypeName?: string
    }

    export class SkuHeader {
      /** SkuListHeader */
      skuListColumnCommoditySkuUnitVOList?: Array<
        defs.commodityService.SkuListHeader
      >

      /** SkuList规格表头 */
      skuListColumnCommoditySpecVOList?: Array<
        defs.commodityService.SkuSpecificationOptionsHeaderList
      >
    }

    export class SkuList {
      /** 变更状态：0未变更，1变更 */
      change?: number

      /** sku Id */
      commoditySkuId?: number

      /** 商品类型/属性名称 */
      propertyText?: string

      /** SpecificationsAndOptions */
      skuCommoditySpecOptionMap?: ObjectMap<any, string>

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalTypeText?: string

      /** 单位数量（sku净重；换算比率） */
      unitQuantityText?: string
    }

    export class SkuListConditionDTO {
      /** 商品id */
      commodityId?: number

      /** SpecificationsAndOptions */
      commoditySpecOptionConditionDTOList?: Array<
        defs.commodityService.CommoditySpecOptionConditionDTO
      >

      /** pageCurrent */
      pageCurrent?: number

      /** pageSize */
      pageSize?: number

      /** sortBys */
      sortBys?: Array<string>
    }

    export class SkuListHeader {
      /** key */
      key?: string

      /** title */
      title?: string
    }

    export class SkuSpecificationOptionsHeaderList {
      /** 规格id */
      commoditySpecId?: number

      /** 规格名称 */
      commoditySpecName?: string
    }

    export class SpecificationsAndOptions {
      /** SpecificationsAndOptionsid */
      commoditySpecOptionId?: number

      /** SpecificationsAndOptions名称 */
      commoditySpecOptionName?: string
    }

    export class SpecificationsAndTypes {
      /** 商品规格ID */
      commoditySpecId?: number

      /** 商品规格名称 */
      commoditySpecName?: string

      /** 商品SpecificationsAndOptions */
      commoditySpecOptions?: Array<
        defs.commodityService.SpecificationsAndOptions
      >

      /** 商品规格排序 */
      commoditySpecSort?: number
    }

    export class SubsidiaryDTO {
      /** 商品品类id */
      commodityCategoryId?: number

      /** 商品名称 */
      commodityName?: string

      /** 规格信息 */
      commoditySpecs?: Array<defs.commodityService.CommoditySpecDTO>
    }

    export class SubsidiaryPageVo {
      /** 商品分类名称ID（原品类） */
      commodityCategoryId?: number

      /** 商品分类名称（原品类） */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku总数 */
      skuSum?: number

      /** 激活状态 */
      status?: number
    }

    export class SubsidiarySpuVO {
      /** 商品分类名称（原品类） */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** 规格信息 */
      commoditySpecs?: Array<defs.commodityService.SpecificationsAndTypes>

      /** sku总数 */
      skuSum?: number

      /** 激活状态 */
      status?: number
    }

    export class SubsidiaryUpdateDTO {
      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string
    }

    export class UpdateCommodityBomDTO {
      /** bom id */
      commodityBomId?: number

      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品类型id */
      commodityTypeId?: number

      /** 配料列表 */
      updateCommodityBomDetailDTOS?: Array<
        defs.commodityService.UpdateCommodityBomDetailDTO
      >
    }

    export class UpdateCommodityBomDetailDTO {
      /** 配料id */
      commodityBomDetailId?: number

      /** 商品分类id */
      commodityCategoryId?: number

      /** 商品分类名称 */
      commodityCategoryName?: string

      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string

      /** sku id */
      commoditySkuId?: number

      /** 商品类型id */
      commodityTypeId?: number

      /** 数量 */
      quantity?: number

      /** 数量单位 */
      quantityUnit?: number
    }

    export class UpdateSkuDTO {
      /** sku id */
      commoditySkuIds?: Array<number>

      /** commodityTypeIds */
      commodityTypeIds: Array<number>

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalType?: number

      /** 单位数量（sku净重；换算比率） */
      unitQuantity?: number

      /** 单位类型（sku净重单位；最小单位） */
      unitType?: number
    }

    export class UpdateSubSkuDTO {
      /** sku id */
      commoditySkuIds?: Array<number>

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalType?: number

      /** 单位数量（sku净重；换算比率） */
      unitQuantity?: number

      /** 单位类型（sku净重单位；最小单位） */
      unitType?: number
    }
  }
}

declare namespace API {
  export namespace commodityService {
    /**
     * 商品管理
     */
    export namespace commodity {
      /**
       * doInsertCommodity
       * /api/commodity/v1/spu/insert
       */
      export namespace doInsertCommodity {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<number>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityDTO
        ): Promise<defs.commodityService.ApiResult<number>>
      }

      /**
       * pageCommodity
       * /api/commodity/v1/spu/list
       */
      export namespace pageCommodity {
        export class Params {
          /** commodityName */
          commodityName?: string
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.CommodityPageVO
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.CommodityPageVO
            >
          >
        >
      }

      /**
       * pageFinishedProduct
       * /api/commodity/v1/spu/product/list
       */
      export namespace pageFinishedProduct {
        export class Params {
          /** commodityName */
          commodityName?: string
          /** commoditySpecName */
          commoditySpecName?: string
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.FinishedGoodsReturnedList
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.FinishedGoodsReturnedList
            >
          >
        >
      }

      /**
       * doUpdateCommodityName
       * /api/commodity/v1/spu/update/name
       */
      export namespace doUpdateCommodityName {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityNameDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * doUpdateCommodityStatus
       * /api/commodity/v1/spu/update/status
       */
      export namespace doUpdateCommodityStatus {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityStatusDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * isSpuNameRepeat
       * /api/commodity/v1/spu/verify/name
       */
      export namespace isSpuNameRepeat {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityVerifyDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * getCommodity
       * /api/commodity/v1/spu/{id}
       */
      export namespace getCommodity {
        export class Params {
          /** id */
          id: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.CommoditySpuVO
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.CommoditySpuVO>
        >
      }
    }

    /**
     * 成品bom管理
     */
    export namespace commodityBom {
      /**
       * deleteCommodityBom
       * /api/commodity/v1/bom/del/{commodityBomId}
       */
      export namespace deleteCommodityBom {
        export class Params {
          /** commodityBomId */
          commodityBomId: number
        }

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * getFinishProduct
       * /api/commodity/v1/bom/detail/commodity/{commodityBomId}
       */
      export namespace getFinishProduct {
        export class Params {
          /** bom id */
          commodityBomId: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.FinishedProductVO
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.FinishedProductVO
          >
        >
      }

      /**
       * listDetail
       * /api/commodity/v1/bom/detail/list/{commodityBomId}
       */
      export namespace listDetail {
        export class Params {
          /** bom id */
          commodityBomId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.CommodityBomDetailListVO>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.CommodityBomDetailListVO>
          >
        >
      }

      /**
       * pageCommodityBom
       * /api/commodity/v1/bom/list
       */
      export namespace pageCommodityBom {
        export class Params {
          /** 商品名称 */
          commodityName?: string
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.CommodityBomListVO
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.CommodityBomListVO
            >
          >
        >
      }

      /**
       * pageFoodAccessories
       * /api/commodity/v1/bom/list/food/accessories
       */
      export namespace pageFoodAccessories {
        export class Params {
          /** 商品名称 */
          commodityName?: string
          /** 已选择sku id集合 */
          commoditySkuIds?: Array<number>
          /** 商品规格名称 */
          commoditySpecName?: string
          /** 商品类型id【2食品、3辅料】 */
          commodityTypeId: number
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.FoodAccessoriesListVO
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.FoodAccessoriesListVO
            >
          >
        >
      }

      /**
       * pageFruit
       * /api/commodity/v1/bom/list/fruit
       */
      export namespace pageFruit {
        export class Params {
          /** 已选择商品id集合 */
          commodityIds?: Array<number>
          /** 商品名称 */
          commodityName?: string
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.FruitListVO
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.FruitListVO
            >
          >
        >
      }

      /**
       * saveCommodityBom
       * /api/commodity/v1/bom/save
       */
      export namespace saveCommodityBom {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.SaveCommodityBomDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * updateCommodityBom
       * /api/commodity/v1/bom/update
       */
      export namespace updateCommodityBom {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.UpdateCommodityBomDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }
    }

    /**
     * 商品分类管理
     */
    export namespace commodityCategory {
      /**
       * listSpuCategoryOption
       * /api/commodity/v1/spu/category/{id}/option
       */
      export namespace listSpuCategoryOption {
        export class Params {
          /** id */
          id: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }

      /**
       * listCommodityOriginOption
       * /api/commodity/v1/spu/origin/{id}/option
       */
      export namespace listCommodityOriginOption {
        export class Params {
          /** id */
          id: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }

      /**
       * listCommodityVarietyOption
       * /api/commodity/v1/spu/variety/{id}/option
       */
      export namespace listCommodityVarietyOption {
        export class Params {
          /** id */
          id: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }
    }

    /**
     * sku管理
     */
    export namespace commoditySku {
      /**
       * listSkuListColumn
       * /api/commodity/v1/commodity/sku/column/{commodityId}
       */
      export namespace listSkuListColumn {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.SkuHeader
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.SkuHeader>
        >
      }

      /**
       * getSkuDetail
       * /api/commodity/v1/commodity/sku/detail/{commoditySkuId}
       */
      export namespace getSkuDetail {
        export class Params {
          /** sku id */
          commoditySkuId: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.SkuDetailVO
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.SkuDetailVO>
        >
      }

      /**
       * pageSku
       * /api/commodity/v1/commodity/sku/list
       */
      export namespace pageSku {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
        >
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.SkuListConditionDTO
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.SkuList
            >
          >
        >
      }

      /**
       * listPropertyOptions
       * /api/commodity/v1/commodity/sku/option/property
       */
      export namespace listPropertyOptions {
        export class Params {
          /** commodityTypeId */
          commodityTypeId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }

      /**
       * listUnitOptions
       * /api/commodity/v1/commodity/sku/option/unit/{commodityTypeId}
       */
      export namespace listUnitOptions {
        export class Params {
          /** 商品类型id（1：水果，2：食品，5：sku净重） */
          commodityTypeId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }

      /**
       * listSkuQueryCondition
       * /api/commodity/v1/commodity/sku/options/{commodityId}
       */
      export namespace listSkuQueryCondition {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.ScreeningSkuList>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.ScreeningSkuList>
          >
        >
      }

      /**
       * doSaveSkuList
       * /api/commodity/v1/commodity/sku/save
       */
      export namespace doSaveSkuList {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<Array<number>>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommoditySkuSaveDTO
        ): Promise<defs.commodityService.ApiResult<Array<number>>>
      }

      /**
       * listSkuSelectedCombination
       * /api/commodity/v1/commodity/sku/selected/{commodityId}
       */
      export namespace listSkuSelectedCombination {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<Array<number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.commodityService.ApiResult<Array<Array<number>>>>
      }

      /**
       * doUpdateSku
       * /api/commodity/v1/commodity/sku/update
       */
      export namespace doUpdateSku {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.UpdateSkuDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * doUpdateSkuStatus
       * /api/commodity/v1/commodity/sku/update/status
       */
      export namespace doUpdateSkuStatus {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.ModifyTheSkuStatus
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }
    }

    /**
     * 商品类型管理
     */
    export namespace commodityType {
      /**
       * listSpuTypeOption
       * /api/commodity/v1/spu/type/option
       */
      export namespace listSpuTypeOption {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }
    }

    /**
     * 规格管理
     */
    export namespace spec {
      /**
       * listSpecById
       * /api/commodity/v1/spec/list/{commodityId}
       */
      export namespace listSpecById {
        export class Params {
          /** commodityId */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.SpecificationsAndTypes>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.SpecificationsAndTypes>
          >
        >
      }

      /**
       * doModifySpecById
       * /api/commodity/v1/spec/modify
       */
      export namespace doModifySpecById {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<number>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityModifyDTO
        ): Promise<defs.commodityService.ApiResult<number>>
      }

      /**
       * verifySpecName
       * /api/commodity/v1/spec/repeat
       */
      export namespace verifySpecName {
        export class Params {
          /** specName */
          specName: string
        }

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }
    }

    /**
     * 辅料SPU管理
     */
    export namespace subsidiary {
      /**
       * doInsertCommodity
       * /api/commodity/v1/spu/subsidiary/insert
       */
      export namespace doInsertCommodity {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<number>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.SubsidiaryDTO
        ): Promise<defs.commodityService.ApiResult<number>>
      }

      /**
       * pageCommodity
       * /api/commodity/v1/spu/subsidiary/list
       */
      export namespace pageCommodity {
        export class Params {
          /** commodityName */
          commodityName?: string
          /** offset */
          offset?: number
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.SubsidiaryPageVo
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.SubsidiaryPageVo
            >
          >
        >
      }

      /**
       * doUpdateCommodityName
       * /api/commodity/v1/spu/subsidiary/update
       */
      export namespace doUpdateCommodityName {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.SubsidiaryUpdateDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * doUpdateCommodityStatus
       * /api/commodity/v1/spu/subsidiary/update/status
       */
      export namespace doUpdateCommodityStatus {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityStatusDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * isSpuNameRepeat
       * /api/commodity/v1/spu/subsidiary/verify/name
       */
      export namespace isSpuNameRepeat {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityVerifyDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * getCommodity
       * /api/commodity/v1/spu/subsidiary/{id}
       */
      export namespace getCommodity {
        export class Params {
          /** id */
          id: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.SubsidiarySpuVO
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.SubsidiarySpuVO>
        >
      }
    }

    /**
     * 辅料分类管理
     */
    export namespace subsidiaryCategory {
      /**
       * listSpuCategoryOption
       * /api/commodity/v1/spu/subsidiary/category
       */
      export namespace listSpuCategoryOption {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }
    }

    /**
     * 辅料sku管理
     */
    export namespace subsidiarySku {
      /**
       * listSkuListColumn
       * /api/commodity/v1/commodity/sku/subsidiary/column/{commodityId}
       */
      export namespace listSkuListColumn {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.SkuHeader
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.SkuHeader>
        >
      }

      /**
       * getSkuDetail
       * /api/commodity/v1/commodity/sku/subsidiary/detail/{commoditySkuId}
       */
      export namespace getSkuDetail {
        export class Params {
          /** sku id */
          commoditySkuId: number
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.SkuDetails
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<defs.commodityService.SkuDetails>
        >
      }

      /**
       * pageSku
       * /api/commodity/v1/commodity/sku/subsidiary/list
       */
      export namespace pageSku {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
        >
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.SkuListConditionDTO
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.SkuList
            >
          >
        >
      }

      /**
       * listUnitOptions
       * /api/commodity/v1/commodity/sku/subsidiary/option/unit/{commodityTypeId}
       */
      export namespace listUnitOptions {
        export class Params {
          /** 商品类型id（1：水果，2：食品，3:辅料,5：sku净重） */
          commodityTypeId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.Option<string, number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.Option<string, number>>
          >
        >
      }

      /**
       * listSkuQueryCondition
       * /api/commodity/v1/commodity/sku/subsidiary/options/{commodityId}
       */
      export namespace listSkuQueryCondition {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.ScreeningSkuList>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.ScreeningSkuList>
          >
        >
      }

      /**
       * doSaveSkuList
       * /api/commodity/v1/commodity/sku/subsidiary/save
       */
      export namespace doSaveSkuList {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<Array<number>>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommoditySkuSaveDTO
        ): Promise<defs.commodityService.ApiResult<Array<number>>>
      }

      /**
       * listSkuSelectedCombination
       * /api/commodity/v1/commodity/sku/subsidiary/selected/{commodityId}
       */
      export namespace listSkuSelectedCombination {
        export class Params {
          /** 商品id */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<Array<number>>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.commodityService.ApiResult<Array<Array<number>>>>
      }

      /**
       * doUpdateSku
       * /api/commodity/v1/commodity/sku/subsidiary/update
       */
      export namespace doUpdateSku {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.UpdateSubSkuDTO
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }

      /**
       * doUpdateSkuStatus
       * /api/commodity/v1/commodity/sku/subsidiary/update/status
       */
      export namespace doUpdateSkuStatus {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.ModifyTheSkuStatus
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }
    }

    /**
     * 辅料规格管理
     */
    export namespace subsidiarySpec {
      /**
       * listSpecById
       * /api/commodity/v1/subsidiary/spec/list/{commodityId}
       */
      export namespace listSpecById {
        export class Params {
          /** commodityId */
          commodityId: number
        }

        export type Response = defs.commodityService.ApiResult<
          Array<defs.commodityService.SpecificationsAndTypes>
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            Array<defs.commodityService.SpecificationsAndTypes>
          >
        >
      }

      /**
       * doModifySpecById
       * /api/commodity/v1/subsidiary/spec/modify
       */
      export namespace doModifySpecById {
        export class Params {}

        export type Response = defs.commodityService.ApiResult<number>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.commodityService.CommodityModifyDTO
        ): Promise<defs.commodityService.ApiResult<number>>
      }

      /**
       * verifySpecName
       * /api/commodity/v1/subsidiary/spec/repeat
       */
      export namespace verifySpecName {
        export class Params {
          /** specName */
          specName: string
        }

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params
        ): Promise<defs.commodityService.ApiResult<boolean>>
      }
    }
  }
}
