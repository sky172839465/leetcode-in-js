# 021. Merge Two Sorted Lists

1. LeetCode 環境已實作 ListNode 的介面，但是在本機測試需要自己建立才有 ListNode 可以用
2. getFullNodeValues 把輸入的 ListNode 轉換成數字陣列
3. createListNode 輸入數字陣列轉換成 ListNode
4. 用 getFullNodeValues 把輸入的兩個 ListNode 轉成數字陣列再合併
5. 重新排序合併的陣列
6. 用 createListNode 取得新的 ListNode
