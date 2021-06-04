/**
 * @desc doUpdateCommodityStatus
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.commodityService.CommodityStatusDTO
}

export function doUpdateCommodityStatus(
  { bodyParams }: IParams = {} as IParams
) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/update/status`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doUpdateCommodityStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await doUpdateCommodityStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
