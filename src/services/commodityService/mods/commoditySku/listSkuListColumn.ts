/**
 * @desc listSkuListColumn
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品id */
  commodityId: number
}

export interface IParams {}

export function listSkuListColumn(
  {}: IParams = {} as IParams,
  commodityId: string | number
) {
  return request<
    defs.commodityService.ApiResult<defs.commodityService.SkuHeader>
  >({
    url: `/api/commodity/v1/commodity/sku/column/${commodityId}`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSkuListColumnRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listSkuListColumn(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
