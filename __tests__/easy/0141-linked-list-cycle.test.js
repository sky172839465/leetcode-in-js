import { hasCycle } from '../../src/easy'
import { createCircleLinkedList } from '../../src/util'

test('0141. Linked List Cycle test case', () => {
  let head
  head = createCircleLinkedList([3, 2, 0, -4], 1)
  expect(hasCycle(head)).toBeTruthy()
  head = createCircleLinkedList([1, 2], 0)
  expect(hasCycle(head)).toBeTruthy()
  head = createCircleLinkedList([1], -1)
  expect(hasCycle(head)).toBeFalsy()
  head = createCircleLinkedList([], -1)
  expect(hasCycle(head)).toBeFalsy()
  head = createCircleLinkedList([1, 2], -1)
  expect(hasCycle(head)).toBeFalsy()
})
