# 0069. Sqrt(x)
1. 把輸入值轉成文字方便切割
2. 檢查字串長度，如果是奇數開頭補零，每兩位數一組
3. 因為平方根要一個數一個數找，單一個數上限 `9` 的平方 `81` 也只有兩位數
4. `currentNum` 每次計算過的字串加上新的一組看**最接近**且**不超過**哪個數的平方

### 流程
1. 輸入數字 `441`
2. 因為是奇數所以轉換成 `0441`
3. 第一次取 `04` 平方根從 `0` 開始找，最接近 `2` ， `3` 就超過了
4. 第二次取 `0441` 平方根從 `20` 開始找，最接近 `21` ， `22` 就超過了
5. 因為只有兩組，所以輸入值的平方根就是 `21`
