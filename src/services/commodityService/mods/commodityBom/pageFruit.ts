// pageFruit 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageFruit 接口 URL 参数/GET
 */
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

/**
 * @description pageFruit 接口参数
 */
export type PageFruitParams = Params

/**
 * @description pageFruit 接口
 */
export const pageFruit = (params: PageFruitParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.FruitListVO>
    >
  >({
    ...request.buildOptions('/api/commodity/v1/bom/list/fruit', params, 'GET'),
    headers
  })
}

/**
 * @description pageFruit hooks 默认的 key
 */
export const USE_PAGE_FRUIT_KEY = '/api/commodity/v1/bom/list/fruit_GET'

// export const pageFruitQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageFruit(params);
// }

// /**
//  * @description pageFruit hooks
//  */
// export const usePageFruit = (params: PageFruitParams, headers?:any, key = 'USE_PAGE_FRUIT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageFruit(params, headers),
//   })
// }
