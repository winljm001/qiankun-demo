import BaseSelectByFetch from '@/components/CommonSelect/BaseSelectByFetch';
import JsonForm, { defineConfig, useForm } from '@/components/JsonForm';
import { fromSingleLayoutProps } from '@/components/JsonForm/defaultConfig';
import { listCommodityOriginOption } from '@/services/commodityService/mods/commodityCategory/listCommodityOriginOption';
import { listCommodityVarietyOption } from '@/services/commodityService/mods/commodityCategory/listCommodityVarietyOption';
import { listSpuCategoryOption } from '@/services/commodityService/mods/commodityCategory/listSpuCategoryOption';
import { listSpuTypeOption } from '@/services/commodityService/mods/commodityType/listSpuTypeOption';
import { Form, FormInstance, Input } from 'antd';
import React, { forwardRef, useImperativeHandle } from 'react';

interface SpuFormProps {
  data?: any;
}
const SpuForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm();
  useImperativeHandle(ref, () => ({
    ...form,
  }));
  // const config = defineConfig({
  //   form,
  //   initialValues: data,
  //   formItems: [
  //     {
  //       label: '商品名称',
  //       name: 'commodityName',
  //       rules: [{ required: true, message: '请输入商品名称' }],
  //       control: {
  //         controlType: 'INPUT',
  //       },
  //     },
  //     {
  //       label: '商品类型',
  //       name: 'commodityTypeId',
  //       rules: [{ required: true, message: '请选择商品类型' }],
  //       control: {
  //         controlType: 'REMOTE_SELECT',
  //         fetch: listSpuTypeOption,
  //       },
  //     },
  //     {
  //       label: '商品品类',
  //       name: 'commodityCategoryId',
  //       rules: [{ required: true, message: '请选择商品品类' }],
  //       control: {
  //         controlType: 'REMOTE_SELECT',
  //         fetch: list,
  //       },
  //     },
  //     {
  //       label: '商品品种',
  //       name: 'commodityVarietyId',
  //       rules: [{ required: true, message: '请选择商品品类' }],
  //       control: {
  //         controlType: 'REMOTE_SELECT',
  //         fetch: getCommodityGroup,
  //         fetchable() {
  //           return !!form?.getFieldValue('commodityCategoryId');
  //         },
  //         params() {
  //           return {
  //             queryParams: {
  //               id: form?.getFieldValue('commodityCategoryId'),
  //             },
  //           };
  //         },
  //       },
  //     },
  //     {
  //       label: '商品产地',
  //       name: 'commodityPlaceOriginId',
  //       rules: [{ required: true, message: '请选择商品品类' }],
  //       control: {
  //         controlType: 'REMOTE_SELECT',
  //         fetch: listSpuTypeOption,
  //         fetchable() {
  //           return !!form?.getFieldValue('commodityVarietyId');
  //         },
  //         params() {
  //           return {
  //             queryParams: {
  //               productId: form?.getFieldValue('commodityVarietyId'),
  //             },
  //           };
  //         },
  //       },
  //     },
  //   ],
  // });
  return (
    <Form form={form} layout="vertical" {...fromSingleLayoutProps}>
      <Form.Item label="商品名称" name="commodityName" rules={[{ required: true, message: '请输入商品名称' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="商品类型" name="commodityTypeId" rules={[{ required: true, message: '请选择商品类型' }]}>
        <BaseSelectByFetch
          remote={{
            fetch: listSpuTypeOption,
          }}
        />
      </Form.Item>
      <Form.Item label="商品品类" name="commodityCategoryId" rules={[{ required: true, message: '请选择商品品类' }]}>
        <BaseSelectByFetch
          remote={{
            fetch: listSpuCategoryOption,
          }}
        />
      </Form.Item>
      <Form.Item label="商品品种" name="commodityVarietyId" rules={[{ required: true, message: '请选择商品品种' }]}>
        <BaseSelectByFetch
          remote={{
            fetch: listCommodityVarietyOption,
          }}
        />
      </Form.Item>
      <Form.Item label="商品产地" name="commodityPlaceOriginId" rules={[{ required: true, message: '请选择商品产地' }]}>
        <BaseSelectByFetch
          remote={{
            fetch: listCommodityOriginOption,
          }}
        />
      </Form.Item>
    </Form>
  );
});

export default SpuForm;
