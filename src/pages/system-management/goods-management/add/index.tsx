import BaseCard from '@/components/BaseCard';
import BaseFormWrap from '@/components/BaseFormWrap';
import { FormInstance, Modal, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SpecForm from '../components/spec-form';
import SpuForm from '../components/spu-form';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useToggle } from 'ahooks';
import { doInsertCommodity } from '@/services/commodityService/mods/commodity/doInsertCommodity';
import SkuSelect, { SkuSelectRefProps } from '../components/sku-select';
import { useMutation, useQuery } from 'react-query';
import { listSpecById, USE_LIST_SPEC_BY_ID_KEY } from '@/services/commodityService/mods/spec/listSpecById';
import { doSaveSkuList } from '@/services/commodityService/mods/commoditySku/doSaveSkuList';
import { getColumns } from '../components/sku-select/utils';
import { SKU_MANAGEMENT } from '@/router/config/system-management/path';
const GoodsManagementAdd: React.FC = () => {
  const history = useHistory();
  const [visible, { toggle }] = useToggle();
  const spuFormRef = useRef<FormInstance>();
  const specFormRef = useRef<FormInstance>();
  const skuSelectFormRef = useRef<SkuSelectRefProps>();
  const [id, setId] = useState(0);
  // spec data
  const { data: specData, refetch } = useQuery({
    queryKey: USE_LIST_SPEC_BY_ID_KEY,
    queryFn: () => {
      return listSpecById({ commodityId: id }).then((res) => {
        const { data } = res;
        return data;
      });
    },
    enabled: false,
    onSuccess: (data) => {
      specFormRef.current.setFieldsValue({ commoditySpecs: data });
    },
  });
  //  保存选中的sku
  const modifySaveSkuList = useMutation(doSaveSkuList, {
    onSuccess: () => {
      toggle();
      Modal.confirm({
        title: '去管理sku',
        icon: <ExclamationCircleOutlined />,
        content: 'sku添加成功，你需要去管理sku',
        okText: '去管理sku',
        cancelText: '取消',
        onCancel: () => {
          history.goBack();
        },
        onOk: () => {
          history.push(`${SKU_MANAGEMENT}/${id}`);
        },
      });
    },
  });
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);
  /** 保存果品操作 */
  const handleSaveAction = () => {
    const form1 = spuFormRef.current.validateFields();
    const form2 = specFormRef.current.validateFields();
    Promise.all([form1, form2]).then(([res1, res2]) => {
      doInsertCommodity({ ...res1, ...res2 }).then(({ data }) => {
        if (data) {
          setId(data);
        }
        Modal.confirm({
          title: '去添加sku列表',
          icon: <ExclamationCircleOutlined />,
          content: '商品创建成功，你需要去添加sku列表',
          okText: '去添加sku列表',
          cancelText: '取消',
          onCancel: () => {
            history.goBack();
            toggle();
          },
          onOk: () => {
            toggle();
          },
        });
      });
    });
  };
  const handleAddSku = () => {
    const commoditySpecOptionIdsList = skuSelectFormRef.current.getSelected();
    const col = getColumns(specData);

    modifySaveSkuList.mutate({
      commodityId: id,
      commoditySpecId: col?.map((v) => v.dataIndex),
      commoditySpecOptionIdsList: commoditySpecOptionIdsList,
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
          children: '保存',
          onClick: () => {
            handleSaveAction();
          },
        },
      ]}>
      <BaseCard title="SPU信息">
        <SpuForm ref={spuFormRef} />
      </BaseCard>
      <BaseCard title="规格信息">
        <SpecForm ref={specFormRef} />
      </BaseCard>
      <Modal
        destroyOnClose={true}
        title="选择SKU"
        okText="保存"
        cancelText="取消"
        visible={visible}
        onCancel={() => {
          history.goBack();
          toggle();
        }}
        onOk={handleAddSku}>
        <SkuSelect ref={skuSelectFormRef} id={id} specData={specData} />
      </Modal>
    </BaseFormWrap>
  );
};

export default GoodsManagementAdd;
