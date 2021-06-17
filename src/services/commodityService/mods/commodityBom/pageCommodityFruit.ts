// pageCommodityFruit 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageCommodityFruit 接口 URL 参数/GET
 */
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

/**
 * @description pageCommodityFruit 接口参数
 */
export type PageCommodityFruitParams = Params

/**
 * @description pageCommodityFruit 接口
 */
export const pageCommodityFruit = (
  params: PageCommodityFruitParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<
        defs.commodityService.CommodityFruitListVO
      >
    >
  >({
    ...request.buildOptions('/api/commodity/v1/bom/list/fruit', params, 'GET'),
    headers
  })
}

/**
 * @description pageCommodityFruit hooks 默认的 key
 */
export const USE_PAGE_COMMODITY_FRUIT_KEY =
  '/api/commodity/v1/bom/list/fruit_GET'

// export const pageCommodityFruitQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageCommodityFruit(params);
// }

// /**
//  * @description pageCommodityFruit hooks
//  */
// export const usePageCommodityFruit = (params: PageCommodityFruitParams, headers?:any, key = 'USE_PAGE_COMMODITY_FRUIT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageCommodityFruit(params, headers),
//   })
// }
