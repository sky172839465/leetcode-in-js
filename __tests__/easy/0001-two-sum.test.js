import { twoSum } from '../../src/easy'

test('0001. Two Sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 11, 15], 18)).toEqual([1, 2])
  expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3])
})
