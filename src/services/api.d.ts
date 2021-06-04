<<<<<<< HEAD
/// <reference path="./commodityService/api.d.ts" />
/// <reference path="./authService/api.d.ts" />
/// <reference path="./userService/api.d.ts" />
=======
type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace commodityService {
  export class ApiResult<T0 = any> {
    /** data */
    data?: T0

    /** errCode */
    errCode?: number

    /** errMsg */
    errMsg?: string
  }

  export class CommodityCategoryVO {
    /** categoryId */
    categoryId?: number

    /** categoryName */
    categoryName?: string

    /** placeOriginId */
    placeOriginId?: number

    /** varietyId */
    varietyId?: number
  }

  export class CommodityDTO {
    /** 商品品类id */
    commodityCategoryId?: number

    /** 商品名称 */
    commodityName?: string

    /** 商品产地id */
    commodityPlaceOriginId?: number

    /** 规格信息 */
    commoditySpecDTOS?: Array<defs.commodityService.CommoditySpecDTO>

    /** 商品类型id */
    commodityTypeId?: number

    /** 商品品种id */
    commodityVarietyId?: number
  }

  export class CommodityGroupVO {
    /** 商品产地列表 */
    commodityPlaceOriginVOS?: Array<
      defs.commodityService.CommodityPlaceOriginVO
    >

    /** 商品品种列表 */
    commodityVarietyVOS?: Array<defs.commodityService.CommodityVarietyVO>
  }

  export class CommodityNameDTO {
    /** 商品id */
    commodityId?: number

    /** 商品名称 */
    commodityName?: string
  }

  export class CommodityPlaceOriginVO {
    /** 品类id */
    categoryId?: number

    /** 产地id */
    placeOriginId?: number

    /** 产地名称 */
    placeOriginName?: number
  }

  export class CommoditySpecDTO {
    /** 商品规格名称 */
    commoditySpecName?: string

    /** 商品SpecificationsAndOptions */
    commoditySpecOptionDTOS?: Array<
      defs.commodityService.CommoditySpecOptionDTO
    >

    /** 商品规格排序 */
    commoditySpecSort?: number
  }

  export class CommoditySpecModifyDTO {
    /** 商品规格ID */
    commoditySpecId?: string

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
    /** 商品SpecificationsAndOptions名称 */
    commoditySpecOptionName?: string
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

  export class CommodityVO {
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

  export class CommodityVarietyVO {
    /** 品类id */
    categoryId?: number

    /** 品种id */
    varietyId?: number

    /** 品种名称 */
    varietyName?: number
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

  export class ModifyTheSpu {
    /** 状态（1激活，0禁用） */
    status?: number

    /** 总计类型（sku单位；副单位） */
    totalType?: number

    /** 单位数量（sku净重；换算比率） */
    unitQuantity?: number

    /** 单位类型（sku净重单位；最小单位） */
    unitType?: number
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

    /** 单位数量（sku净重；换算比率） */
    unitQuantity?: number

    /** 单位类型（sku净重单位；最小单位） */
    unitType?: number
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
    commoditySpecId?: string

    /** 商品规格名称 */
    commoditySpecName?: string

    /** 商品SpecificationsAndOptions */
    commoditySpecOptionVOList?: Array<
      defs.commodityService.SpecificationsAndOptions
    >

    /** 商品规格排序 */
    commoditySpecSort?: number
  }
}

declare namespace commodityService {
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

      export type Response = defs.commodityService.ApiResult<boolean>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.commodityService.CommodityDTO
      ): Promise<defs.commodityService.ApiResult<boolean>>
    }

    /**
     * pageCommodity
     * /api/commodity/v1/spu/list
     */
    export namespace pageCommodity {
      export class Params {
        /** admin */
        admin?: boolean
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
          defs.commodityService.CommodityVO
        >
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<
            defs.commodityService.CommodityVO
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
        defs.commodityService.CommodityVO
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<defs.commodityService.CommodityVO>
      >
    }
  }

  /**
   * 商品分类管理
   */
  export namespace commodityCategory {
    /**
     * list
     * /api/commodity/v1/category/spu/list
     */
    export namespace list {
      export class Params {}

      export type Response = defs.commodityService.ApiResult<
        defs.commodityService.CommodityCategoryVO
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<
          defs.commodityService.CommodityCategoryVO
        >
      >
    }

    /**
     * getCommodityGroup
     * /api/commodity/v1/category/spu/{id}
     */
    export namespace getCommodityGroup {
      export class Params {
        /** id */
        id: number
      }

      export type Response = defs.commodityService.ApiResult<
        defs.commodityService.CommodityGroupVO
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<defs.commodityService.CommodityGroupVO>
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
     * listSku
     * /api/commodity/v1/commodity/sku/list
     */
    export namespace listSku {
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
          defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
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
     * doUpdateSku
     * /api/commodity/v1/commodity/sku/update
     */
    export namespace doUpdateSku {
      export class Params {}

      export type Response = defs.commodityService.ApiResult<boolean>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.commodityService.ModifyTheSpu
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
   * 果品类型管理
   */
  export namespace commodityType {
    /**
     * listSpuTypeOption
     * /api/commodity/v1/type/spu/list
     */
    export namespace listSpuTypeOption {
      export class Params {}

      export type Response = defs.commodityService.ApiResult<
        Array<defs.commodityService.CommodityTypeVO>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<
          Array<defs.commodityService.CommodityTypeVO>
        >
      >
    }
  }

  /**
   * 规格管理
   */
  export namespace spec {
    /**
     * listSelectedSku
     * /api/commodity/v1/spec/list/selected/{commodityId}
     */
    export namespace listSelectedSku {
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

      export type Response = defs.commodityService.ApiResult<
        defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
      >
      export const init: Response
      export function request(
        params: Params
      ): Promise<
        defs.commodityService.ApiResult<
          defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
        >
      >
    }

    /**
     * listSpecById
     * /api/commodity/v1/spec/list/{commodityId}
     */
    export namespace listSpecById {
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

      export type Response = defs.commodityService.ApiResult<
        Array<defs.commodityService.SpecificationsAndTypes>
      >
      export const init: Response
      export function request(
        params: Params,
        bodyParams: defs.commodityService.CommoditySpecModifyDTO
      ): Promise<
        defs.commodityService.ApiResult<
          Array<defs.commodityService.SpecificationsAndTypes>
        >
      >
    }

    /**
     * doSaveSku
     * /api/commodity/v1/spec/save
     */
    export namespace doSaveSku {
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

      export type Response = defs.commodityService.ApiResult<Array<number>>
      export const init: Response
      export function request(
        params: Params,
        bodyParams: Array<defs.commodityService.ModifyTheSpu>
      ): Promise<defs.commodityService.ApiResult<Array<number>>>
    }
  }
}
>>>>>>> fa233df7eb1a8e0951b59c488c47b786c4ecb3f1
