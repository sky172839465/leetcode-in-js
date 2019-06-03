# 0112. Path Sum
1. 如果 `root` 是 `null` 直接返回 `false`
2. 接著重複檢查，如果 `currentNode` 存在但是 `left` 和 `right` 不存在，代表這是二元樹的末端， `currentNode` 的值減去剩餘的總和等於 `0` 就符合第二個參數從頭走到尾加總
3. 如果還不是二元樹末端則繼續往下檢查
