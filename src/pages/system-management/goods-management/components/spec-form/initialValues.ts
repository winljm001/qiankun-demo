export const initialValues = { commoditySpec: [{ option: [{}], sort: 1 }] };
export const getInitialSpecValue = (fields) => {
  return { sort: fields.length + 1, option: [{}] };
};
