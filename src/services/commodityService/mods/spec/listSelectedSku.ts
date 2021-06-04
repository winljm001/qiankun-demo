// listSelectedSku 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSelectedSku 接口 URL 参数/GET
 */
export class Params {
  /** admin */
  admin?: boolean
  /** commodityId */
  commodityId: number
  /** currentDate */
  currentDate?: string
  /** organizationId */
  organizationId?: number
  /** organizationName */
  organizationName?: string
  /** userId */
  userId?: number
  /** userName */
  userName?: string
}

/**
 * @description listSelectedSku 接口参数
 */
export type ListSelectedSkuParams = Params

/**
 * @description listSelectedSku 接口
 */
export const listSelectedSku = (
  params: ListSelectedSkuParams,
  headers?: any
) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/spec/list/selected/{commodityId}',
      params,
      'POST'
    ),
    headers
  })
}

/**
 * @description listSelectedSku hooks 默认的 key
 */
export const USE_LIST_SELECTED_SKU_KEY =
  '/api/commodity/v1/spec/list/selected/{commodityId}_POST'

// export const listSelectedSkuQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSelectedSku(params);
// }

// /**
//  * @description listSelectedSku hooks
//  */
// export const useListSelectedSku = (params: ListSelectedSkuParams, headers?:any, key = 'USE_LIST_SELECTED_SKU_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSelectedSku(params, headers),
//   })
// }
