/**
 * @desc 工厂排名
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryFactoryOrder({}: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.FactoryOrder>>>({
    url: `/business/report/queryFactoryOrder`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryFactoryOrderRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryFactoryOrder(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
