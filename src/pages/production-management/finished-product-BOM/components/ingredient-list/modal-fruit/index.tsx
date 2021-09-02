import React, { useCallback, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Button, Form, Input, Table, Row, Col } from 'antd'
import type { ColumnType, TableRowSelection } from 'antd/lib/table/interface'
import useAsyncTable from '@/hooks/useAsyncTable'
import useState from '@/hooks/useState'
import { listSearchFromItemProps } from '@/config/defaultSettings'
import { CommodityType } from '@/enums/common'
// import type { PitayaListBurdenQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import { PitayaPageCommoditySpuManageDocument } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import type { PitayaPageCommoditySpuManageQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'

type TableItem = PitayaPageCommoditySpuManageQuery['pitayaPageCommodityManage']['records'][0]

type ShowOnOk = (p: TableItem[]) => void

export interface IngredientListModalFruitInstance {
  /**
   * 显示弹窗
   */
  show: (p: { selected: number[]; onOk: ShowOnOk }) => void
}

type LocalState = {
  visible: boolean
  selected: number[]
  selectedObj: TableItem[]
}

const defaultParams = {
  typeId: CommodityType.FRUIT,
  status: 1,
}

/** useAsyncTable 参数 */
const useAsyncTableParams = {
  gql: PitayaPageCommoditySpuManageDocument,
  gqlKey: 'pitayaPageCommodityManage',
  gqlParamKey: 'pageCommodityInput',
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
    title: '商品单位',
    dataIndex: 'unitName',
    render: () => <span>kg</span>,
  },
  {
    title: '商品分类',
    dataIndex: 'categoryName',
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

/**
 * 添加水果对话框
 */
const IngredientListModalFruit = forwardRef<IngredientListModalFruitInstance>((_, ref) => {
  const { tableProps, form, submit } = useAsyncTable(useAsyncTableParams)
  const ShowOnOkRef = useRef<ShowOnOk>()
  const [state, setState] = useState<LocalState>({
    visible: false,
    selected: [],
    selectedObj: [],
  })

  useImperativeHandle(ref, () => ({
    show: ({ onOk, selected }) => {
      ShowOnOkRef.current = onOk
      setState({
        visible: true,
        selected: [],
      })

      // 重置列表数据？
      form.resetFields()
      form.setFields([
        {
          name: 'excludeCommodityIds',
          value: selected,
        },
      ])
      submit()
    },
  }))

  const onCancel = useCallback(() => {
    setState({
      visible: false,
    })
  }, [])

  const onOk = () => {
    // 传入一个完整值
    ShowOnOkRef.current?.(state.selectedObj)
    setState({ visible: false })
  }

  const rowSelection: TableRowSelection<TableItem> = {
    selectedRowKeys: state.selected,
    onChange: (selectedRowKeys, selectedRows) => {
      setState({
        selected: selectedRowKeys as number[],
        selectedObj: selectedRows,
      })
    },
  }

  return (
    <Modal title="添加水果" width={880} visible={state.visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form} onFinish={submit}>
        <Form.Item hidden name="excludeCommodityIds">
          <Input />
        </Form.Item>

        <Row {...listSearchFromItemProps.rowProps}>
          <Col {...listSearchFromItemProps.colProps}>
            <Form.Item label="商品名称" name="commodityName">
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

      <Table {...tableProps} bordered columns={columns} rowKey="commodityId" rowSelection={rowSelection} />
    </Modal>
  )
})

export default memo(IngredientListModalFruit)
