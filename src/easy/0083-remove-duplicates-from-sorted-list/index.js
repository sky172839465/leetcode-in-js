import ListNode from '../../util/ListNode'

const deleteDuplicates = (head) => {
  if (!head) {
    return head
  }
  let result = new ListNode()
  result.next = new ListNode(head.val)
  let currentResult = result.next
  let currentHead = head.next
  while (currentHead) {
    const currentHeadValue = currentHead.val
    if (currentResult.val < currentHeadValue) {
      currentResult.next = new ListNode(currentHeadValue)
      currentResult = currentResult.next
    }
    currentHead = currentHead.next
  }
  return result.next
}

export default deleteDuplicates
