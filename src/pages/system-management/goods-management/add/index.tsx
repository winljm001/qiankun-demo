import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import { FormInstance, Modal, Table } from 'antd';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SpecForm from '../components/spec-form';
import SpuForm from '../components/spu-form';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useToggle } from 'ahooks';
const Index: React.FC = () => {
  const history = useHistory();
  const [visible, { toggle }] = useToggle();
  const spuFormRef = useRef<FormInstance>();
  const specFormRef = useRef<FormInstance>();
  /** 保存果品操作 */
  const handleSaveAction = () => {
    const form1 = spuFormRef.current.validateFields();
    const form2 = specFormRef.current.validateFields();
    Promise.all([form1, form2]).then(([res1, res2]) => {
      console.log(res1, res2);
      Modal.confirm({
        title: '去添加sku列表',
        icon: <ExclamationCircleOutlined />,
        content: '商品创建成功，你需要去添加sku列表',
        okText: '去添加sku列表',
        cancelText: '取消',
        onOk: () => {
          toggle();
        },
      });
    });
  };
  const handleAddSku = () => {};
  return (
    <BaseFormWrap
      actions={[
        {
          children: '返回',
          onClick: () => {
            history.goBack();
          },
        },
        {
          type: 'primary',
          children: '保存果品',
          onClick: () => {
            handleSaveAction();
          },
        },
        {
          type: 'primary',
          ghost: true,
          children: '添加sku列表',
          onClick: () => {
            toggle();
          },
        },
      ]}>
      <BaseCard title="SPU信息">
        <SpuForm ref={spuFormRef} />
      </BaseCard>
      <BaseCard title="规格信息">
        <SpecForm ref={specFormRef} />
      </BaseCard>
      <Modal
        maskClosable={false}
        title="选择SKU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => toggle()}
        onOk={handleAddSku}>
        123
        {/* <Table
          bordered
          rowSelection={{ selectedRowKeys: selectedKeys, onChange: handleChangeSelection }}
          pagination={{ pageSize: 10 }}
          rowKey={(record) => record.filter.join('')}
          columns={columns}
          dataSource={dataSource}
        /> */}
      </Modal>
    </BaseFormWrap>
  );
};

export default Index;
