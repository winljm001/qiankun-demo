export const fromRowProps = { gutter: { xs: 0, sm: 24 } }
export const fromColProps = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 24 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 4 },
}
export const initialValues = { commoditySpecs: [{ commoditySpecOptionList: [{}], commoditySpecSort: 1 }] }
export const getInitialSpecValue = (fields) => {
  return { commoditySpecSort: fields.length + 1, commoditySpecOptionList: [{}] }
}
