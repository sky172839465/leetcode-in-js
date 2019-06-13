const {
  generateFile,
  handleError
} = require('../util')
const {
  colorLog,
  LEVEL
} = require('../colorsLog')
const {
  PREFIX,
  FILE_MANIPULATE,
  PATH
} = require('../constants')
const {
  getTitleContent,
  getBadgesContent,
  getDescriptionContent,
  getProjectSetupContent,
  getTableOfContents
} = require('./template')
const problemMap = require('../problemMap')

const readme = async () => {
  const allSolutions = Object.keys(problemMap)
    .map(problemIndex => problemMap[problemIndex])
  const content = [
    getTitleContent(),
    getBadgesContent(),
    getDescriptionContent(),
    getProjectSetupContent(),
    getTableOfContents(allSolutions),
    ''
  ].join('\n')
  generateFile(PATH.README, content)
  colorLog({
    level: LEVEL.WARN,
    prefix: PREFIX.FILE,
    text: `${PATH.README} ${FILE_MANIPULATE.UPDATED}.`
  })
}

handleError(readme)
