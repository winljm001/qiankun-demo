// updateCommodityBom 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description updateCommodityBom 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description updateCommodityBom 接口参数
 */
export type UpdateCommodityBomParams = Params &
  defs.commodityService.UpdateCommodityBomDTO

/**
 * @description updateCommodityBom 接口
 */
export const updateCommodityBom = (
  params: UpdateCommodityBomParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions('/api/commodity/v1/bom/update', params, 'PUT'),
    headers
  })
}

/**
 * @description updateCommodityBom hooks 默认的 key
 */
export const USE_UPDATE_COMMODITY_BOM_KEY = '/api/commodity/v1/bom/update_PUT'

// export const updateCommodityBomQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return updateCommodityBom(params);
// }

// /**
//  * @description updateCommodityBom hooks
//  */
// export const useUpdateCommodityBom = (params: UpdateCommodityBomParams, headers?:any, key = 'USE_UPDATE_COMMODITY_BOM_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => updateCommodityBom(params, headers),
//   })
// }
