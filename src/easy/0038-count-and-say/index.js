const countAndSay = n => {
  let result = '1'
  if (n === 1) {
    return result
  }
  const regexp = /(\d)\1*/g
  for (let i = 2; i <= n; i++) {
    result = result
      .match(regexp)
      .reduce((tempResult, sameVals) => `${tempResult}${sameVals.length}${sameVals[0]}`, '')
  }
  return result
}

export default countAndSay
