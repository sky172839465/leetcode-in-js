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
