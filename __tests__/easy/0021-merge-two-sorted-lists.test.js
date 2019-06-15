import { mergeTwoLists } from '../../src/easy'
import { createListNode } from '../../src/util'

test('0021. Merge Two Sorted Lists', () => {
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
