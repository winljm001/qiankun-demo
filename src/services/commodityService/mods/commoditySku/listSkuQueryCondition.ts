// listSkuQueryCondition 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSkuQueryCondition 接口 URL 参数/GET
 */
export class Params {
  /** 商品id */
  commodityId: number
}

/**
 * @description listSkuQueryCondition 接口参数
 */
export type ListSkuQueryConditionParams = Params

/**
 * @description listSkuQueryCondition 接口
 */
export const listSkuQueryCondition = (
  params: ListSkuQueryConditionParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.ScreeningSkuList>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/options/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listSkuQueryCondition hooks 默认的 key
 */
export const USE_LIST_SKU_QUERY_CONDITION_KEY =
  '/api/commodity/v1/commodity/sku/options/{commodityId}_GET'

// export const listSkuQueryConditionQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSkuQueryCondition(params);
// }

// /**
//  * @description listSkuQueryCondition hooks
//  */
// export const useListSkuQueryCondition = (params: ListSkuQueryConditionParams, headers?:any, key = 'USE_LIST_SKU_QUERY_CONDITION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSkuQueryCondition(params, headers),
//   })
// }
