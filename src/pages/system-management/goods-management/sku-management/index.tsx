import React, { useCallback, useEffect, useState } from 'react';
import DataSuspense from '@/components/DataSuspense';
import { useParams } from 'react-router';
import BaseInfo from './components/base-info';
import Filter from './components/filter';
import styles from './index.module.less';
import Space from '@/components/Space';
import { Button, Table } from 'antd';
import ActionGroup from '@/components/ActionGroup';
import { getCommodity } from '@/services/commodityService/mods/commodity/getCommodity';
import { listSkuQueryCondition } from '@/services/commodityService/mods/commoditySku/listSkuQueryCondition'
import { listSkuListColumn } from '@/services/commodityService/mods/commoditySku/listSkuListColumn';
import { listSku } from '@/services/commodityService/mods/commoditySku/listSku';
import { useSetState } from 'ahooks';
import StatusChanger from '@/components/StatusChanger';

type SKUPageParams = {
  id: string;
};
type ListParams = {
  pageNo: number,
  pageSize: number,
  [prop: string]: any,
}

const Index: React.FC = () => {
  const params = useParams() as SKUPageParams;
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [listParams, setListParams] = useSetState<ListParams>({
    pageNo: 1,
    pageSize: 10,
  })
  
  const loadData = useCallback(() => {
    const id = Number(params.id)
    return Promise.all([
      // 获取基本信息
      getCommodity({ id: id })
        .then((data) => data.data)
        .catch((err) => Promise.reject(err)),
      // 获取筛选条件数据
      listSkuQueryCondition({ commodityId: id })
        .then(data => data.data)
        .catch(err => Promise.reject(err)),
      // 获取表头数据
      listSkuListColumn({ commodityId: id })
        .then((data) => data.data)
        .catch((err) => Promise.reject(err)),
    ]);
  }, [params.id]);
  useEffect(() => {
    listSku({})
  }, [listParams])
  const onFilter = useCallback((values) => {
    console.log(values, '---filter values');
  }, []);
  const handleBatchEdit = useCallback(() => {}, []);
  const handleBatchEnable = useCallback(() => {}, []);
  const handleBatchDisable = useCallback(() => {}, []);
  return (
    <div className={styles.wrap}>
      <DataSuspense load={loadData}>
        {({ data }) => {
          const [baseData, selectData, columnData] = data;
          const columns = [
            ...columnData.skuListColumnCommoditySpecVOList.map((item) => ({
              title: item.commoditySpecName,
              dataIndex: item.commoditySpecId,
              key: item.commoditySpecId,
            })),
            ...columnData.skuListColumnCommoditySkuUnitVOList.map((item) => ({
              title: item.title,
              dataIndex: item.key,
              key: item.key,
            })),
            {
              title: '状态',
              dataIndex: 'status',
              key: 'status',
              render() {
                return <StatusChanger onConfirm={() => {}} checked={false}  />
              },
            },
            {
              title: '操作1',
              dataIndex: '_',
              render: () => {
                return (
                  <ActionGroup
                    actions={[
                      {
                        children: '编辑sku',
                      },
                    ]}
                  />
                );
              },
            },
          ];
          return (
            <Space direction="vertical" size={16}>
              <BaseInfo data={baseData} />
              {selectData.length > 0 && <Filter items={selectData} onFilter={onFilter} />}
              <Space size={16}>
                <Button type="primary" disabled={selectedKeys.length === 0} onClick={handleBatchEdit}>
                  批量编辑sku
                </Button>
                <Button type="primary" disabled={selectedKeys.length === 0} onClick={handleBatchEnable}>
                  批量启用
                </Button>
                <Button type="primary" disabled={selectedKeys.length === 0} onClick={handleBatchDisable}>
                  批量禁用
                </Button>
              </Space>
              <Table
                bordered
                dataSource={[{}, {}]}
                columns={columns}
                rowKey="commoditySkuId"
                rowSelection={{
                  selectedRowKeys: selectedKeys,
                  onChange: setSelectedKeys,
                }}
              />
            </Space>
          );
        }}
      </DataSuspense>
    </div>
  );
};

export default Index;
