const regexp = /({}|\[\]|\(\))/g
const isValid = s => {
  if (s.length === 0) {
    return true
  }
  if (s.length < 2) {
    return false
  }
  let unvaildatedStr = s
  let result = true
  while (unvaildatedStr.length > 0) {
    const newUnvalidatedStr = unvaildatedStr.replace(regexp, '')
    if (unvaildatedStr === newUnvalidatedStr) {
      result = false
      break
    } else {
      unvaildatedStr = newUnvalidatedStr
    }
  }
  return result
}

export default isValid
