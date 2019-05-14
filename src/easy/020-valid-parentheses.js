/**
 * 1. 正規化 只要是連再一起的 {} 或 [] 或 () 就符合條件
 * 2. 根據題目空字串直接返回 true
 * 3. 字串小於 2 代表不可能有一對
 * 4. 要符合題目字串中一定會有相連的括號
 * 5. 刪掉相連的括號直到輸入值清空代表這個輸入值有效
 * 6. 如果刪除後和刪除前字串一樣代表沒有一對的括號所以輸入值無效
 */
const regexp = /({}|\[\]|\(\))/g
const isValid = s => {
  if (s.length === 0) {
    return true
  }
  if (s.length < 2) {
    return false
  }
  let unvaildatedStr = s
  let result = true
  while (unvaildatedStr.length > 0) {
    const newUnvalidatedStr = unvaildatedStr.replace(regexp, '')
    if (unvaildatedStr === newUnvalidatedStr) {
      result = false
      break
    } else {
      unvaildatedStr = newUnvalidatedStr
    }
  }
  return result
}

export default isValid
