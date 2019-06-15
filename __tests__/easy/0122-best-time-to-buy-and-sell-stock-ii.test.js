import { maxProfit2 } from '../../src/easy'

test('maxProfit2 test case', () => {
  expect(maxProfit2([7, 1, 5, 3, 6, 4])).toEqual(7)
  expect(maxProfit2([1, 2, 3, 4, 5])).toEqual(4)
  expect(maxProfit2([7, 6, 4, 3, 1])).toEqual(0)
  expect(maxProfit2([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toEqual(15)
  expect(maxProfit2([])).toEqual(0)
})
