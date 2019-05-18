/**
 * 1. 數字判斷正負值
 * 2. 以文字重組數字
 * 3. 乘回原本的正負值取得反轉結果
 */
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
