/**
 * 1. 根據題目沒有最後一個單字直接回傳 0
 * 2. 正規化 只要是連續大小寫英文就繼續往後比對，比對整個字串
 * 3. 如果有 match 到取得最後一個結果的長度
 * 4. 如果字串長度大於 0 但非大小寫英文(ex: ' ')則回傳 0
 */
const lengthOfLastWord = s => {
  if (s.length === 0) {
    return 0
  }
  const stringGroupByWords = s.match(/[a-zA-Z]+/g)
  return stringGroupByWords
    ? stringGroupByWords[stringGroupByWords.length - 1].length
    : 0
}

export default lengthOfLastWord
