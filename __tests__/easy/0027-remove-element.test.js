import { removeElement } from '../../src/easy'

test('0027. Remove Element', () => {
  const testCaseList = [
    {
      testValue: [[3, 2, 2, 3], 3],
      expectValue: [2, 2]
    },
    {
      testValue: [[0, 1, 2, 2, 3, 0, 4, 2], 2],
      expectValue: [0, 1, 3, 0, 4]
    },
    {
      testValue: [],
      expectValue: []
    }
  ]
  testCaseList.forEach(({ testValue, expectValue }) => {
    const [nums = [], val] = testValue
    removeElement(nums, val)
    expect(nums).toEqual(expectValue)
  })
})
