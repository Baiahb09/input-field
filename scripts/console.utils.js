const chalk = require('chalk')

function print(color, ...args) {
  args = args.map(a => color(a));
  console.log(...args);
}

const Print = {
  log: (...args) => print(chalk.white, args),
  info: (...args) => print(chalk.yellowBright, args),
  help: (...args) => print(chalk.green, args),
  error: (...args) => print(chalk.red, args),
  extra: (...args) => print(chalk.gray, args)
}

module.exports = {
  Print
}