import ListNode from './ListNode'

const getFullNodeValues = listNode => {
  let result = []
  let currentNode = listNode
  while (currentNode) {
    result.push(currentNode.val)
    currentNode = currentNode.next
  }
  return result
}

const createListNode = list => {
  if (list.length === 0) {
    return null
  }
  let listNode = new ListNode()
  let currentNode = listNode
  let unprocessList = list
  while (unprocessList.length > 0) {
    currentNode.val = unprocessList[0]
    if (unprocessList.length !== 1) {
      currentNode.next = new ListNode()
      currentNode = currentNode.next
    }
    unprocessList = unprocessList.slice(1)
  }
  return listNode
}

export {
  ListNode,
  getFullNodeValues,
  createListNode
}
