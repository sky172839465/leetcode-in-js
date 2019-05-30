import { sortedArrayToBST } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('sortedArrayToBST test case', () => {
  let treeNode
  treeNode = createTreeNode([0, -3, 9, -10, null, 5])
  expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(treeNode)
  expect(sortedArrayToBST([])).toEqual(null)
  treeNode = createTreeNode([0, 1, 2, 3, 5, 4, 6])
  expect(sortedArrayToBST([3, 1, 5, 0, 4, 2, 6])).toEqual(treeNode)
})
