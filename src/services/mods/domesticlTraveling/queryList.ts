/**
 * @desc 国内在途汇总
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function queryList({}: IParams = {} as IParams) {
  return request<defs.Result<defs.DomesticTravelingListVO>>({
    url: `/reportFormsCenter/domesticTraveling/list`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await queryList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
