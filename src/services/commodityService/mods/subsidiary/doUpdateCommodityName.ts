// doUpdateCommodityName 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doUpdateCommodityName 接口 URL 参数/GET
 */
export class Params {
  /** admin */
  admin?: boolean
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
 * @description doUpdateCommodityName 接口参数
 */
export type DoUpdateCommodityNameParams = Params &
  defs.commodityService.SubsidiaryUpdateDTO

/**
 * @description doUpdateCommodityName 接口
 */
export const doUpdateCommodityName = (
  params: DoUpdateCommodityNameParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/spu/subsidiary/update',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description doUpdateCommodityName hooks 默认的 key
 */
export const USE_DO_UPDATE_COMMODITY_NAME_KEY =
  '/api/commodity/v1/spu/subsidiary/update_PUT'

// export const doUpdateCommodityNameQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doUpdateCommodityName(params);
// }

// /**
//  * @description doUpdateCommodityName hooks
//  */
// export const useDoUpdateCommodityName = (params: DoUpdateCommodityNameParams, headers?:any, key = 'USE_DO_UPDATE_COMMODITY_NAME_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doUpdateCommodityName(params, headers),
//   })
// }
