const maxProfit = prices => {
  if (prices.length === 0) {
    return 0
  }
  let cheapest = prices[0]
  let mostExpensive = prices[0]
  let bestProfit = 0
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    if (currentPrice < cheapest) {
      cheapest = currentPrice
      mostExpensive = currentPrice
    } else if (currentPrice > mostExpensive) {
      mostExpensive = currentPrice
    }
    const currentProfit = mostExpensive - cheapest
    if (currentProfit > bestProfit) {
      bestProfit = currentProfit
    }
  }
  return bestProfit
}

export default maxProfit
