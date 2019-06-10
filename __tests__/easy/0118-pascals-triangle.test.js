import { generate } from '../../src/easy'

test('generate test case', () => {
  expect(generate(5)).toEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
  ])
  expect(generate(2)).toEqual([
    [1],
    [1, 1]
  ])
  expect(generate(1)).toEqual([[1]])
  expect(generate(0)).toEqual([])
})
