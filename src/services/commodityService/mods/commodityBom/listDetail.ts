// listDetail 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listDetail 接口 URL 参数/GET
 */
export class Params {
  /** bom id */
  commodityBomId: number
}

/**
 * @description listDetail 接口参数
 */
export type ListDetailParams = Params

/**
 * @description listDetail 接口
 */
export const listDetail = (params: ListDetailParams, headers?: any) => {
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
 * @description listDetail hooks 默认的 key
 */
export const USE_LIST_DETAIL_KEY =
  '/api/commodity/v1/bom/detail/list/{commodityBomId}_GET'

// export const listDetailQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listDetail(params);
// }

// /**
//  * @description listDetail hooks
//  */
// export const useListDetail = (params: ListDetailParams, headers?:any, key = 'USE_LIST_DETAIL_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listDetail(params, headers),
//   })
// }
