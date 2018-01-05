const express = require('express')
const router = express.Router()

const sum = _require('@/services/sum')

router.get('/sum/:a/:b', (req, res, next) => {
  const {a, b} = req.params

  res.send(`result: ${sum(Number(a), Number(b))}`)
})

module.exports = router
