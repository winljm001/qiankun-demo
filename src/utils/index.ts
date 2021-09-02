export const removeNull = (option: any) => {
  if (!option) {
    return
  }

  for (let attr in option) {
    if (option.hasOwnProperty(attr)) {
      if (option[attr] === null || option[attr] === '') {
        delete option[attr]
        continue
      }
      if (typeof option[attr] === 'object') {
        removeNull(option[attr])
      }
    }
  }
}
