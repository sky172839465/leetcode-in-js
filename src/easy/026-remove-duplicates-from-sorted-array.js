/**
 * 1. 這題不需要回傳值，需要直接操作輸入的 nums
 * 2. 從陣列尾端開始遞迴(不從0開始遞迴是為了避免刪除項目順序被打亂)
 * 3. 每次數值不同就存入 compareNum 給下一次比較
 * 4. 遞迴的數值與 compareNum 是一樣的代表重複，刪除 nums 中這個 index 的項目
 */
const removeDuplicates = nums => {
  let compareNum
  for (let i = (nums.length - 1); i > -1; i--) {
    const currentNum = nums[i]
    if (currentNum === compareNum) {
      nums.splice(i, 1)
    } else {
      compareNum = currentNum
    }
  }
}

export default removeDuplicates
