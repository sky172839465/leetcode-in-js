import ListNode from './ListNode'
import TreeNode from './TreeNode'

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

const createTreeNode = list => {
  if (list.length === 0) {
    return undefined
  }
  const layer = Math.floor(Math.log2(list.length)) + 1
  let treeNodes = []
  for (let i = layer; i > 0; i--) {
    const currentLayerNodeVals = list.slice(Math.pow(2, i - 1) - 1)
    list = list.slice(0, Math.pow(2, i - 1) - 1)
    if (treeNodes.length > 0) {
      treeNodes = currentLayerNodeVals.map((val, index) => {
        if (!val) {
          return val
        }
        let newTreeNode = new TreeNode(val)
        const childPosition = index * 2
        const [leftNode, rightNode] = treeNodes.slice(childPosition, childPosition + 2)
        leftNode && (newTreeNode.left = leftNode)
        rightNode && (newTreeNode.right = rightNode)
        return newTreeNode
      })
    } else {
      treeNodes = currentLayerNodeVals.map(val => val ? new TreeNode(val) : val)
    }
  }
  return treeNodes[0]
}

export {
  ListNode,
  getFullNodeValues,
  createListNode,
  createTreeNode
}
