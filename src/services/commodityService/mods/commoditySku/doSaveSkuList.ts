// doSaveSkuList 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doSaveSkuList 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doSaveSkuList 接口参数
 */
export type DoSaveSkuListParams = Params &
  defs.commodityService.CommoditySkuSaveDTO

/**
 * @description doSaveSkuList 接口
 */
export const doSaveSkuList = (params: DoSaveSkuListParams, headers?: any) => {
  return request.request<defs.commodityService.ApiResult<Array<number>>>({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/save',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description doSaveSkuList hooks 默认的 key
 */
export const USE_DO_SAVE_SKU_LIST_KEY =
  '/api/commodity/v1/commodity/sku/save_PUT'

// export const doSaveSkuListQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doSaveSkuList(params);
// }

// /**
//  * @description doSaveSkuList hooks
//  */
// export const useDoSaveSkuList = (params: DoSaveSkuListParams, headers?:any, key = 'USE_DO_SAVE_SKU_LIST_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doSaveSkuList(params, headers),
//   })
// }
