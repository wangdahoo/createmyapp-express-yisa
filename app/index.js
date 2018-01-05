const express = require('express')
const path = require('path')
// const favicon = require('serve-favicon')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const user = require('./routes/user')
const cal = require('./routes/cal')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// logger
app.use(morgan(require('./constants').LOG_FORMAT))

// sass
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  outputStyle: 'compressed',
  indentedSyntax: true,
  sourceMap: true,
  prefix: '/static'
}))

// static
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/', index)
app.use('/user', user)
app.use('/cal', cal)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.log(err)
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})

module.exports = app
