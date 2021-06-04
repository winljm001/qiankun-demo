// doSaveSku 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description doSaveSku 接口 URL 参数/GET
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
 * @description doSaveSku 接口参数
 */
export type DoSaveSkuParams = Params & Array<defs.commodityService.ModifyTheSpu>

/**
 * @description doSaveSku 接口
 */
export const doSaveSku = (params: DoSaveSkuParams, headers?: any) => {
  return request.request<defs.commodityService.ApiResult<Array<number>>>({
    ...request.buildOptions('/api/commodity/v1/spec/save', params, 'PUT'),
    headers
  })
}

/**
 * @description doSaveSku hooks 默认的 key
 */
export const USE_DO_SAVE_SKU_KEY = '/api/commodity/v1/spec/save_PUT'

// export const doSaveSkuQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return doSaveSku(params);
// }

// /**
//  * @description doSaveSku hooks
//  */
// export const useDoSaveSku = (params: DoSaveSkuParams, headers?:any, key = 'USE_DO_SAVE_SKU_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => doSaveSku(params, headers),
//   })
// }
