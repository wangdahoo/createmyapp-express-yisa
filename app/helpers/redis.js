const redis = require('redis')
const bluebird = require('bluebird')
const genericPool = require('generic-pool')
const config = require('../../config')
const {connectionUri} = config[process.env.NODE_ENV === 'development' ? 'dev' : 'prod'].redis

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

const factory = {
  create: function () {
    return new Promise((resolve, reject) => {
      const client = redis.createClient(connectionUri)
      client.on('connect', () => resolve(client))
      client.on('error', err => {
        console.log('创建 redisClient 失败')
        reject(err)
      })
    })
  },

  destroy: function (client) {
    return new Promise((resolve, reject) => {
      client.on('end', resolve)
      client.on('error', err => {
        console.log('注销 redisClient 失败')
        reject(err)
      })
      client.quit()
    })
  }
}

const opt = {
  max: 10,
  min: 2
}

const pool = genericPool.createPool(factory, opt)

function acquire (db) {
  return new Promise(resolve => {
    pool
      .acquire()
      .then(client => {
        if (db > 0) {
          client.select(db)
        }
        resolve(client)
      })
      .catch(err => {
        console.log('获取 redis 连接失败')
        throw err
      })
  })
}

module.exports = {
  acquire,
  acquireRedisClient: acquire,
  release: function (client) {
    pool.release(client)
  },
  releaseRedisClient: function (client) {
    pool.release(client)
  }
}
