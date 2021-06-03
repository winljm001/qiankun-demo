/**
 * @desc listSkuQueryCondition
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品id */
  commodityId: number
}

export interface IParams {}

export function listSkuQueryCondition(
  {}: IParams = {} as IParams,
  commodityId: string | number
) {
  return request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.ScreeningSkuList>
    >
  >({
    url: `/api/commodity/v1/commodity/sku/options/${commodityId}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSkuQueryConditionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listSkuQueryCondition(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
