// doModifySpecById 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doModifySpecById 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description doModifySpecById 接口参数
 */
export type DoModifySpecByIdParams = Params &
  defs.commodityService.CommodityModifyDTO

/**
 * @description doModifySpecById 接口
 */
export const doModifySpecById = (
  params: DoModifySpecByIdParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<number>>({
    ...request.buildOptions('/api/commodity/v1/spec/modify', params, 'POST'),
    headers
  })
}

/**
 * @description doModifySpecById hooks 默认的 key
 */
export const USE_DO_MODIFY_SPEC_BY_ID_KEY = '/api/commodity/v1/spec/modify_POST'

// export const doModifySpecByIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doModifySpecById(params);
// }

// /**
//  * @description doModifySpecById hooks
//  */
// export const useDoModifySpecById = (params: DoModifySpecByIdParams, headers?:any, key = 'USE_DO_MODIFY_SPEC_BY_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doModifySpecById(params, headers),
//   })
// }
