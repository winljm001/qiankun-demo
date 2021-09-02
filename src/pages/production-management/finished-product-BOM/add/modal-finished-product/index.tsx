import React, { useCallback, useRef, useState, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Button, Form, Input, Table, Row, Col, message } from 'antd'
import type { ColumnType, TableRowSelection } from 'antd/lib/table/interface'
import useAsyncTable from '@/hooks/useAsyncTable'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import { CommodityType } from '@/enums/common'
import type { PitayaPageConditionToGetSkuQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import { PitayaPageConditionToGetSkuDocument } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

type TableItem = PitayaPageConditionToGetSkuQuery['pitayaPageConditionToGetSku']['records'][0]

type ShowOnOk = (p: TableItem) => void

export interface ModalFinishedProductInstance {
  /**
   * 显示弹窗
   */
  show: (id: number, p: ShowOnOk) => void
}

type LocalState = {
  visible: boolean
  selected: number[]
  selectedObj: TableItem[]
}

const defaultParams = {
  noBom: 1,
  commodityTypeId: [CommodityType.FRUIT, CommodityType.FOOD],
  property: [CommodityType.PRODUCT],
}

/** useAsyncTable 参数 */
const useAsyncTableParams = {
  gql: PitayaPageConditionToGetSkuDocument,
  gqlKey: 'pitayaPageConditionToGetSku',
  gqlParamKey: 'conditionToGetSkuInput',
  extraParams: defaultParams,
  manual: true,
  isCache: false,
}

const columns: ColumnType<TableItem>[] = [
  {
    title: '商品名称',
    dataIndex: 'commodityName',
  },
  {
    title: '商品规格',
    dataIndex: 'commoditySpecOptionName',
    render: (text: string[]) => text?.join('、'),
  },
  {
    title: '商品分类',
    dataIndex: '_',
    render: (_, row) => `${row.commodityTypeName}`,
  },
  {
    title: '商品品种',
    dataIndex: 'varietyName',
  },
  {
    title: '商品产地',
    dataIndex: 'placeOriginName',
  },
]

const ModalFinishedProduct = forwardRef<ModalFinishedProductInstance>((_, ref) => {
  const { tableProps, form, submit, reset } = useAsyncTable(useAsyncTableParams)
  const ShowOnOkRef = useRef<ShowOnOk>()
  const [state, setState] = useState<LocalState>({
    visible: false,
    selected: [],
    selectedObj: [],
  })

  // 向外暴露方法
  useImperativeHandle(ref, () => ({
    show: (id, onOk) => {
      // 重置列表数据
      reset()

      ShowOnOkRef.current = onOk
      setState((s) => ({
        ...s,
        visible: true,
        selected: id ? [id] : [],
      }))
    },
  }))

  const onCancel = useCallback(() => {
    setState((s) => ({
      ...s,
      visible: false,
    }))
  }, [])

  const onOk = () => {
    if (state.selected.length === 0) {
      message.error('请选择成品')
      return
    }

    ShowOnOkRef.current?.(state.selectedObj[0])
    setState((s) => ({
      ...s,
      visible: false,
    }))
  }

  const rowSelection: TableRowSelection<TableItem> = {
    type: 'radio',
    selectedRowKeys: state.selected,
    onChange: (selectedRowKeys, selectedRows) => {
      setState((s) => ({
        ...s,
        selected: selectedRowKeys as number[],
        selectedObj: selectedRows,
      }))
    },
  }

  return (
    <Modal title="选择成品" width={880} visible={state.visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form} onFinish={submit}>
        <Row {...listSearchFromItemProps.rowProps}>
          <Col {...listSearchFromItemProps.colProps}>
            <Form.Item label="商品名称" name="commodityName">
              <Input placeholder="请输入查询" />
            </Form.Item>
          </Col>
          <Col {...listSearchFromItemProps.colProps}>
            <Form.Item label="商品规格" name="commoditySpecName">
              <Input placeholder="请输入查询" />
            </Form.Item>
          </Col>
          <Col {...listSearchFromItemProps.colProps}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Table {...tableProps} bordered columns={columns} rowKey="commoditySkuId" rowSelection={rowSelection} />
    </Modal>
  )
})

export default memo(ModalFinishedProduct)
