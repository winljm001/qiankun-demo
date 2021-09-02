import React, { FC } from 'react'
import { Table, TableColumnProps, Typography, Divider, Row, Col, Popover } from 'antd'
import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import BaseCard from '@/components/base-card'
import { useGetTakeStockRecordDetailQuery } from '@/graphql/operations/wholesale-management/__generated__/inventory-management'
import { OrderType, orderTypeName } from '../const'
const { Title } = Typography

interface IProps {}

/**
 * 库存管理盘点查看详情页
 */
const BusinessManagement: FC<IProps> = () => {
  // 取路由传过来的参数Id
  const route = useParams<any>()

  // 获取盘点查看详情页数据
  const { data, loading } = useGetTakeStockRecordDetailQuery({
    variables: {
      input: {
        checkId: route?.id,
      },
    },
  })

  // table表单头部标题
  const columns: TableColumnProps<any>[] = [
    {
      title: '批次号',
      dataIndex: 'batchCode',
    },
    {
      title: '商品',
      dataIndex: 'commoditySkuName',
    },
    {
      title: '系统库存数量',
      dataIndex: 'unitQuantity',
    },
    {
      title: '盘点库存数量',
      dataIndex: 'checkUnitQuantity',
    },
    {
      title: '盘点情况',
      dataIndex: 'orderType',
      render(_, record) {
        // 盘点库存 减去 系统库存数量取绝对值
        const num = Math.abs(record?.checkUnitQuantity - record?.unitQuantity)
        // 当盘点情况为正常时显示 空字符串
        return record.orderType === OrderType.NORMAL ? '' : `${orderTypeName[record.orderType]} ${formatNum(num)} 件`
      },
    },
    {
      title: '入库单号',
      dataIndex: 'stockOrderCode',
      render(_, record) {
        // 盘盈只显示入库单号，正常显示null
        return record.orderType === OrderType.INVENTORY_SURPLUS
          ? record.stockOrderCode
          : record.orderType === OrderType.NORMAL && null
      },
    },
    {
      title: '出库单号',
      dataIndex: 'stockOrderCode',
      render(_, record) {
        // 盘亏只显示出库单号，正常显示null
        return record.orderType === OrderType.DISH_DEFICIENT
          ? record.stockOrderCode
          : record.orderType === OrderType.NORMAL && null
      },
    },
    {
      title: '差异原因',
      dataIndex: 'remark',
      render(_, record) {
        const context = (
          <div>
            <p>{record?.remark}</p>
          </div>
        )
        return (
          <Popover content={context} trigger="hover">
            <p
              style={{
                width: 110 + 'px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {record?.remark}
            </p>
          </Popover>
        )
      },
    },
  ]

  // 盘点情况格式化数量函数，整数显示整数，有小数才显示小数
  const formatNum = (num: number) => {
    if (parseInt(num + '', 10) === parseFloat(num + '')) {
      return num
    } else {
      return num.toFixed(1)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <BaseCard>
        <Title level={5}>基础信息</Title>
        <Divider />
        <Row>
          <Col span={6}>盘点商户：{data?.getTakeStockRecordDetail?.orgName}</Col>
          <Col span={6} offset={4}>
            仓库名称：{data?.getTakeStockRecordDetail?.warehouseName}
          </Col>
          <Col span={4} offset={4}>
            盘点人：{data?.getTakeStockRecordDetail?.username}
          </Col>
        </Row>
        <div style={{ margin: 20 + 'px' }} />
        <Row>
          <Col span={6}>盘点日期：{dayjs(data?.getTakeStockRecordDetail?.checkDate).format('YYYY-MM-DD')}</Col>
          <Col span={6} offset={4}>
            提交时间：{dayjs(data?.getTakeStockRecordDetail?.createTime).format('YYYY-MM-DD HH:mm')}
          </Col>
        </Row>
      </BaseCard>
      <BaseCard>
        <Table
          rowKey="skuId"
          loading={loading}
          bordered
          dataSource={data?.getTakeStockRecordDetail?.records}
          columns={columns}
        />
      </BaseCard>
    </div>
  )
}

export default BusinessManagement
