/**
 * 1. 如果 target 大於 nums 最後一個項目，代表 target 最大所以插入位置為最後一個
 * 2. 遞迴 nums ，遇到項目大於等於 target 代表這裡就是要插入的位置
 */
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
