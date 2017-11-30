const Sequelize = require('sequelize')
const config = require('../../config')
const {connectionUri} = config[process.env.NODE_ENV === 'development' ? 'dev' : 'prod'].mysql

// only development configurations for this moment
module.exports = new Sequelize(connectionUri, {
  pool: {
    max: 40,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
