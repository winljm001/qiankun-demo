import * as TypeofUtils from '@/utils/typeof'

/**
 * 格式化为正整数
 */
export const positiveInteger = (v: string | number) => {
  return v
    .toString()
    .replace(/[^\d.]/g, '')
    .split('.')[0]
}

/**
 * 保留整数后两位小数
 * @param v 需要转换的值
 * @param retain 强制保留两位小数
 */
export const positiveTwoDecimalPlaces = (v: string | number, retain = false) => {
  const vs = v
    .toString()
    .replace(/[^\d.]/g, '')
    .split('.')

  if (retain) {
    // 强制保留两位小数
    const value = vs.length === 1 ? vs[0] : `${vs[0]}.${vs[1]}`
    return (+value).toFixed(2)
  }

  if (vs.length === 1) {
    return vs[0]
  } else {
    if (vs[1]) {
      return (+`${vs[0]}.${vs[1]}`).toFixed(vs[1].length < 2 ? 1 : 2)
    }

    return `${vs[0]}.`
  }
}

/**
 * 格式化为 TextInput value 需要的字符串
 * @description 数据可能是一个 null，在数字初始化的时候可以用 null
 */
export const formatAsTextInputValue = (v: string | number) => `${TypeofUtils.isDef(v) ? v : ''}`

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char)

  if (index === -1) {
    return value
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

/**
 * 格式化数字
 * @param value 需要转换的值
 * @param allowDot 允许出现 .
 * @param allowMinus 允许出现符号
 */
export function formatNumber(value: string, allowDot = true, allowMinus = true) {
  let _value = value
  if (allowDot) {
    _value = trimExtraChar(_value, '.', /\./g)
  } else {
    _value = _value.split('.')[0]
  }

  if (allowMinus) {
    _value = trimExtraChar(_value, '-', /-/g)
  } else {
    _value = _value.replace(/-/, '')
  }

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g

  return _value.replace(regExp, '')
}
