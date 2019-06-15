import { longestCommonPrefix } from '../../src/easy'

test('0014. Longest Common Prefix', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  expect(longestCommonPrefix([])).toEqual('')
  expect(longestCommonPrefix([''])).toEqual('')
})
