/**
 * 1. 如果輸入空陣列代表共同前綴字為空
 * 2. 如果輸入陣列只有一筆共同前綴沒得比較，就是第一筆
 * 3. 如果大於一筆則用第一個字串從 index = 0 開始比較
 * 4. undefined 代表字沒了就不用繼續比較
 * 5. 跟第一個字比較起來不同就代表共同前綴沒了
 */
const longestCommonPrefix = strs => {
  let prefix = ''
  if (strs.length === 0) {
    return prefix
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let isContinue = true
  while (isContinue) {
    const index = prefix.length
    const currentPrefix = strs[0][index]
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i][index] || strs[i][index] !== currentPrefix) {
        isContinue = false
        break
      }
    }
    if (isContinue) {
      prefix += currentPrefix
    }
  }
  return prefix
}

export default longestCommonPrefix
