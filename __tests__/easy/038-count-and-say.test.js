import { countAndSay } from '../../src/easy'

test('countAndSay test case', () => {
  expect(countAndSay(1)).toEqual('1')
  expect(countAndSay(2)).toEqual('11')
  expect(countAndSay(3)).toEqual('21')
  expect(countAndSay(4)).toEqual('1211')
  expect(countAndSay(5)).toEqual('111221')
})
