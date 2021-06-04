/**
 * @desc 查询-根据planId查询详情
 */
import request from '@/utils/request'
export class IQueryParams {
  /** planId */
  planId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getByPlanId({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.PortSopInfoVO>>({
    url: `/portSop/getByPlanId`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getByPlanIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getByPlanId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
