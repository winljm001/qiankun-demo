// doUpdateCommodityStatus 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doUpdateCommodityStatus 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doUpdateCommodityStatus 接口参数
 */
export type DoUpdateCommodityStatusParams = Params &
  defs.commodityService.CommodityStatusDTO

/**
 * @description doUpdateCommodityStatus 接口
 */
export const doUpdateCommodityStatus = (
  params: DoUpdateCommodityStatusParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/spu/subsidiary/update/status',
      params,
      'PUT'
    ),
    headers
  })
}

/**
 * @description doUpdateCommodityStatus hooks 默认的 key
 */
export const USE_DO_UPDATE_COMMODITY_STATUS_KEY =
  '/api/commodity/v1/spu/subsidiary/update/status_PUT'

// export const doUpdateCommodityStatusQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doUpdateCommodityStatus(params);
// }

// /**
//  * @description doUpdateCommodityStatus hooks
//  */
// export const useDoUpdateCommodityStatus = (params: DoUpdateCommodityStatusParams, headers?:any, key = 'USE_DO_UPDATE_COMMODITY_STATUS_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doUpdateCommodityStatus(params, headers),
//   })
// }
