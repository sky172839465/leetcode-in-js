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
  PATH,
  FILE_MANIPULATED_PREFIX,
  FILE_MANIPULATE
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
      text: `ProblemIndex: ${enterProblemIndex} ${FILE_MANIPULATE.NOT_CREATED}.`
    })
    return
  }
  const qualityScripts = [
    { name: 'coding style', script: 'lint' },
    { name: 'code coverage', script: 'test::coverage' }
  ]
  for (const { name, script } of qualityScripts) {
    colorLog({
      level: LEVEL.HELP,
      prefix: PREFIX.QUALITY,
      text: `Testing your ${name}...`
    })
    await executeAction(childProcess.exec, [`npm run ${script}`])
    colorLog({
      level: LEVEL.INFO,
      prefix: PREFIX.QUALITY,
      text: `Testing your ${name} success ✅`
    })
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
      text: `Problem ${FILE_MANIPULATED_PREFIX} solved.`
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
    text: `${PATH.PROBLEM_MAP} ${FILE_MANIPULATE.UPDATED}.`
  })
  const gitScripts = [
    'git add .',
    `git commit -m "feat: add ${+problemIndex}. ${problemName} by 🤖"`
  ]
  for (const script of gitScripts) {
    await executeAction(childProcess.exec, [script])
    colorLog({
      level: LEVEL.INFO,
      prefix: PREFIX.GIT,
      text: script
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
