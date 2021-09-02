// """ 出库类型"""
export enum OutBoundType {
  // """ 销售出库"""
  MARKET,
  // """ 盘亏出库"""
  PROFIT_LOSS,
  // """ 报损出库"""
  BREAKAGE,
  // """ 其他出库"""
  COME_OTHER,
}

// """ 客户类型"""
export enum CustomerType {
  // """个人"""
  PERSONAL,
  // """公司"""
  COMPANY,
  // """零售"""
  RETAIL,
}

export enum StockRecordType {
  // """ 未知"""
  UNRECOGNIZED = 'UNRECOGNIZED',
  // """ 入库"""
  IN = 'IN',
  // """ 出库"""
  OUT = 'OUT',
  // """ 所有类型"""
  ALL = 'ALL',
}
