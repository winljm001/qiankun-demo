import { Table } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

export interface SkuSelectRefProps {
  getSelected?: any;
}
interface SkuSelectFormProps {
  data?: any;
}
const SkuSelectForm = forwardRef<SkuSelectRefProps, SkuSelectFormProps>(({ data = [] }, ref) => {
  useImperativeHandle(ref, () => ({
    getSelected: () => {},
  }));
  const columns = [];
  return <Table columns={columns} dataSource={data} />;
});

export default SkuSelectForm;
