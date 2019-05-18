/**
 * 這題是要求把陣列當作十進位， [1, 2, 9] 個位數加一後變成 [1, 3, 0]
 * 1. 陣列尾端加一
 * 2. 從尾端開始遞迴，超過 9 代表需要進位，否則保持原狀
 * 3. 如果到第一位數需要加一，直接在陣列最前端加一個項目值 1
 */
const plusOne = digits => {
  const digitsSize = digits.length
  digits[digitsSize - 1] += 1
  for (let i = (digitsSize - 1); i > -1; i--) {
    if (digits[i] > 9) {
      digits[i] = 0
      if (i !== 0) {
        digits[i - 1] += 1
      } else {
        digits.unshift(1)
      }
    }
  }
  return digits
}

export default plusOne
