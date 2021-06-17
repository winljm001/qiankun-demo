// pageCommodityBom 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageCommodityBom 接口 URL 参数/GET
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
 * @description pageCommodityBom 接口参数
 */
export type PageCommodityBomParams = Params

/**
 * @description pageCommodityBom 接口
 */
export const pageCommodityBom = (
  params: PageCommodityBomParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<
        defs.commodityService.CommodityBomListVO
      >
    >
  >({
    ...request.buildOptions('/api/commodity/v1/bom/list', params, 'GET'),
    headers
  })
}

/**
 * @description pageCommodityBom hooks 默认的 key
 */
export const USE_PAGE_COMMODITY_BOM_KEY = '/api/commodity/v1/bom/list_GET'

// export const pageCommodityBomQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageCommodityBom(params);
// }

// /**
//  * @description pageCommodityBom hooks
//  */
// export const usePageCommodityBom = (params: PageCommodityBomParams, headers?:any, key = 'USE_PAGE_COMMODITY_BOM_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageCommodityBom(params, headers),
//   })
// }
