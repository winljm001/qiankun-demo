import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import { FormInstance, Modal } from 'antd';
import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SpecForm from '../components/spec-form';
import SpuForm from '../components/spu-form';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useToggle } from 'ahooks';
import { doInsertCommodity } from '@/services/commodityService/mods/commodity/doInsertCommodity';
import SkuSelect, { SkuSelectRefProps } from '../components/sku-select';
import { useMutation, useQuery } from 'react-query';
import { listSpecById, USE_LIST_SPEC_BY_ID_KEY } from '@/services/commodityService/mods/spec/listSpecById';
import { doModifySpecById } from '@/services/commodityService/mods/spec/doModifySpecById';
const SpecManagement: React.FC = () => {
  const history = useHistory();
  const [visible, { toggle }] = useToggle();
  const specFormRef = useRef<FormInstance>();
  const { id } = useParams<any>();
  const { data } = useQuery({
    queryKey: USE_LIST_SPEC_BY_ID_KEY,
    queryFn: () => {
      return listSpecById({ commodityId: id }).then((res) => {
        const { data } = res;
        return data;
      });
    },
  });
  const skuSelectFormRef = useRef<SkuSelectRefProps>();
  // 修改商品状态接口
  const modifySpecById = useMutation(doModifySpecById, {
    onSuccess: () => {
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
    },
  });
  /** 保存果品操作 */
  const handleSaveAction = () => {
    const form2 = specFormRef.current.validateFields();
    Promise.all([form2]).then(([res2]) => {
      modifySpecById.mutate({ commodityId: id, ...res2 });
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
          loading: modifySpecById.isLoading,
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
        <SpecForm ref={specFormRef} data={{ commoditySpecs: data }} />
      </BaseCard>
      <Modal
        title="选择SKU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => toggle()}
        onOk={handleAddSku}>
        <SkuSelect ref={skuSelectFormRef} id={id} specData={data} />
      </Modal>
    </BaseFormWrap>
  );
};

export default SpecManagement;
