import {
  createListNode,
  getFullNodeValues,
  createTreeNode
} from '../../src/util'
import ListNode from '../../src/util/ListNode'

test('createListNode test case', () => {
  expect(createListNode([])).toEqual(null)
  expect(createListNode([0])).toEqual(new ListNode(0))
  expect(createListNode([0, 1])).toEqual({
    ...new ListNode(0),
    next: new ListNode(1)
  })
})

test('getFullNodeValues test case', () => {
  const emptyListNode = createListNode([])
  const existListNode = createListNode([1, 2, 3])
  expect(getFullNodeValues(emptyListNode)).toEqual([])
  expect(getFullNodeValues(existListNode)).toEqual([1, 2, 3])
})

test('createTreeNode test case', () => {
  expect(createTreeNode([])).toEqual(undefined)
  expect(createTreeNode([0])).toEqual({ val: 0, left: null, right: null })
  expect(createTreeNode([1])).toEqual({ val: 1, left: null, right: null })
  expect(createTreeNode([1, 2, 3])).toEqual({
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
  })
  expect(createTreeNode([1, null, 3, null, null, 6, 7])).toEqual({
    val: 1,
    left: null,
    right: {
      val: 3,
      left: { val: 6, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  })
})
