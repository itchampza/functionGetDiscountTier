const test = require('ava')
const checkOut = require('./checkOut')
const promotions = require('./promotions.json')

test('1 return 590 ', function (t) {
  var items = [
    { price: 590 }
  ]
  var result = [
    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('2 return 790 590 ', function (t) {
  var items = [
    { price: 590 },
    { price: 790 }
  ]
  var result = [
    { price: 790, priceDiscount: 790 },
    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('3 return 870 670 470', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 }
  ]
  var result = [
    { price: 990, priceDiscount: 870 },
    { price: 790, priceDiscount: 670 },
    { price: 590, priceDiscount: 470 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('4 return 970 870 670 590', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 }
  ]
  var result = [
    { price: 1090, priceDiscount: 970 },
    { price: 990, priceDiscount: 870 },
    { price: 790, priceDiscount: 670 },
    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('5 return 890 790 590 390 390', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 }
  ]
  var result = [
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 390 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('6 return 1590 890 790 590 390 590 ', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 1990 }
  ]
  var result = [
    { price: 1990, priceDiscount: 1590 },
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('9 return 1590 1290 1190 890 790 670 470 470 590', function (t) {
  var items = [
    { price: 1990 },
    { price: 1590 },
    { price: 1390 },
    { price: 590 },
    { price: 990 },
    { price: 790 },
    { price: 1090 },
    { price: 590 },
    { price: 590 }
  ]
  var result = [
    { price: 1990, priceDiscount: 1590 },
    { price: 1590, priceDiscount: 1290 },
    { price: 1390, priceDiscount: 1190 },
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },

    { price: 790, priceDiscount: 670 },
    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },

    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('10 return 890 790 590 590 590 590 590 390 390 390', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 590 },
    { price: 790 },
    { price: 790 },
    { price: 790 },
    { price: 790 }
  ]
  var result = [
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 390 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('12 return 890 890 790 590 590 590 590 590 390 390 590 590', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 590 },
    { price: 790 },
    { price: 790 },
    { price: 790 },
    { price: 790 },
    { price: 1090 },
    { price: 590 }
  ]
  var result = [
    { price: 1090, priceDiscount: 890 },
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 390 },
    { price: 590, priceDiscount: 590 },
    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('14 return 1490 1290 890 890 790 590 590 590 590 590 470 470 470 590', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 590 },
    { price: 790 },
    { price: 790 },
    { price: 790 },
    { price: 790 },
    { price: 1090 },
    { price: 590 },
    { price: 1790 },
    { price: 1590 }
  ]
  var result = [
    { price: 1790, priceDiscount: 1490 },
    { price: 1590, priceDiscount: 1290 },
    { price: 1090, priceDiscount: 890 },
    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },

    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },

    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },

    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('19 return 1590 1490 1490 14901290 1190 1190 1190 1090 890 890 790 590 590 590 470 470 470 590', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 590 },
    { price: 790 },
    { price: 790 },
    { price: 1390 },
    { price: 1390 },
    { price: 1090 },
    { price: 590 },
    { price: 1790 },
    { price: 1590 },
    { price: 1290 },
    { price: 1790 },
    { price: 1790 },
    { price: 1990 },
    { price: 1390 }
  ]
  var result = [
    { price: 1990, priceDiscount: 1590 },
    { price: 1790, priceDiscount: 1490 },
    { price: 1790, priceDiscount: 1490 },
    { price: 1790, priceDiscount: 1490 },
    { price: 1590, priceDiscount: 1290 },

    { price: 1390, priceDiscount: 1190 },
    { price: 1390, priceDiscount: 1190 },
    { price: 1390, priceDiscount: 1190 },
    { price: 1290, priceDiscount: 1090 },
    { price: 1090, priceDiscount: 890 },

    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },

    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },

    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})

test('24 return 1590 1590 1590 1490 1490 1490 1290 1290 1290 1190 1190 1190 1090 1090 890 890 790 590 590 590 470 470 470 590 ', function (t) {
  var items = [
    { price: 590 },
    { price: 790 },
    { price: 990 },
    { price: 1090 },
    { price: 590 },
    { price: 590 },
    { price: 790 },
    { price: 790 },
    { price: 1390 },
    { price: 1390 },
    { price: 1090 },
    { price: 590 },
    { price: 1790 },
    { price: 1590 },
    { price: 1290 },
    { price: 1790 },
    { price: 1790 },
    { price: 1990 },
    { price: 1390 },
    { price: 1990 },
    { price: 1990 },
    { price: 1590 },
    { price: 1590 },
    { price: 1290 }

  ]
  var result = [
    { price: 1990, priceDiscount: 1590 },
    { price: 1990, priceDiscount: 1590 },
    { price: 1990, priceDiscount: 1590 },
    { price: 1790, priceDiscount: 1490 },
    { price: 1790, priceDiscount: 1490 },

    { price: 1790, priceDiscount: 1490 },
    { price: 1590, priceDiscount: 1290 },
    { price: 1590, priceDiscount: 1290 },
    { price: 1590, priceDiscount: 1290 },
    { price: 1390, priceDiscount: 1190 },

    { price: 1390, priceDiscount: 1190 },
    { price: 1390, priceDiscount: 1190 },
    { price: 1290, priceDiscount: 1090 },
    { price: 1290, priceDiscount: 1090 },
    { price: 1090, priceDiscount: 890 },

    { price: 1090, priceDiscount: 890 },
    { price: 990, priceDiscount: 790 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },
    { price: 790, priceDiscount: 590 },

    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },
    { price: 590, priceDiscount: 470 },

    { price: 590, priceDiscount: 590 }
  ]
  t.deepEqual(checkOut(items, promotions), result)
})
