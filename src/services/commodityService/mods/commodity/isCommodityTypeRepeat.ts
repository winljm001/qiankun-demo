/**
 * @desc isCommodityTypeRepeat
 */
import request from '@/utils/request'
export class IQueryParams {
  /** commodityTypeId */
  commodityTypeId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function isCommodityTypeRepeat(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/verify/type`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function isCommodityTypeRepeatRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await isCommodityTypeRepeat(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
