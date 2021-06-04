/**
 * @desc 根据品类id获取关联工厂
 */
import request from '@/utils/request'
export class IQueryParams {
  /** productId */
  productId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function getFactoryByProductId(
  { queryParams }: IParams = {} as IParams
) {
  return request<defs.Result<Array<defs.SelectOption>>>({
    url: `/sys/depart/option/factory/product`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getFactoryByProductIdRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await getFactoryByProductId(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
