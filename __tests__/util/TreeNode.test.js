import TreeNode from '../../src/util/TreeNode'

test('TreeNode test case', () => {
  expect(new TreeNode(0)).toEqual({ val: 0, left: null, right: null })
})
