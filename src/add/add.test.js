import test from 'ava'
import add from './add'

test('add', function (t) {
  t.is(add(1, 1), 2)
})
