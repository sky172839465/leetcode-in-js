const hasPathSum = (root, sum) => {
  if (!root) {
    return false
  }
  const checkPathSum = (currentNode, currentSum) => {
    const {
      val,
      left,
      right
    } = currentNode
    if (currentNode && !left && !right) {
      return currentSum - val === 0
    }
    return (
      (left && checkPathSum(left, currentSum - val)) ||
      (right && checkPathSum(right, currentSum - val))
    )
  }
  return !!checkPathSum(root, sum)
}

export default hasPathSum
