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
  let location = useLocation();
  const [value, setValue] = useSessionStorageState<PaginatedParams>(location?.pathname);
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
  // 有缓存时使用缓存
  const defaultParamsObj = isCache ? (value ? { defaultParams: value } : {}) : {};
  const { tableProps, params, search } = useAntdTable(getTableData, {
    ...defaultParamsObj,
    defaultPageSize: 1,
    form,
  });
  useEffect(() => {
    setValue(params);
  }, [params]);
  const { submit, reset } = search;
  return { tableProps, search, form, submit, reset };
};

export default useAsyncTable;
