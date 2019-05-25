const fs = require('fs')
const inquirer = require('inquirer')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')
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
  getNewProblemMap,
  getPrevProblemMap,
  getProblemMapContent,
  getExporterContent
} = require('./templete')
const {
  ACTION,
  TARGET_FILE
} = require('./constants')
const {
  ACTION_QUIZ,
  createQuestion,
  removeQuestion
} = require('./questions')

inquirer
  .prompt([ACTION_QUIZ])
  .then(({ action }) => {
    const QUIZ = action === ACTION.CREATE ? createQuestion : removeQuestion
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
    const anwserFromMap = problemMap[problemIndex]
    let targetProblemName = problemName
    let targetDifficulty = difficulty
    if (anwserFromMap) {
      targetProblemName = anwserFromMap.problemName
      targetDifficulty = anwserFromMap.difficulty
    }
    if (!targetProblemName) {
      colorLog({
        level: LEVEL.ERROR,
        prefix: 'Not Found',
        text: `Problem index: ${problemIndex}`
      })
      process.exit()
    }
    const kebabName = `${problemIndex}-` + targetProblemName
      .replace(/\s/g, '-')
      .replace(/[^A-Za-z0-9-]+/g, '')
      .toLowerCase()
    const solutionPath = `src/${targetDifficulty}/${kebabName}`
    let targetFiles = [
      {
        key: TARGET_FILE.SOLUTION,
        filePath: `${solutionPath}/index.js`
      },
      {
        key: TARGET_FILE.README,
        filePath: `${solutionPath}/README.md`
      },
      {
        key: TARGET_FILE.TEST,
        filePath: `__tests__/${targetDifficulty}/${kebabName}.test.js`
      }
    ]
    const requiredDirs = [
      `src/${targetDifficulty}`,
      `__tests__/${targetDifficulty}`
    ]
    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        await executeAction(fs.mkdir, [dir])
        colorLog({
          prefix: 'DIR',
          text: `${dir} has been created.`
        })
      }
    }
    let newProblemMap
    if (solutionFnName) {
      const solutionContent = getSolutionContent(solutionFnName, solutionArgs)
      const readmeContent = getReadmeContent(`${problemIndex}. ${problemName}`)
      const testContent = getTestContent(difficulty, solutionFnName)
      newProblemMap = getNewProblemMap(problemMap, {
        [problemIndex]: {
          difficulty,
          problemIndex,
          problemName,
          solutionFnName,
          solutionArgs,
          kebabName
        }
      })
      if (fs.existsSync(solutionPath)) {
        colorLog({
          level: LEVEL.ERROR,
          prefix: 'DIR',
          text: `${solutionPath} already exist!`
        })
        process.exit()
      }
      await executeAction(fs.mkdir, [solutionPath])
      colorLog({
        prefix: 'DIR',
        text: `${solutionPath} has been created.`
      })
      for (const { key, filePath } of targetFiles) {
        let content = ''
        switch (key) {
          case TARGET_FILE.SOLUTION:
            content = solutionContent
            break
          case TARGET_FILE.README:
            content = readmeContent
            break
          case TARGET_FILE.TEST:
            content = testContent
            break
          default:
            break
        }
        generateFile(filePath, content)
        colorLog({
          prefix: 'FILE',
          text: `${filePath} has been created.`
        })
      }
    } else {
      newProblemMap = getPrevProblemMap(problemMap, problemIndex)
      deleteFolderRecursive(solutionPath)
      colorLog({
        prefix: 'DIR',
        text: `${solutionPath} has been removed.`
      })
      for (const { key, filePath } of targetFiles) {
        if (key === TARGET_FILE.TEST) {
          await executeAction(fs.unlink, [filePath])
          colorLog({
            prefix: 'FILE',
            text: `${filePath} has been removed.`
          })
        }
      }
    }
    const problemMapPath = 'generator/problemMap.js'
    const exporterPath = `src/${targetDifficulty}/index.js`
    generateFile(problemMapPath, getProblemMapContent(newProblemMap))
    colorLog({
      level: LEVEL.WARN,
      prefix: 'FILE',
      text: `${problemMapPath} has been updated.`
    })
    generateFile(exporterPath, getExporterContent(newProblemMap, targetDifficulty))
    colorLog({
      level: LEVEL.WARN,
      prefix: 'FILE',
      text: `${exporterPath} has been updated.`
    })
    require('child_process').exec('npm run update-readme', (err, stdout) => {
      if (err) {
        console.log(err)
      } else {
        console.log(stdout)
      }
    })
  })
