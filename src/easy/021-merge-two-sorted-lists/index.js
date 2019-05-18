class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}
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
const mergeTwoLists = (l1, l2) => {
  const nodeValues = [...getFullNodeValues(l1), ...getFullNodeValues(l2)]
  const sortNodeValues = nodeValues.sort((a, b) => a - b)
  return createListNode(sortNodeValues)
}

export default mergeTwoLists
export {
  ListNode,
  getFullNodeValues,
  createListNode
}
