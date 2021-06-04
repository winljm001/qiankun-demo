/**
<<<<<<< HEAD:src/services/mods/deliveryEdit/editHeaderTransportInfo.ts
 * @desc 编辑-头程运输信息
=======
 * @desc doUpdateCommodityEnable
>>>>>>> 68cb653d2e2217f666ff04f5c8dac15be8763dde:src/services/commodityService/mods/commodity/doUpdateCommodityEnable.ts
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.commodityService.CommodityStatusDTO
}

export function doUpdateCommodityEnable(
  { bodyParams }: IParams = {} as IParams
) {
  return request<defs.commodityService.ApiResult<boolean>>({
    url: `/api/commodity/v1/spu/update/status`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function doUpdateCommodityEnableRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await doUpdateCommodityEnable(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
