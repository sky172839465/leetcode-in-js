const expect = require('expect')

/**
 * Demo leetcode solution
 * @param {function} fn solution function
 * @param {array} args solution function's args
 * @param {any} expectValue testing solution return as expect
 */
const demo = (fn, args, expectValue) => {
  const testValue = fn(...args)
  expect(testValue).toEqual(expectValue)
  console.log(JSON.stringify(testValue, null, 2))
}

module.exports = {
  demo
}
