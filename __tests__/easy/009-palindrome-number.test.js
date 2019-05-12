import isPalindrome from '../../src/easy/009-palindrome-number'

test('isPalindrome test case', () => {
  expect(isPalindrome(121)).toBeTruthy()
  expect(isPalindrome(-121)).toBeFalsy()
  expect(isPalindrome(10)).toBeFalsy()
  expect(isPalindrome(11)).toBeTruthy()
})
