/**
<<<<<<< HEAD:src/services/mods/declareInfo/shipCompanyOption.ts
 * @desc 查询-船公司下拉列表
=======
 * @desc listSpuTypeOption
>>>>>>> 68cb653d2e2217f666ff04f5c8dac15be8763dde:src/services/commodityService/mods/commodityType/listSpuTypeOption.ts
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function listSpuTypeOption({}: IParams = {} as IParams) {
  return request<
    defs.commodityService.ApiResult<
      Array<defs.commodityService.CommodityTypeVO>
    >
  >({
    url: `/api/commodity/v1/commodity/type/spu/list`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function listSpuTypeOptionRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await listSpuTypeOption(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
