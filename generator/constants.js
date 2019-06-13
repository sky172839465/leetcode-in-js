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
  NOT_FOUND: 'NOT FOUND',
  UNEXPECT_ERROR: 'Unexpect Error',
  SOLVED: 'Solved',
  GIT: 'Git'
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

const PATH = {
  PROBLEM_MAP: 'generator/problemMap.js',
  README: 'README.md'
}

const FILE_MANIPULATED_PREFIX = 'has been'

const FILE_UNMANIPULATED_PREFIX = 'has\'t been'

const FILE_MANIPULATE = {
  UPDATED: `${FILE_MANIPULATED_PREFIX} updated`,
  CREATED: `${FILE_MANIPULATED_PREFIX} created`,
  DELETED: `${FILE_MANIPULATED_PREFIX} deleted`,
  NOT_UPDATED: `${FILE_UNMANIPULATED_PREFIX} updated`,
  NOT_CREATED: `${FILE_UNMANIPULATED_PREFIX} created`,
  NOT_DELETED: `${FILE_UNMANIPULATED_PREFIX} deleted`
}

module.exports = {
  ACTION,
  DIFFICULTY,
  TARGET_FILE,
  PREFIX,
  QUIZ_TYPE,
  PATH,
  FILE_MANIPULATE
}
