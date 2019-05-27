import { removeDuplicates } from '../../src/easy'

test('removeDuplicates test case', () => {
  const testCaseList = [
    {
      testValue: [1, 1, 2],
      expectValue: [1, 2]
    },
    {
      testValue: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      expectValue: [0, 1, 2, 3, 4]
    },
    {
      testValue: [],
      expectValue: []
    },
    {
      testValue: [1, 1],
      expectValue: [1]
    }
  ]
  testCaseList.forEach(({ testValue, expectValue }) => {
    const testCase = testValue
    removeDuplicates(testCase)
    expect(testCase).toEqual(expectValue)
  })
})
