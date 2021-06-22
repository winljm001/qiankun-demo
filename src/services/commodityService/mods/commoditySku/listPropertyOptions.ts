// listPropertyOptions 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listPropertyOptions 接口 URL 参数/GET
 */
export class Params {
  /** commodityTypeId */
  commodityTypeId: number
}

/**
 * @description listPropertyOptions 接口参数
 */
export type ListPropertyOptionsParams = Params

/**
 * @description listPropertyOptions 接口
 */
export const listPropertyOptions = (
  params: ListPropertyOptionsParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.Option<string, number>>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/option/property',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listPropertyOptions hooks 默认的 key
 */
export const USE_LIST_PROPERTY_OPTIONS_KEY =
  '/api/commodity/v1/commodity/sku/option/property_GET'

// export const listPropertyOptionsQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listPropertyOptions(params);
// }

// /**
//  * @description listPropertyOptions hooks
//  */
// export const useListPropertyOptions = (params: ListPropertyOptionsParams, headers?:any, key = 'USE_LIST_PROPERTY_OPTIONS_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listPropertyOptions(params, headers),
//   })
// }
