// 根据用户ID获取权限列表 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description 根据用户ID获取权限列表 接口 URL 参数/GET
 */
export class Params {
  /** userId */
  userId: number
}

/**
 * @description 根据用户ID获取权限列表 接口参数
 */
export type AuthListByUserIdParams = Params

/**
 * @description 根据用户ID获取权限列表 接口
 */
export const authListByUserId = (
  params: AuthListByUserIdParams,
  headers?: any
) => {
  return request.request<
    defs.authService.ApiResult<Array<defs.authService.AuthDTO>>
  >({
    ...request.buildOptions(
      '/api/auth/v1/role/authListByUserId',
      params,
      'GET'
    ),
    headers
  })
}

/**
 * @description 根据用户ID获取权限列表 hooks 默认的 key
 */
export const USE_AUTH_LIST_BY_USER_ID_KEY =
  '/api/auth/v1/role/authListByUserId_GET'

// export const authListByUserIdQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return authListByUserId(params);
// }

// /**
//  * @description 根据用户ID获取权限列表 hooks
//  */
// export const useAuthListByUserId = (params: AuthListByUserIdParams, headers?:any, key = 'USE_AUTH_LIST_BY_USER_ID_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => authListByUserId(params, headers),
//   })
// }
