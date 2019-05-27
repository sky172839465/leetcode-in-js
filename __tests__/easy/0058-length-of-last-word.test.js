import { lengthOfLastWord } from '../../src/easy'

test('lengthOfLastWord test case', () => {
  expect(lengthOfLastWord('Hello World')).toEqual(5)
  expect(lengthOfLastWord(' ')).toEqual(0)
  expect(lengthOfLastWord('')).toEqual(0)
  expect(lengthOfLastWord('XD ')).toEqual(2)
})
