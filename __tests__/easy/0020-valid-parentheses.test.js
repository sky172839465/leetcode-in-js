import { isValid } from '../../src/easy'

test('0020. Valid Parentheses', () => {
  expect(isValid('()')).toBeTruthy()
  expect(isValid('()[]{}')).toBeTruthy()
  expect(isValid('(]')).toBeFalsy()
  expect(isValid('([)]')).toBeFalsy()
  expect(isValid('{[]}')).toBeTruthy()
  expect(isValid('')).toBeTruthy()
  expect(isValid('(])')).toBeFalsy()
  expect(isValid('(([]){})')).toBeTruthy()
  expect(isValid(']')).toBeFalsy()
})
