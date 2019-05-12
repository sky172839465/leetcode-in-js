/**
 * 1. 計算數字總長度
 * 2. 從第一個和最後一個字往內比較，有一個不同代表不是回文
 */
const isPalindrome = x => {
  const strNum = x.toString()
  const numSize = strNum.length
  const numHalfSize = Math.floor(numSize / 2)
  let result = true
  for (let i = 0; i < numHalfSize; i++) {
    if (strNum[i] !== strNum[numSize - (i + 1)]) {
      result = false
      break
    }
  }
  return result
}

export default isPalindrome
