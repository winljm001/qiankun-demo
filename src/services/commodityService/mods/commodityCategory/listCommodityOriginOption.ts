// listCommodityOriginOption 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch';

/**
 * @description listCommodityOriginOption 接口 URL 参数/GET
 */
export class Params {
  /** id */
  id: number;
}

/**
 * @description listCommodityOriginOption 接口参数
 */
export type ListCommodityOriginOptionParams = Params;

/**
 * @description listCommodityOriginOption 接口
 */
export const listCommodityOriginOption = (params: ListCommodityOriginOptionParams, headers?: any) => {
  return request.request<defs.commodityService.ApiResult<Array<defs.commodityService.Option<string, number>>>>({
    ...request.buildOptions('/api/commodity/v1/spu/origin/{id}/option', params, 'GET'),
    headers,
  });
};

/**
 * @description listCommodityOriginOption hooks 默认的 key
 */
export const USE_LIST_COMMODITY_ORIGIN_OPTION_KEY = '/api/commodity/v1/spu/origin/{id}/option_GET';

// export const listCommodityOriginOptionQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return listCommodityOriginOption(params);
// }

// /**
//  * @description listCommodityOriginOption hooks
//  */
// export const useListCommodityOriginOption = (params: ListCommodityOriginOptionParams, headers?:any, key = 'USE_LIST_COMMODITY_ORIGIN_OPTION_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => listCommodityOriginOption(params, headers),
//   })
// }
