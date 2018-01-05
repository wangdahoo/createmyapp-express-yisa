process.env.NODE_ENV = 'development'
const path = require('path')

function setup () {
  global._require = (moduleName) => {
    return moduleName.slice(0, 1) === '@'
      ? require(path.join(__dirname, '../app', moduleName.slice(2)))
      : require(moduleName)
  }
  global._config = () => {
    return require(path.join(__dirname, '../config'))
  }
}

module.exports = {
  setup
}
