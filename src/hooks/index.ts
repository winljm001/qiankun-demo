import { useAntdTable, useSessionStorageState } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import { Form } from 'antd';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
    // 这里还有点问题,目前写死get请求，需要改生成的services
    return fetchAction({ queryParams: fetchParams }).then((res) => {
      const {
        data: { totalRecords, records },
      } = res;
      return { total: totalRecords, list: records };
    });
  };
  const [form] = Form.useForm();

  // 缓存逻辑开始
  let location = useLocation();
  const [value, setValue] = useSessionStorageState<PaginatedParams>(location?.pathname);
  const defaultParamsObj = isCache ? (value ? { defaultParams: value } : {}) : {};
  // 缓存逻辑结束

  const { tableProps, params, search } = useAntdTable(getTableData, {
    ...defaultParamsObj,
    defaultPageSize: 1,
    form,
  });
  // params改变存进缓存
  useEffect(() => {
    setValue(params);
  }, [params]);
  const { submit, reset } = search;
  return { tableProps, search, form, submit, reset };
};

export default useAsyncTable;
