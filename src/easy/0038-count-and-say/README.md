# 0038. Count and Say

這題的要求很難懂查了別人的說明才看懂所以特別補充一下
輸入 `1` 直接返回 `1` ，
輸入 `2` 返回 `11` 因為前一個返回的結果是一個一
輸入 `3` 返回 `21` 因為前一個返回的結果是兩個一
輸入 `4` 返回 `1211` 因為前一個返回的結果是一個二和一個一
輸入 `5` 返回 `111221` 因為前一個返回的結果是一個一、一個二和兩個一
1. 如果輸入 `1` 直接返回 `'1'`
2. 正規化 `(\d)` 比對到字串裡的數字當成一個群組， `\1*` 取得第一個群組比對結果繼續往後找一個至多個， `g` 整個字串都要比對
3. 假設 `countAndSay` 輸入 `5` (這時候 `result` 會是 `1211`) match 的結果會是 `['1', '2', '11']`
4. 重組結果 項目長度 + 項目第一個值
