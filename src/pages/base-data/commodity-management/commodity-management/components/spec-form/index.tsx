import { Button, Card, Col, Form, FormInstance, Input, Row } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'

import { SpecListQuery } from '@/graphql/operations/base-data/__generated__/commodity-management'
import { fromColProps, fromRowProps, getInitialSpecValue, initialValues } from './const'
const FormItem = Form.Item
const FormList = Form.List
interface BaseFormProps {
  data?: SpecListQuery['specList']
}
const SpecForm = forwardRef<Partial<FormInstance>, BaseFormProps>(({ data }, ref) => {
  const [form] = Form.useForm()
  useImperativeHandle(ref, () => ({
    ...form,
  }))
  useEffect(() => {
    if (data) {
      form.setFieldsValue({ commoditySpecs: data })
    }
  }, [data])
  return (
    <Form form={form} initialValues={initialValues}>
      <FormList name="commoditySpecs">
        {(fields, { add, remove, move }) => {
          return (
            <>
              {fields.map((field, idx) => {
                return (
                  <Card key={`${field.key}-${idx}`} style={{ marginBottom: '16px' }}>
                    <FormItem label="规格类型">
                      <FormItem name={[field.name, 'commoditySpecId']} hidden />
                      <Row {...fromRowProps}>
                        <Col {...fromColProps}>
                          <FormItem
                            name={[field.name, 'nameLocale', 'chineseName']}
                            rules={[{ required: true, message: '请输入规格类型（中文）' }]}>
                            <Input placeholder="中文（必填）" />
                          </FormItem>
                        </Col>
                        <Col {...fromColProps}>
                          <FormItem name={[field.name, 'nameLocale', 'englishName']}>
                            <Input placeholder="英文" />
                          </FormItem>
                        </Col>
                        <Col {...fromColProps}>
                          <FormItem name={[field.name, 'nameLocale', 'vietnamName']}>
                            <Input placeholder="越南文" />
                          </FormItem>
                        </Col>
                        <Col {...fromColProps}>
                          <FormItem name={[field.name, 'nameLocale', 'thailandName']}>
                            <Input placeholder="泰文" />
                          </FormItem>
                        </Col>
                        <Col>
                          <div>
                            <Button type="link" disabled={fields.length === 1} onClick={() => remove(field.name)}>
                              删除
                            </Button>
                            <Button type="link" disabled={idx === 0} onClick={() => move(idx, idx - 1)}>
                              上移
                            </Button>
                            <Button type="link" disabled={idx === fields.length - 1} onClick={() => move(idx, idx + 1)}>
                              下移
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </FormItem>
                    <FormItem label="规格排序">
                      <Row {...fromRowProps}>
                        <Col {...fromColProps}>
                          <FormItem name={[field.name, 'commoditySpecSort']}>{idx + 1}</FormItem>
                          <FormItem name={[field.name, 'id']} hidden>
                            <Input />
                          </FormItem>
                        </Col>
                      </Row>
                    </FormItem>
                    <FormItem label="规格选项">
                      <Form.List name={[field.name, 'commoditySpecOptionList']} initialValue={[undefined]}>
                        {(itemFields, { add: addItem, remove: removeItem, move: moveItem }) => (
                          <>
                            {itemFields.map((itemField, innerIdx) => (
                              <div key={itemField.key}>
                                <FormItem
                                  hidden
                                  name={[itemField.name, 'commoditySpecOptionSort']}
                                  initialValue={innerIdx + 1}>
                                  <Input />
                                </FormItem>
                                <FormItem hidden name={[itemField.name, 'commoditySpecOptionId']} />
                                <Row {...fromRowProps}>
                                  <Col {...fromColProps}>
                                    <FormItem
                                      name={[itemField.name, 'nameLocale', 'chineseName']}
                                      rules={[{ required: true, message: '请输入规格选项（中文）' }]}>
                                      <Input placeholder="中文（必填）" />
                                    </FormItem>
                                  </Col>
                                  <Col {...fromColProps}>
                                    <FormItem name={[itemField.name, 'nameLocale', 'englishName']}>
                                      <Input placeholder="英文" />
                                    </FormItem>
                                  </Col>
                                  <Col {...fromColProps}>
                                    <FormItem name={[itemField.name, 'nameLocale', 'vietnamName']}>
                                      <Input placeholder="越南文" />
                                    </FormItem>
                                  </Col>
                                  <Col {...fromColProps}>
                                    <FormItem name={[itemField.name, 'nameLocale', 'thailandName']}>
                                      <Input placeholder="泰文" />
                                    </FormItem>
                                  </Col>
                                  <Col span={4}>
                                    {itemFields.length > 1 ? (
                                      <Button
                                        size="small"
                                        type="link"
                                        onClick={() => {
                                          removeItem(itemField.name)
                                        }}>
                                        删除
                                      </Button>
                                    ) : null}
                                    <Button
                                      size="small"
                                      type="link"
                                      disabled={innerIdx === 0}
                                      onClick={() => moveItem(innerIdx, innerIdx - 1)}>
                                      上移
                                    </Button>
                                    <Button
                                      size="small"
                                      type="link"
                                      disabled={innerIdx === itemFields.length - 1}
                                      onClick={() => moveItem(innerIdx, innerIdx + 1)}>
                                      下移
                                    </Button>
                                  </Col>
                                </Row>
                              </div>
                            ))}
                            <FormItem>
                              <Row>
                                <Col>
                                  <Button
                                    type="dashed"
                                    block
                                    onClick={() => {
                                      addItem()
                                    }}>
                                    新增规格选项
                                  </Button>
                                </Col>
                              </Row>
                            </FormItem>
                          </>
                        )}
                      </Form.List>
                    </FormItem>
                  </Card>
                )
              })}
              <Row gutter={16}>
                <Col span={24}>
                  <Button type="dashed" icon={<PlusOutlined />} block onClick={() => add(getInitialSpecValue(fields))}>
                    新增规格
                  </Button>
                </Col>
              </Row>
            </>
          )
        }}
      </FormList>
    </Form>
  )
})

export default SpecForm
