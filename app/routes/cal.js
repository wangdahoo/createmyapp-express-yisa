const express = require('express')
const router = express.Router()

const sum = require('../services/sum')

router.get('/sum/:a/:b', (req, res, next) => {
  const a = req.params.a
  const b = req.params.b

  res.send(`result: ${sum(a, b)}`)
})

module.exports = router
