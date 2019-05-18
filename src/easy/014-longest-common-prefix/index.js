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
      const comparePrefix = strs[i][index]
      if (!comparePrefix || comparePrefix !== currentPrefix) {
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
