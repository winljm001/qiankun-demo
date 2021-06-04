/**
 * @desc pageCommodity
 */
import request from '@/utils/request'
export class IQueryParams {
  /** admin */
  admin?: boolean
  /** currentDate */
  currentDate?: string
  /** offset */
  offset?: number
  /** organizationId */
  organizationId?: number
  /** organizationName */
  organizationName?: string
  /** pageCurrent */
  pageCurrent?: number
  /** pageSize */
  pageSize?: number
  /** sortBys */
  sortBys?: Array<string>
  /** userId */
  userId?: number
  /** userName */
  userName?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function pageCommodity({ queryParams }: IParams = {} as IParams) {
  return request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.CommodityVO>
    >
  >({
    url: `/api/commodity/v1/spu/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function pageCommodityRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await pageCommodity(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
