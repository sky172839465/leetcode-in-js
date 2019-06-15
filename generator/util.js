const fs = require('fs')
const {
  colorLog,
  LEVEL
} = require('./colorsLog')
const { PREFIX } = require('./constants')

const generateFile = (path, content) => {
  return executeAction(fs.writeFile, [path, content, 'utf8'])
}

const executeAction = (action, args = []) => {
  return new Promise((resolve, reject) => {
    action(...args, (err, res) => {
      if (err) {
        reject(err)
      }
      resolve({ res, error: false })
    })
  })
}

// https://stackoverflow.com/a/32197381/5003128
const deleteFolderRecursive = path => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach((file, index) => {
      var curPath = `${path}/${file}`
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

const handleError = (action, args = []) => {
  action(...args)
    .catch(error => {
      colorLog({
        level: LEVEL.ERROR,
        prefix: PREFIX.UNEXPECT_ERROR,
        text: error.message
      })
      process.exit(1)
    })
}

module.exports = {
  generateFile,
  executeAction,
  deleteFolderRecursive,
  handleError
}
