const test = require('ava')
const checkOut = require('./checkOut')
const promotion = require('./promotion.json')

test('1 return 100 ', function (t) {
  var item = [{
    id: '001',
    name: 'A',
    price: 100
  }]
  var result = [{
    id: '001',
    name: 'A',
    price: 100,
    priceDiscount: 100
  }]
  t.deepEqual(checkOut(item, promotion), result)
})

test('2 return 100 200 ', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    }
  ]
  var result = [{
    id: '002',
    name: 'B',
    price: 200,
    priceDiscount: 200
  },
  {
    id: '001',
    name: 'A',
    price: 100,
    priceDiscount: 100
  }]
  t.deepEqual(checkOut(item, promotion), result)
})

test('3 return 260 170 80', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    }
  ]
  var result = [
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 260
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 170
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 80
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})

test('4 return 450 260 170 100', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    },
    {
      id: '004',
      name: 'D',
      price: 500
    }
  ]
  var result = [
    {
      id: '004',
      name: 'D',
      price: 500,
      priceDiscount: 450
    },
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 260
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 170
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 100
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})

test('5 return 400 220 150 60 60', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    },
    {
      id: '004',
      name: 'D',
      price: 500
    },
    {
      id: '006',
      name: 'A',
      price: 100
    }
  ]
  var result = [
    {
      id: '004',
      name: 'D',
      price: 500,
      priceDiscount: 400
    },
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 220
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 60
    },
    {
      id: '006',
      name: 'A',
      price: 100,
      priceDiscount: 60
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})

test('6 return 400 220 150 60 60 100', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    },
    {
      id: '004',
      name: 'D',
      price: 500
    },
    {
      id: '006',
      name: 'A',
      price: 100
    },
    {
      id: '007',
      name: 'A',
      price: 100
    }
  ]
  var result = [
    {
      id: '004',
      name: 'D',
      price: 500,
      priceDiscount: 400
    },
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 220
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 60
    },
    {
      id: '006',
      name: 'A',
      price: 100,
      priceDiscount: 60
    },
    {
      id: '007',
      name: 'A',
      price: 100,
      priceDiscount: 100
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})

test('7 return 400 220 150 150 60 100 100', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    },
    {
      id: '004',
      name: 'D',
      price: 500
    },
    {
      id: '006',
      name: 'A',
      price: 100
    },
    {
      id: '007',
      name: 'A',
      price: 100
    },
    {
      id: '008',
      name: 'B',
      price: 200
    }
  ]
  var result = [
    {
      id: '004',
      name: 'D',
      price: 500,
      priceDiscount: 400
    },
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 220
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '008',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 60
    },
    {
      id: '006',
      name: 'A',
      price: 100,
      priceDiscount: 100
    },
    {
      id: '007',
      name: 'A',
      price: 100,
      priceDiscount: 100
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})

test('8 return 400 400 220 150 150 80 80 80', function (t) {
  var item = [
    {
      id: '001',
      name: 'A',
      price: 100
    },
    {
      id: '002',
      name: 'B',
      price: 200
    },
    {
      id: '003',
      name: 'C',
      price: 300
    },
    {
      id: '004',
      name: 'D',
      price: 500
    },
    {
      id: '006',
      name: 'A',
      price: 100
    },
    {
      id: '007',
      name: 'A',
      price: 100
    },
    {
      id: '008',
      name: 'B',
      price: 200
    },
    {
      id: '009',
      name: 'D',
      price: 500
    }
  ]
  var result = [
    {
      id: '004',
      name: 'D',
      price: 500,
      priceDiscount: 400
    },
    {
      id: '009',
      name: 'D',
      price: 500,
      priceDiscount: 400
    },
    {
      id: '003',
      name: 'C',
      price: 300,
      priceDiscount: 220
    },
    {
      id: '002',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '008',
      name: 'B',
      price: 200,
      priceDiscount: 150
    },
    {
      id: '001',
      name: 'A',
      price: 100,
      priceDiscount: 80
    },
    {
      id: '006',
      name: 'A',
      price: 100,
      priceDiscount: 80
    },
    {
      id: '007',
      name: 'A',
      price: 100,
      priceDiscount: 80
    }
  ]
  t.deepEqual(checkOut(item, promotion), result)
})
