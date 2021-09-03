import moment from 'moment'

/**
 * 获取开始、结束
 */
export const getStartEndMoment = (day = 7) => {
  const end = moment().hour(23).minute(59).second(59).millisecond(0)
  const start = end.clone().subtract(7, 'days').hour(0).minute(0).second(0).millisecond(0)

  return [start, end]
}
