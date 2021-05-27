// best-time-to-buy-and-sell-stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0, minPrice = prices[0]
  for(let i = 0; i<prices.length;i++){
    if(prices[i] < minPrice){
      minPrice = prices[i]
    }else{
      if(prices[i] - minPrice > maxProfit){
        maxProfit = prices[i]- minPrice
      }
    }
  }
  return maxProfit
};
const prices = [7,1,5,3,6,4]
console.log(maxProfit(prices))