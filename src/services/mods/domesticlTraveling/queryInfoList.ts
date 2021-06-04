/**
 * @desc 国内在途汇总-详情-分页列表查询
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {
  bodyParams: defs.DomesticReportPageQueryDTO
}

export function queryInfoList({ bodyParams }: IParams = {} as IParams) {
  return request<defs.Result<defs.Page<defs.DomesticTravelingInfoListVO>>>({
    url: `/reportFormsCenter/domesticTraveling/infoList`,
    method: 'post',
    data: bodyParams
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function queryInfoListRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {
    bodyParams: restParamsData[0]
  }
  try {
    const res = await queryInfoList(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
