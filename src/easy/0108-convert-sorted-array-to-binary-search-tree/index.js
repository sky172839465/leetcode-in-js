import TreeNode from '../../util/TreeNode'

const sortedArrayToBST = nums => {
  if (nums.length === 0) {
    return null
  }
  const numsSize = nums.length
  const centered = Math.floor(numsSize / 2)
  let treeNode = new TreeNode(nums[centered])
  treeNode.left = sortedArrayToBST(nums.slice(0, centered))
  treeNode.right = sortedArrayToBST(nums.slice(centered + 1))
  return treeNode
}

export default sortedArrayToBST
