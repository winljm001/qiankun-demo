import { useAntdTable, usePrevious, useSessionStorageState, useUnmount } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { Form } from 'antd';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
let pathname = '';
interface IProps {
  /** 请求 */
  fetchAction: (params: any) => Promise<any>;
  // 是否缓存
  isCache?: boolean;
}
const useAsyncTable = (props: IProps): any => {
  const { fetchAction, isCache = true } = props;
  const getTableData = ({ current, pageSize }: PaginatedParams[0], formData: Object) => {
    const fetchParams = { pageCurrent: current, pageSize, ...formData };
    // 需要改生成的services,只传参数的形式
    return fetchAction(fetchParams).then((res) => {
      const {
        data: { totalRecords, records },
      } = res;
      console.log(records);
      return { total: totalRecords, list: records };
    });
  };
  const [form] = Form.useForm();

  // 缓存逻辑开始
  let location = useLocation();

  const [cacheParams, setCacheParams] = useSessionStorageState<PaginatedParams>(location?.pathname);
  // TODO: 想离开页面清除数据，好像没起作用，后面再看看
  useEffect(() => {
    if (pathname && location?.pathname) {
      if (pathname !== location?.pathname) {
        setCacheParams(null);
      }
    }
    if (location?.pathname) {
      pathname = location?.pathname;
    }
  }, [location?.pathname]);

  const defaultParamsObj = isCache ? (cacheParams ? { defaultParams: cacheParams } : {}) : {};

  // 缓存逻辑结束

  const { tableProps, params, search } = useAntdTable(getTableData, {
    ...defaultParamsObj,
    form,
  });
  // params改变存进缓存
  useEffect(() => {
    setCacheParams(params);
  }, [params]);
  const { submit, reset } = search;
  return { tableProps, search, form, submit, reset };
};

export default useAsyncTable;
