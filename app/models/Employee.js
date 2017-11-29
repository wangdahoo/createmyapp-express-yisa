const Sequelize = require('sequelize')
const db = require('./db')

module.exports = db.define('employee', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  chinese_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  token: {
    type: Sequelize.STRING
  },
  expires_at: {
    type: Sequelize.INTEGER
  }
}, {
  tableName: 'employee',
  timestamps: false,
})
