# 0141. Linked List Cycle
1. 要檢查整個 `linkedList` 有沒有循環，所以建立 `faster` `slower` 變數來比較，如果是循環的 `faster` 就會像繞操場一樣追上 `slower`
2. 確保不會進入無窮迴圈，如果 `faster` 或 `slower` 的參考已經為空那就代表沒有循環直接回 `false`
3. 最後只要比較 `faster` 和 `slower` 的參考，相等即代表是循環的
