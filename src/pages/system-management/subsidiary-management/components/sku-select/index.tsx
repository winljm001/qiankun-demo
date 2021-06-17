import { Divider, Input, Table, Col, Row } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import {
  listSkuSelectedCombination,
  USE_LIST_SKU_SELECTED_COMBINATION_KEY,
} from '@/services/commodityService/mods/subsidiarySku/listSkuSelectedCombination';
import { getAllSpecDescartes, getColumns } from './utils';

export interface SkuSelectRefProps {
  getSelected?: any;
}
interface SkuSelectFormProps {
  id: number;
  specData?: defs.commodityService.SpecificationsAndTypes[];
}
const SkuSelectForm = forwardRef<SkuSelectRefProps, SkuSelectFormProps>(({ id, specData = [] }, ref) => {
  const [selected, setSelected] = useState([]);
  const [resData, setResData] = useState([]);
  useImperativeHandle(ref, () => ({
    getSelected: () => {
      return selected;
    },
  }));
  const { data: selectedSpecOptions } = useQuery({
    queryKey: USE_LIST_SKU_SELECTED_COMBINATION_KEY,
    queryFn: () => {
      return listSkuSelectedCombination({ commodityId: id }).then((res) => {
        const { data } = res;
        return data;
      });
    },
  });
  // 未选中规格组合列表
  const data = useMemo(() => {
    return getAllSpecDescartes(specData, selectedSpecOptions);
  }, [specData, selectedSpecOptions]);
  // 表头
  const columns = useMemo(() => {
    return getColumns(specData);
  }, [specData]);
  useEffect(() => {
    setResData(data);
  }, [data]);
  const rowSelection = {
    onChange: (e) => {
      setSelected(e);
    },
  };
  const onSearch = (k) => {
    const res = data?.filter((v) => {
      let hasKey = false;
      Object.keys(v).forEach((key) => {
        if (typeof v[key] === 'string' && v[key]?.indexOf(k) !== -1) {
          hasKey = true;
        }
      });

      return hasKey;
    });
    setResData(res);
  };
  return (
    <div>
      <Row>
        <Col span={12}>
          <Input.Search placeholder="搜索" onSearch={onSearch} enterButton allowClear />
        </Col>
      </Row>
      <Divider />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={resData}
        rowKey="commoditySpecOptionIdsList"
        pagination={{ showSizeChanger: true, showTotal: (total) => `共 ${total} 记录` }}
      />
    </div>
  );
});

export default SkuSelectForm;