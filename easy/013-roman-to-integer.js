/**
 * 1. 列出所有羅馬數字的對應表
 * 2. 用前兩個字找對應，找不到則改用第一個字
 * 3. 扣掉對應羅馬數字後重複直到全部輸入值轉換完畢
 */
const { demo } = require('../demoHelper')
const ROMAN_KEY_MAP = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
const romanToInt = s => {
  let unconvertRomanWords = s
  let result = 0
  while (unconvertRomanWords.length > 0) {
    let romanWord = unconvertRomanWords.slice(0, 2)
    const romanValue = ROMAN_KEY_MAP[romanWord]
    if (romanValue) {
      result += romanValue
      unconvertRomanWords = unconvertRomanWords.substring(2)
    } else {
      romanWord = unconvertRomanWords[0]
      result += ROMAN_KEY_MAP[romanWord]
      unconvertRomanWords = unconvertRomanWords.substring(1)
    }
  }
  return result
}
demo(romanToInt, ['III'], 3)
demo(romanToInt, ['IV'], 4)
demo(romanToInt, ['IX'], 9)
demo(romanToInt, ['LVIII'], 58)
demo(romanToInt, ['MCMXCIV'], 1994)
