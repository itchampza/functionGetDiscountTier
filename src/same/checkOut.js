function calculate (item, promotion) {
  var returnItem = []
  item.sort((a, b) => (b.price - a.price))
  while (item.length !== 0) {
    if (item.length >= 5) {
      for (var i = 0; i < item.length; i++) {
        item[i].priceDiscount = promotion.find(pro => pro.id === item[i].id).promotion['5']
      }
      returnItem = item.splice(0, item.length - (item.length % 5))
    } else if (item.length >= 3) {
      for (var j = 0; j < item.length; j++) {
        item[j].priceDiscount = promotion.find(pro => pro.id === item[j].id).promotion['3']
      }
      returnItem.push(...(item.splice(0, item.length - (item.length % 3))))
    } else {
      for (var k = 0; k < item.length; k++) {
        item[k].priceDiscount = promotion.find(pro => pro.id === item[k].id).price
      }
      returnItem.push(...item)
      item = []
    }
  }
  return returnItem
}

module.exports = calculate
