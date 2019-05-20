# 026. Remove Duplicates from Sorted Array

1. 這題不需要回傳值，需要直接操作輸入的 `nums`
2. 從陣列尾端開始遞迴(不從 `0` 開始遞迴是為了避免刪除項目順序被打亂)
3. 目前項目和他的前一個項目比較，一樣代表重複，刪除 `nums` 中這個 `index` 的項目
