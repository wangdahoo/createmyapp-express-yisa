const express = require('express')
const router = express.Router()

router.get('/:name', (req, res, next) => {
  res.send(`Hi, ${req.params.name}.`)
})

module.exports = router
