export const initialValues = { commoditySpecs: [{ commoditySpecOptions: [{}], commoditySpecSort: 1 }] }
export const getInitialSpecValue = (fields) => {
  return { commoditySpecSort: fields.length + 1, commoditySpecOptions: [{}] }
}
