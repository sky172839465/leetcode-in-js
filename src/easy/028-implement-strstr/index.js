/**
 * 1. 根據題目要求空字串返回 0
 * 2. 比對 haystack 開頭跟 needle 一樣長度的字串
 * 3. 不同的話 haystack 刪除第一個字繼續比對值到 haystack 字數比 needle 少
 */
const strStr = (haystack, needle) => {
  if (needle.length === 0) {
    return 0
  }
  const needleSize = needle.length
  let tempHaystack = haystack
  let result = -1
  let count = 0
  while (tempHaystack.length >= needleSize) {
    if (tempHaystack.substring(0, needleSize) === needle) {
      result = count
      break
    } else {
      count++
      tempHaystack = tempHaystack.substring(1)
    }
  }
  return result
}

export default strStr
