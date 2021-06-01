/**
 * @desc 进口出口组织供应商下拉列表
 */
import request from '@/utils/request'
export class IQueryParams {
  /** departId */
  departId: number
  /** orgCategory */
  orgCategory: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function listDepartOption({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/depart/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listDepartOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listDepartOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
