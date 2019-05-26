# 100. Same Tree
1. 如果 `p` 和 `q` 都是 `null` 就不需要比較兩個結構一定一樣
2. 接著檢查如果有其中一個是 `null` 或是 `val` 不同那麼他們的 `TreeNode` 結構也會不同
3. 都一樣的話就把 `p` 和 `q` 的 `left` , `right` 傳下去比對
4. 如果完全一致最後就會遇到 `1.` 兩個都是 `null` 直接返回

### 特殊解法
在 JavaScript 中沒有所謂的 `TreeNode` 類型，他只是我們用物件做出一樣的結構，所以比對兩個物件最簡單的方式就是直接轉換成字串， `JSON.stringify(p) === JSON.stringify(q)` 即可 😏
