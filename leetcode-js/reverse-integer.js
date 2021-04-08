/**
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 * @param {number} x
 * @return {number}
 */
x = 1534236469
var reverse = function(x) {
  var newX = 0
  while(x){
    newX = newX * 10
    newX = newX + x%10
    x = parseInt(x/10)
  }
  if(newX > Math.pow(2,31) - 1 || newX < Math.pow(-2,31))
  {
    newX = 0
  }
  return newX
};

console.log(reverse(x))
