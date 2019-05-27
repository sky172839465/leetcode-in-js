# 0083. Remove Duplicates from Sorted List
1. 檢查如果 `head` 是空的 `ListNode` 直接回傳回去
2. 一開始為了之後要做比較要先把輸入的 `head` 第一個 `val` 直接存起來
3. 之後只要不斷找下一個直到 `next` 不存在就可以整個 `head` 掃完一次
