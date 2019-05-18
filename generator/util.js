const fs = require('fs')

const generateFile = (path, content) => {
  fs.writeFile(path, content, 'utf8', err => {
    if (err) throw err
  })
}

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const executeAction = (action, args) => {
  return new Promise(resolve => {
    action(...args, err => {
      if (err) throw err
      resolve()
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

module.exports = {
  generateFile,
  capitalize,
  executeAction,
  deleteFolderRecursive
}
