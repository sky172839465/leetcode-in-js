const climbStairs = (n) => {
  if (n > 0) {
    let result = [0, 1]
    for (let i = 1; i <= n; i++) {
      result.push((result[i] + result[i - 1]))
    }
    return result[result.length - 1]
  } else {
    return 1
  }
}

export default climbStairs
