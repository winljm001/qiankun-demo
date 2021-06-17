// isSpuNameRepeat 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description isSpuNameRepeat 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description isSpuNameRepeat 接口参数
 */
export type IsSpuNameRepeatParams = Params &
  defs.commodityService.CommodityVerifyDTO

/**
 * @description isSpuNameRepeat 接口
 */
export const isSpuNameRepeat = (
  params: IsSpuNameRepeatParams,
  headers?: any
) => {
  return request.request<defs.commodityService.ApiResult<boolean>>({
    ...request.buildOptions(
      '/api/commodity/v1/spu/subsidiary/verify/name',
      params,
      'POST'
    ),
    headers
  })
}

/**
 * @description isSpuNameRepeat hooks 默认的 key
 */
export const USE_IS_SPU_NAME_REPEAT_KEY =
  '/api/commodity/v1/spu/subsidiary/verify/name_POST'

// export const isSpuNameRepeatQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return isSpuNameRepeat(params);
// }

// /**
//  * @description isSpuNameRepeat hooks
//  */
// export const useIsSpuNameRepeat = (params: IsSpuNameRepeatParams, headers?:any, key = 'USE_IS_SPU_NAME_REPEAT_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => isSpuNameRepeat(params, headers),
//   })
// }
