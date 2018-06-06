function calculate (items, promotions) {
  items.sort((a, b) => (b.price - a.price))
  var itemInTier5 = (items.length / 5 | 0) * 5 // find amount of case 5 item
  var itemInTier3 = ((items.length - itemInTier5) / 3 | 0) * 3 // find amount of case 3 item

  items = setPriceDiscount(0, itemInTier5, items, promotions, 'tier5')
  items = setPriceDiscount(itemInTier5, itemInTier5 + itemInTier3, items, promotions, 'tier3')
  items = setPriceDiscount(itemInTier5 + itemInTier3, items.length, items, promotions, 'tier1')
  return items
}
function setPriceDiscount (start, end, items, promotions, tier) {
  items.slice(start, end).map(item => {
    item.priceDiscount = promotions[item.price][tier]
    return item
  })
  return items
}

module.exports = calculate
