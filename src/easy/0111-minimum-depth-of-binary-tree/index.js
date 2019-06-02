const minDepth = (root) => {
  let closestRootDepth = 0
  if (!root) {
    return closestRootDepth
  }
  const deeper = ({ left, right }, depth) => {
    if (!left && !right) {
      closestRootDepth = closestRootDepth !== 0
        ? Math.min(closestRootDepth, depth)
        : depth
      return
    }
    const nextDepth = depth + 1
    left && deeper(left, nextDepth)
    right && deeper(right, nextDepth)
  }
  deeper(root, 1)
  return closestRootDepth
}

export default minDepth
