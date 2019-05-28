import { maxDepth } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('maxDepth test case', () => {
  let treeNode
  treeNode = createTreeNode([3, 9, 20, null, null, 15, 7])
  expect(maxDepth(treeNode)).toEqual(3)
  treeNode = createTreeNode([])
  expect(maxDepth(treeNode)).toEqual(0)
})
