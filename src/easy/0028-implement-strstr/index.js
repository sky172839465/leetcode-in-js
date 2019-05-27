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
