/**
 * @desc 查询当前最新的安装app下载链接
 */
import request from '@/utils/request'
export class IQueryParams {}

export interface IParams {}

export function getLastAndroidApp({}: IParams = {} as IParams) {
  return request<defs.Result<string>>({
    url: `/app/device/url`,
    method: 'get'
  })
}
interface RqParams {
  queryKey: any
  pageParam?: any
}
// 需要和react-query一起使用
export async function getLastAndroidAppRq(params?: RqParams) {
  const [_, ...restParamsData] = params.queryKey
  const fetchParams: IParams = {}
  try {
    const res = await getLastAndroidApp(fetchParams)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
