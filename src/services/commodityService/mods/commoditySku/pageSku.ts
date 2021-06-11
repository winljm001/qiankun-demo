// pageSku 接口文件
// import { useQuery } from 'react-query'
import * as request from '@/utils/fetch'

/**
 * @description pageSku 接口 URL 参数/GET
 */
export class Params {}

/**
 * @description pageSku 接口参数
 */
export type PageSkuParams = Params & defs.commodityService.SkuListConditionDTO

/**
 * @description pageSku 接口
 */
export const pageSku = (params: PageSkuParams, headers?: any) => {
  return request.request<
    defs.commodityService.ApiResult<
      defs.commodityService.DefaultPageResult<defs.commodityService.SkuList>
    >
  >({
    ...request.buildOptions(
      '/api/commodity/v1/commodity/sku/list',
      params,
      'POST'
    ),
    headers
  })
}

/**
 * @description pageSku hooks 默认的 key
 */
export const USE_PAGE_SKU_KEY = '/api/commodity/v1/commodity/sku/list_POST'

// export const pageSkuQuery = ({ queryKey }: {queryKey:any[]}) => {
//   const [,params] = queryKey;
//   return pageSku(params);
// }

// /**
//  * @description pageSku hooks
//  */
// export const usePageSku = (params: PageSkuParams, headers?:any, key = 'USE_PAGE_SKU_KEY') => {
//   // 修正数据
//   if(typeof headers === 'string') {
//     key = headers;
//     headers = null;
//   }

//   return useQuery({
//     queryKey: [key, params],
//     queryFn: () => pageSku(params, headers),
//   })
// }
