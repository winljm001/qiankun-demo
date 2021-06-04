/**
 * @desc doInsertCommodity
 */
import request from '@/utils/request'
export class IQueryParams {
  /** admin */
  admin?: boolean
  /** currentDate */
  currentDate?: string
  /** organizationId */
  organizationId?: number
  /** organizationName */
  organizationName?: string
  /** userId */
  userId?: number
  /** userName */
  userName?: string
}

export interface IParams {
  queryParams: IQueryParams
  bodyParams: defs.commodityService.CommodityDTO
}

export function doInsertCommodity(
  { queryParams, bodyParams }: IParams = {} as IParams
) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/insert`,
    method: 'post',
    data: bodyParams,
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doInsertCommodityRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0],
    bodyParams: restParamsData[1]
  }
  try {
    const res = await doInsertCommodity(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
