class Test {
  constructor () {
    this.qq = '11234'
  }
  get stackSize () {
    return this.qq.length
  }
}

const aa = new Test()
console.log(aa.stackSize)
