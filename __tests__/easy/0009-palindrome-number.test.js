import { isPalindrome } from '../../src/easy'

test('0009. Palindrome Number', () => {
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(-121)).toBeFalsy()
  expect(isPalindrome(10)).toBeFalsy()
  expect(isPalindrome(11)).toBeTruthy()
})
