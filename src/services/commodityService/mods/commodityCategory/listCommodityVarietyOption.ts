// listCommodityVarietyOption 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listCommodityVarietyOption 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description listCommodityVarietyOption 接口参数
 */
export type ListCommodityVarietyOptionParams = Params

/**
 * @description listCommodityVarietyOption 接口
 */
export const listCommodityVarietyOption = (
  params: ListCommodityVarietyOptionParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.Option<string, number>>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/spu/category/variety/{id}/option',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listCommodityVarietyOption hooks 默认的 key
 */
export const USE_LIST_COMMODITY_VARIETY_OPTION_KEY =
  '/api/commodity/v1/spu/category/variety/{id}/option_GET'

// export const listCommodityVarietyOptionQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listCommodityVarietyOption(params);
// }

// /**
//  * @description listCommodityVarietyOption hooks
//  */
// export const useListCommodityVarietyOption = (params: ListCommodityVarietyOptionParams, headers?:any, key = 'USE_LIST_COMMODITY_VARIETY_OPTION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listCommodityVarietyOption(params, headers),
//   })
// }
