import React, { useRef } from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { FormInstance, Modal } from 'antd'
import { useHistory } from 'react-router-dom'
import BaseCard from '@/components/base-card'
import BaseFormWrap from '@/components/base-form-wrap'
import {
  DoInsertCommodityMutationVariables,
  useDoInsertCommodityMutation,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
import { COMMODITY_MANAGEMENT_SKU } from '@/router/config/base-data/path'
import BaseForm from '../components/base-form'
import SpecForm from '../components/spec-form'

const CreateCommodity = () => {
  const history = useHistory()
  const baseFormRef = useRef<FormInstance>(null)
  const specFormRef = useRef<FormInstance>(null)
  const [doInsertCommodity] = useDoInsertCommodityMutation()
  /** 保存商品操作 */
  const handleSaveAction = () => {
    const form1 = baseFormRef.current?.validateFields()
    const form2 = specFormRef.current?.validateFields()
    Promise.all([form1, form2]).then(([res1, res2]) => {
      const params: DoInsertCommodityMutationVariables = {
        insertCommodityInput: {
          commodityName: res1?.nameLocale?.chineseName,
          commodityTypeId: res1?.commodityTypeId,
          commodityCategoryId: res1?.commodityCategoryId,
          commodityVarietyId: res1?.commodityVarietyId,
          commodityPlaceOriginId: res1?.commodityPlaceOriginId,
          nameLocale: {
            chineseName: res1?.nameLocale?.chineseName,
            englishName: res1?.nameLocale?.englishName,
            thailandName: res1?.nameLocale?.thailandName,
            vietnamName: res1?.nameLocale?.vietnamName,
          },
          // 规格信息
          commoditySpecs: res2?.commoditySpecs?.map((v, i) => ({
            commoditySpecName: v?.nameLocale?.chineseName,
            commoditySpecSort: i + 1,
            nameLocale: {
              chineseName: v?.nameLocale?.chineseName,
              englishName: v?.nameLocale?.englishName,
              thailandName: v?.nameLocale?.thailandName,
              vietnamName: v?.nameLocale?.vietnamName,
            },
            commoditySpecOptions: v?.commoditySpecOptionList?.map((optionItem, j) => ({
              commoditySpecOptionName: optionItem?.nameLocale?.chineseName,
              commoditySpecOptionSort: j + 1,
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
      doInsertCommodity({ variables: params }).then(({ data }) => {
        if (data) {
          Modal.confirm({
            title: '去添加sku列表',
            icon: <ExclamationCircleOutlined />,
            content: '商品创建成功，你需要去添加sku列表',
            okText: '去添加sku列表',
            cancelText: '取消',
            onCancel: () => {
              history.goBack()
            },
            onOk: () => {
              history.push(`${COMMODITY_MANAGEMENT_SKU}/${data.doInsertCommodity}`)
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
          onClick: () => {},
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
        <BaseCard title="SPU信息">
          <BaseForm ref={baseFormRef} />
        </BaseCard>
        <BaseCard title="规格信息">
          <SpecForm ref={specFormRef} />
        </BaseCard>
      </div>
    </BaseFormWrap>
  )
}

export default CreateCommodity
