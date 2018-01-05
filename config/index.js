module.exports = {
  dev: {
    mysql: {
      connectionUri: 'mysql://root@localhost:3308/demo'
    },

    redis: {
      connectionUri: 'redis://localhost:6380/'
    }
  },

  prod: process.env.CONFIG_FILE ? require(process.env.CONFIG_FILE) : {}
}