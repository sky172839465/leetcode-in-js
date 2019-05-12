import {
  ListNode,
  createListNode,
  getFullNodeValues,
  mergeTwoLists
} from '../../src/easy'

test('ListNode test case', () => {
  expect(new ListNode()).toEqual({ val: undefined, next: null })
  expect(new ListNode(0)).toEqual({ val: 0, next: null })
})

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

test('mergeTwoLists test case', () => {
  expect(mergeTwoLists(...[
    createListNode([1, 2, 4]),
    createListNode([1, 3, 4])
  ])).toEqual(createListNode([1, 1, 2, 3, 4, 4]))
  expect(mergeTwoLists(...[
    createListNode([]),
    createListNode([0])
  ])).toEqual(createListNode([0]))
  expect(mergeTwoLists(...[
    createListNode([5]),
    createListNode([1, 2, 4])
  ])).toEqual(createListNode([1, 2, 4, 5]))
  expect(mergeTwoLists(...[
    createListNode([-10, -9, -6, -4, 1, 9, 9]),
    createListNode([-5, -3, 0, 7, 8, 8])
  ])).toEqual(createListNode([-10, -9, -6, -5, -4, -3, 0, 1, 7, 8, 8, 9, 9]))
})
