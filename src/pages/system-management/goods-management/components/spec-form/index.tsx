import { Button, Col, Form, FormInstance, Input, InputNumber, Row } from 'antd';
import styles from './index.module.less';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useForm } from 'antd/lib/form/Form';
import { CloseOutlined } from '@ant-design/icons';
const specInputLayout = {
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
      span: 6,
    },
    md: {
      span: 8,
    },
    xs: {
      span: 18,
    },
  },
};
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
const SpuForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm();
  useImperativeHandle(ref, () => ({
    ...form,
  }));
  return (
    <Form form={form} {...specInputLayout}>
      <Form.List name="specInfo">
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map((field, idx) => {
                return (
                  <div key={`${field.key}-${idx}`} className={styles.specBox}>
                    <CloseOutlined
                      className={styles.specDelIcon}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                    <Form.Item name={[field.name, 'id']} hidden>
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="规格类型"
                      name={[field.name, 'name']}
                      rules={[{ required: true, message: '请输入规格类型' }]}>
                      <Input placeholder="请输入规格类型" />
                    </Form.Item>
                    <Form.Item label="规格排序" name={[field.name, 'sort']}>
                      <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item label="规格选项" {...optionInputLayout}>
                      <Form.List name={[field.name, 'option']}>
                        {(itemFields, { add: addItem, remove: removeItem }) => (
                          <Row gutter={16}>
                            {itemFields.map((itemField) => (
                              <Col key={itemField.key} span={8}>
                                <Form.Item name={[itemField.name, 'name']}>
                                  <Input
                                    addonAfter={
                                      <div className={styles.optionDelIconBox}>
                                        <div
                                          className={styles.optionDelIcon}
                                          onClick={() => {
                                            removeItem(itemField.name);
                                          }}>
                                          <CloseOutlined />
                                        </div>
                                      </div>
                                    }
                                  />
                                </Form.Item>
                                <Form.Item hidden name={[itemField.name, 'id']}>
                                  <Input />
                                </Form.Item>
                              </Col>
                            ))}
                            <Col span={8}>
                              <Button
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
              <Button type="dashed" block onClick={() => add({ sort: fields.length + 1 })}>
                新增规格
              </Button>
            </>
          );
        }}
      </Form.List>
    </Form>
  );
});

export default SpuForm;
