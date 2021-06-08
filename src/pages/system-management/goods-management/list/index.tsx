import React, { useRef, useState } from 'react';
import { Button, FormInstance, Modal, Space, Table } from 'antd';
import SearchForm from './search-form/index';
import { pageCommodity } from '@/services/commodityService/mods/commodity/pageCommodity';
import BaseCard from '@/components/BaseCard';
import ActionGroup from '@/components/ActionGroup';
import { useHistory } from 'react-router-dom';
import { GOODS_MANAGEMENT_ADD, SKU_MANAGEMENT, SPEC_MANAGEMENT } from '@/router/config/system-management/path';
import StatusChanger from '@/components/StatusChanger';
import subRoute from '@/components/hoc/sub-route';
import useAsyncTable from '@/hooks/useAsyncTable';
import { useToggle } from 'ahooks';
import SpuForm from '../components/spu-form';
import { useMutation, useQuery } from 'react-query';
import {
  doUpdateCommodityName,
  USE_DO_UPDATE_COMMODITY_NAME_KEY,
} from '@/services/commodityService/mods/commodity/doUpdateCommodityName';
import { doUpdateCommodityStatus } from '@/services/commodityService/mods/commodity/doUpdateCommodityStatus';

const GoodsManagementList = () => {
  const history = useHistory();
  const spuFormRef = useRef<FormInstance>();
  const [visible, { toggle }] = useToggle();
  const { tableProps, form, submit, reset, refresh } = useAsyncTable({ fetchAction: pageCommodity });
  const [editData, setEditData] = useState();

  // 修改商品状态接口
  const updateName = useMutation(doUpdateCommodityName, {
    onSuccess: () => {
      toggle();
      refresh();
    },
  });
  // 修改商品名接口
  const updateStatus = useMutation(doUpdateCommodityStatus, {
    onSuccess: () => {
      refresh();
    },
  });
  // 修改商品状态
  const handleChangeStatus = (record) => {
    updateStatus.mutate({ commodityId: record?.commodityId, status: record?.status === 0 ? 99 : 0 });
  };
  // 修改商品名
  const handleEditSPU = async () => {
    const res = await spuFormRef.current.validateFields();
    updateName.mutate(res);
  };
  const columns = [
    {
      title: 'SPU名称',
      dataIndex: 'commodityName',
    },
    {
      title: '商品品类',
      dataIndex: 'commodityCategoryName',
    },
    {
      title: '品种',
      dataIndex: 'commodityVarietyName',
    },
    {
      title: '产地',
      dataIndex: 'commodityPlaceOriginName',
    },
    {
      title: 'SKU数',
      dataIndex: 'skuSum',
    },
    {
      title: '状态',
      dataIndex: 'status',
      render: (val, record) => <StatusChanger checked={val === 99} onConfirm={() => handleChangeStatus(record)} />,
    },
    {
      title: '操作',
      dataIndex: '_',
      render: (val, record) => {
        return (
          <ActionGroup
            actions={[
              {
                children: '修改SPU',
                onClick() {
                  setEditData(record);
                  toggle();
                },
              },
              {
                children: '规格管理',
                onClick() {
                  history.push(`${SPEC_MANAGEMENT}/${record.commodityId}`);
                },
              },
              {
                children: 'SKU管理',
                onClick() {
                  history.push(`${SKU_MANAGEMENT}/${record.commodityId}`);
                },
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <div>
      <BaseCard>
        <SearchForm form={form} submit={submit} reset={reset} />
        <Space size={24}>
          <Button
            onClick={() => {
              history.push(`${GOODS_MANAGEMENT_ADD}`);
            }}
            type="primary">
            新增果品
          </Button>
        </Space>
      </BaseCard>
      <BaseCard>
        <Table columns={columns} rowKey="commodityId" {...tableProps} />
      </BaseCard>
      <Modal
        title="修改SPU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => toggle()}
        confirmLoading={updateName.isLoading}
        onOk={handleEditSPU}>
        <SpuForm ref={spuFormRef} data={editData} />
      </Modal>
    </div>
  );
};

export default subRoute(GoodsManagementList);
