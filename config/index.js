module.exports = {
  dev: {
    mysql: {
      connectionUri: 'mysql://root@localhost:3308/demo'
    }
  },

  prod: {
    mysql: {
      connectionUri: '<production uri>'
    }
  }
}