import { mySqrt } from '../../src/easy'

test('mySqrt test case', () => {
  expect(mySqrt(4)).toEqual(2)
  expect(mySqrt(8)).toEqual(2)
  expect(mySqrt(121)).toEqual(11)
  expect(mySqrt(169)).toEqual(13)
  expect(mySqrt(256)).toEqual(16)
  expect(mySqrt(441)).toEqual(21)
  expect(mySqrt(2147395599)).toEqual(46339)
})
