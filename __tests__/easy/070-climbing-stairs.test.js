import { climbStairs } from '../../src/easy'

test('climbStairs test case', () => {
  expect(climbStairs(0)).toEqual(1)
  expect(climbStairs(1)).toEqual(1)
  expect(climbStairs(2)).toEqual(2)
  expect(climbStairs(3)).toEqual(3)
})
