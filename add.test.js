import test from 'ava';
const add = require('./add');

test('add', t => {
	t.is(add(1, 2), 3)
});
