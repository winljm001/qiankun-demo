/**
 * @desc listSpecById
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

export function listSpecById(
  { queryParams }: IParams = {} as IParams,
  commodityId: string | number
) {
  return request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.SpecificationsAndTypes>
    >
  >({
    url: `/api/commodity/v1/spec/list/${commodityId}`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSpecByIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await listSpecById(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
