import { deleteDuplicates } from '../../src/easy'
import { createListNode } from '../../src/util'

test('0083. Remove Duplicates from Sorted List', () => {
  let testListNode
  let expectListNode
  testListNode = createListNode([1, 1, 2])
  expectListNode = createListNode([1, 2])
  expect(deleteDuplicates(testListNode)).toEqual(expectListNode)
  testListNode = createListNode([1, 1, 2, 3, 3])
  expectListNode = createListNode([1, 2, 3])
  expect(deleteDuplicates(testListNode)).toEqual(expectListNode)
  testListNode = createListNode([0, 0, 0, 0, 0])
  expectListNode = createListNode([0])
  expect(deleteDuplicates(testListNode)).toEqual(expectListNode)
  testListNode = createListNode([-1, 0, 0, 0, 0, 3, 3])
  expectListNode = createListNode([-1, 0, 3])
  expect(deleteDuplicates(testListNode)).toEqual(expectListNode)
  testListNode = createListNode([])
  expectListNode = createListNode([])
  expect(deleteDuplicates(testListNode)).toEqual(expectListNode)
})
