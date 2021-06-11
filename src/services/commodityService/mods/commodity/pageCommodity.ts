// pageCommodity 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageCommodity 接口 URL 参数/GET
 */
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

/**
 * @description pageCommodity 接口参数
 */
export type PageCommodityParams = Params

/**
 * @description pageCommodity 接口
 */
export const pageCommodity = (params: PageCommodityParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<
        defs.commodityService.CommodityPageVO
      >
    >
  >({
    ...request.buildOptions('/api/commodity/v1/spu/list', params, 'GET'),
    headers
  })
}

/**
 * @description pageCommodity hooks 默认的 key
 */
export const USE_PAGE_COMMODITY_KEY = '/api/commodity/v1/spu/list_GET'

// export const pageCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageCommodity(params);
// }

// /**
//  * @description pageCommodity hooks
//  */
// export const usePageCommodity = (params: PageCommodityParams, headers?:any, key = 'USE_PAGE_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageCommodity(params, headers),
//   })
// }
