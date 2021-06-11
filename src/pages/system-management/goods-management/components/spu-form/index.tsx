import BaseSelectByFetch from '@/components/CommonSelect/BaseSelectByFetch';
import { fromSingleLayoutProps } from '@/components/JsonForm/defaultConfig';
import { isSpuNameRepeat } from '@/services/commodityService/mods/commodity/isSpuNameRepeat';
import { listCommodityOriginOption } from '@/services/commodityService/mods/commodityCategory/listCommodityOriginOption';
import { listCommodityVarietyOption } from '@/services/commodityService/mods/commodityCategory/listCommodityVarietyOption';
import { listSpuCategoryOption } from '@/services/commodityService/mods/commodityCategory/listSpuCategoryOption';
import { listSpuTypeOption } from '@/services/commodityService/mods/commodityType/listSpuTypeOption';
import { useDebounceFn, useToggle } from 'ahooks';
import { Form, FormInstance, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

interface SpuFormProps {
  data?: defs.commodityService.CommoditySpuVO;
}
const SpuForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm();

  const [showCommodityVariety, showCommodityVarietyToggle] = useState(true);
  const [showCommodityPlaceOrigin, showCommodityPlaceOriginToggle] = useState(true);
  useImperativeHandle(ref, () => ({
    ...form,
  }));

  // 商品名验重
  const { run } = useDebounceFn((rule, value, callback) => {
    if (value) {
      isSpuNameRepeat({ commodityName: value, commodityId: data?.commodityId }).then(({ data }) => {
        if (data) {
          callback();
        } else {
          callback('该商品名称已存在');
        }
      });
    } else {
      callback();
    }
  });
  useEffect(() => {
    form.setFieldsValue(data);
  }, [data]);
  // 编辑的时候显示的内容
  const displayItem = () => {
    return (
      <>
        <Form.Item label="商品类型">{data?.commodityTypeName}</Form.Item>
        <Form.Item label="商品品类">{data?.commodityCategoryName}</Form.Item>
        <Form.Item label="商品品种" hidden={!data?.commodityVarietyName}>
          {data?.commodityVarietyName}
        </Form.Item>
        <Form.Item label="商品产地" hidden={!data?.commodityPlaceOriginName}>
          {data?.commodityPlaceOriginName}
        </Form.Item>
      </>
    );
  };
  return (
    <Form form={form} {...(data?.commodityId ? {} : { layout: 'vertical', ...fromSingleLayoutProps })}>
      <Form.Item name="commodityId" hidden />
      <Form.Item
        label="商品名称"
        name="commodityName"
        rules={[
          { required: true, message: '请输入商品名称' },
          {
            validator: run,
          },
        ]}>
        <Input />
      </Form.Item>
      {/* 当有id时是编辑 */}
      {data?.commodityId ? (
        displayItem()
      ) : (
        <>
          <Form.Item label="商品类型" name="commodityTypeId" rules={[{ required: true, message: '请选择商品类型' }]}>
            <BaseSelectByFetch
              remote={{
                fetch: listSpuTypeOption,
              }}
            />
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const commodityTypeId = getFieldValue('commodityTypeId');
              return commodityTypeId ? (
                <Form.Item
                  label="商品品类"
                  name="commodityCategoryId"
                  rules={[{ required: true, message: '请选择商品品类' }]}>
                  <BaseSelectByFetch
                    remote={{
                      fetch: listSpuCategoryOption,
                      params: {
                        id: commodityTypeId,
                      },
                    }}
                  />
                </Form.Item>
              ) : null;
            }}
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const commodityCategoryId = getFieldValue('commodityCategoryId');
              return showCommodityVariety && commodityCategoryId ? (
                <Form.Item
                  label="商品品种"
                  name="commodityVarietyId"
                  rules={[{ required: true, message: '请选择商品品种' }]}>
                  <BaseSelectByFetch
                    remote={{
                      fetch: listCommodityVarietyOption,
                      onFetched: (list) => {
                        showCommodityVarietyToggle(list?.length > 0 ? true : false);
                      },
                      params: {
                        id: commodityCategoryId,
                      },
                    }}
                  />
                </Form.Item>
              ) : null;
            }}
          </Form.Item>
          <Form.Item shouldUpdate noStyle>
            {({ getFieldValue }) => {
              const commodityCategoryId = getFieldValue('commodityCategoryId');
              return showCommodityPlaceOrigin && commodityCategoryId ? (
                <Form.Item
                  label="商品产地"
                  name="commodityPlaceOriginId"
                  rules={[{ required: true, message: '请选择商品产地' }]}>
                  <BaseSelectByFetch
                    remote={{
                      fetch: listCommodityOriginOption,
                      onFetched: (list) => {
                        showCommodityPlaceOriginToggle(list?.length > 0 ? true : false);
                      },
                      params: {
                        id: commodityCategoryId,
                      },
                    }}
                  />
                </Form.Item>
              ) : null;
            }}
          </Form.Item>
        </>
      )}
    </Form>
  );
});

export default SpuForm;
