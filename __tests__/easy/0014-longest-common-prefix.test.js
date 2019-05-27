import { longestCommonPrefix } from '../../src/easy'

test('longestCommonPrefix test case', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl')
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('')
  expect(longestCommonPrefix([])).toEqual('')
  expect(longestCommonPrefix([''])).toEqual('')
})
