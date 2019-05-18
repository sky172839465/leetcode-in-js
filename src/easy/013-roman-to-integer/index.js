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

export default romanToInt
