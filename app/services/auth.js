const md5 = require('md5')
const { db, Employee } = require('../models')

// TOKEN 有效期为 30 分钟
const TOKEN_EXPIRES_IN = 1800

const verify = (username, password) => {
  return Employee.findOne({
    where: { username, password: md5(password) },
    attributes: ['id']
  }).then(e => (e && e.id) || 0)
}

const renewToken = (uid, token, expires_at) => {
  return Employee.findById(uid)
    .then(e => {
      e.token = token,
      e.expires_at = expires_at
      
      return e.save()
    })
    .then(_ => ({
      token,
      expires_at
    }))
}

module.exports = {
  verify,
  renewToken
}
