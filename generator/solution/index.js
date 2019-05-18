const fs = require('fs')
const inquirer = require('inquirer')
const color = require('../color')
const problemMap = require('../problemMap')
const {
  generateFile,
  executeAction,
  deleteFolderRecursive
} = require('../util')
const {
  getSolutionContent,
  getReadmeContent,
  getTestContent,
  getNewProblemMapContent,
  getPrevProblemMapContent
} = require('./templete')
const TARGET_FILE_MAP = {
  SOLUTION: 'solution',
  README: 'readme',
  TEST: 'test'
}
const DIFFICULTY_QUIZ = {
  type: 'list',
  name: 'difficulty',
  message: 'Please Choose problem difficulty',
  choices: ['easy', 'medium', 'hard']
}
const PROBLEM_INDEX_QUIZ = {
  type: 'input',
  name: 'problemIndex',
  message: 'Please input problem index'
}
const PROBLEM_NAME_QUIZ = {
  type: 'input',
  name: 'problemName',
  message: 'Please input problem name'
}
const FN_NAME_QUIZ = {
  type: 'input',
  name: 'solutionFnName',
  message: 'Please input problem solution funtion name'
}
const FN_ARGS_QUIZ = {
  type: 'input',
  name: 'solutionArgs',
  message: 'Please input problem solution args'
}
const createQuestion = [
  DIFFICULTY_QUIZ,
  PROBLEM_INDEX_QUIZ,
  PROBLEM_NAME_QUIZ,
  FN_NAME_QUIZ,
  FN_ARGS_QUIZ
]
const removeQuestion = [
  DIFFICULTY_QUIZ,
  PROBLEM_INDEX_QUIZ
]

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'Please Choose action',
      choices: ['create', 'remove']
    }
  ])
  .then(({ action }) => {
    const QUIZ = action === 'create' ? createQuestion : removeQuestion
    return inquirer.prompt(QUIZ)
  })
  .then(async (answer) => {
    const {
      difficulty,
      problemIndex,
      problemName,
      solutionFnName,
      solutionArgs
    } = answer
    const currentProblemName = problemMap[problemIndex] || problemName
    if (!currentProblemName) {
      console.log(color.FgRed, `Problem index: ${problemIndex} not found.`)
      return
    }
    const kebabName = `${problemIndex}-` + currentProblemName
      .replace(/\s/g, '-')
      .replace(/[^A-Za-z0-9-]+/g, '')
      .toLowerCase()
    const solutionPath = `src/${difficulty}/${kebabName}`
    let targetFiles = [
      {
        key: TARGET_FILE_MAP.SOLUTION,
        filePath: `${solutionPath}/index.js`
      },
      {
        key: TARGET_FILE_MAP.README,
        filePath: `${solutionPath}/README.md`
      },
      {
        key: TARGET_FILE_MAP.TEST,
        filePath: `__tests__/${difficulty}/${kebabName}.test.js`
      }
    ]
    const requiredDirs = [
      `src/${difficulty}`,
      `__tests__/${difficulty}`
    ]
    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        await executeAction(fs.mkdir, [dir])
        console.log(color.FgGreen, `[DIR] ${dir} has been created.`)
      }
    }
    if (solutionFnName) {
      const solutionContent = getSolutionContent(solutionFnName, solutionArgs)
      const readmeContent = getReadmeContent(`${problemIndex}. ${problemName}`)
      const testContent = getTestContent(difficulty, solutionFnName)
      const newProblemMapContent = getNewProblemMapContent(problemMap, { [problemIndex]: problemName })
      await executeAction(fs.mkdir, [solutionPath])
      console.log(color.FgGreen, `[DIR] ${solutionPath} has been created.`)
      for (const { key, filePath } of targetFiles) {
        let content = ''
        switch (key) {
          case TARGET_FILE_MAP.SOLUTION:
            content = solutionContent
            break
          case TARGET_FILE_MAP.README:
            content = readmeContent
            break
          case TARGET_FILE_MAP.TEST:
            content = testContent
            break
          default:
            break
        }
        generateFile(filePath, content)
        console.log(color.FgGreen, `[FILE] ${filePath} has been created.`)
      }
      generateFile('generator/problemMap.js', newProblemMapContent)
    } else {
      const newProblemMapContent = getPrevProblemMapContent(problemMap, problemIndex)
      deleteFolderRecursive(solutionPath)
      console.log(color.FgGreen, `[DIR] ${solutionPath} has been removed.`)
      for (const { key, filePath } of targetFiles) {
        if (key === TARGET_FILE_MAP.TEST) {
          await executeAction(fs.unlink, [filePath])
          console.log(color.FgGreen, `[FILE] ${filePath} has been removed.`)
        }
      }
      generateFile('generator/problemMap.js', newProblemMapContent)
    }
    console.log(color.FgWhite, '')
  })
