const merge = (nums1 = [], m, nums2 = [], n) => {
  m--
  n--
  for (let i = (m + n + 1); i > -1; i--) {
    if (n === -1) {
      break
    }
    if (nums1[m] > nums2[n]) {
      nums1[i] = nums1[m--]
    } else {
      nums1[i] = nums2[n--]
    }
  }
}

export default merge
