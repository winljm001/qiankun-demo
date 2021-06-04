/**
 * @desc listUnitOptions
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品类型id（1：水果，2：食品，5：sku净重） */
  commodityTypeId: number
}

export interface IParams {}

export function listUnitOptions(
  {}: IParams = {} as IParams,
  commodityTypeId: string | number
) {
  return request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.Option<string, number>>
    >
  >({
    url: `/api/commodity/v1/commodity/sku/option/unit/${commodityTypeId}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listUnitOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listUnitOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
