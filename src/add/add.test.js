const test = require('ava')
const add = require('./add')

test('add', function (t) {
  t.is(add(1, 1), 2)
})
