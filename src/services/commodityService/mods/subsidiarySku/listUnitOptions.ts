// listUnitOptions 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listUnitOptions 接口 URL 参数/GET
 */
export class Params {
  /** 商品类型id（1：水果，2：食品，3:辅料,5：sku净重） */
  commodityTypeId: number
}

/**
 * @description listUnitOptions 接口参数
 */
export type ListUnitOptionsParams = Params

/**
 * @description listUnitOptions 接口
 */
export const listUnitOptions = (
  params: ListUnitOptionsParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.Option<string, number>>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/subsidiary/option/unit/{commodityTypeId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listUnitOptions hooks 默认的 key
 */
export const USE_LIST_UNIT_OPTIONS_KEY =
  '/api/commodity/v1/commodity/sku/subsidiary/option/unit/{commodityTypeId}_GET'

// export const listUnitOptionsQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listUnitOptions(params);
// }

// /**
//  * @description listUnitOptions hooks
//  */
// export const useListUnitOptions = (params: ListUnitOptionsParams, headers?:any, key = 'USE_LIST_UNIT_OPTIONS_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listUnitOptions(params, headers),
//   })
// }
