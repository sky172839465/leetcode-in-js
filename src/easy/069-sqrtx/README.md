# 069. Sqrt(x)
1. 把輸入值轉成文字方便切割
2. 檢查字串長度，如果是奇數開頭補零，每兩位數一組
3. 因為平方根要一個數一個數找，單一個數上限 `9` 的平方 `81` 也只有兩位數
4. `currentNum` 每次計算過的字串加上新的一組看**最接近**且**不超過**哪個數的平方