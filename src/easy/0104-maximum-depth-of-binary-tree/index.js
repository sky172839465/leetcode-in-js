const maxDepth = (root) => {
  if (!root) {
    return 0
  }
  let depth = 0
  const deeper = (node, currentDepth) => {
    const nextDepth = currentDepth + 1
    if (node) {
      deeper(node.left, nextDepth)
      deeper(node.right, nextDepth)
    } else if (currentDepth > depth) {
      depth = currentDepth
    }
  }
  deeper(root, 0)
  return depth
}

export default maxDepth
