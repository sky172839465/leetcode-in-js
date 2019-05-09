/**
 * 1. 使用 map 紀錄不符合目前比較的項目 { [現在值]: 索引 }
 * 2. 在 map 中找到 (target - 現在值) 的欄位就代表有符合兩數相加等於 target 的項目
 * 3. result 先放 map 的索引再放目前值的索引，因為 map 的索引一定比現在值早出現
 */
const { demo } = require('../demoHelper')
const nums = [2, 7, 11, 15]
const target = 9
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
demo(twoSum, [nums, target], [0, 1])
