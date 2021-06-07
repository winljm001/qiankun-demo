import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import { FormInstance, Modal } from 'antd';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import SpecForm from '../components/spec-form';
import SpuForm from '../components/spu-form';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useToggle } from 'ahooks';
import { doInsertCommodity } from '@/services/commodityService/mods/commodity/doInsertCommodity';
import SkuSelect, { SkuSelectRefProps } from '../components/sku-select';
const SpecManagement: React.FC = () => {
  const history = useHistory();
  const [visible, { toggle }] = useToggle();
  const spuFormRef = useRef<FormInstance>();
  const specFormRef = useRef<FormInstance>();
  const skuSelectFormRef = useRef<SkuSelectRefProps>();
  /** 保存果品操作 */
  const handleSaveAction = () => {
    const form2 = specFormRef.current.validateFields();
    Promise.all([form2]).then(([res2]) => {
      doInsertCommodity({ ...res2 }).then(() => {
        Modal.confirm({
          title: '去添加sku列表',
          icon: <ExclamationCircleOutlined />,
          content: '商品保存成功，你需要去添加sku列表',
          okText: '去添加sku列表',
          cancelText: '取消',
          onOk: () => {
            toggle();
          },
        });
      });
    });
  };
  const handleAddSku = () => {
    const skus = skuSelectFormRef.current.getSelected();
    console.log(skus);
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
          children: '保存规格',
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
        <SkuSelect ref={skuSelectFormRef} />
      </Modal>
    </BaseFormWrap>
  );
};

export default SpecManagement;
