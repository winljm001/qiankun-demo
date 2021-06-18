import React, { useCallback, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Modal, Button, Form, Input, Table, message } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import useAsyncTable from '@/hooks/useAsyncTable'
import useState from '@/hooks/useState'
import { pageFinishedProduct } from '@/services/commodityService/mods/commodity/pageFinishedProduct'
import SearchFormLayout from '@/components/SearchFormLayout'

type TableItem = defs.commodityService.FinishedGoodsReturnedList

type ShowOnOk = (p: TableItem) => void

export interface ModalFinishedProductInstance {
  /**
   * 显示弹窗
   */
  show: (p: ShowOnOk) => void
}

type LocalState = {
  visible: boolean
  selected: number[]
  selectedObj: TableItem[]
}

/** useAsyncTable 参数 */
const useAsyncTableParams = { fetchAction: pageFinishedProduct }

const columns: ColumnType<TableItem>[] = [
  {
    title: '商品名称',
    dataIndex: 'commodityName',
  },
  {
    title: '商品规格',
    dataIndex: 'specText',
  },
  {
    title: '商品分类',
    dataIndex: 'categoryText',
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
  const { tableProps, form, submit } = useAsyncTable(useAsyncTableParams)
  const ShowOnOkRef = useRef<ShowOnOk>(null)
  const [state, setState] = useState<LocalState>({
    visible: false,
    selected: [],
    selectedObj: [],
  })

  // 向外暴露方法
  useImperativeHandle(ref, () => ({
    show: (onOk) => {
      // 重置列表数据？
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
    if (state.selected.length === 0) {
      message.error('请选择成品')
      return
    }

    ShowOnOkRef.current?.(state.selectedObj[0])
    setState({ visible: false })
  }

  const rowSelection = {
    type: 'radio',
    selectedRowKeys: state.selected,
    onChange: (selectedRowKeys: React.Key[], selectedRows: TableItem[]) => {
      setState({
        selected: selectedRowKeys as number[],
        selectedObj: selectedRows,
      })
    },
  }

  return (
    <Modal title="选择成品" width={880} visible={state.visible} onCancel={onCancel} onOk={onOk}>
      <Form form={form} onFinish={submit}>
        <SearchFormLayout
          list={[
            <Form.Item label="商品名称" name="commodityName" key="商品名称">
              <Input placeholder="请输入查询" />
            </Form.Item>,
            <Form.Item label="商品规格" name="commodityName2" key="商品规格">
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

export default memo(ModalFinishedProduct)
