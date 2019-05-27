import { isValid } from '../../src/easy'

test('isValid test case', () => {
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
