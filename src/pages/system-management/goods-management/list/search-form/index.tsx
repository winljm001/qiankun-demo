import React, { useRef, memo } from 'react';
import JsonFilter, { defineConfig } from '@/components/JsonFilter';
import { Button, Form, FormInstance, Input, Space } from 'antd';
import SearchFormLayout from '@/components/SearchFormLayout';

interface IProps {
  form: FormInstance;
  submit: () => void;
  reset: () => void;
}

const SearchForm: React.FC<IProps> = ({ form, submit, reset }) => {
  return (
    <Form form={form}>
      <SearchFormLayout
        list={[
          <Form.Item label="name" name="name" key={1}>
            <Input placeholder="name" />
          </Form.Item>,
          <Form.Item key="2">
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
  );
};

export default memo(SearchForm);
