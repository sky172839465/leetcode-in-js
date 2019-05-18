const twoSum = (nums, target) => {
  let map = {}
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i]
    const expectNum = target - currentNum
    if (expectNum in map) {
      result = [map[expectNum], i]
      break
    } else {
      map[currentNum] = i
    }
  }
  return result
}

export default twoSum
