/**
 * @desc doUpdateCommodityName
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品id */
  commodityId: number
  /** 商品名称 */
  commodityName: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function doUpdateCommodityName(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/update/name`,
    method: 'put',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doUpdateCommodityNameRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await doUpdateCommodityName(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
