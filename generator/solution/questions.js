const {
  ACTION,
  DIFFICULTY,
  QUIZ_TYPE
} = require('../constants')
const problemMap = require('../problemMap')

const MESSAGE = {
  MAX_LENGTH: 'This field is over max length.',
  REQUIRED: 'This field is required.',
  NUMBER_ONLY: 'This field only allow number.',
  START_WITH_ENGLISH: 'This field should start with English.',
  EXIST: 'This problem\'s index has been created.'
}

const validate = {
  required: input => `${input}` ? '' : MESSAGE.REQUIRED,
  maxLength: (input, size) => (`${input}`.length <= size) ? '' : MESSAGE.MAX_LENGTH,
  numberOnly: input => /^[\d]+$/.test(`${input}`) ? '' : MESSAGE.NUMBER_ONLY,
  startWithEnglish: input => /^[a-zA-Z]/.test(`${input}`) ? '' : MESSAGE.START_WITH_ENGLISH,
  exist: input => !(input in problemMap) ? '' : MESSAGE.EXIST
}

const isValid = messages => messages.find(msg => msg.length > 0) || true

const ACTION_QUIZ = {
  type: QUIZ_TYPE.LIST,
  name: 'action',
  message: 'Please choose action',
  choices: [ACTION.CREATE, ACTION.REMOVE]
}

const DIFFICULTY_QUIZ = {
  type: QUIZ_TYPE.LIST,
  name: 'difficulty',
  message: 'Please choose problem\'s difficulty',
  choices: [
    DIFFICULTY.EASY,
    DIFFICULTY.MEDIUM,
    DIFFICULTY.HARD
  ]
}

const PROBLEM_INDEX_QUIZ = {
  type: QUIZ_TYPE.INPUT,
  name: 'problemIndex',
  message: 'Please enter problem\'s index',
  validate: input => isValid([
    validate.required(input),
    validate.numberOnly(input),
    validate.exist(input),
    validate.maxLength(input, 3)
  ])
}

const PROBLEM_NAME_QUIZ = {
  type: QUIZ_TYPE.INPUT,
  name: 'problemName',
  message: 'Please enter problem\'s name',
  validate: input => isValid([
    validate.required(input),
    validate.startWithEnglish(input)
  ])
}

const FN_NAME_QUIZ = {
  type: QUIZ_TYPE.INPUT,
  name: 'solutionFnName',
  message: 'Please enter solution function\'s name',
  validate: input => isValid([
    validate.required(input),
    validate.startWithEnglish(input)
  ])
}

const FN_ARGS_QUIZ = {
  type: QUIZ_TYPE.INPUT,
  name: 'solutionArgs',
  message: 'Please enter solution function\'s args',
  validate: input => isValid([
    validate.required(input),
    validate.startWithEnglish(input)
  ])
}

const createQuestion = [
  DIFFICULTY_QUIZ,
  PROBLEM_INDEX_QUIZ,
  PROBLEM_NAME_QUIZ,
  FN_NAME_QUIZ,
  FN_ARGS_QUIZ
]

const removeQuestion = [
  PROBLEM_INDEX_QUIZ
]

module.exports = {
  ACTION_QUIZ,
  createQuestion,
  removeQuestion
}
