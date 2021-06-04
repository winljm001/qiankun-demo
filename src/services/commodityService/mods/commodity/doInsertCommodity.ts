/**
 * @desc doInsertCommodity
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 商品品类id */
  commodityCategoryId: number
  /** 商品名称 */
  commodityName: string
  /** 商品产地id */
  commodityPlaceOriginId: number
  /** 商品规格名称 */
  commoditySpecName: string
  /** 商品SpecificationsAndOptions名称 */
  commoditySpecOptionName: string
  /** 商品规格排序 */
  commoditySpecSort: number
  /** 商品类型id */
  commodityTypeId: number
  /** 商品品种id */
  commodityVarietyId?: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function doInsertCommodity({ queryParams }: IParams = {} as IParams) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/insert`,
    method: 'post',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doInsertCommodityRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await doInsertCommodity(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
