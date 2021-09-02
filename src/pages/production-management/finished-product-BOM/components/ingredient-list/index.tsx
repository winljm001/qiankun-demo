import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef, memo } from 'react'
import { Button, Table, Space, Popconfirm, InputNumber, Select, message } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import BaseCard from '@/components/base-card'
import { isDef } from '@/utils/typeof'
import { positiveTwoDecimalPlaces } from '@/utils/number'
// import type { PitayaListBurdenQuery } from '@/graphql/operations/production-management/__generated__/finished-product-BOM'
import { useListUnitOptionsQuery } from '@/graphql/operations/production-management/__generated__/commodity'
import type { IngredientItem } from '@/pages/production-management/finished-product-BOM/interface'

import type { IngredientListModalFruitInstance } from './modal-fruit'
import IngredientListModalFruit from './modal-fruit'
import type { IngredientListModalFoodAccessoriesInstance } from './modal-food-accessories'
import IngredientListModalFoodAccessories from './modal-food-accessories'

import './index.less'

type CommodityUnitSelectItem = { label: string; value: number }

export interface IngredientListInstance {
  getValue: () => Promise<IngredientItem[]>
}

interface IngredientListProps {
  /**
   * 默认列表数据
   */
  defaultValue?: IngredientItem[]

  /**
   * 变动的数据，受控模式
   */
  value?: IngredientItem[]

  /**
   * 是否是编辑模式
   * @default false
   */
  edit?: boolean

  /**
   * 是否在请求数据中
   * @default false
   */
  loading?: boolean

  extra?: React.ReactNode
}

const ProductTypesMap: Record<number, string> = {
  1: '水果',
  2: '食品',
  3: '辅料',
}

/**
 * 配料清单
 */
const IngredientList = forwardRef<IngredientListInstance, IngredientListProps>(
  ({ edit = false, defaultValue = [], value, loading = false, extra }, ref) => {
    const IngredientListModalFruitRef = useRef<IngredientListModalFruitInstance>(null)
    const IngredientListModalFoodAccessoriesRef = useRef<IngredientListModalFoodAccessoriesInstance>(null)
    const [ingredientList, setIngredientList] = useState<IngredientItem[]>(defaultValue)
    const { data: dataListUnitOptions } = useListUnitOptionsQuery({
      variables: {
        commodityTypeId: 5,
      },
    })
    const buildRowKey = (row: IngredientItem) => `${row.commodityId}_${row.commoditySkuId}`

    // 向外暴露方法
    useImperativeHandle(ref, () => ({
      getValue: () =>
        new Promise((resolve, reject) => {
          let errMsg = ''

          ingredientList.some((item) => {
            if (!isDef(item.quantity) || +item.quantity <= 0) {
              errMsg = `${item.commodityCategoryName}/${item.commodityName}的数量有误`
              return true
            }
            return false
          })

          if (!errMsg && ingredientList.length === 0) {
            errMsg = '请选择配料'
          }

          if (errMsg) {
            message.error(errMsg)
            reject(new Error(errMsg))
          } else {
            resolve(ingredientList)
          }
        }),
    }))

    // 和外界的数据同步
    useEffect(() => {
      if (isDef(value)) {
        setIngredientList(value)
      }
    }, [value])

    const column: ColumnType<IngredientItem>[] = [
      {
        title: '商品类型',
        dataIndex: 'commodityTypeId',
        render: (text) => ProductTypesMap[text],
      },
      {
        title: '商品分类',
        dataIndex: 'commodityCategoryName',
      },
      {
        title: '商品名称',
        dataIndex: 'commodityName',
      },
      {
        title: '商品规格',
        dataIndex: 'commoditySpecOptionName',
        render: (text: string[]) => text?.join('/'),
      },
      {
        title: '商品数量',
        width: 280,
        render: (_, row, index) => {
          if (edit) {
            return (
              <InputNumber
                className="finished-product-BOM-management-ingredient-list-input-number"
                min={0.01}
                step="0.01"
                placeholder="请输入(最多两位小数)"
                value={row.quantity}
                formatter={positiveTwoDecimalPlaces}
                onChange={(n) => {
                  setIngredientList((il) => {
                    return il.map((i, _index) => {
                      return {
                        ...i,
                        quantity: _index === index ? n : i.quantity,
                      }
                    })
                  })
                }}
              />
            )
          }
          return row.quantity
        },
      },
      {
        title: '商品单位',
        width: 160,
        render: (_, row, index) => {
          if (!edit || (isDef(row.commoditySkuId) && row.commoditySkuId !== 0)) {
            return row.quantityUnitName
          }

          return (
            <Select
              value={row.quantityUnit}
              options={(dataListUnitOptions?.listUnitOptions || []) as CommodityUnitSelectItem[]}
              onChange={(_, item) => {
                const { value, label } = item as CommodityUnitSelectItem
                setIngredientList((il) => {
                  return il.map((i, _index) => {
                    return {
                      ...i,
                      quantityUnit: _index === index ? value : i.quantityUnit,
                      quantityUnitName: _index === index ? label : i.quantityUnitName,
                    }
                  })
                })
              }}
            />
          )
        },
      },
      edit
        ? {
            title: '操作',
            dataIndex: 'action',
            render: (_, row) => {
              return (
                <Popconfirm
                  title="确定要删除？"
                  onConfirm={() => {
                    setIngredientList((il) => {
                      return il.filter((item) => buildRowKey(item) !== buildRowKey(row))
                    })
                  }}>
                  <Button type="link">删除</Button>
                </Popconfirm>
              )
            },
          }
        : {},
    ]

    const filterByCommodityTypeId = (typeId: 1 | 2 | 3) =>
      ingredientList.reduce((pre, cur) => {
        if (cur.commodityTypeId === typeId) {
          pre.push(cur.commodityId)
        }
        return pre
      }, [] as number[])
    const filterByCommoditySkuId = (typeId: 2 | 3) =>
      ingredientList.reduce((pre, cur) => {
        if (cur.commodityTypeId === typeId) {
          pre.push(cur.commoditySkuId as number)
        }
        return pre
      }, [] as number[])

    const genOnClickAddBtn = (t: 2 | 3) => () => {
      IngredientListModalFoodAccessoriesRef.current?.show({
        type: t,
        selected: filterByCommoditySkuId(t),
        onOk: (p) => {
          setIngredientList((il) =>
            il.concat(
              p.map<IngredientItem>((item) => ({
                commodityTypeId: item.commodityTypeId,
                commodityTypeName: item.commodityTypeName,
                commodityCategoryId: item.categoryId,
                commodityCategoryName: item.categoryName,
                commodityId: item.commodityId,
                commodityName: item.commodityName,
                commoditySkuId: item.commoditySkuId,
                commoditySpecOptionName: item.commoditySpecOptionName,
                quantity: '',
                quantityUnit: item.unitId,
                quantityUnitName: item.unitName,
              })),
            ),
          )
        },
      })
    }

    return (
      <>
        <BaseCard title="配料清单" extra={extra}>
          {edit ? (
            <Space className="finished-product-BOM-management-ingredient-list-btn-group">
              <Button
                type="primary"
                onClick={() => {
                  IngredientListModalFruitRef.current?.show({
                    selected: filterByCommodityTypeId(1),
                    onOk: (p) => {
                      setIngredientList((il) =>
                        il.concat(
                          p.map<IngredientItem>((item) => ({
                            commodityTypeId: item.commodityTypeId,
                            commodityTypeName: item.commodityTypeName,
                            commodityCategoryId: item.categoryId,
                            commodityCategoryName: item.categoryName,
                            commodityId: item.commodityId,
                            commodityName: item.commodityName,
                            quantity: '',
                            // 单位暂时写死
                            quantityUnit: 8,
                            quantityUnitName: 'kg',
                          })),
                        ),
                      )
                    },
                  })
                }}>
                添加水果
              </Button>
              <Button type="primary" onClick={genOnClickAddBtn(2)}>
                添加食品
              </Button>
              <Button type="primary" onClick={genOnClickAddBtn(3)}>
                添加辅料
              </Button>
            </Space>
          ) : null}

          <Table
            bordered
            pagination={false}
            rowKey={buildRowKey}
            columns={column.filter((item) => item.title)}
            dataSource={ingredientList}
            loading={loading}
          />
        </BaseCard>

        {edit ? (
          <>
            <IngredientListModalFruit ref={IngredientListModalFruitRef} />

            <IngredientListModalFoodAccessories ref={IngredientListModalFoodAccessoriesRef} />
          </>
        ) : null}
      </>
    )
  },
)

export default memo(IngredientList)
