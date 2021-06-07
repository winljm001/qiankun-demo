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

    export class CommodityNameDTO {
      /** 商品id */
      commodityId?: number

      /** 商品名称 */
      commodityName?: string
    }

    export class CommoditySkuSaveDTO {
      /** commodityId */
      commodityId?: number

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
      commoditySpecOptionDTOS?: Array<
        defs.commodityService.CommoditySpecOptionDTO
      >

      /** 商品规格排序 */
      commoditySpecSort?: number
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

    export class ScreeningSkuList {
      /** 规格id */
      commoditySpecId?: number

      /** 规格名称 */
      commoditySpecName?: string

      /** SpecificationsAndOptions */
      commoditySpecOptionVOList?: Array<
        defs.commodityService.SpecificationsAndOptions0
      >
    }

    export class SkuDetails {
      /** sku id */
      commoditySkuId?: number

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

      /** SpecificationsAndOptions */
      skuCommoditySpecOptionMap?: ObjectMap<any, string>

      /** 状态（1激活，0禁用） */
      status?: number

      /** 总计类型（sku单位；副单位） */
      totalTypeText?: string

      /** 单位数量（sku净重；换算比率） */
      unitQuantityText?: string
    }

    export class SkuListFilterCondition {
      /** 商品id */
      commodityId?: number

      /** SpecificationsAndOptions */
      commoditySpecOptionDTOList?: Array<
        defs.commodityService.SpecificationsAndOptions
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

    export class SpecificationsAndOptions0 {
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

    export class UpdateSkuDTO {
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
        export class Params {
          /** admin */
          admin?: boolean
          /** currentDate */
          currentDate?: string
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

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
          /** admin */
          admin?: boolean
          /** commodityName */
          commodityName?: string
          /** currentDate */
          currentDate?: string
          /** offset */
          offset?: number
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** pageCurrent */
          pageCurrent?: number
          /** pageSize */
          pageSize?: number
          /** sortBys */
          sortBys?: Array<string>
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

        export type Response = defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.CommoditySpuVO
          >
        >
        export const init: Response
        export function request(
          params: Params
        ): Promise<
          defs.commodityService.ApiResult<
            defs.commodityService.DefaultPageResult<
              defs.commodityService.CommoditySpuVO
            >
          >
        >
      }

      /**
       * doUpdateCommodityName
       * /api/commodity/v1/spu/update/name
       */
      export namespace doUpdateCommodityName {
        export class Params {
          /** admin */
          admin?: boolean
          /** currentDate */
          currentDate?: string
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

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
        export class Params {
          /** admin */
          admin?: boolean
          /** currentDate */
          currentDate?: string
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

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
        export class Params {
          /** admin */
          admin?: boolean
          /** commodityName */
          commodityName: string
          /** currentDate */
          currentDate?: string
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

        export type Response = defs.commodityService.ApiResult<boolean>
        export const init: Response
        export function request(
          params: Params
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
          bodyParams: defs.commodityService.SkuListFilterCondition
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
       * /api/commodity/v1/spec/modify/{commodityId}
       */
      export namespace doModifySpecById {
        export class Params {
          /** admin */
          admin?: boolean
          /** commodityId */
          commodityId: number
          /** currentDate */
          currentDate?: string
          /** organizationId */
          organizationId?: number
          /** organizationName */
          organizationName?: string
          /** userId */
          userId?: number
          /** userName */
          userName?: string
        }

        export type Response = defs.commodityService.ApiResult<number>
        export const init: Response
        export function request(
          params: Params,
          bodyParams: Array<defs.commodityService.CommoditySpecModifyDTO>
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
  }
}
