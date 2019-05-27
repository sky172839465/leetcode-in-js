const merge = (nums1, m, nums2, n) => {
  let total = m + n - 1
  m--
  n--
  while (n > -1) {
    if (nums1[m] > nums2[n]) {
      nums1[total] = nums1[m--]
    } else {
      nums1[total] = nums2[n--]
    }
    total--
  }
}

export default merge
