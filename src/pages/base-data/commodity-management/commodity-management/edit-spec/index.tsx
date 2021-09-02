import React, { useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { FormInstance, Modal } from 'antd'
import {
  UpdateSpecMutationVariables,
  useSpecListQuery,
  useUpdateSpecMutation,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
import BaseFormWrap from '@/components/base-form-wrap'
import BaseCard from '@/components/base-card'
import { COMMODITY_MANAGEMENT_SKU } from '@/router/config/base-data/path'
import SpecForm from '../components/spec-form'
const CommodityManagement = () => {
  const routeParams: any = useParams()
  const { data } = useSpecListQuery({ variables: { commodityId: routeParams?.id } })
  const history = useHistory()
  const specFormRef = useRef<FormInstance>(null)
  const [updateSpec] = useUpdateSpecMutation()

  /** 保存商品操作 */
  const handleSaveAction = () => {
    const form2 = specFormRef.current?.validateFields()
    Promise.all([form2]).then(([res]) => {
      const params: UpdateSpecMutationVariables = {
        commodityModifyInput: {
          commodityId: routeParams?.id,
          // 规格信息
          commoditySpecs: res?.commoditySpecs?.map((v, i) => ({
            commoditySpecName: v?.nameLocale?.chineseName,
            commoditySpecSort: i + 1,
            commoditySpecId: v?.commoditySpecId,
            nameLocale: {
              chineseName: v?.nameLocale?.chineseName,
              englishName: v?.nameLocale?.englishName,
              thailandName: v?.nameLocale?.thailandName,
              vietnamName: v?.nameLocale?.vietnamName,
            },
            commoditySpecOptionList: v?.commoditySpecOptionList?.map((optionItem, j) => ({
              commoditySpecOptionName: optionItem?.nameLocale?.chineseName,
              commoditySpecOptionSort: j + 1,
              commoditySpecOptionId: optionItem?.commoditySpecOptionId,
              nameLocale: {
                chineseName: optionItem?.nameLocale?.chineseName,
                englishName: optionItem?.nameLocale?.englishName,
                thailandName: optionItem?.nameLocale?.thailandName,
                vietnamName: optionItem?.nameLocale?.vietnamName,
              },
            })),
          })),
        },
      }
      updateSpec({ variables: params }).then(({ data }) => {
        if (data) {
          Modal.confirm({
            title: '去添加sku列表',
            icon: <ExclamationCircleOutlined />,
            content: '商品修改成功，你需要去添加sku列表',
            okText: '去添加sku列表',
            cancelText: '取消',
            onCancel: () => {
              history.goBack()
            },
            onOk: () => {
              history.push(`${COMMODITY_MANAGEMENT_SKU}/${routeParams?.id}`)
            },
          })
        }
      })
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
          onClick: () => {
            handleSaveAction()
          },
        },
      ]}>
      <div className="pageWrap">
        <BaseCard title="规格信息">
          <SpecForm data={data?.specList} ref={specFormRef} />
        </BaseCard>
      </div>
    </BaseFormWrap>
  )
}

export default CommodityManagement
