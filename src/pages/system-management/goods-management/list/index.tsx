import React from 'react';
import { Form, Table } from 'antd';
import { useAntdTable } from 'ahooks';
import { PaginatedParams } from 'ahooks/lib/useAntdTable';
import SearchForm from './search-form/index';
import { pageCommodity } from '@/services/commodityService/mods/commodity/pageCommodity';
// interface Item {
//   name: {
//     last: string;
//   };
//   email: string;
//   phone: string;
//   gender: 'male' | 'female';
// }

// interface Result {
//   total: number;
//   list: Item[];
// }

const getTableData = ({ current, pageSize }: PaginatedParams[0], formData: Object) => {
  const params = { pageCurrent: current, pageSize, ...formData };

  return pageCommodity({ queryParams: params }).then((res) => {
    console.log(res);
    return { total: 0, list: [] };
  });
};

const AntdTable = () => {
  const [form] = Form.useForm();

  const { tableProps, search } = useAntdTable(getTableData, {
    form,
  });

  const { submit, reset } = search;

  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];

  return (
    <div>
      <SearchForm form={form} submit={submit} reset={reset} />
      <Table columns={columns} rowKey="email" {...tableProps} />
    </div>
  );
};

export default AntdTable;
