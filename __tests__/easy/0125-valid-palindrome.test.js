import { isPalindrome2 } from '../../src/easy'

test('0125. Valid Palindrome test case', () => {
  expect(isPalindrome2('A man, a plan, a canal: Panama')).toBeTruthy()
  expect(isPalindrome2('race a car')).toBeFalsy()
  expect(isPalindrome2('.,')).toBeTruthy()
})
