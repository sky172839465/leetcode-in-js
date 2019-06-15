import { searchInsert } from '../../src/easy'

test('0035. Search Insert Position', () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2)
  expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1)
  expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4)
  expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0)
})
