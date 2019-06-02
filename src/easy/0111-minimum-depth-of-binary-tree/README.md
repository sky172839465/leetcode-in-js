# 0111. Minimum Depth of Binary Tree
1. 如果輸入的 `root` 是 `null` 代表是空的直接返回 `0`
2. 接著一層一層深入，如果沒有左二元數和右二元樹，代表這個 `node` 到終點了
3. 這時候比對最接近 `root` 的階層，預設是 `0` 所以如果還是預設值就直接取代，因為是第一次走到 `node` 終點
4. 如果最接近 `root` 的階層不是 `0` 代表之前的節點已經有完成過的，這時只要比大小，最小的最接近 `root`