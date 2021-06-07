import React, { FC, useMemo } from 'react';
import JsonFilter, { defineConfig, FormItemConfig } from '@/components/JsonFilter';

interface IProps {
  items: defs.commodityService.ScreeningSkuList[];
  onFilter: (values: any) => void,
}

const baseOptions = [{
  label: '全部',
  value: null,
}]
const Filter: FC<IProps> = ({ items, onFilter }) => {
  // 遍历生成select控件配置和控件初始值
  const [fieldsData, formItems] = useMemo(() => {
    const values = {};
    const controls: FormItemConfig[] = items.map((item) => {
      values[item.commoditySpecId] = null;
      return {
        key: item.commoditySpecId,
        label: item.commoditySpecName,
        name: item.commoditySpecId,
        control: {
          controlType: 'SELECT',
          options: baseOptions.concat(item.commoditySpecOptionVOList.map(optionItem => ({
            label: optionItem.commoditySpecOptionName,
            value: optionItem.commoditySpecOptionId,
          })))
        },
      };
    });
    return [values, controls];
  }, [items]);
  const config = defineConfig({
    fieldsData,
    formItems,
    onFilter,
  });
  return <JsonFilter {...config} />;
};

export default Filter;
