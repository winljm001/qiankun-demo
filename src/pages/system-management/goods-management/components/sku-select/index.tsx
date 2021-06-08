import {
  listSkuSelectedCombination,
  USE_LIST_SKU_SELECTED_COMBINATION_KEY,
} from '@/services/commodityService/mods/commoditySku/listSkuSelectedCombination';
import { Table } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
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

  const rowSelection = {
    onChange: (e) => {
      setSelected(e);
    },
  };
  return <Table rowSelection={rowSelection} columns={columns} dataSource={data} rowKey="commoditySpecOptionIdsList" />;
});

export default SkuSelectForm;
