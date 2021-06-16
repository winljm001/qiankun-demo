// listSpuCategoryOption 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSpuCategoryOption 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number
}

/**
 * @description listSpuCategoryOption 接口参数
 */
export type ListSpuCategoryOptionParams = Params

/**
 * @description listSpuCategoryOption 接口
 */
export const listSpuCategoryOption = (
  params: ListSpuCategoryOptionParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.Option<string, number>>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/spu/subsidiary/category/{id}/option',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listSpuCategoryOption hooks 默认的 key
 */
export const USE_LIST_SPU_CATEGORY_OPTION_KEY =
  '/api/commodity/v1/spu/subsidiary/category/{id}/option_GET'

// export const listSpuCategoryOptionQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSpuCategoryOption(params);
// }

// /**
//  * @description listSpuCategoryOption hooks
//  */
// export const useListSpuCategoryOption = (params: ListSpuCategoryOptionParams, headers?:any, key = 'USE_LIST_SPU_CATEGORY_OPTION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSpuCategoryOption(params, headers),
//   })
// }
