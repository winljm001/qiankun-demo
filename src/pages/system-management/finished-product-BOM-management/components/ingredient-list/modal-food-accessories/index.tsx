import React, { useCallback, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Button, Form, Input, Table } from 'antd'
import type { ColumnType, TableRowSelection } from 'antd/lib/table/interface'
import useAsyncTable from '@/hooks/useAsyncTable'
import useState from '@/hooks/useState'
import { pageFoodAccessories } from '@/services/commodityService/mods/commodityBom/pageFoodAccessories'
import SearchFormLayout from '@/components/SearchFormLayout'

type TableItem = defs.commodityService.FoodAccessoriesListVO

type ShowOnOk = (p: TableItem[]) => void

type ModalType = 2 | 3

export interface IngredientListModalFoodAccessoriesInstance {
  /**
   * 显示弹窗
   */
  show: (p: { selected: number[]; onOk: ShowOnOk; type: ModalType }) => void
}

type LocalState = {
  visible: boolean
  type: ModalType
  selected: number[]
  selectedObj: TableItem[]
}

/** useAsyncTable 参数 */
const useAsyncTableParams = { fetchAction: pageFoodAccessories, manual: true, isCache: false }

const columns: ColumnType<TableItem>[] = [
  {
    title: '商品名称',
    dataIndex: 'commodityName',
  },
  {
    title: '商品规格',
    dataIndex: 'commoditySpecOptionName',
    render: (text: string[]) => {
      return text.join('/')
    },
  },
  {
    title: '商品单位',
    dataIndex: 'unitName',
  },
  {
    title: '商品分类',
    dataIndex: 'categoryName',
  },
]

/**
 * 添加食品、辅料对话框
 */
const IngredientListModalFoodAccessories = forwardRef<IngredientListModalFoodAccessoriesInstance>((_, ref) => {
  const { tableProps, form, submit } = useAsyncTable(useAsyncTableParams)
  const ShowOnOkRef = useRef<ShowOnOk>(null)
  const [state, setState] = useState<LocalState>({
    visible: false,
    type: 2,
    selected: [],
    selectedObj: [],
  })
  // const buildRowKey = (row: TableItem) => `${row.commodityId}_${row.unitId}_${row.commoditySpecOptionName.join('/')}`

  useImperativeHandle(ref, () => ({
    show: ({ onOk, type, selected }) => {
      ShowOnOkRef.current = onOk
      setState({
        visible: true,
        type,
        selected: [],
      })

      // 重置列表数据？
      form.resetFields()
      form.setFields([
        {
          name: 'commoditySkuId',
          value: selected,
        },
        {
          name: 'commodityTypeId',
          value: type,
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
    <Modal
      title={`添加${state.type === 2 ? '食品' : '辅料'}`}
      width={880}
      visible={state.visible}
      onCancel={onCancel}
      onOk={onOk}>
      <Form form={form} onFinish={submit}>
        <Form.Item hidden name="commodityTypeId">
          <Input type="hidden" />
        </Form.Item>

        <Form.Item hidden name="commoditySkuId">
          <Input />
        </Form.Item>

        <SearchFormLayout
          list={[
            <Form.Item label="商品名称" name="commodityName" key="商品名称">
              <Input placeholder="请输入查询" />
            </Form.Item>,
            <Form.Item label="商品规格" name="commoditySpecName" key="商品规格">
              <Input placeholder="请输入查询" />
            </Form.Item>,
            <Form.Item key="操作">
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>,
          ]}
        />
      </Form>

      <Table {...tableProps} columns={columns} rowKey="commoditySkuId" rowSelection={rowSelection} />
    </Modal>
  )
})

export default memo(IngredientListModalFoodAccessories)
