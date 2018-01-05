beforeAll(require('../../test').setup)

test('redisHelper', () => {
  const {acquire, release} = require('./redis')

  let client
  const foo = 'bar'
  const val = acquire()
    .then(redisClient => {
      client = redisClient
      return client.setAsync('foo', foo)
    })
    .then(result => {
      return client.getAsync('foo')
    })

  return expect(val).resolves.toBe(foo)
})
