import { Divider, Checkbox, Table, Space, Button, message } from 'antd'
import React, { forwardRef, /* useEffect, */ useImperativeHandle, useMemo, useState } from 'react'
import SearchFormLayout from '@/components/search-form-layout'
import { useListSkuSelectedCombinationQuery } from '@/graphql/operations/base-data/__generated__/commodity-management'
import { ListSkuQueryCondition } from '../../type'
import { getAllSpecDescartes, getColumns } from './utils'

export interface SkuSelectRefProps {
  getData: () => { selected: any[]; selectSpec: any[] }
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
      return { selected, selectSpec: currentSelectSpec }
    },
  }))
  // 请求接口
  const { data: selectedSpecOptions } = useListSkuSelectedCombinationQuery({ variables: { commodityId: id } })

  // 未选中规格组合列表
  const data = useMemo(() => {
    return getAllSpecDescartes(currentSelectSpec, selectedSpecOptions?.listSkuSelectedCombination || [])
  }, [currentSelectSpec, selectedSpecOptions])
  // 表头
  const columns = useMemo(() => {
    return getColumns(specData)
  }, [specData])
  const rowSelection = {
    onChange: (e) => {
      setSelected(e)
    },
  }
  const onSaveSelect = () => {
    if (selectSpec?.length > 0) {
      setCurrentSelectSpec(selectSpec)
    } else {
      message.error('请选择至少一个规格！')
    }
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
        scroll={{ y: 400 }}
        pagination={{ showTotal: (total) => `共 ${total} 记录`, pageSize: 99, showSizeChanger: false }}
      />
    </div>
  )
})

export default SkuSelect
