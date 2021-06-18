// getFinishProduct 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description getFinishProduct 接口 URL 参数/GET
 */
export class Params {
  /** bom id */
  commodityBomId: number
}

/**
 * @description getFinishProduct 接口参数
 */
export type GetFinishProductParams = Params

/**
 * @description getFinishProduct 接口
 */
export const getFinishProduct = (
  params: GetFinishProductParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<defs.commodityService.FinishedProductVO>
  >({
    ...request.buildOptions(
      '/api/commodity/v1/bom/detail/commodity/{commodityBomId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description getFinishProduct hooks 默认的 key
 */
export const USE_GET_FINISH_PRODUCT_KEY =
  '/api/commodity/v1/bom/detail/commodity/{commodityBomId}_GET'

// export const getFinishProductQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getFinishProduct(params);
// }

// /**
//  * @description getFinishProduct hooks
//  */
// export const useGetFinishProduct = (params: GetFinishProductParams, headers?:any, key = 'USE_GET_FINISH_PRODUCT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getFinishProduct(params, headers),
//   })
// }
