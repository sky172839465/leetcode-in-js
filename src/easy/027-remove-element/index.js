const removeElement = (nums, val) => {
  for (let i = (nums.length - 1); i > -1; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    }
  }
}

export default removeElement
