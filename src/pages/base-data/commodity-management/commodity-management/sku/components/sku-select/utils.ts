import _ from 'lodash'
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
 * @param specData 后端获取的spec数据
 * @returns
 */
export const getAllSpecDescartes = (specData: ListSkuQueryCondition, selectedSpecOptions: number[][]) => {
  if (!selectedSpecOptions || !(specData?.length > 0)) {
    return []
  }

  // 所有的规格组合
  const specArr = calcDescartes(formatSpecToArr(specData))
  // 过滤掉已经选过的
  let resArr = specArr.filter((v) => {
    const ids = v?.map((v) => v.commoditySpecOptionId)
    const findRes = selectedSpecOptions.find((item) => {
      if (item.length === ids.length && _.intersection(item, ids).length === ids.length) {
        return true
      } else {
        return false
      }
    })
    // console.log(findRes);
    return findRes ? false : true
  })
  resArr = resArr.map((v) => {
    const resObj = {}
    v.forEach((item) => {
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
export const getColumns = (specData: ListSkuQueryCondition) => {
  return specData?.map((v) => {
    return {
      title: v?.commoditySpecName,
      dataIndex: v?.commoditySpecId,
    }
  })
}
