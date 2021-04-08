/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
x = -121
var isPalindrome = function(x) {
  var newX = 0,tar = x
  if(x < 0){
    return false
  }
  while(x){
    newX = newX * 10
    newX = newX + x%10
    x = parseInt(x/10)
  }
  if(newX == tar){
    return true
  }else{
    return false
  }
};

console.log(isPalindrome(x))