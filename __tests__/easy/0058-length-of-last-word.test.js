import { lengthOfLastWord } from '../../src/easy'

test('0058. Length of Last Word', () => {
  expect(lengthOfLastWord('Hello World')).toEqual(5)
  expect(lengthOfLastWord(' ')).toEqual(0)
  expect(lengthOfLastWord('')).toEqual(0)
  expect(lengthOfLastWord('XD ')).toEqual(2)
})
