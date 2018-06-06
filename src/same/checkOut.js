function calculate (item, promotion) {
  item.sort((a, b) => (b.price - a.price))
  var case5 = (item.length / 5 | 0) * 5 // find amount of case 5 item
  var case3 = ((item.length - case5) / 3 | 0) * 3 // find amount of case 3 item

  item.slice(0, case5).map(item => {
    item.priceDiscount = promotion[item.price].tier5
    return item
  })
  item.slice(case5, case5 + case3).map(item => {
    item.priceDiscount = promotion[item.price].tier3
    return item
  })
  item.slice(case5 + case3, item.length).map(item => {
    item.priceDiscount = item.price
    return item
  })
  return item
}

module.exports = calculate
