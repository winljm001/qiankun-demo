/**
 * @desc doModifySpecById
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
  bodyParams: defs.commodityService.CommoditySpecModifyDTO
}

export function doModifySpecById(
  { queryParams, bodyParams }: IParams = {} as IParams,
  commodityId: string | number
) {
  return request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.SpecificationsAndTypes>
    >
  >({
    url: `/api/commodity/v1/spec/modify/${commodityId}`,
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
export async function doModifySpecByIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0],
    bodyParams: restParamsData[1]
  }
  try {
    const res = await doModifySpecById(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
