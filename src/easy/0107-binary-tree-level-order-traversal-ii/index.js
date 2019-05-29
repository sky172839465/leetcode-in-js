const levelOrderBottom = (root) => {
  let result = []
  if (!root) {
    return result
  }
  const deeper = (node, index) => {
    if (node) {
      const resultSize = result.length
      const nextDepth = index + 1
      if (index <= resultSize) {
        result[resultSize - index].push(node.val)
      } else {
        result.unshift([node.val])
      }
      deeper(node.left, nextDepth)
      deeper(node.right, nextDepth)
    }
  }
  deeper(root, 1)
  return result
}

export default levelOrderBottom
