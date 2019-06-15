const isValidWord = /[A-Z0-9]/
const isPalindrome2 = s => {
  let result = true
  let upperString = s.toUpperCase()
  while (upperString.length > 1) {
    let start = 0
    let end = upperString.length
    const firstWord = upperString[start]
    const lastWord = upperString[end - 1]
    if (!isValidWord.test(firstWord)) {
      upperString = upperString.slice(start + 1, end)
      continue
    }
    if (!isValidWord.test(lastWord)) {
      upperString = upperString.slice(start, end - 1)
      continue
    }
    if (firstWord !== lastWord) {
      result = false
      break
    }
    upperString = upperString.slice(start + 1, end - 1)
  }
  return result
}

export default isPalindrome2
