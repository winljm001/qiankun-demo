// doUpdateSkuStatus 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doUpdateSkuStatus 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doUpdateSkuStatus 接口参数
 */
export type DoUpdateSkuStatusParams = Params &
  defs.commodityService.ModifyTheSkuStatus

/**
 * @description doUpdateSkuStatus 接口
 */
export const doUpdateSkuStatus = (
  params: DoUpdateSkuStatusParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/update/status',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description doUpdateSkuStatus hooks 默认的 key
 */
export const USE_DO_UPDATE_SKU_STATUS_KEY =
  '/api/commodity/v1/commodity/sku/update/status_PUT'

// export const doUpdateSkuStatusQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doUpdateSkuStatus(params);
// }

// /**
//  * @description doUpdateSkuStatus hooks
//  */
// export const useDoUpdateSkuStatus = (params: DoUpdateSkuStatusParams, headers?:any, key = 'USE_DO_UPDATE_SKU_STATUS_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doUpdateSkuStatus(params, headers),
//   })
// }
