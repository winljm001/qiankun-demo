/**
<<<<<<< HEAD:src/services/mods/customer/edit.ts
 * @desc 编辑
=======
 * @desc doUpdateSkuStatus
>>>>>>> 68cb653d2e2217f666ff04f5c8dac15be8763dde:src/services/commodityService/mods/commoditySku/doUpdateSkuStatus.ts
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.commodityService.ModifyTheSkuStatus
}

export function doUpdateSkuStatus({ bodyParams }: IParams = {} as IParams) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/commodity/sku/update/status`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doUpdateSkuStatusRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await doUpdateSkuStatus(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
