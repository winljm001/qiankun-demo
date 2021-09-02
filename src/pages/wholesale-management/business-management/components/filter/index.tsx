import React, { FC } from 'react'
import { Form, Row, Col, Input, Button, Space } from 'antd'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import { BusinessListVariables } from '../../type'
const { useForm } = Form

interface IProps {
  // 查询事件
  handleSubmit: (values: BusinessListVariables) => void
  // 重置事件
  handleReset: () => void
  // 取Filter组件值函数
  setFilterValues: (values) => void
}

/**
 * 商户头部搜索组件
 */
const Filter: FC<IProps> = ({ handleSubmit, handleReset, setFilterValues }) => {
  const [form] = useForm()

  //  提交表单去搜索
  const onFinish = (values: BusinessListVariables) => {
    setFilterValues(values)
    handleSubmit(values)
  }

  // 重置事件
  const reset = () => {
    form.resetFields()
    const formValues = form.getFieldsValue(true)
    setFilterValues(formValues)
    handleReset()
  }

  return (
    <Form
      form={form}
      name="search"
      className="searchForm"
      onFinish={onFinish}
      initialValues={{ name: '', userName: '', phone: '' }}>
      <Row {...listSearchFromItemProps.rowProps}>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="name" label="商户名称">
            <Input placeholder="请输入商户名称查询" />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="userName" label="负责人姓名">
            <Input placeholder="请输入姓名查询" />
          </Form.Item>
        </Col>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item name="phone" label="登录手机号">
            <Input placeholder="请输入手机号查询" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col {...listSearchFromItemProps.colProps}>
          <Form.Item>
            <Space size={24}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button onClick={reset}>重置</Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Filter
