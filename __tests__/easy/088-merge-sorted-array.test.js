import { merge } from '../../src/easy'

test('merge test case', () => {
  let nums1 = [1, 2, 3, 0, 0, 0]
  merge(nums1, 3, [2, 5, 6], 3)
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
})
