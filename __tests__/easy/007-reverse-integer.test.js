import reverse from '../../src/easy/007-reverse-integer'

test('reverse test case', () => {
  expect(reverse(123)).toEqual(321)
  expect(reverse(1230)).toEqual(321)
  expect(reverse(-Math.pow(2, 31))).toEqual(0)
  expect(reverse(Math.pow(2, 31))).toEqual(0)
})
