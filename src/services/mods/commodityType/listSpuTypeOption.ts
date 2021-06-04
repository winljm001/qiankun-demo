// listSpuTypeOption 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSpuTypeOption 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description listSpuTypeOption 接口参数
 */
export type ListSpuTypeOptionParams = Params

/**
 * @description listSpuTypeOption 接口
 */
export const listSpuTypeOption = (
  params: ListSpuTypeOptionParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.CommodityTypeVO>
    >
  >({
    ...request.buildOptions('/api/commodity/v1/type/spu/list', params, 'GET'),
    headers
  })
}

/**
 * @description listSpuTypeOption hooks 默认的 key
 */
export const USE_LIST_SPU_TYPE_OPTION_KEY =
  '/api/commodity/v1/type/spu/list_GET'

// export const listSpuTypeOptionQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSpuTypeOption(params);
// }

// /**
//  * @description listSpuTypeOption hooks
//  */
// export const useListSpuTypeOption = (params: ListSpuTypeOptionParams, headers?:any, key = 'USE_LIST_SPU_TYPE_OPTION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSpuTypeOption(params, headers),
//   })
// }
