import ListNode from '../../src/util/ListNode'

test('ListNode test case', () => {
  expect(new ListNode()).toEqual({ val: undefined, next: null })
  expect(new ListNode(0)).toEqual({ val: 0, next: null })
})
