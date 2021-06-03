/**
 * @desc sendCheckCode
 */
import request from '@/utils/request'
export class IQueryParams {
  /** phoneNum */
  phoneNum: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function sendCheckCode({ queryParams }: IParams = {} as IParams) {
  return request<defs.userService.ApiResult<boolean>>({
    url: `/api/user/v1/web/user/sendCheckCode`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function sendCheckCodeRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await sendCheckCode(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
