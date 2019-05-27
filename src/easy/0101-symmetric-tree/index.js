const isSymmetric = (root) => {
  if (!root) {
    return true
  }
  const isSame = (a, b) => {
    if (!a && !b) {
      return true
    }
    return (
      a &&
      b &&
      a.val === b.val &&
      isSame(a.left, b.right) &&
      isSame(a.right, b.left)
    )
  }
  return !!isSame(root.left, root.right)
}

export default isSymmetric
