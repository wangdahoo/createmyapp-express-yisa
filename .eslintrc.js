module.exports = {
  extends: 'standard',
  env: {
    node: true
  },
  rules: {
    'camelcase': 0,
    'no-var': 2
  },
  globals: {
    '_require': true,
    '_config': true
  }
}
