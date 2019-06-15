import { maxProfit } from '../../src/easy'

test('0121. Best Time to Buy and Sell Stock', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
  expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
  expect(maxProfit([])).toEqual(0)
  expect(maxProfit([2, 4, 1])).toEqual(2)
})
