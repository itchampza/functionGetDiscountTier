const test = require('ava')
const checkOut = require('./checkOut')
const promotions = require('./promotions.json')

test('1 return 100 ', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 }
  ]
  var result = [
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('2 return 100 200 ', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 }
  ]
  var result = [
    { id: '002', name: 'B', price: 200, priceDiscount: 200 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('3 return 260 170 80', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 }
  ]
  var result = [
    { id: '003', name: 'C', price: 300, priceDiscount: 260 },
    { id: '002', name: 'B', price: 200, priceDiscount: 170 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('4 return 450 260 170 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 450 },
    { id: '003', name: 'C', price: 300, priceDiscount: 260 },
    { id: '002', name: 'B', price: 200, priceDiscount: 170 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('5 return 400 220 150 60 60', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('6 return 400 220 150 60 60 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('7 return 400 220 150 150 60 100 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 100 },
    { id: '007', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('8 return 400 400 220 150 150 80 80 80', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '007', name: 'A', price: 100, priceDiscount: 80 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('12 return 400 400 220 220 150 150 60 60 60 60 100 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '011', name: 'A', price: 100 },
    { id: '012', name: 'B', price: 200 },
    { id: '001', name: 'A', price: 100 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '012', name: 'B', price: 200, priceDiscount: 150 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('13', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '011', name: 'A', price: 100 },
    { id: '012', name: 'B', price: 200 },
    { id: '001', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '012', name: 'B', price: 200, priceDiscount: 150 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('9 return 400 400 220 150 150 170 80 80 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '002', name: 'B', price: 200 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 170 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '007', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('11 return 400 400 400 220 220 150 150 150  60 60 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '002', name: 'B', price: 200 },
    { id: '004', name: 'D', price: 500 },
    { id: '003', name: 'C', price: 300 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('13 return 400 400 400 220 220 150 150 150 150 60 80 80 80', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '002', name: 'B', price: 200 },
    { id: '004', name: 'D', price: 500 },
    { id: '003', name: 'C', price: 300 },
    { id: '011', name: 'A', price: 100 },
    { id: '012', name: 'B', price: 200 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '012', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '011', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})
test('10 return 400 400 220 220 150 150 60 60 60 60', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '011', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('12 return 400 400 400 220 220 150 150 60 60 60 100 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '011', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 },
    { id: '007', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('15 return 400 400 400 400 220 220 220 150 150 150 150 60 60 60 60', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '002', name: 'B', price: 200 },
    { id: '004', name: 'D', price: 500 },
    { id: '003', name: 'C', price: 300 },
    { id: '011', name: 'A', price: 100 },
    { id: '012', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 }
  ]
  var result = [
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '012', name: 'B', price: 200, priceDiscount: 150 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('14 return 400 400 400 220 220 220 150 150 150 60 80 80 80 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '011', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 },
    { id: '008', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '011', name: 'A', price: 100, priceDiscount: 80 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('19 return 400 400 400 400 220 220 220 220 150 150 150 150 60 60 60 80 80 80 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '011', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 },
    { id: '008', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '001', name: 'A', price: 100, priceDiscount: 60 },
    { id: '006', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '007', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})
test('24 return 400 400 400 400 220 220 220 220 150 150 150 150 60 60 60 80 80 80 100', function (t) {
  var items = [
    { id: '001', name: 'A', price: 100 },
    { id: '002', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '004', name: 'D', price: 500 },
    { id: '006', name: 'A', price: 100 },
    { id: '011', name: 'A', price: 100 },
    { id: '007', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 },
    { id: '003', name: 'C', price: 300 },
    { id: '008', name: 'B', price: 200 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 },
    { id: '004', name: 'D', price: 500 },
    { id: '009', name: 'D', price: 500 },
    { id: '008', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '007', name: 'A', price: 100 },
    { id: '008', name: 'B', price: 200 },
    { id: '003', name: 'C', price: 300 },
    { id: '009', name: 'D', price: 500 },
    { id: '010', name: 'C', price: 300 },
    { id: '001', name: 'A', price: 100 },
    { id: '010', name: 'C', price: 300 }
  ]
  var result = [
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '004', name: 'D', price: 500, priceDiscount: 400 },
    { id: '009', name: 'D', price: 500, priceDiscount: 400 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '010', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '003', name: 'C', price: 300, priceDiscount: 220 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '008', name: 'B', price: 200, priceDiscount: 150 },
    { id: '002', name: 'B', price: 200, priceDiscount: 150 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '011', name: 'A', price: 100, priceDiscount: 60 },
    { id: '007', name: 'A', price: 100, priceDiscount: 60 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '006', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 80 },
    { id: '001', name: 'A', price: 100, priceDiscount: 100 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})
