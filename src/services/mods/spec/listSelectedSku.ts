/**
 * @desc listSelectedSku
 */
import request from '@/utils/request'
export class IQueryParams {
  /** admin */
  admin?: boolean
  /** commodityId */
  commodityId: number
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
}

export function listSelectedSku(
  { queryParams }: IParams = {} as IParams,
  commodityId: string | number
) {
  return request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
    >
  >({
    url: `/api/commodity/v1/spec/list/selected/${commodityId}`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSelectedSkuRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listSelectedSku(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
