// listSkuListColumn 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSkuListColumn 接口 URL 参数/GET
 */
export class Params {
  /** 商品id */
  commodityId: number
}

/**
 * @description listSkuListColumn 接口参数
 */
export type ListSkuListColumnParams = Params

/**
 * @description listSkuListColumn 接口
 */
export const listSkuListColumn = (
  params: ListSkuListColumnParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<defs.commodityService.SkuHeader>
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/subsidiary/column/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listSkuListColumn hooks 默认的 key
 */
export const USE_LIST_SKU_LIST_COLUMN_KEY =
  '/api/commodity/v1/commodity/sku/subsidiary/column/{commodityId}_GET'

// export const listSkuListColumnQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSkuListColumn(params);
// }

// /**
//  * @description listSkuListColumn hooks
//  */
// export const useListSkuListColumn = (params: ListSkuListColumnParams, headers?:any, key = 'USE_LIST_SKU_LIST_COLUMN_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSkuListColumn(params, headers),
//   })
// }
