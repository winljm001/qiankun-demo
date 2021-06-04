/**
 * @desc getCommodity
 */
import request from '@/utils/request'
export class IQueryParams {
  /** id */
  id: number
}

export interface IParams {}

export function getCommodity({}: IParams = {} as IParams, id: string | number) {
  return request<
    defs.commodityService.ApiResult<defs.commodityService.CommodityVO>
  >({
    url: `/api/commodity/v1/spu/${id}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getCommodityRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getCommodity(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
