const addBinary = (a, b) => {
  let result = ''
  let isCarry = false
  let aSize = a.length - 1
  let bSize = b.length - 1
  while (aSize > -1 || bSize > -1) {
    const numA = +a[aSize] || 0
    const numB = +b[bSize] || 0
    const currentNum = (isCarry ? 1 : 0) + numA + numB
    isCarry = currentNum > 1
    if (isCarry) {
      result = currentNum % 2 + result
    } else {
      result = currentNum + result
    }
    aSize--
    bSize--
  }
  if (isCarry) {
    result = '1' + result
  }
  return result
}

export default addBinary
