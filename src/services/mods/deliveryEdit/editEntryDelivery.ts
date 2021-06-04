/**
 * @desc 编辑-入境口岸发货
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DeliveryEditEntryDeliveryInfoVO
}

export function editEntryDelivery({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/modules/deliveryPlan/edit/editEntryDelivery`,
    method: 'put',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function editEntryDeliveryRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await editEntryDelivery(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
