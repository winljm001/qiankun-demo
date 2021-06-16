// getSkuDetail 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description getSkuDetail 接口 URL 参数/GET
 */
export class Params {
  /** sku id */
  commoditySkuId: number
}

/**
 * @description getSkuDetail 接口参数
 */
export type GetSkuDetailParams = Params

/**
 * @description getSkuDetail 接口
 */
export const getSkuDetail = (params: GetSkuDetailParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<defs.commodityService.SkuDetails>
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/subsidiary/detail/{commoditySkuId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description getSkuDetail hooks 默认的 key
 */
export const USE_GET_SKU_DETAIL_KEY =
  '/api/commodity/v1/commodity/sku/subsidiary/detail/{commoditySkuId}_GET'

// export const getSkuDetailQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getSkuDetail(params);
// }

// /**
//  * @description getSkuDetail hooks
//  */
// export const useGetSkuDetail = (params: GetSkuDetailParams, headers?:any, key = 'USE_GET_SKU_DETAIL_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getSkuDetail(params, headers),
//   })
// }
