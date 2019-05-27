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
