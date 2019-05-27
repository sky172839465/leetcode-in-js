import { isSymmetric } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('isSymmetric test case', () => {
  let treeNode
  treeNode = createTreeNode([])
  expect(isSymmetric(treeNode)).toBeTruthy()
  treeNode = createTreeNode([1, 2, 2, 3, 4, 4, 3])
  expect(isSymmetric(treeNode)).toBeTruthy()
  treeNode = createTreeNode([1, 2, 2, null, 3, null, 3])
  expect(isSymmetric(treeNode)).toBeFalsy()
})
