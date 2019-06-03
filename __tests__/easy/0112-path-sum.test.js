import { hasPathSum } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('hasPathSum test case', () => {
  let treeNode
  treeNode = createTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
  expect(hasPathSum(treeNode, 22)).toBeTruthy()
  treeNode = createTreeNode([])
  expect(hasPathSum(treeNode, 0)).toBeFalsy()
  treeNode = createTreeNode([1, 2])
  expect(hasPathSum(treeNode, 1)).toBeFalsy()
  treeNode = createTreeNode([1, 2])
  expect(hasPathSum(treeNode, 0)).toBeFalsy()
})
