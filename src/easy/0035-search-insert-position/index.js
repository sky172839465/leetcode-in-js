const searchInsert = (nums, target) => {
  const numsSize = nums.length
  if (target > nums[numsSize - 1]) {
    return numsSize
  }
  for (let i = 0; i < numsSize; i++) {
    if (target <= nums[i]) {
      return i
    }
  }
}

export default searchInsert
