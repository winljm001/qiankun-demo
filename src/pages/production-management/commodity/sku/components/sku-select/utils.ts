import _ from 'lodash'
import { PitayaNotChosenSkuOptionQuery } from '@/graphql/operations/production-management/__generated__/commodity'
import { ListSkuQueryCondition } from '../../type'
const formatSpecToArr = (specData: ListSkuQueryCondition) => {
  return specData?.map((v) => {
    return v.commoditySpecOptionVOList?.map((item) => {
      return { ...item, commoditySpecId: v.commoditySpecId }
    })
  })
}

const calcDescartes = (array) => {
  if (array.length < 2) return array[0].map((v) => [v]) || []

  return array.reduce((total, currentValue) => {
    let res: any[] = []

    total.forEach((t) => {
      currentValue.forEach((cv: any) => {
        if (t instanceof Array)
          // 或者使用 Array.isArray(t)
          res.push([...t, cv])
        else res.push([t, cv])
      })
    })
    return res
  })
}
/**
 * 获取所有的spec笛卡尔积，并排除掉已经选中的
 * @param specData 后端获取的spec数据
 * @param selectedSpecOptions 后端获取的未添加的商品list
 * @returns
 */
export const getAllSpecDescartes = (
  specData: ListSkuQueryCondition,
  selectedSpecOptions: PitayaNotChosenSkuOptionQuery['pitayaNotChosenSkuOption'],
) => {
  if (!(selectedSpecOptions && specData?.length > 0)) {
    return []
  }
  // 所有的规格组合
  const specArr = calcDescartes(formatSpecToArr(specData))
  // 过滤掉已经选过的

  let resArr: any[] = []
  specArr.forEach((v) => {
    const ids = v?.map((v) => v.commoditySpecOptionId)
    const findRes = selectedSpecOptions.find((val) => {
      const { optionId: item } = val
      if (item.length === ids.length && _.intersection(item, ids).length === ids.length) {
        return true
      } else {
        return false
      }
    })
    if (findRes) {
      resArr.push({ ...findRes, optionList: v })
    }
  })

  resArr = resArr.map((v) => {
    const resObj = { ...v }
    v?.optionList?.forEach((item) => {
      if (!Array.isArray(resObj['commoditySpecOptionIdsList'])) {
        resObj['commoditySpecOptionIdsList'] = [item?.commoditySpecOptionId]
      } else {
        resObj['commoditySpecOptionIdsList'].push(item?.commoditySpecOptionId)
      }
      resObj[item?.commoditySpecId] = item?.commoditySpecOptionName
    })
    return resObj
  })
  return resArr
}
/**
 * 获取表头
 * @param specData
 * @returns
 */
export const getColumns = (specData: ListSkuQueryCondition, selectSpec: ListSkuQueryCondition) => {
  return specData
    ?.filter((v) => {
      return !!selectSpec?.find((item) => v?.commoditySpecId === item.commoditySpecId)
    })
    ?.map((v) => {
      return {
        title: v?.commoditySpecName,
        dataIndex: v?.commoditySpecId,
      }
    })
}
