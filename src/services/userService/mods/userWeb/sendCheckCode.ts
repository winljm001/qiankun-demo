// sendCheckCode 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description sendCheckCode 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description sendCheckCode 接口参数
 */
export type SendCheckCodeParams = Params & defs.userService.MobileDto

/**
 * @description sendCheckCode 接口
 */
export const sendCheckCode = (params: SendCheckCodeParams, headers?: any) => {
  return request.request<defs.userService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/user/v1/web/user/sendCheckCode',
      params,
      'POST'
    ),
    headers
  })
}

/**
 * @description sendCheckCode hooks 默认的 key
 */
export const USE_SEND_CHECK_CODE_KEY =
  '/api/user/v1/web/user/sendCheckCode_POST'

// export const sendCheckCodeQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return sendCheckCode(params);
// }

// /**
//  * @description sendCheckCode hooks
//  */
// export const useSendCheckCode = (params: SendCheckCodeParams, headers?:any, key = 'USE_SEND_CHECK_CODE_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => sendCheckCode(params, headers),
//   })
// }
