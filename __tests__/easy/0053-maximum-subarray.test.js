import { maxSubArray } from '../../src/easy'

test('0053. Maximum Subarray', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
  expect(maxSubArray([0, 5, -3, 2, 2])).toEqual(6)
  expect(maxSubArray([1, 2])).toEqual(3)
  expect(maxSubArray([-1, 0, -2])).toEqual(0)
  expect(maxSubArray([-4, 1, 1, 1, 1])).toEqual(4)
})
