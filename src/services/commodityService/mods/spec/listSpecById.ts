// listSpecById 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description listSpecById 接口 URL 参数/GET
 */
export class Params {
  /** commodityId */
  commodityId: number
}

/**
 * @description listSpecById 接口参数
 */
export type ListSpecByIdParams = Params

/**
 * @description listSpecById 接口
 */
export const listSpecById = (params: ListSpecByIdParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.SpecificationsAndTypes>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/spec/list/{commodityId}',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description listSpecById hooks 默认的 key
 */
export const USE_LIST_SPEC_BY_ID_KEY =
  '/api/commodity/v1/spec/list/{commodityId}_GET'

// export const listSpecByIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listSpecById(params);
// }

// /**
//  * @description listSpecById hooks
//  */
// export const useListSpecById = (params: ListSpecByIdParams, headers?:any, key = 'USE_LIST_SPEC_BY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listSpecById(params, headers),
//   })
// }
