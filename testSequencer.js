const Sequencer = require('@jest/test-sequencer').default
const path = require('path')

class CustomSequencer extends Sequencer {
  sort (tests) {
    const copyTests = Array.from(tests)
    return copyTests.sort((testA, testB) => (
      path.basename(testA.path) > path.basename(testB.path) ? 1 : -1)
    )
  }
}

module.exports = CustomSequencer
