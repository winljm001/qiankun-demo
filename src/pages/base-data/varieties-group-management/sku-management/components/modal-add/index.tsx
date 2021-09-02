import React, { useState, useCallback, useMemo, useEffect, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import type { ColumnType } from 'antd/lib/table/interface'
import { Modal, Form, Select, Checkbox, Row, Col, Spin, Button, Table, Skeleton, Input, message } from 'antd'
import useAsyncTable from '@/hooks/useAsyncTable'
import useTableRowSelection from '@/hooks/useTableRowSelection'

import {
  useTypeOptionQuery,
  useListSpuCategoryOptionLazyQuery,
} from '@/graphql/operations/base-data/__generated__/commodity-management'
import {
  useSelectVarietyAndPlaceByCategoryIdLazyQuery,
  useSpecsLazyQuery,
  useCreateVarietyGroupSkuMutation,
  PageGroupSkuDocument,
} from '@/graphql/operations/base-data/__generated__/varieties-group-management'

type ColumnTypeItem = {
  commoditySkuId: number
  [x: string]: string | number
}

type SKUCommoditySpecOptionListItem = {
  specId: number
  optionName: string
}

type SKUCommoditySpecOptionListItemFilter = {
  text: string
  value: number
}

export interface ModalAddInstance {
  show: (id: number, cb: () => void) => void
}

const requiredRule = [{ required: true }]

/**
 * 选择 SKU 弹窗
 * @description 表单分三部分，一、基础数据，二，根据基础数据拉取规格数据，三，基础数据+规格数据+规格的选项拉取分页数据
 * @description 规格的选项更新由表单筛选项支配，每次点击筛选(第二步)需重置规格的选项，每次基础数据更新，回到第一步，清空后续数据
 */
const ModalAdd = forwardRef<ModalAddInstance>((_, ref) => {
  const { loading: loadingTypeOption, data: dataTypeOption } = useTypeOptionQuery()
  const [fetchListSpuCategoryOption, { data: dataListSpuCategoryOption, loading: loadingListSpuCategoryOption }] =
    useListSpuCategoryOptionLazyQuery()
  const [fetchSpecs, { loading: loadingSpecs, data: dataSpecs }] = useSpecsLazyQuery()
  const [
    fetchSelectVarietyAndPlaceByCategoryId,
    { data: dataSelectVarietyAndPlaceByCategoryId, loading: loadingSelectVarietyAndPlaceByCategoryId },
  ] = useSelectVarietyAndPlaceByCategoryIdLazyQuery()
  const [fetchCreateVarietyGroupSku, { loading: loadingCreateVarietyGroupSku }] = useCreateVarietyGroupSkuMutation()
  const { tableProps, form, submit } = useAsyncTable({
    manual: true,
    gql: PageGroupSkuDocument,
    gqlKey: 'pageGroupSku',
    gqlParamKey: 'groupSkuInput',
    isCache: false,
  })

  const { rowSelection, setSelectedRowKeys } = useTableRowSelection<number>('commoditySkuId')
  const [state, setState] = useState({
    visible: false,
    step: 0,
    columns: [] as ColumnType<ColumnTypeItem>[],
    specIds: [] as number[],
  })

  const specsData = useMemo(() => {
    const checkboxOptions: { label: string; value: number }[] = []
    const filtersMap: Record<number, SKUCommoditySpecOptionListItemFilter[]> = {}

    ;(dataSpecs?.specs || []).forEach((item) => {
      checkboxOptions.push({
        value: item.specId,
        label: item.specName,
      })

      // eslint-disable-next-line max-nested-callbacks
      filtersMap[item.specId] = item.specOption.map((so) => ({
        text: so.optionName,
        value: so.optionId,
      }))
    })

    return { checkboxOptions, filtersMap }
  }, [dataSpecs?.specs])

  const dataSource = useMemo(() => {
    return tableProps.dataSource.map((item) => {
      const data: ColumnTypeItem = {
        commoditySkuId: item.commoditySkuId,
      }

      // eslint-disable-next-line max-nested-callbacks
      ;(item.skuCommoditySpecOptionList as SKUCommoditySpecOptionListItem[]).forEach((spec) => {
        data[`_${spec.specId}`] = spec.optionName
      })

      return data
    })
  }, [tableProps.dataSource])

  const GroupId = useRef<number>(0)
  const Callback = useRef(() => {})

  useImperativeHandle(ref, () => ({
    show: (id, cb) => {
      GroupId.current = id
      Callback.current = cb

      setState((s) => ({
        ...s,
        visible: true,
      }))
    },
  }))

  // 当规格类型变更，默认选中全部
  useEffect(() => {
    if (specsData.checkboxOptions.length) {
      const specIds = specsData.checkboxOptions.map((item) => item.value)

      setState((s) => ({
        ...s,
        specIds: specIds,
      }))

      form.setFieldsValue({
        specId: specIds,
      })
    }
  }, [form, specsData.checkboxOptions])

  const onCancel = useCallback(() => {
    setState((s) => ({
      ...s,
      step: 0,
      visible: false,
    }))

    // 重置表单
    form.resetFields(['typeId', 'categoryId', 'varietyId', 'origin'])
  }, [form])

  const onOk = () => {
    if (!rowSelection.selectedRowKeys.length) {
      message.error('请选择SKU')
      return
    }

    fetchCreateVarietyGroupSku({
      variables: {
        createVarietyGroupSkuInput: {
          group: GroupId.current,
          skuId: rowSelection.selectedRowKeys,
        },
      },
    }).then(() => {
      setState((s) => ({
        ...s,
      }))

      setSelectedRowKeys([])

      // 刷新列表
      Callback.current()

      // 回到第一页，刷新数据
      submit()

      message.success('已添加')
    })
  }

  /**
   * 第一个表单某个数据的值改变
   * @description 监听变化，加载关键数据
   */
  const onValuesChange = (changeValues: Record<string, any>) => {
    const keys = Object.keys(changeValues)

    if (keys.indexOf('typeId') !== -1) {
      form.resetFields(['categoryId', 'varietyId', 'origin'])

      fetchListSpuCategoryOption({
        variables: {
          commodityTypeId: changeValues.typeId,
        },
      })
    }

    if (keys.indexOf('categoryId') !== -1) {
      form.resetFields(['varietyId', 'origin'])

      fetchSelectVarietyAndPlaceByCategoryId({
        variables: {
          categoryId: changeValues.categoryId,
        },
      })
    }

    // 非规格、规格选项，触发回到第一步
    if (keys.indexOf('specId') === -1 && keys.indexOf('optionId') === -1) {
      setState((s) => ({
        ...s,
        step: 0,
      }))
    }
  }

  /**
   * 第一组筛选数据
   * @description 加载规格数据
   */
  const onClickNext = () => {
    form.validateFields().then((values) => {
      fetchSpecs({
        variables: {
          specsInput: {
            typeId: values.typeId,
            categoryId: values.categoryId,
            varietyId: values.varietyId,
            origin: values.origin,
          },
        },
      })

      setState((s) => ({
        ...s,
        step: 1,
      }))
    })
  }

  /**
   * 筛选表单搜索条件
   */
  const onClickFilter = () => {
    form.validateFields().then((values) => {
      const columns: ColumnType<ColumnTypeItem>[] = []

      specsData.checkboxOptions.forEach((item) => {
        if ((values.specId as number[]).indexOf(item.value) >= 0) {
          const filters = specsData.filtersMap[item.value]
          // 添加到栏
          columns.push({
            title: item.label,
            dataIndex: `_${item.value}`,
            filters,
            filteredValue: [],
            filterMultiple: false,
          })
        }
      })

      // 清空筛选
      form.setFieldsValue({
        optionId: [],
      })

      setState((s) => ({
        ...s,
        step: 2,
        columns,
      }))

      setSelectedRowKeys([])

      submit()
    })
  }

  const hasVarietyOptions = !!dataSelectVarietyAndPlaceByCategoryId?.selectVarietyByCategoryId.length
  const hasPlaceOptions = !!dataSelectVarietyAndPlaceByCategoryId?.selectPlaceByCategoryId.length

  return (
    <Modal
      title="添加SKU"
      width={800}
      visible={state.visible}
      onCancel={onCancel}
      onOk={onOk}
      maskClosable={false}
      confirmLoading={loadingCreateVarietyGroupSku}
      okButtonProps={{
        disabled: state.step !== 2 || rowSelection.selectedRowKeys.length === 0,
      }}>
      <Spin spinning={loadingTypeOption}>
        <Form form={form} onValuesChange={onValuesChange}>
          <Row>
            <Col span={11}>
              <Form.Item label="商品类型" name="typeId" rules={requiredRule}>
                <Select placeholder="请选择" options={dataTypeOption?.typeOption || []} />
              </Form.Item>
            </Col>

            <Col span={11} offset={2}>
              <Form.Item label="商品品类" name="categoryId" rules={requiredRule}>
                <Select
                  placeholder="请选择"
                  disabled={loadingListSpuCategoryOption}
                  options={dataListSpuCategoryOption?.listSpuCategoryOption || []}
                />
              </Form.Item>
            </Col>
          </Row>

          {hasVarietyOptions || hasPlaceOptions ? (
            <Row>
              {hasVarietyOptions ? (
                <Col span={11}>
                  <Form.Item label="商品品种" name="varietyId" rules={requiredRule}>
                    <Select
                      disabled={loadingSelectVarietyAndPlaceByCategoryId}
                      placeholder="请选择"
                      options={dataSelectVarietyAndPlaceByCategoryId?.selectVarietyByCategoryId}
                    />
                  </Form.Item>
                </Col>
              ) : null}

              {hasPlaceOptions ? (
                <Col span={11} offset={hasVarietyOptions ? 2 : 0}>
                  <Form.Item label="商品产地" name="origin" rules={requiredRule}>
                    <Select
                      disabled={loadingSelectVarietyAndPlaceByCategoryId}
                      placeholder="请选择"
                      options={dataSelectVarietyAndPlaceByCategoryId?.selectPlaceByCategoryId}
                    />
                  </Form.Item>
                </Col>
              ) : null}
            </Row>
          ) : null}

          <Row justify="space-between">
            {state.step === 0 ? (
              <>
                <Col span={20} />
                <Button
                  type="primary"
                  disabled={
                    !form.getFieldValue('typeId') ||
                    !form.getFieldValue('categoryId') ||
                    loadingSelectVarietyAndPlaceByCategoryId
                  }
                  onClick={onClickNext}>
                  下一步
                </Button>
              </>
            ) : (
              <>
                <Col span={20}>
                  <Form.Item label="规格类型" name="specId" rules={requiredRule}>
                    {loadingSpecs ? (
                      <Skeleton active loading={loadingSpecs} />
                    ) : (
                      <Checkbox.Group options={specsData.checkboxOptions} />
                    )}
                  </Form.Item>
                </Col>

                <Button
                  disabled={loadingSpecs || specsData.checkboxOptions.length === 0}
                  type="primary"
                  onClick={onClickFilter}>
                  筛选
                </Button>
              </>
            )}
          </Row>

          {state.step === 2 ? (
            <Form.Item hidden name="optionId">
              <Input />
            </Form.Item>
          ) : null}
        </Form>

        {state.step === 2 ? (
          <>
            <p>
              已选 <a>{rowSelection.selectedRowKeys.length}</a> 个SKU
            </p>

            <Table
              {...tableProps}
              dataSource={dataSource}
              onChange={(p, f, s) => {
                /** 筛选项 */
                const optionIds: number[] = []

                const columns = state.columns.map((item) => {
                  const filteredValue = (f[item.dataIndex as string] || []) as number[]
                  // 更新已选的筛选项
                  item.filteredValue = filteredValue

                  // 收集数据
                  optionIds.push(...filteredValue)

                  return item
                })

                setState((s) => ({ ...s, columns }))

                form.setFieldsValue({
                  optionId: optionIds,
                })

                tableProps.onChange(p, f, s)
              }}
              bordered
              loading={tableProps.loading}
              columns={state.columns}
              rowKey="commoditySkuId"
              rowSelection={rowSelection}
            />
          </>
        ) : null}
      </Spin>
    </Modal>
  )
})

export default memo(ModalAdd)
