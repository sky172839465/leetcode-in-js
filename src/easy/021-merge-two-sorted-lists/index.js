/**
 * 1. LeetCode 環境已實作 ListNode 的介面，但是在本機測試需要自己建立才有 ListNode 可以用
 * 2. getFullNodeValues 把輸入的 ListNode 轉換成數字陣列
 * 3. createListNode 輸入數字陣列轉換成 ListNode
 * 4. 用 getFullNodeValues 把輸入的兩個 ListNode 轉成數字陣列再合併
 * 5. 重新排序合併的陣列
 * 6. 用 createListNode 取得新的 ListNode
 */
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
