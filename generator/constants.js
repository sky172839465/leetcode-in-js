const ACTION = {
  CREATE: 'create',
  REMOVE: 'remove'
}

const DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard'
}

const TARGET_FILE = {
  SOLUTION: 'solution',
  README: 'readme',
  TEST: 'test'
}

const PREFIX = {
  DIR: 'DIR',
  FILE: 'FILE',
  NOT_FOUND: 'NOT FOUND'
}

const QUIZ_TYPE = {
  INPUT: 'input',
  NUMBER: 'number',
  CONFIRM: 'confirm',
  LIST: 'list',
  RAWLIST: 'rawlist',
  EXPAND: 'expand',
  CHECKBOX: 'checkbox',
  PASSWORD: 'password',
  EDITOR: 'editor'
}

module.exports = {
  ACTION,
  DIFFICULTY,
  TARGET_FILE,
  PREFIX,
  QUIZ_TYPE
}
