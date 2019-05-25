import {
  createListNode,
  getFullNodeValues
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
