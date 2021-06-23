// pageFinishedProduct 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageFinishedProduct 接口 URL 参数/GET
 */
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

/**
 * @description pageFinishedProduct 接口参数
 */
export type PageFinishedProductParams = Params

/**
 * @description pageFinishedProduct 接口
 */
export const pageFinishedProduct = (
  params: PageFinishedProductParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<
        defs.commodityService.FinishedGoodsReturnedList
      >
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/spu/product/list',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description pageFinishedProduct hooks 默认的 key
 */
export const USE_PAGE_FINISHED_PRODUCT_KEY =
  '/api/commodity/v1/spu/product/list_GET'

// export const pageFinishedProductQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageFinishedProduct(params);
// }

// /**
//  * @description pageFinishedProduct hooks
//  */
// export const usePageFinishedProduct = (params: PageFinishedProductParams, headers?:any, key = 'USE_PAGE_FINISHED_PRODUCT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageFinishedProduct(params, headers),
//   })
// }
