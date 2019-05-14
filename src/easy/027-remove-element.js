/**
 * 1. 這題不需要回傳值，需要直接操作輸入的 nums
 * 2. 從陣列尾端開始遞迴(不從 0 開始遞迴是為了避免刪除項目順序被打亂)
 * 3. 目前項目和 val 比較，一樣代表屬於要刪除的項目，刪除 nums 中這個 index 的項目
 */
const removeElement = (nums, val) => {
  for (let i = (nums.length - 1); i > -1; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
}

export default removeElement
