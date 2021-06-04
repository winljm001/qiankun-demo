/**
 * @desc 获取工厂下的商品下拉
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 工厂ID */
  factoryId: number
}

export interface IParams {
  queryParams: IQueryParams
}

export function factoryListOptions({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<Array<defs.SelectTextOption>>>({
    url: `/business/product/spu/factory/list/options`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function factoryListOptionsRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await factoryListOptions(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
