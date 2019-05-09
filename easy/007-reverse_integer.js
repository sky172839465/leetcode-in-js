/**
 * 1. 使用 map 紀錄不符合目前比較的項目 { [現在值]: 索引 }
 * 2. 在 map 中找到 (target - 現在值) 的欄位就代表有符合兩數相加等於 target 的項目
 * 3. result 先放 map 的索引再放目前值的索引，因為 map 的索引一定比現在值早出現
 */
const { demo } = require('../demoHelper')
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
demo(reverse, [123], 321)
