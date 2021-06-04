/**
 * @desc listSku
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.commodityService.SkuListFilterCondition
}

export function listSku({ bodyParams }: IParams = {} as IParams) {
  return request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
    >
  >({
    url: `/api/commodity/v1/commodity/sku/list`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSkuRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await listSku(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
