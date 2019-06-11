const getRow = (rowIndex) => {
  let result = [1]
  if (rowIndex === 0) {
    return result
  }
  for (let i = 1; i <= rowIndex; i++) {
    let tempResult = []
    for (let j = 0; j <= i; j++) {
      const [current = 0, next = 0] = [result[j - 1], result[j]]
      tempResult[j] = current + next
    }
    result = tempResult
  }
  return result
}

export default getRow
