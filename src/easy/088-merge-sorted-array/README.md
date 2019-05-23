# 088. Merge Sorted Array
1. `m` 和 `n` 各減一，這個數量各別是 `nums1` 和 `nums2` 的有效值
2. 以 `nums2` 為標準和 `nums1` 比對大小插入 `nums1` 當前的位置
3. 扣掉插入 `nums1` 的陣列有效值數量
4. 直到 `n` 用完代表 `nums1` 剩下都比 `nums2` 小所以後面就不用排序了
