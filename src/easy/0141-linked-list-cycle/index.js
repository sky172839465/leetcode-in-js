const hasCycle = (head) => {
  if (!head || !head.next) {
    return false
  }
  let faster = head
  let slower = head
  while (slower && faster && faster.next) {
    faster = faster.next.next
    slower = slower.next
    if (faster === slower) {
      return true
    }
  }
  return false
}

export default hasCycle
