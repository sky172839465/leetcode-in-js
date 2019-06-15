const maxProfit2 = prices => {
  let totalProfit = 0
  if (prices.length === 0) {
    return totalProfit
  }
  let cheapest = prices[0]
  let mostExpensive = prices[0]
  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i]
    if (
      currentPrice < cheapest ||
      (currentPrice >= cheapest && currentPrice <= mostExpensive)
    ) {
      totalProfit += mostExpensive - cheapest
      cheapest = currentPrice
      mostExpensive = currentPrice
    } else {
      if (i !== prices.length - 1) {
        mostExpensive = currentPrice
      } else {
        totalProfit += currentPrice - cheapest
      }
    }
  }
  return totalProfit
}

export default maxProfit2
