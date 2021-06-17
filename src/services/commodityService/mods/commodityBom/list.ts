// list 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description list 接口 URL 参数/GET
 */
export class Params {
  /** bom id */
  commodityBomId: number
}

/**
 * @description list 接口参数
 */
export type ListParams = Params

/**
 * @description list 接口
 */
export const list = (params: ListParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.CommodityBomDetailListVO>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/bom/detail/list/{commodityBomId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description list hooks 默认的 key
 */
export const USE_LIST_KEY =
  '/api/commodity/v1/bom/detail/list/{commodityBomId}_GET'

// export const listQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return list(params);
// }

// /**
//  * @description list hooks
//  */
// export const useList = (params: ListParams, headers?:any, key = 'USE_LIST_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => list(params, headers),
//   })
// }
