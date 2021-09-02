// 盘点查看详情页盘点情况
export enum OrderType {
  // 盘盈
  INVENTORY_SURPLUS = 1,
  // 盘亏
  DISH_DEFICIENT = 2,
  // 正常
  NORMAL = 3,
}

// 盘点情况
export const orderTypeName = {
  [OrderType.INVENTORY_SURPLUS]: '盘盈',
  [OrderType.DISH_DEFICIENT]: '盘亏',
  [OrderType.NORMAL]: '正常',
}

// 报表类型
export enum ReportFormTypeNode {
  OUT_ORDER_NODE = 'OUT_ORDER',
  SALE_NODE = 'SALE',
  RECORD_NODE = 'RECORD',
}
