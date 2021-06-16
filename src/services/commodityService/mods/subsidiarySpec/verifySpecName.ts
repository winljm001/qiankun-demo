// verifySpecName 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description verifySpecName 接口 URL 参数/GET
 */
export class Params {
  /** specName */
  specName: string
}

/**
 * @description verifySpecName 接口参数
 */
export type VerifySpecNameParams = Params

/**
 * @description verifySpecName 接口
 */
export const verifySpecName = (params: VerifySpecNameParams, headers?: any) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/subsidiary/spec/repeat',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description verifySpecName hooks 默认的 key
 */
export const USE_VERIFY_SPEC_NAME_KEY =
  '/api/commodity/v1/subsidiary/spec/repeat_GET'

// export const verifySpecNameQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return verifySpecName(params);
// }

// /**
//  * @description verifySpecName hooks
//  */
// export const useVerifySpecName = (params: VerifySpecNameParams, headers?:any, key = 'USE_VERIFY_SPEC_NAME_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => verifySpecName(params, headers),
//   })
// }
