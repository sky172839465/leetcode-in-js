import { isSameTree } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('0100. Same Tree', () => {
  let treeNodeP
  let treeNodeQ
  treeNodeP = createTreeNode([1, 2, 3])
  treeNodeQ = createTreeNode([1, 2, 3])
  expect(isSameTree(treeNodeP, treeNodeQ)).toBeTruthy()
  treeNodeP = createTreeNode([1, 2, 3])
  treeNodeQ = createTreeNode([1, null, 3])
  expect(isSameTree(treeNodeP, treeNodeQ)).toBeFalsy()
  treeNodeP = createTreeNode([])
  treeNodeQ = createTreeNode([])
  expect(isSameTree(treeNodeP, treeNodeQ)).toBeTruthy()
  treeNodeP = createTreeNode([1, 2])
  treeNodeQ = createTreeNode([1, null, 2])
  expect(isSameTree(treeNodeP, treeNodeQ)).toBeFalsy()
})
