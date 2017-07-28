import test from 'ava'
const add = require('./add')

test('add', function (t) {
  t.is(add(1, 2), 3)
})
