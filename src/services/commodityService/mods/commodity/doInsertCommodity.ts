// doInsertCommodity 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doInsertCommodity 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doInsertCommodity 接口参数
 */
export type DoInsertCommodityParams = Params &
  defs.commodityService.CommodityDTO

/**
 * @description doInsertCommodity 接口
 */
export const doInsertCommodity = (
  params: DoInsertCommodityParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<number>>({
    ...request.buildOptions('/api/commodity/v1/spu/insert', params, 'POST'),
    headers
  })
}

/**
 * @description doInsertCommodity hooks 默认的 key
 */
export const USE_DO_INSERT_COMMODITY_KEY = '/api/commodity/v1/spu/insert_POST'

// export const doInsertCommodityQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doInsertCommodity(params);
// }

// /**
//  * @description doInsertCommodity hooks
//  */
// export const useDoInsertCommodity = (params: DoInsertCommodityParams, headers?:any, key = 'USE_DO_INSERT_COMMODITY_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doInsertCommodity(params, headers),
//   })
// }
