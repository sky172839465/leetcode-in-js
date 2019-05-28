const fs = require('fs')
const {
  generateFile,
  handleError
} = require('../util')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')
const {
  DIFFICULTY,
  PREFIX
} = require('../constants')
const {
  getTitleContent,
  getBadgesContent,
  getDescriptionContent,
  getProjectSetupContent,
  getTableOfContents
} = require('./template')

const getSolutionsDir = (dir) => {
  return new Promise(resolve => {
    fs.readdir(`src/${dir}`, (err, files = []) => {
      if (err) throw err
      const solutions = files
        .filter(file => file !== 'index.js')
        .map(file => `${dir}-${file}`)
      resolve(solutions)
    })
  })
}

const difficultyPaths = [
  DIFFICULTY.EASY,
  DIFFICULTY.MEDIUM,
  DIFFICULTY.HARD
]

const readme = async () => {
  const respList = await Promise.all(difficultyPaths.map(path => getSolutionsDir(path)))
  const allSolutions = respList
    .reduce((total, solutions) => [...total, ...solutions], [])
    .sort((a, b) => +a.match(/(\d)+/)[0] - +b.match(/(\d)+/)[0])
  const content = [
    getTitleContent(),
    getBadgesContent(),
    getDescriptionContent(),
    getProjectSetupContent(),
    getTableOfContents(allSolutions),
    ''
  ].join('\n')
  generateFile('README.md', content)
  colorLog({
    level: LEVEL.WARN,
    prefix: PREFIX.FILE,
    text: 'README.md has been updated.'
  })
}

handleError(readme)
