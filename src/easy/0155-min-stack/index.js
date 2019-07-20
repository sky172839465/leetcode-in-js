class MinStack {
  constructor () {
    this.stack = []
    this.minimum = []
  }
  get stackSize () {
    return this.stack.length
  }
  get minimumSize () {
    return this.minimum.length
  }
  push (x) {
    const currentStackSize = this.stackSize
    const currentMinimumSize = this.minimumSize
    this.stack[currentStackSize] = x
    if (currentStackSize === 0 || x <= this.minimum[currentMinimumSize - 1]) {
      this.minimum[currentMinimumSize] = x
    }
  }
  pop () {
    const currentStackSize = this.stackSize
    if (currentStackSize > 0) {
      const currentMinimumSize = this.minimumSize
      const lastEleIndex = currentStackSize - 1
      const lastMinIndex = currentMinimumSize - 1
      if (this.minimum[lastMinIndex] === this.stack[lastEleIndex]) {
        this.minimum.length = lastMinIndex
      }
      this.stack.length = lastEleIndex
    }
  }
  top () {
    return this.stack[this.stackSize - 1]
  }
  getMin () {
    return this.minimum[this.minimumSize - 1]
  }
}

export default MinStack
