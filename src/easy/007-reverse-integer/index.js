const reverse = x => {
  const min = -Math.pow(2, 31)
  const max = Math.pow(2, 31) - 1
  const sign = x > 0 ? 1 : -1
  const absNum = Math.abs(x)
  const reverseNum = absNum.toString().split('').reverse().join('') * sign
  if (reverseNum < min || reverseNum > max) {
    return 0
  }
  return reverseNum
}

export default reverse
