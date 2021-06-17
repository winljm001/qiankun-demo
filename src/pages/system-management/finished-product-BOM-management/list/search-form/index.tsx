import React, { memo } from 'react'
import { Button, Form, FormInstance, Input, Space } from 'antd'
// import JsonFilter, { defineConfig } from '@/components/JsonFilter';
import SearchFormLayout from '@/components/SearchFormLayout'

interface IProps {
  form: FormInstance
  submit: () => void
  reset: () => void
}

const SearchForm: React.FC<IProps> = ({ form, submit, reset }) => {
  return (
    <Form form={form}>
      <SearchFormLayout
        list={[
          <Form.Item label="商品名称" name="commodityName" key="商品名称">
            <Input placeholder="请输入查询" />
          </Form.Item>,
          <Form.Item key="操作">
            <Space size={24}>
              <Button type="primary" htmlType="submit" onClick={submit}>
                查询
              </Button>
              <Button type="default" htmlType="reset" onClick={reset}>
                重置
              </Button>
            </Space>
          </Form.Item>,
        ]}
      />
    </Form>
  )
}

export default memo(SearchForm)
