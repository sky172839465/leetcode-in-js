/**
 * 1. 這題不需要回傳值，需要直接操作輸入的 nums
 * 2. 從陣列尾端開始遞迴(不從0開始遞迴是為了避免刪除項目順序被打亂)
 * 3. 目前項目和他的下一個項目比較，一樣代表重複，刪除 nums 中這個 index 的項目
 */
const removeDuplicates = nums => {
  for (let i = (nums.length - 1); i > -1; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    }
  }
}

export default removeDuplicates
