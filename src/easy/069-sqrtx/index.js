const mySqrt = (x) => {
  let result = 0
  let xStr = `${x}`
  xStr.length % 2 !== 0 && (xStr = `0${xStr}`)
  let count = 0
  while (xStr.length > count * 2) {
    const currentNum = +xStr.substr(0, 2 * (count + 1))
    const prevResult = result * 10
    for (let i = 0; i < 10; i++) {
      const currentSqrt = prevResult + i
      if (currentNum >= Math.pow(currentSqrt, 2)) {
        result = currentSqrt
      }
    }
    count++
  }
  return result
}

export default mySqrt
