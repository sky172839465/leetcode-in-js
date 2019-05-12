import longestCommonPrefix from '../../src/easy/014-longest-common-prefix'

test('twoSum test case', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  expect(longestCommonPrefix([])).toEqual('')
  expect(longestCommonPrefix([''])).toEqual('')
})
