/**
 * @desc 根据用户ID获取权限列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** userId */
  userId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function authListByUserId({ queryParams }: IParams = {} as IParams) {
  return request<defs.authService.ApiResult<Array<defs.authService.AuthDTO>>>({
    url: `/api/auth/v1/role/authListByUserId`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function authListByUserIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await authListByUserId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
