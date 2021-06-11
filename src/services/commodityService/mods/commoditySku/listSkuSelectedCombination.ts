// listSkuSelectedCombination 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSkuSelectedCombination 接口 URL 参数/GET
 */
export class Params {
  /** 商品id */
  commodityId: number
}

/**
 * @description listSkuSelectedCombination 接口参数
 */
export type ListSkuSelectedCombinationParams = Params

/**
 * @description listSkuSelectedCombination 接口
 */
export const listSkuSelectedCombination = (
  params: ListSkuSelectedCombinationParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<Array<Array<number>>>>(
    {
      ...request.buildOptions(
        '/api/commodity/v1/commodity/sku/selected/{commodityId}',
        params,
        'GET'
      ),
      headers
    }
  )
}

/**
 * @description listSkuSelectedCombination hooks 默认的 key
 */
export const USE_LIST_SKU_SELECTED_COMBINATION_KEY =
  '/api/commodity/v1/commodity/sku/selected/{commodityId}_GET'

// export const listSkuSelectedCombinationQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSkuSelectedCombination(params);
// }

// /**
//  * @description listSkuSelectedCombination hooks
//  */
// export const useListSkuSelectedCombination = (params: ListSkuSelectedCombinationParams, headers?:any, key = 'USE_LIST_SKU_SELECTED_COMBINATION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSkuSelectedCombination(params, headers),
//   })
// }
