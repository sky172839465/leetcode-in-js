import { levelOrderBottom } from '../../src/easy'
import { createTreeNode } from '../../src/util'

test('levelOrderBottom test case', () => {
  let treeNode
  let expectVal
  treeNode = createTreeNode([3, 9, 20, null, null, 15, 7])
  expectVal = [[15, 7], [9, 20], [3]]
  expect(levelOrderBottom(treeNode)).toEqual(expectVal)
  treeNode = createTreeNode([])
  expectVal = []
  expect(levelOrderBottom(treeNode)).toEqual(expectVal)
  treeNode = createTreeNode([0, 11, 22, 33])
  expectVal = [[33], [11, 22], [0]]
  expect(levelOrderBottom(treeNode)).toEqual(expectVal)
})
