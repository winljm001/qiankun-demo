import React from 'react';
import { Button, Space, Table } from 'antd';
import SearchForm from './search-form/index';
import { pageCommodity } from '@/services/commodityService/mods/commodity/pageCommodity';
import BaseCard from '@/components/BaseCard';
import ActionGroup from '@/components/ActionGroup';
import { useHistory } from 'react-router-dom';
import { GOODS_MANAGEMENT_ADD, SKU_MANAGEMENT, SPEC_MANAGEMENT } from '@/router/config/system-management/path';
import StatusChanger from '@/components/StatusChanger';
import subRoute from '@/components/hoc/sub-route';
import useAsyncTable from '@/hooks/useAsyncTable';

const GoodsManagementList = () => {
  const history = useHistory();
  const { tableProps, form, submit, reset } = useAsyncTable({ fetchAction: pageCommodity });
  const handleChangeStatus = (record) => {
    console.log(record);
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
      render: (val, record) => <StatusChanger checked={val === 1} onConfirm={() => handleChangeStatus(record)} />,
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
                  console.log('修改spu');
                },
              },
              {
                children: '规格管理',
                onClick() {
                  history.push(`${SPEC_MANAGEMENT}?commodityId=${record.commodityId}`);
                },
              },
              {
                children: 'SKU管理',
                onClick() {
                  history.push(`${SKU_MANAGEMENT.replace(':id', record.commodityId)}`);
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
    </div>
  );
};

export default subRoute(GoodsManagementList);
