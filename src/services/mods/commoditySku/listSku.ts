// listSku 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSku 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description listSku 接口参数
 */
export type ListSkuParams = Params &
  defs.commodityService.SkuListFilterCondition

/**
 * @description listSku 接口
 */
export const listSku = (params: ListSkuParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/list',
      params,
      'POST'
    ),
    headers
  })
}

/**
 * @description listSku hooks 默认的 key
 */
export const USE_LIST_SKU_KEY = '/api/commodity/v1/commodity/sku/list_POST'

// export const listSkuQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSku(params);
// }

// /**
//  * @description listSku hooks
//  */
// export const useListSku = (params: ListSkuParams, headers?:any, key = 'USE_LIST_SKU_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSku(params, headers),
//   })
// }
