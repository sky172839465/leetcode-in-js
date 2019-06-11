import { getRow } from '../../src/easy'

test('getRow test case', () => {
  expect(getRow(3)).toEqual([1, 3, 3, 1])
  expect(getRow(2)).toEqual([1, 2, 1])
  expect(getRow(1)).toEqual([1, 1])
  expect(getRow(0)).toEqual([1])
})
