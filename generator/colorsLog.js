const colors = require('colors')

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
  error: 'red'
})

module.exports = {
  info: log => console.log(colors.info(log)),
  warn: log => console.log(colors.warn(log)),
  error: log => console.log(colors.error(log))
}
