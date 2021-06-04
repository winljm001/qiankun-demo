// login 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description login 接口 URL 参数/GET
 */
export class Params { }

/**
 * @description login 接口参数
 */
export type LoginParams = Params & defs.userService.LoginDto

/**
 * @description login 接口
 */
export const login = (params: LoginParams, headers?: any) => {
  return request.request<
    defs.userService.ApiResult<defs.userService.UserLoginResponseVO>
  >({
    ...request.buildOptions('/api/user/v1/web/user/login', params, 'POST'),
    headers
  })
}

/**
 * @description login hooks 默认的 key
 */
export const USE_LOGIN_KEY = '/api/user/v1/web/user/login_POST'

// export const loginQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return login(params);
// }

// /**
//  * @description login hooks
//  */
// export const useLogin = (params: LoginParams, headers?:any, key = 'USE_LOGIN_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => login(params, headers),
//   })
// }
