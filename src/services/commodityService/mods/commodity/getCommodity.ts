// getCommodity 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description getCommodity 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description getCommodity 接口参数
 */
export type GetCommodityParams = Params

/**
 * @description getCommodity 接口
 */
export const getCommodity = (params: GetCommodityParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<defs.commodityService.CommoditySpuVO>
  >({
    ...request.buildOptions('/api/commodity/v1/spu/{id}', params, 'GET'),
    headers
  })
}

/**
 * @description getCommodity hooks 默认的 key
 */
export const USE_GET_COMMODITY_KEY = '/api/commodity/v1/spu/{id}_GET'

// export const getCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodity(params);
// }

// /**
//  * @description getCommodity hooks
//  */
// export const useGetCommodity = (params: GetCommodityParams, headers?:any, key = 'USE_GET_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodity(params, headers),
//   })
// }
