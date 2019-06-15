import { maxDepth } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('0104. Maximum Depth of Binary Tree', () => {
  let treeNode
  treeNode = createTreeNode([3, 9, 20, null, null, 15, 7])
  expect(maxDepth(treeNode)).toEqual(3)
  treeNode = createTreeNode([])
  expect(maxDepth(treeNode)).toEqual(0)
})
