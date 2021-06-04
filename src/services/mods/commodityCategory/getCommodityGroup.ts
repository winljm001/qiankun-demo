// getCommodityGroup 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description getCommodityGroup 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description getCommodityGroup 接口参数
 */
export type GetCommodityGroupParams = Params

/**
 * @description getCommodityGroup 接口
 */
export const getCommodityGroup = (
  params: GetCommodityGroupParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<defs.commodityService.CommodityGroupVO>
  >({
    ...request.buildOptions(
      '/api/commodity/v1/category/spu/{id}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description getCommodityGroup hooks 默认的 key
 */
export const USE_GET_COMMODITY_GROUP_KEY =
  '/api/commodity/v1/category/spu/{id}_GET'

// export const getCommodityGroupQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return getCommodityGroup(params);
// }

// /**
//  * @description getCommodityGroup hooks
//  */
// export const useGetCommodityGroup = (params: GetCommodityGroupParams, headers?:any, key = 'USE_GET_COMMODITY_GROUP_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => getCommodityGroup(params, headers),
//   })
// }
