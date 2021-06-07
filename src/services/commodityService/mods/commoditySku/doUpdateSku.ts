// doUpdateSku 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doUpdateSku 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doUpdateSku 接口参数
 */
export type DoUpdateSkuParams = Params & defs.commodityService.UpdateSkuDTO

/**
 * @description doUpdateSku 接口
 */
export const doUpdateSku = (params: DoUpdateSkuParams, headers?: any) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/update',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description doUpdateSku hooks 默认的 key
 */
export const USE_DO_UPDATE_SKU_KEY =
  '/api/commodity/v1/commodity/sku/update_PUT'

// export const doUpdateSkuQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doUpdateSku(params);
// }

// /**
//  * @description doUpdateSku hooks
//  */
// export const useDoUpdateSku = (params: DoUpdateSkuParams, headers?:any, key = 'USE_DO_UPDATE_SKU_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doUpdateSku(params, headers),
//   })
// }
