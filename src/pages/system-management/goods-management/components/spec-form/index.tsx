import { Button, Col, Form, FormInstance, Input, InputNumber, Row } from 'antd';
import styles from './index.module.less';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { getInitialSpecValue, initialValues } from './initialValues';
import { fromSingleLayoutProps } from '@/components/JsonForm/defaultConfig';

// const specInputLayout = {
//   labelCol: {
//     xxl: {
//       span: 3,
//     },
//     md: {
//       span: 4,
//     },
//     xs: {
//       span: 6,
//     },
//   },
//   wrapperCol: {
//     xxl: {
//       span: 6,
//     },
//     md: {
//       span: 8,
//     },
//     xs: {
//       span: 18,
//     },
//   },
// };
const optionInputLayout = {
  labelCol: {
    xxl: {
      span: 3,
    },
    md: {
      span: 4,
    },
    xs: {
      span: 6,
    },
  },
  wrapperCol: {
    xxl: {
      span: 21,
    },
    md: {
      span: 20,
    },
    xs: {
      span: 18,
    },
  },
};
interface SpuFormProps {
  data?: any;
}
const SpecForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm();
  useImperativeHandle(ref, () => ({
    ...form,
  }));
  return (
    <Form form={form} layout="vertical" {...fromSingleLayoutProps} initialValues={initialValues}>
      <Form.List name="commoditySpecs">
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field, idx) => {
                return (
                  <div key={`${field.key}-${idx}`} className={styles.specBox}>
                    {fields.length === 1 ? null : (
                      <CloseOutlined
                        className={styles.specDelIcon}
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    )}
                    <Form.Item name={[field.name, 'commoditySpecId']} hidden />
                    <Form.Item
                      label="规格类型"
                      name={[field.name, 'commoditySpecName']}
                      rules={[{ required: true, message: '请输入规格类型' }]}>
                      <Input
                        autoComplete="off"
                        placeholder="请输入规格类型"
                        disabled={data?.commoditySpecs && data?.commoditySpecs[idx]?.commoditySpecId}
                      />
                    </Form.Item>
                    <Form.Item label="规格排序" name={[field.name, 'commoditySpecSort']}>
                      <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item label="规格选项" {...optionInputLayout}>
                      <Form.List name={[field.name, 'commoditySpecOptions']}>
                        {(itemFields, { add: addItem, remove: removeItem }) => (
                          <Row gutter={16}>
                            {itemFields.map((itemField, itemIndex) => {
                              return (
                                <Col key={itemField.key} span={8}>
                                  <Form.Item
                                    shouldUpdate
                                    name={[itemField.name, 'commoditySpecOptionName']}
                                    rules={[{ required: true, message: '请输入规格选项' }]}>
                                    <Input
                                      autoComplete="off"
                                      addonAfter={
                                        itemFields.length === 1 ? null : (
                                          <div className={styles.optionDelIconBox}>
                                            <div
                                              className={styles.optionDelIcon}
                                              onClick={() => {
                                                removeItem(itemField.name);
                                              }}>
                                              <CloseOutlined />
                                            </div>
                                          </div>
                                        )
                                      }
                                      disabled={
                                        data?.commoditySpecs &&
                                        form.getFieldValue([
                                          'commoditySpecs',
                                          field.name,
                                          'commoditySpecOptions',
                                          itemField.name,
                                          'commoditySpecOptionId',
                                        ])
                                      }
                                    />
                                  </Form.Item>
                                  <Form.Item hidden name={[itemField.name, 'commoditySpecOptionId']} />
                                </Col>
                              );
                            })}
                            <Col span={8}>
                              <Button
                                icon={<PlusOutlined />}
                                type="dashed"
                                block
                                onClick={() => {
                                  addItem();
                                }}>
                                新增
                              </Button>
                            </Col>
                          </Row>
                        )}
                      </Form.List>
                    </Form.Item>
                  </div>
                );
              })}
              <div style={{ padding: '0 24px' }}>
                <Row>
                  <Col {...fromSingleLayoutProps.wrapperCol}>
                    <Button
                      type="dashed"
                      icon={<PlusOutlined />}
                      block
                      onClick={() => add(getInitialSpecValue(fields))}>
                      新增规格
                    </Button>
                  </Col>
                </Row>
              </div>
            </>
          );
        }}
      </Form.List>
    </Form>
  );
});

export default SpecForm;
