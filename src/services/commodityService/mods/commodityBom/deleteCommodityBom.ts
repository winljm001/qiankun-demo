// deleteCommodityBom 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description deleteCommodityBom 接口 URL 参数/GET
 */
export class Params {
  /** commodityBomId */
  commodityBomId: string
}

/**
 * @description deleteCommodityBom 接口参数
 */
export type DeleteCommodityBomParams = Params

/**
 * @description deleteCommodityBom 接口
 */
export const deleteCommodityBom = (
  params: DeleteCommodityBomParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/bom/del/{commodityBomId}',
      params,
      'DELETE'
    ),
    headers
  })
}

/**
 * @description deleteCommodityBom hooks 默认的 key
 */
export const USE_DELETE_COMMODITY_BOM_KEY =
  '/api/commodity/v1/bom/del/{commodityBomId}_DELETE'

// export const deleteCommodityBomQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return deleteCommodityBom(params);
// }

// /**
//  * @description deleteCommodityBom hooks
//  */
// export const useDeleteCommodityBom = (params: DeleteCommodityBomParams, headers?:any, key = 'USE_DELETE_COMMODITY_BOM_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => deleteCommodityBom(params, headers),
//   })
// }
