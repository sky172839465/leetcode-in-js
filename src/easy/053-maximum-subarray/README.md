# 053. Maximum Subarray

1. 紀錄兩個內容，(biggerNum)不包含目前項目值的連續最大總和與(maxNum)全部存入 biggerNum 裡出現過的最大總和
2. 遞迴比較 biggerNum 與(num)目前項目值誰比較大
3. num > biggerNum 假設 biggerNum 是正數，那麼和 num 相加就會變大，反之則變小，選擇大的當作新的 biggerNum
4. num < biggerNum 就不可能取代 biggerNum 因此新的 biggerNum 就是 biggerNum + num
5. 計算完後如果 biggerNum 又比 maxNum 大，再把 maxNum 替換成新的 biggerNum 確保最大總和
