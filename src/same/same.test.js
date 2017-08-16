const test = require('ava')
const same = require('./same')

test('same', function (t) {
  t.is(same(1), 1)
})
