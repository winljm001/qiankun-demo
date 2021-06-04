/**
 * @desc getSkuDetail
 */
import request from '@/utils/request'
export class IQueryParams {
  /** sku id */
  commoditySkuId: number
}

export interface IParams {}

export function getSkuDetail(
  {}: IParams = {} as IParams,
  commoditySkuId: string | number
) {
  return request<
    defs.commodityService.ApiResult<defs.commodityService.SkuDetails>
  >({
    url: `/api/commodity/v1/commodity/sku/detail/${commoditySkuId}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getSkuDetailRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getSkuDetail(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
