export const validateForm = errors => {
  let valid = true
  Object.values(errors).forEach(val => {
    val.length > 0 && (valid = false)
  })
  return valid
}

export const nullCheck = (t, fields) =>
  Object.entries(fields).reduce((acc, [key, value]) => {
    const capitalizedKey = key.slice(0, 1).toUpperCase() + key.slice(1)
    return !value ? { ...acc, [key]: t(`${capitalizedKey} is required`) } : acc
  }, {})
