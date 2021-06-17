// saveCommodityBom 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description saveCommodityBom 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description saveCommodityBom 接口参数
 */
export type SaveCommodityBomParams = Params &
  defs.commodityService.SaveCommodityDTO

/**
 * @description saveCommodityBom 接口
 */
export const saveCommodityBom = (
  params: SaveCommodityBomParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions('/api/commodity/v1/bom/save', params, 'POST'),
    headers
  })
}

/**
 * @description saveCommodityBom hooks 默认的 key
 */
export const USE_SAVE_COMMODITY_BOM_KEY = '/api/commodity/v1/bom/save_POST'

// export const saveCommodityBomQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return saveCommodityBom(params);
// }

// /**
//  * @description saveCommodityBom hooks
//  */
// export const useSaveCommodityBom = (params: SaveCommodityBomParams, headers?:any, key = 'USE_SAVE_COMMODITY_BOM_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => saveCommodityBom(params, headers),
//   })
// }
