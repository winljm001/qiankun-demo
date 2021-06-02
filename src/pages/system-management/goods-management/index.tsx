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
      <p>Home</p>
    </BaseFormWrap>
  );
};

export default Index;
