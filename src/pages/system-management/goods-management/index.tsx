import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import { FormInstance } from 'antd';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SpecForm from './components/spec-form';
import SpuForm from './components/spu-form';

const Index: React.FC = () => {
  const history = useHistory();
  const spuFormRef = useRef<FormInstance>();
  const specFormRef = useRef<FormInstance>();
  const onSaveAction = () => {
    const form1 = spuFormRef.current.validateFields();
    const form2 = specFormRef.current.validateFields();
    Promise.all([form1, form2]).then(([res1, res2]) => {
      console.log(res1, res2);
    });
  };
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
            onSaveAction();
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
        <SpuForm ref={spuFormRef} />
      </BaseCard>
      <BaseCard title="规格信息">
        <SpecForm ref={specFormRef} />
      </BaseCard>
    </BaseFormWrap>
  );
};

export default Index;
