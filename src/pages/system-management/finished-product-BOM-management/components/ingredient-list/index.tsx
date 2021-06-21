import React, { useState, useRef, useImperativeHandle, forwardRef, memo } from 'react'
import { Button, Table, Space, message } from 'antd'
import type { ColumnType } from 'antd/lib/table/interface'
import { useQuery } from 'react-query'
import BaseCard from '@/components/BaseCard'
import { isDef } from '@/utils/typeof'
import {
  listUnitOptions as fetchListUnitOptions,
  USE_LIST_UNIT_OPTIONS_KEY,
} from '@/services/commodityService/mods/commoditySku/listUnitOptions'

import type { IngredientListModalFruitInstance } from './modal-fruit'
import IngredientListModalFruit from './modal-fruit'
import IngredientListModalFoodAccessories from './modal-food-accessories'
import type { IngredientListModalFoodAccessoriesInstance } from './modal-food-accessories'
import Quantity from './quantity'
import CommodityUnit from './commodity-unit'
import type { CommodityUnitSelectItem } from './commodity-unit'

import './index.less'

type IngredientItem = defs.commodityService.CommodityBomDetailListVO

export interface IngredientListInstance {
  getValue: () => Promise<IngredientItem[]>
}

interface IngredientListProps {
  /**
   * 默认列表数据
   */
  defaultValue?: IngredientItem[]

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
  ({ edit = false, defaultValue = [], loading = false, extra }, ref) => {
    const IngredientListModalFruitRef = useRef<IngredientListModalFruitInstance>(null)
    const IngredientListModalFoodAccessoriesRef = useRef<IngredientListModalFoodAccessoriesInstance>(null)
    const [ingredientList, setIngredientList] = useState<IngredientItem[]>(defaultValue)
    const { data: dataListUnitOptions } = useQuery(
      [USE_LIST_UNIT_OPTIONS_KEY],
      () =>
        fetchListUnitOptions({
          commodityTypeId: 1,
        }).then((d) => d.data),
      {
        enabled: edit,
      },
    )
    const buildRowKey = (row: IngredientItem) => `${row.commodityId}_${row.commoditySkuId}`

    // 向外暴露方法
    useImperativeHandle(ref, () => ({
      getValue: () =>
        new Promise((resolve, reject) => {
          let errMsg: string

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
        dataIndex: 'commodityName',
      },
      {
        title: '商品数量',
        width: 280,
        render: (_, row, index) => {
          return (
            <Quantity
              edit={edit}
              value={row.quantity}
              onChange={(n) => {
                setIngredientList((il) => {
                  il[index].quantity = n
                  return [].concat(il)
                })
              }}
            />
          )
        },
      },
      {
        title: '商品单位',
        width: 160,
        render: (_, row, index) => {
          if (row.commodityCategoryId !== 1) {
            return row.quantityUnitName
          }
          return (
            <CommodityUnit
              options={dataListUnitOptions as CommodityUnitSelectItem[]}
              value={row.quantityUnit}
              onChange={(value, label) => {
                setIngredientList((il) => {
                  il[index].quantityUnit = value
                  il[index].quantityUnitName = label
                  return [].concat(il)
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
            render: () => {
              return <Button type="link">删除</Button>
            },
          }
        : null,
    ]

    const filterByCommodityTypeId = (typeId: 1 | 2 | 3) =>
      ingredientList.reduce((pre, cur) => {
        if (cur.commodityTypeId === typeId) {
          pre.push(cur.commodityId)
        }
        return pre
      }, [] as number[])

    const genOnClickAddBtn = (t: 2 | 3) => () => {
      IngredientListModalFoodAccessoriesRef.current.show({
        type: t,
        selected: filterByCommodityTypeId(t),
        onOk: (p) => {
          setIngredientList((il) =>
            il.concat(
              p.map<IngredientItem>((item) => ({
                commodityCategoryId: item.categoryId,
                commodityCategoryName: item.categoryName,
                commodityId: item.commodityId,
                commodityName: item.commodityName,
                commodityTypeId: item.commodityTypeId,
                quantityUnit: item.unitId,
                quantityUnitName: item.unitName,
                commoditySkuId: item.commoditySkuId,
                commoditySpecOptionName: item.commoditySpecOptionName,
              })),
            ),
          )
        },
      })
    }

    console.log(ingredientList)

    return (
      <>
        <BaseCard title="配料清单" extra={extra}>
          {edit ? (
            <Space className="finished-product-BOM-management-ingredient-list-btn-group">
              <Button
                type="primary"
                onClick={() => {
                  IngredientListModalFruitRef.current.show({
                    selected: filterByCommodityTypeId(1),
                    onOk: (p) => {
                      console.log(p)
                      setIngredientList((il) =>
                        il.concat(
                          p.map<IngredientItem>((item) => ({
                            commodityCategoryId: item.categoryId,
                            commodityCategoryName: item.categoryName,
                            commodityId: item.commodityId,
                            commodityName: item.commodityName,
                            commodityTypeId: item.commodityTypeId,
                            quantityUnit: item.unitId,
                            quantityUnitName: item.unitName,
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

          <Table rowKey={buildRowKey} columns={column.filter(Boolean)} dataSource={ingredientList} loading={loading} />
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
