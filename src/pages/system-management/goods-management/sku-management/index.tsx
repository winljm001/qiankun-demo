import React, { useCallback, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { Button, message, Modal, Table } from 'antd'
import { useToggle, useUpdateEffect } from 'ahooks'
import { useQuery, useMutation } from 'react-query'
import Space from '@/components/Space'
import ActionGroup from '@/components/ActionGroup'
import { getCommodity } from '@/services/commodityService/mods/commodity/getCommodity'
import { listSkuQueryCondition } from '@/services/commodityService/mods/commoditySku/listSkuQueryCondition'
import { listSkuListColumn } from '@/services/commodityService/mods/commoditySku/listSkuListColumn'
import { pageSku } from '@/services/commodityService/mods/commoditySku/pageSku'
import { doUpdateSkuStatus } from '@/services/commodityService/mods/commoditySku/doUpdateSkuStatus'
import StatusChanger from '@/components/StatusChanger'
import useAsyncTable from '@/hooks/useAsyncTable'
import { getSkuDetail } from '@/services/commodityService/mods/commoditySku/getSkuDetail'
import DataSuspense from '@/components/DataSuspense'
import { doSaveSkuList } from '@/services/commodityService/mods/commoditySku/doSaveSkuList'
import BaseCard from '@/components/BaseCard'
import { getColumns } from '../components/sku-select/utils'
import SkuSelect, { SkuSelectRefProps } from '../components/sku-select'
import EditModal from './components/edit'
// import styles from './index.module.less';
import Filter from './components/filter'
import BaseInfo from './components/base-info'

type SKUPageParams = {
  id: string
}

type EditMode = 'single' | 'batch'

const SkuManagement: React.FC = () => {
  const params = useParams() as SKUPageParams
  const id = Number(params.id)
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([])
  const [showEditModal, setShowEditModal] = useState(false)
  const editIds = useRef<number[]>([])
  const editInitialValues = useRef<defs.commodityService.SkuDetails>({})
  const editMode = useRef<EditMode>(null)
  const [visible, { toggle }] = useToggle()
  const loadData = useCallback(() => {
    return Promise.all([
      // 获取基本信息
      getCommodity({ id: id })
        .then((data) => data.data)
        .catch((err) => Promise.reject(err)),
      // 获取筛选条件数据
      listSkuQueryCondition({ commodityId: id })
        .then((data) => data.data)
        .catch((err) => Promise.reject(err)),
      // 获取表头数据
      listSkuListColumn({ commodityId: id })
        .then((data) => data.data)
        .catch((err) => Promise.reject(err)),
    ])
  }, [id])
  // 获取页面数据
  const { isLoading, isError, data } = useQuery(['skuBaseData', id], loadData)
  // 获取表格数据
  const { tableProps, form, submit, reset } = useAsyncTable({
    fetchAction: pageSku,
    extraParams: { commodityId: id },
  })
  /**
   * 编辑sku（支持批量和单个编辑）
   * @param ids 需要编辑的sku id
   * @param mode 模式 - single 单个，- batch 批量
   */
  const handleEdit = useCallback((ids: number[], mode: EditMode) => {
    editIds.current = ids
    editMode.current = mode
    // 单个sku编辑需获取详情
    if (mode === 'single') {
      getSkuDetail({ commoditySkuId: ids[0] })
        .then((resp) => {
          editInitialValues.current = resp.data
          setShowEditModal(true)
        })
        .catch(() => {})
    } else {
      // 批量编辑直接打开编辑弹窗
      setShowEditModal(true)
    }
  }, [])
  useUpdateEffect(() => {
    // 清空编辑相关数据
    if (!showEditModal) {
      editIds.current = []
      editInitialValues.current = {}
      editMode.current = null
    }
  }, [showEditModal])
  /**
   * 编辑成功事件
   */
  const onEditSuccess = useCallback(() => {
    const mode = editMode.current
    if (mode === 'batch') {
      setSelectedKeys([])
    }
    // 刷新列表
    submit()
  }, [])

  /**
   * 修改状态（支持批量和单个修改）
   * @param ids 需要修改状态的id
   * @param status 需要修改的目标状态（1激活，0禁用）
   * @param mode 模式 - single 单个，- batch 批量
   */
  const handleStatusChange = useCallback((ids: number[], status: number, mode: EditMode) => {
    doUpdateSkuStatus({
      commoditySkuIds: ids,
      status,
    })
      .then(() => {
        const msg = `${mode === 'batch' ? '批量' : ''}${status ? '启用' : '禁用'}成功`
        message.success(msg)
        // 批量操作需清空选中的项
        if (mode === 'batch') {
          setSelectedKeys([])
        }
        submit()
      })
      .catch(() => {})
  }, [])
  const skuSelectFormRef = useRef<SkuSelectRefProps>()
  //  保存选中的sku
  const modifySaveSkuList = useMutation(doSaveSkuList, {
    onSuccess: () => {
      toggle()
      // 刷新列表
      submit()
    },
  })
  return (
    <DataSuspense loading={isLoading} error={isError}>
      {() => {
        const [baseData, selectData, columnData] = data
        // 表格列
        const columns = [
          ...columnData.skuListColumnCommoditySpecVOList.map((item) => ({
            title: item.commoditySpecName,
            dataIndex: item.commoditySpecId,
            key: item.commoditySpecId,
            render(text, record) {
              return record.skuCommoditySpecOptionMap?.[item.commoditySpecId]
            },
          })),
          ...columnData.skuListColumnCommoditySkuUnitVOList.map((item) => ({
            title: item.title,
            dataIndex: item.key,
            key: item.key,
          })),
          {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render(_, record: defs.commodityService.SkuList) {
              return (
                <StatusChanger
                  onConfirm={() => {
                    // change为0时表示需要完善信息，不能启用
                    if (record.change === 0 && record.status === 0) {
                      return message.warning('sku信息未完善，不允许启用')
                    }
                    handleStatusChange([record.commoditySkuId], 1 ^ record.status, 'single')
                  }}
                  checked={!!record.status}
                />
              )
            },
          },
          {
            title: '操作',
            dataIndex: '_',
            render: (_, record: defs.commodityService.SkuList) => {
              return (
                <ActionGroup
                  actions={[
                    {
                      children: '编辑sku',
                      onClick: () => {
                        handleEdit([record.commoditySkuId], 'single')
                      },
                    },
                  ]}
                />
              )
            },
          },
        ]
        // 添加sku
        const handleAddSku = () => {
          const commoditySpecOptionIdsList = skuSelectFormRef.current.getSelected()
          const col = getColumns(baseData?.commoditySpecs)
          modifySaveSkuList.mutate({
            commodityId: id,
            commoditySpecId: col?.map((v) => v.dataIndex),
            commoditySpecOptionIdsList: commoditySpecOptionIdsList,
          })
        }
        return (
          <div>
            <BaseCard>
              {/* 基本信息 */}
              <BaseInfo data={baseData} />
              {/* 筛选 */}
              {selectData.length > 0 && (
                <Filter
                  form={form}
                  submit={() => {
                    submit()
                    setSelectedKeys([])
                  }}
                  reset={reset}
                  items={selectData}
                />
              )}
              {/* 按钮 */}
              <Space size={16}>
                <Button
                  type="primary"
                  ghost
                  onClick={() => {
                    toggle()
                  }}>
                  添加sku
                </Button>
                <Button
                  disabled={selectedKeys.length === 0}
                  onClick={() => {
                    handleEdit(
                      selectedKeys.map((key) => Number(key)),
                      'batch',
                    )
                  }}>
                  批量编辑sku
                </Button>
                <Button
                  disabled={selectedKeys.length === 0}
                  onClick={() => {
                    handleStatusChange(
                      selectedKeys.map((key) => Number(key)),
                      1,
                      'batch',
                    )
                  }}>
                  批量启用
                </Button>
                <Button
                  disabled={selectedKeys.length === 0}
                  onClick={() => {
                    handleStatusChange(
                      selectedKeys.map((key) => Number(key)),
                      0,
                      'batch',
                    )
                  }}>
                  批量禁用
                </Button>
              </Space>
            </BaseCard>
            <BaseCard>
              {/* 表格 */}
              <Table<defs.commodityService.SkuList>
                {...tableProps}
                bordered
                columns={columns}
                rowKey="commoditySkuId"
                rowSelection={{
                  selectedRowKeys: selectedKeys,
                  onChange: setSelectedKeys,
                }}
              />
            </BaseCard>
            {/* 编辑弹窗 */}
            <EditModal
              visible={showEditModal}
              commodityTypeId={baseData.commodityTypeId}
              setVisible={setShowEditModal}
              ids={editIds.current}
              onSuccess={onEditSuccess}
              initialValues={editInitialValues.current}
            />
            <Modal
              width="750px"
              destroyOnClose={true}
              title="选择SKU"
              okText="保存"
              cancelText="取消"
              visible={visible}
              onCancel={() => {
                toggle()
              }}
              onOk={handleAddSku}>
              <SkuSelect ref={skuSelectFormRef} id={id} specData={baseData?.commoditySpecs} />
            </Modal>
          </div>
        )
      }}
    </DataSuspense>
  )
}

export default SkuManagement
