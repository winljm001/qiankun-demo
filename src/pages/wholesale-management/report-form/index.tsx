import { Menu, Table } from 'antd'
import dayjs from 'dayjs'
import React, { FC, useState } from 'react'
import BaseCard from '@/components/base-card'
import useAsyncTable from '@/hooks/useAsyncTable'
import {
  PageOrderReportFormDocument,
  PageOutBoundReportFormDocument,
  PageSalesReportFormDocument,
} from '@/graphql/operations/wholesale-management/__generated__/report-form'
import { ReportFormTypeNode } from '../inventory-management/const'
import RecordFilter from './components/record-filter'
import OutOrderFilter from './components/out-order-filter'
import SaleFilter from './components/sale-filter'
import styles from './style.module.less'
import { outOrderColumns, recordColumns, saleColumns } from './columns'

interface IProps {}
// 报表类型
export type ReportFormType = 'OUT_ORDER' | 'SALE' | 'RECORD'
// 报表映射类型
const reportFormType = {
  outOrder: 'OUT_ORDER',
  sale: 'SALE',
  record: 'RECORD',
}

/**
 * 报表列表页
 */
const OutOrderReportForm: FC<IProps> = () => {
  const [current, setCurrent] = useState('outOrder')
  const [reportForm, setReportForm] = useState<ReportFormType>('OUT_ORDER')

  // 获取出库列表接口数据
  const outOrderTableQuery = useAsyncTable({
    formatParams: (values) => {
      let temp = JSON.parse(JSON.stringify(values))
      // 判断时间戳默认时取null
      const outBoundStartTime = +dayjs(temp?.outOrderTime?.[0] || null)
      const outBoundEndTime = +dayjs(temp?.outOrderTime?.[1] || null)
      let newValues = { ...temp, outBoundStartTime, outBoundEndTime }
      const { merchantId, outBoundType, batchCode, outBoundNum, product, page } = newValues

      return {
        input: {
          outBoundReportFormQueryInput: {
            merchantId: Number(merchantId),
            outBoundNum,
            batchCode,
            product,
            outBoundType,
            outBoundStartTime,
            outBoundEndTime,
          },
          pageInput: {
            pageCurrent: page.pageCurrent || 1,
            pageSize: page.pageSize || 10,
          },
        },
      }
    },
    isCache: false,
    gql: PageOutBoundReportFormDocument,
    gqlKey: 'pageOutBoundReportForm',
  })

  // 获取销售列表接口数据
  const saleTableQuery = useAsyncTable({
    formatParams: (values) => {
      let temp = JSON.parse(JSON.stringify(values))
      // 判断时间戳默认时取null
      const payStartTime = +dayjs(temp?.saleTime?.[0] || null)
      const payEndTime = +dayjs(temp?.saleTime?.[1] || null)
      let newValues = { ...temp, payStartTime, payEndTime }
      const { payMethod, orderCode, batchStockCode, merchantId, customerType, customerName, page } = newValues
      return {
        input: {
          salesReportFormQueryInput: {
            payMethod,
            orderCode,
            batchStockCode,
            customerType,
            customerName,
            payStartTime,
            payEndTime,
            merchantId,
          },
          pageInput: {
            pageCurrent: page.pageCurrent || 1,
            pageSize: page.pageSize || 10,
          },
        },
      }
    },
    isCache: false,
    gql: PageSalesReportFormDocument,
    gqlKey: 'pageSalesReportForm',
  })

  // 获取订单列表接口数据
  const orderTableQuery = useAsyncTable({
    formatParams: (values) => {
      let temp = JSON.parse(JSON.stringify(values))
      // 判断时间戳默认时取null
      const payStartTime = +dayjs(temp?.payTime?.[0] || null)
      const payEndTime = +dayjs(temp?.payTime?.[1] || null)
      let newValues = { ...temp, payStartTime, payEndTime }
      const { merchantId, orderCode, customerType, customerName, salesmanName, cashierName, payMethod, page } =
        newValues

      return {
        input: {
          orderReportFormQueryInput: {
            merchantId: Number(merchantId),
            orderCode,
            customerType,
            customerName,
            salesmanName,
            cashierName,
            payMethod,
            payStartTime,
            payEndTime,
          },
          pageInput: {
            pageCurrent: page.pageCurrent || 1,
            pageSize: page.pageSize || 10,
          },
        },
      }
    },
    isCache: false,
    gql: PageOrderReportFormDocument,
    gqlKey: 'pageOrderReportForm',
  })

  // 报表头部映射类型
  const reportFormTypeElement = {
    [ReportFormTypeNode.OUT_ORDER_NODE]: (
      <OutOrderFilter
        submit={outOrderTableQuery.submit}
        reset={outOrderTableQuery.reset}
        form={outOrderTableQuery.form}
      />
    ),
    [ReportFormTypeNode.SALE_NODE]: (
      <SaleFilter submit={saleTableQuery.submit} reset={saleTableQuery.reset} form={saleTableQuery.form} />
    ),
    [ReportFormTypeNode.RECORD_NODE]: (
      <RecordFilter submit={orderTableQuery.submit} reset={orderTableQuery.reset} form={orderTableQuery.form} />
    ),
  }

  // 报表列表的 columns 映射类型
  const reportFormTypeTable = {
    [ReportFormTypeNode.OUT_ORDER_NODE]: outOrderColumns,
    [ReportFormTypeNode.SALE_NODE]: saleColumns,
    [ReportFormTypeNode.RECORD_NODE]: recordColumns,
  }

  // 报表列表的 tableProps 映射类型
  const reportFormTypeTableProps = {
    [ReportFormTypeNode.OUT_ORDER_NODE]: outOrderTableQuery.tableProps,
    [ReportFormTypeNode.SALE_NODE]: saleTableQuery.tableProps,
    [ReportFormTypeNode.RECORD_NODE]: orderTableQuery.tableProps,
  }

  // Table组件scroll.x 映射类型值
  const scrollX = {
    [ReportFormTypeNode.OUT_ORDER_NODE]: 1500,
    [ReportFormTypeNode.SALE_NODE]: 2500,
    [ReportFormTypeNode.RECORD_NODE]: 2000,
  }

  // 菜单栏item点击事件
  const handleClick = (e) => {
    if (e.key + '' === 'outOrder') {
      outOrderTableQuery.refresh()
    } else if (e.key + '' === 'sale') {
      saleTableQuery.refresh()
    } else {
      orderTableQuery.refresh()
    }
    setCurrent(e.key)
    setReportForm(reportFormType[e.key])
  }

  return (
    <div style={{ padding: '20px' }}>
      <BaseCard>
        <Menu mode="horizontal" selectedKeys={[current]} className={styles.menuBox} onClick={handleClick}>
          <Menu.Item key="outOrder" className={styles.item}>
            出库报表
          </Menu.Item>
          <Menu.Item key="sale" className={styles.item}>
            销售报表
          </Menu.Item>
          <Menu.Item key="record" className={styles.item}>
            订单报表
          </Menu.Item>
        </Menu>
        {/* 点击对应导航栏映射对应Filter组件 */}
        {reportFormTypeElement[reportForm]}
      </BaseCard>
      <BaseCard>
        {/* 点击item对应对不同 tableProps */}
        <Table
          scroll={{ x: scrollX[reportForm] }}
          {...reportFormTypeTableProps[reportForm]}
          bordered
          columns={reportFormTypeTable[reportForm]}
          rowKey="id"
        />
      </BaseCard>
    </div>
  )
}

export default OutOrderReportForm
