import { minDepth } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('0111. Minimum Depth of Binary Tree', () => {
  let treeNode
  treeNode = createTreeNode([3, 9, 20, null, null, 15, 7])
  expect(minDepth(treeNode)).toEqual(2)
  treeNode = createTreeNode([3, 9, null, 1])
  expect(minDepth(treeNode)).toEqual(3)
  treeNode = createTreeNode([])
  expect(minDepth(treeNode)).toEqual(0)
})
