# 0070. Climbing Stairs
1. 依序輸入值與結果可以看出規律 `1(1)` , `2(2)` , `3(3)` , `4(5)` , `5(8)` 就是輸入值的前兩個結果總和
2. `0` 的時候直接回傳 `1`
3. 先替後面輸入值建立一個預設總和 `[0, 1]`
4. 再來只需要從 `1` 開始遞迴，即可取得前兩次的總和
