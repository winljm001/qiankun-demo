import type { FormInstance } from 'antd'
import { Button, Col, Form, Input, Row } from 'antd'
import React, { forwardRef, useImperativeHandle } from 'react'
import { useForm } from 'antd/lib/form/Form'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { fromSingleLayoutProps } from '@/components/JsonForm/defaultConfig'
import { getInitialSpecValue, initialValues } from './initialValues'
import styles from './index.module.less'

const optionInputLayout = {
  labelCol: {
    xxl: {
      span: 24,
    },
    md: {
      span: 24,
    },
    xs: {
      span: 24,
    },
  },
  wrapperCol: {
    xxl: {
      span: 24,
    },
    md: {
      span: 24,
    },
    xs: {
      span: 24,
    },
  },
}
interface SpuFormProps {
  data?: any
}
const SpecForm = forwardRef<Partial<FormInstance>, SpuFormProps>(({ data = null }, ref) => {
  const [form] = useForm()
  useImperativeHandle(ref, () => ({
    ...form,
  }))
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
                          remove(field.name)
                        }}
                      />
                    )}
                    <Form.Item name={[field.name, 'commoditySpecId']} hidden />
                    <Row gutter={16}>
                      <Col span={6}>
                        <Form.Item
                          {...optionInputLayout}
                          label="规格类型"
                          name={[field.name, 'commoditySpecName']}
                          rules={[{ required: true, message: '请输入规格类型' }]}>
                          <Input
                            autoComplete="off"
                            placeholder="请输入规格类型"
                            disabled={
                              data?.commoditySpecs &&
                              form.getFieldValue(['commoditySpecs', field.name, 'commoditySpecId'])
                            }
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={16}>
                      <Col span={6}>
                        <Form.Item {...optionInputLayout} label="规格排序" name={[field.name, 'commoditySpecSort']}>
                          <Input autoComplete="off" placeholder="规格排序" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item label="规格选项" {...optionInputLayout}>
                      <Form.List name={[field.name, 'commoditySpecOptions']}>
                        {(itemFields, { add: addItem, remove: removeItem }) => (
                          <Row gutter={16}>
                            {itemFields.map((itemField, itemIndex) => {
                              return (
                                <Col key={itemField.key} span={6}>
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
                                                removeItem(itemField.name)
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
                              )
                            })}
                            {itemFields?.length < 20 ? (
                              <Col span={6}>
                                <Button
                                  style={{ marginBottom: 24 }}
                                  icon={<PlusOutlined />}
                                  type="dashed"
                                  block
                                  onClick={() => {
                                    addItem()
                                  }}>
                                  新增
                                </Button>
                              </Col>
                            ) : null}
                          </Row>
                        )}
                      </Form.List>
                    </Form.Item>
                  </div>
                )
              })}
              {fields?.length < 3 ? (
                <div style={{ padding: '0 24px' }}>
                  <Row gutter={16}>
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
              ) : null}
            </>
          )
        }}
      </Form.List>
    </Form>
  )
})

export default SpecForm
