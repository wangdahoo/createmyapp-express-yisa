beforeAll(require('../../test').setup)

test('sum', () => {
  const sum = require('./sum')
  const a = 1
  const b = 2
  return expect(sum(a, b)).toBe(3)
})
