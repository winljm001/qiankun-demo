// pageFoodAccessories 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageFoodAccessories 接口 URL 参数/GET
 */
export class Params {
  /** 商品名称 */
  commodityName?: string
  /** 商品规格名称 */
  commoditySpecName?: string
  /** 商品类型id【2食品、3辅料】 */
  commodityTypeId?: number
  /** offset */
  offset?: number
  /** pageCurrent */
  pageCurrent?: number
  /** pageSize */
  pageSize?: number
  /** sortBys */
  sortBys?: Array<string>
}

/**
 * @description pageFoodAccessories 接口参数
 */
export type PageFoodAccessoriesParams = Params

/**
 * @description pageFoodAccessories 接口
 */
export const pageFoodAccessories = (
  params: PageFoodAccessoriesParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<
        defs.commodityService.FoodAccessoriesListVO
      >
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/bom/list/food/accessories',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description pageFoodAccessories hooks 默认的 key
 */
export const USE_PAGE_FOOD_ACCESSORIES_KEY =
  '/api/commodity/v1/bom/list/food/accessories_GET'

// export const pageFoodAccessoriesQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageFoodAccessories(params);
// }

// /**
//  * @description pageFoodAccessories hooks
//  */
// export const usePageFoodAccessories = (params: PageFoodAccessoriesParams, headers?:any, key = 'USE_PAGE_FOOD_ACCESSORIES_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageFoodAccessories(params, headers),
//   })
// }
