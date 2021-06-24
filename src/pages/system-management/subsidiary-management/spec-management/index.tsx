import type { FormInstance } from 'antd'
import { Modal } from 'antd'
import React, { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useToggle } from 'ahooks'
import { useMutation, useQuery } from 'react-query'
import BaseFormWrap from '@/components/BaseFormWrap'
import BaseCard from '@/components/BaseCard'
import { SUBSIDIARY_SKU_MANAGEMENT } from '@/router/config/system-management/path'
import { listSpecById, USE_LIST_SPEC_BY_ID_KEY } from '@/services/commodityService/mods/subsidiarySpec/listSpecById'
import { doModifySpecById } from '@/services/commodityService/mods/subsidiarySpec/doModifySpecById'
import { doSaveSkuList } from '@/services/commodityService/mods/subsidiarySku/doSaveSkuList'
import type { SkuSelectRefProps } from '../components/sku-select'
import SkuSelect from '../components/sku-select'
import SpecForm from '../components/spec-form'
import { getColumns } from '../components/sku-select/utils'

const SpecManagement: React.FC = () => {
  const history = useHistory()
  const [visible, { toggle }] = useToggle()
  const specFormRef = useRef<FormInstance>()
  const { id } = useParams<any>()
  const { data, refetch } = useQuery({
    queryKey: USE_LIST_SPEC_BY_ID_KEY,
    queryFn: () => {
      return listSpecById({ commodityId: id }).then((res) => {
        const { data } = res
        return data
      })
    },
    onSuccess: (data) => {
      specFormRef.current.setFieldsValue({ commoditySpecs: data })
    },
  })
  const skuSelectFormRef = useRef<SkuSelectRefProps>()
  // 修改商品状态接口
  const modifySpecById = useMutation(doModifySpecById, {
    onSuccess: () => {
      refetch()
      Modal.confirm({
        title: '去添加sku列表',
        icon: <ExclamationCircleOutlined />,
        content: '商品保存成功，你需要去添加sku列表',
        okText: '去添加sku列表',
        cancelText: '取消',
        onCancel: () => {
          history.goBack()
          toggle()
        },
        onOk: () => {
          toggle()
        },
      })
    },
  })
  //  保存选中的sku
  const modifySaveSkuList = useMutation(doSaveSkuList, {
    onSuccess: () => {
      toggle()
      Modal.confirm({
        title: '去管理sku',
        icon: <ExclamationCircleOutlined />,
        content: 'sku添加成功，你需要去管理sku',
        okText: '去管理sku',
        cancelText: '取消',
        onCancel: () => {
          history.goBack()
          toggle()
        },
        onOk: () => {
          history.push(`${SUBSIDIARY_SKU_MANAGEMENT}/${id}`)
        },
      })
    },
  })
  /** 保存果品操作 */
  const handleSaveAction = () => {
    const form2 = specFormRef.current.validateFields()
    Promise.all([form2]).then(([res2]) => {
      modifySpecById.mutate({ commodityId: id, ...res2 })
    })
  }
  const handleAddSku = () => {
    const commoditySpecOptionIdsList = skuSelectFormRef.current.getSelected()
    const col = getColumns(data)

    modifySaveSkuList.mutate({
      commodityId: id,
      commoditySpecId: col?.map((v) => v.dataIndex),
      commoditySpecOptionIdsList: commoditySpecOptionIdsList,
    })
  }
  return (
    <BaseFormWrap
      actions={[
        {
          children: '返回',
          onClick: () => {
            history.goBack()
          },
        },
        {
          type: 'primary',
          children: '保存',
          loading: modifySpecById.isLoading,
          onClick: () => {
            handleSaveAction()
          },
        },
      ]}>
      <div style={{ padding: '16px 16px 0' }}>
        <BaseCard title="规格信息">
          <SpecForm ref={specFormRef} data={{ commoditySpecs: data }} />
        </BaseCard>
        <Modal
          destroyOnClose={true}
          title="选择SKU"
          okText="保存"
          cancelText="取消"
          visible={visible}
          onCancel={() => {
            history.goBack()
            toggle()
          }}
          onOk={handleAddSku}>
          <SkuSelect ref={skuSelectFormRef} id={id} specData={data} />
        </Modal>
      </div>
    </BaseFormWrap>
  )
}

export default SpecManagement
