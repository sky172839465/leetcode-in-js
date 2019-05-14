import { strStr } from '../../src/easy'

test('strStr test case', () => {
  expect(strStr('hello', 'll')).toEqual(2)
  expect(strStr('aaaaa', 'bba')).toEqual(-1)
  expect(strStr('aaaaa', '')).toEqual(0)
})
