/**
 * @desc 查询-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {
  /** 进口港 */
  arrivePortId?: number
  /** 订舱结束时间 */
  bookingEndTime?: string
  /** 订舱开始时间 */
  bookingStartTime?: string
  /** 柜次 */
  cabinetBatchCode?: string
  /** 柜号 */
  cabinetCode?: string
  /** 出口报关公司 */
  declareCompanyId?: number
  /** pageNo */
  pageNo?: number
  /** pageSize */
  pageSize?: number
  /** 计划结束时间 */
  planEndTime?: string
  /** 计划开始时间 */
  planStartTime?: string
  /** 状态 */
  state?: string
}

export interface IParams {
  queryParams: IQueryParams
}

export function queryPageList({ queryParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.IPage<defs.DeclareInfoListVO>>>({
    url: `/business/declareInfo/list`,
    method: 'get',
    params: queryParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryPageListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    queryParams: restParamsData[0]
  }
  try {
    const res = await queryPageList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
