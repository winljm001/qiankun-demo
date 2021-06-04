import JsonForm, { defineConfig, useForm } from '@/components/JsonForm';
import { listSpuTypeOption } from '@/services/commodityService/mods/commodityType/listSpuTypeOption';
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
        name: 'commodityName',
        rules: [{ required: true, message: '请输入商品名称' }],
        control: {
          controlType: 'INPUT',
        },
      },
      {
        label: '商品类型',
        name: 'commodityTypeId',
        rules: [{ required: true, message: '请选择商品类型' }],
        control: {
          controlType: 'REMOTE_SELECT',
          fetch: listSpuTypeOption,
        },
      },
    ],
  });
  return <JsonForm {...config} />;
});

export default SpuForm;
