# 0101. Symmetric Tree
1. 如果 `root` 是 `null` 直接就是對稱
2. 接著不用比 `root` 的 `val` 因為頂點就自己一個
3. 把 `root` 的 `left` 和 `right` 當作 `a` , `b` 兩顆獨立的 `TreeNode` 丟下去比較
4. 接著就很像 `100.` 的題目，只是這裡比較對稱，所以 `a.left` 和 `b.right` 比較， `a.right` 和 `b.left` 比較
5. 如果是對稱比到最後就會拿到兩邊都是 `null` 最後回傳 `true`
