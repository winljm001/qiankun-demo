import React, { useCallback, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Button, Form, Input, Table } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import useAsyncTable from '@/hooks/useAsyncTable'
import useState from '@/hooks/useState'
import { pageFruit } from '@/services/commodityService/mods/commodityBom/pageFruit'
import SearchFormLayout from '@/components/SearchFormLayout'

type TableItem = defs.commodityService.FruitListVO

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

/** useAsyncTable 参数 */
const useAsyncTableParams = { fetchAction: pageFruit, manual: true, isCache: false }

const columns: ColumnType<TableItem>[] = [
  {
    title: '商品名称',
    dataIndex: 'commodityName',
  },
  {
    title: '商品单位',
    dataIndex: 'unitName',
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
  const { tableProps, form, submit, reset } = useAsyncTable(useAsyncTableParams)
  const ShowOnOkRef = useRef<ShowOnOk>(null)
  const [state, setState] = useState<LocalState>({
    visible: false,
    selected: [],
    selectedObj: [],
  })

  useImperativeHandle(ref, () => ({
    show: ({ onOk }) => {
      // 重置列表数据？
      reset()

      ShowOnOkRef.current = onOk
      setState({
        visible: true,
        selected: [],
      })
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

  const rowSelection = {
    selectedRowKeys: state.selected,
    onChange: (selectedRowKeys: React.Key[], selectedRows: TableItem[]) => {
      setState({
        selected: selectedRowKeys as number[],
        selectedObj: selectedRows,
      })
    },
  }

  return (
    <Modal title="添加水果" width={880} visible={state.visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form} onFinish={submit}>
        <SearchFormLayout
          list={[
            <Form.Item label="商品名称" name="commodityName" key="商品名称">
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

      <Table {...tableProps} columns={columns} rowKey="commodityId" rowSelection={rowSelection} />
    </Modal>
  )
})

export default memo(IngredientListModalFruit)
