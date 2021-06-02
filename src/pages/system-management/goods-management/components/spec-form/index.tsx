import JsonForm, { defineConfig, useForm } from '@/components/JsonForm';
import { FormInstance } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

interface SpuFormProps {
  data?: any;
}
const SpuForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm();
  useImperativeHandle(ref, () => ({
    ...form,
  }));
  const config = defineConfig({
    form,
    initialValues: data,
    formItems: [
      {
        label: '商品名称',
        name: 'name1',
        rules: [{ required: true, message: '请输入商品名称' }],
        control: {
          controlType: 'INPUT',
        },
      },
    ],
  });
  return <JsonForm {...config} />;
});

export default SpuForm;
