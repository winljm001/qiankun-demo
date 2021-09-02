import { Popover, TableColumnProps } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import styles from './style.module.less'

// 出库列表columns
export const outOrderColumns: TableColumnProps<any>[] = [
  {
    title: '出库单号',
    dataIndex: 'outboundCode',
  },
  {
    title: '批次号',
    dataIndex: 'batchStockCode',
  },
  {
    title: '所属商户',
    dataIndex: 'merchant',
  },
  {
    title: '所属仓库',
    dataIndex: 'repository',
  },
  {
    title: '商品',
    dataIndex: 'productName',
  },
  {
    title: '出库类型',
    dataIndex: 'outboundType',
  },
  {
    title: '数量',
    render(_, record) {
      return record.quantity + ' 件'
    },
  },
  {
    title: '出库时间',
    dataIndex: 'outboundTime',
    render(_, record) {
      return dayjs(record.outboundTime).format('YYYY-MM-DD HH:mm')
    },
  },
]

// 销售列表columns
export const saleColumns: TableColumnProps<any>[] = [
  {
    title: '所属商户',
    dataIndex: 'merchant',
  },
  {
    title: '付款类型',
    dataIndex: 'payMethod',
    render(_, record) {
      return record.payMethod.join(' ')
    },
  },
  {
    title: '销售订单号',
    dataIndex: 'orderCode',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
  },
  {
    title: '销售日期',
    dataIndex: 'payTime',
    render(_, record) {
      return dayjs(record.payTime).format('YYYY-MM-DD HH:mm')
    },
  },
  {
    title: '客户类型',
    dataIndex: 'customerType',
  },
  {
    title: 'SKU名称',
    dataIndex: 'productName',
  },
  {
    title: '批次号',
    dataIndex: 'batchStockCode',
  },
  {
    title: '单位',
    dataIndex: 'unit',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
  },
  {
    title: '单价',
    dataIndex: 'unitPrice',
  },
  {
    title: '金额合计',
    dataIndex: 'totalMoney',
  },
  {
    title: '结余数量',
    dataIndex: 'numberOfBalances',
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '品种组',
    dataIndex: 'varietyGroup',
  },
]

// 订单列表columns
export const recordColumns: TableColumnProps<any>[] = [
  {
    title: '订单号',
    dataIndex: 'orderCode',
  },
  {
    title: '商品及数量',
    dataIndex: 'productAndCount',
    render(_, record) {
      const textArr = record?.productAndCount?.map((item) => {
        return `${item.productName} ${item.quantity}${item.unit}`
      })
      const context = (
        <div>
          {record?.productAndCount?.map((item, index) => {
            return <p key={index}>{`${item.productName} ${item.quantity}${item.unit}`}</p>
          })}
        </div>
      )
      return (
        <Popover content={context} trigger="hover">
          <p className={styles.render}>{textArr}</p>
        </Popover>
      )
    },
  },
  {
    title: '所属商户',
    dataIndex: 'merchant',
  },
  {
    title: '数量',
    dataIndex: 'totalQuantity',
  },
  {
    title: '客户类型',
    dataIndex: 'customerType',
  },
  {
    title: '客户名称',
    dataIndex: 'customerName',
  },
  {
    title: '销售员',
    dataIndex: 'salesmanName',
  },
  {
    title: '收银员',
    dataIndex: 'cashierName',
  },
  {
    title: '应收金额',
    dataIndex: 'totalMoney',
  },
  {
    title: '实收金额',
    dataIndex: 'receivableMoney',
  },
  {
    title: '优惠',
    dataIndex: 'discountMoney',
  },
  {
    title: '现金支付金额',
    dataIndex: 'cashMoney',
  },
  {
    title: '二维码金额',
    dataIndex: 'elecpayMoney',
  },
  {
    title: '欠款支付金额',
    dataIndex: 'arrearsMoney',
  },
  {
    title: '付款类型',
    dataIndex: 'payMethod',
    render(_, record) {
      return record.payMethod.join('、')
    },
  },
  {
    title: '开单时间',
    dataIndex: 'billingTime',
    render(_, record) {
      return dayjs(record.billingTime).format('YYYY-MM-DD HH:mm')
    },
  },
  {
    title: '支付时间',
    dataIndex: 'payTime',
    render(_, record) {
      return dayjs(record.payTime).format('YYYY-MM-DD HH:mm')
    },
  },
]
