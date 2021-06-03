/**
 * @desc list
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function list({}: IParams = {} as IParams) {
  return request<
    defs.commodityService.ApiResult<defs.commodityService.CommodityCategoryVO>
  >({
    url: `/api/commodity/v1/commodity/category/spu/list`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await list(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
