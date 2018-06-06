function calculate (item, promotion) {
  item.sort((a, b) => (b.price - a.price))
  var case5 = (item.length / 5 | 0) * 5 // find amount of case 5 item
  var case3 = ((item.length - case5) / 3 | 0) * 3 // find amount of case 3 item
  for (var i = 0; i < item.length; i++) {
    if (i < case5) {
      item[i].priceDiscount = promotion.find(pro => pro.price === item[i].price).promotion.tier5
    } else if (i < (case5 + case3)) {
      item[i].priceDiscount = promotion.find(pro => pro.price === item[i].price).promotion.tier3
    } else {
      item[i].priceDiscount = item[i].price
    }
  }
  return item
}

module.exports = calculate
