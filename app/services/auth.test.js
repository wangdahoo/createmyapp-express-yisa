beforeAll(require('../../test').setup)

test('verify', () => {
  const auth = require('./auth')
  const UUID = require('uuid/v4')
  const { Employee } = require('../models')
  const getUid = auth.verify('wangdahoo', '123456')
  return expect(getUid).resolves.toBeGreaterThan(0)
})

test('renewToken', () => {
  const uid = 1
  const token = UUID().replace(/\-/g, '')
  const expires_at = Math.floor(Date.now() / 1000) + 1800
  const doRenew = auth.renewToken(uid, token, expires_at).then(() => {
    return Employee.findById(uid).then(e => e && e.expires_at)
  })
  return expect(doRenew).resolves.toBe(expires_at)
})
