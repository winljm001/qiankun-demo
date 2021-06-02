import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import React from 'react';

const Index: React.FC = () => {
  return (
    <BaseFormWrap
      actions={[
        {
          children: '返回',
          onClick: () => {
            console.log(123);
          },
        },
        {
          type: 'primary',
          children: '保存果品',
          onClick: () => {
            console.log(123);
          },
        },
        {
          type: 'primary',
          ghost: true,
          children: '添加sku列表',
          onClick: () => {
            console.log(123);
          },
        },
      ]}>
      <BaseCard title="SPU信息">
        <p>Home</p>
      </BaseCard>
      <BaseCard title="规格信息">
        <p>Home</p>
      </BaseCard>
    </BaseFormWrap>
  );
};

export default Index;
