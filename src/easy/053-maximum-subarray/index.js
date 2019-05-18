const maxSubArray = nums => {
  let biggerNum = 0
  let maxNum = 0
  for (const [index, num] of nums.entries()) {
    if (index !== 0) {
      const sumNum = biggerNum + num
      biggerNum = num > biggerNum
        ? biggerNum > 0
          ? sumNum
          : num
        : sumNum
      if (biggerNum > maxNum) {
        maxNum = biggerNum
      }
    } else {
      biggerNum = num
      maxNum = num
    }
  }
  return maxNum
}

export default maxSubArray
