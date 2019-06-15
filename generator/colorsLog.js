const colors = require('colors')

const LEVEL = {
  INFO: 'info',
  HELP: 'help',
  WARN: 'warn',
  ERROR: 'error'
}

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
  infoBG: 'bgGreen',
  helpBG: 'bgCyan',
  warnBG: 'bgYellow',
  errorBG: 'bgRed'
})

/**
 * log message colorful! ️‍🌈
 */
const colorLog = ({ level = LEVEL.INFO, prefix = '', text = '' }) => {
  if (prefix) {
    console.log(
      colors[`${level}BG`](
        colors.black(` ${prefix} `)
      ),
      colors[level](text)
    )
  } else {
    console.log(colors[level](text))
  }
}

module.exports = {
  LEVEL,
  colorLog
}
