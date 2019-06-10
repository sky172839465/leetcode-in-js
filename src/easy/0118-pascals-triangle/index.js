const generate = numRows => {
  if (numRows === 0) {
    return []
  }
  let result = []
  for (let i = 0; i < numRows; i++) {
    const prevRow = result[i - 1]
    result[i] = [1]
    for (let j = 0; j < i; j++) {
      const [leftNode, rightNode = 0] = [prevRow[j], prevRow[j + 1]]
      result[i][j + 1] = leftNode + rightNode
    }
  }
  return result
}

export default generate
