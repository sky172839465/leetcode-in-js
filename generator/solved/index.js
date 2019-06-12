const childProcess = require('child_process')
const inquirer = require('inquirer')
const {
  handleError,
  executeAction,
  generateFile
} = require('../util')
const problemMap = require('../problemMap')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')
const {
  PREFIX,
  QUIZ_TYPE,
  PATH
} = require('../constants')
const {
  getNewProblemMap,
  getProblemMapContent
} = require('../solution/templete')

const ACCEPT_QUIZ = {
  type: QUIZ_TYPE.CONFIRM,
  name: 'accept',
  message: 'Is commit log looks good ?'
}

const solved = async () => {
  const enterProblemIndex = process.argv[2]
  const problem = problemMap[enterProblemIndex]
  if (!problem) {
    colorLog({
      level: LEVEL.ERROR,
      prefix: PREFIX.NOT_FOUND,
      text: `ProblemIndex: ${enterProblemIndex} hasn't been created.`
    })
    return
  }
  const {
    problemIndex,
    problemName,
    solved
  } = problem
  if (solved) {
    colorLog({
      level: LEVEL.WARN,
      prefix: PREFIX.SOLVED,
      text: 'Problem has been solved.'
    })
    return
  }
  const newProblemMap = getNewProblemMap(problemMap, {
    [problemIndex]: {
      ...problem,
      solved: true
    }
  })
  generateFile(PATH.PROBLEM_MAP, getProblemMapContent(newProblemMap))
  colorLog({
    level: LEVEL.WARN,
    prefix: PREFIX.FILE,
    text: `${PATH.PROBLEM_MAP} has been updated.`
  })
  const cmds = [
    'git add .',
    `git commit -m "feat: add ${+problemIndex}. ${problemName} by 🤖"`
  ]
  for (const cmd of cmds) {
    await executeAction(childProcess.exec, [cmd])
    colorLog({
      level: LEVEL.INFO,
      prefix: PREFIX.GIT,
      text: cmd
    })
  }
  const { accept } = await inquirer.prompt([ACCEPT_QUIZ])
  if (accept) {
    const pushCommit = `git push origin ${process.argv[3] || 'master'}`
    colorLog({
      level: LEVEL.INFO,
      prefix: PREFIX.GIT,
      text: pushCommit
    })
    await executeAction(childProcess.exec, [pushCommit])
    colorLog({
      level: LEVEL.INFO,
      prefix: PREFIX.GIT,
      text: 'success push to GitHub ✅'
    })
  }
}

handleError(solved)
