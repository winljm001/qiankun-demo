import { Divider, Checkbox, Table, Space, Button } from 'antd'
import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react'
import SearchFormLayout from '@/components/search-form-layout'
import { usePeachNotChosenSkuOptionQuery } from '@/graphql/operations/wholesale-management/__generated__/commodity'
import { ListSkuQueryCondition } from '../../type'
import { getAllSpecDescartes, getColumns } from './utils'

export interface SkuSelectRefProps {
  getData: () => { selected: any[] }
}
interface SkuSelectFormProps {
  id: number
  specData?: ListSkuQueryCondition
}
const SkuSelect = forwardRef<SkuSelectRefProps, SkuSelectFormProps>(({ id, specData = [] }, ref) => {
  const [selected, setSelected] = useState<any[]>([])
  const [selectSpec, setSelectSpec] = useState<any[]>([])
  const [currentSelectSpec, setCurrentSelectSpec] = useState<any[]>([])

  useImperativeHandle(ref, () => ({
    getData: () => {
      return { selected }
    },
  }))
  const { data: notChosenSkuOption } = usePeachNotChosenSkuOptionQuery({ variables: { commodityId: id } })

  const data = useMemo(() => {
    return getAllSpecDescartes(currentSelectSpec, (notChosenSkuOption?.peachNotChosenSkuOption as any) || [])
  }, [currentSelectSpec, notChosenSkuOption])
  // 表头
  const columns = useMemo(() => {
    return getColumns(specData, currentSelectSpec)
  }, [specData, currentSelectSpec])
  const rowSelection = {
    onChange: (_, rows) => {
      setSelected(rows)
    },
  }
  const onSaveSelect = () => {
    setCurrentSelectSpec(selectSpec)
  }
  const specOptions = useMemo(() => {
    return specData?.map((v) => {
      return { label: v?.commoditySpecName, value: v?.commoditySpecId }
    })
  }, [specData])
  return (
    <div>
      <SearchFormLayout
        size="small"
        list={[
          <Checkbox.Group
            key="checkbox"
            value={selectSpec?.map((v) => v?.commoditySpecId)}
            options={specOptions}
            onChange={(val) => {
              setSelectSpec(val?.map((v) => specData?.find((item) => item?.commoditySpecId === v)))
            }}
          />,
          <Space size={24} key="space">
            <Button
              type="primary"
              onClick={() => {
                onSaveSelect()
              }}>
              确定
            </Button>
          </Space>,
        ]}
      />
      <Divider />
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        bordered
        rowKey="commoditySpecOptionIdsList"
      />
    </div>
  )
})

export default SkuSelect
