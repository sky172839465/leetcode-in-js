const {
  ACTION,
  DIFFICULTY,
  QUIZ_TYPE,
  FILE_MANIPULATE
} = require('../constants')
const problemMap = require('../problemMap')

const MESSAGE = {
  LENGTH: 'This field should have',
  REQUIRED: 'This field is required.',
  NUMBER_ONLY: 'This field only allow number.',
  START_WITH_ENGLISH: 'This field should start with English.',
  MAP_EXIST: `This problem's index ${FILE_MANIPULATE.NOT_CREATED}.`,
  MAP_EMPTY: `This problem's index ${FILE_MANIPULATE.NOT_CREATED}.`
}

const validate = {
  required: input => `${input}` ? '' : MESSAGE.REQUIRED,
  length: (input, size) => (`${input}`.length === size) ? '' : `${MESSAGE.LENGTH} ${size} numbers.`,
  numberOnly: input => /^[\d]+$/.test(`${input}`) ? '' : MESSAGE.NUMBER_ONLY,
  startWithEnglish: input => /^[a-zA-Z]/.test(`${input}`) ? '' : MESSAGE.START_WITH_ENGLISH,
  mapExist: input => !(input in problemMap) ? '' : MESSAGE.MAP_EXIST,
  mapEmpty: input => (input in problemMap) ? '' : MESSAGE.MAP_EMPTY
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

const getProblemIndexQuiz = action => {
  return {
    type: QUIZ_TYPE.INPUT,
    name: 'problemIndex',
    message: 'Please enter problem\'s index',
    validate: input => isValid([
      validate.required(input),
      validate.numberOnly(input),
      action === ACTION.CREATE
        ? validate.mapExist(input)
        : validate.mapEmpty(input),
      validate.length(input, 4)
    ])
  }
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
  validate: input => isValid(
    input
      ? [
        validate.required(input),
        validate.startWithEnglish(input)
      ]
      : []
  )
}

const createQuestions = [
  DIFFICULTY_QUIZ,
  getProblemIndexQuiz(ACTION.CREATE),
  PROBLEM_NAME_QUIZ,
  FN_NAME_QUIZ,
  FN_ARGS_QUIZ
]

const removeQuestions = [
  getProblemIndexQuiz(ACTION.REMOVE)
]

module.exports = {
  ACTION_QUIZ,
  createQuestions,
  removeQuestions
}
