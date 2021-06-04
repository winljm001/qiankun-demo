/**
 * @desc getCommodityGroup
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {}

export function getCommodityGroup(
  {}: IParams = {} as IParams,
  id: string | number
) {
  return request<
    defs.commodityService.ApiResult<defs.commodityService.CommodityGroupVO>
  >({
    url: `/api/commodity/v1/commodity/category/spu/${id}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getCommodityGroupRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getCommodityGroup(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
