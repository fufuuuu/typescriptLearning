// unique-binary-search-trees
/**
 * @param {number} n
 * @return {number}
 */

//  思路：F(0) = 1 ,F(1) = 1 ,F(2) = 2 ,F(3) = 5
//  F(3) = F(0)*F(2) + F(1)*F(1) + F(2)*F(0)
//  F(4) = F(0)*F(3) + F(1)*F(2) + F(2)*F(1) + F(3)*F(0)
//  F(n) = F(0)*F(n-1) + ... + F(n-1) * F(0)
var numTrees = function(n) {
  if(n == 0) {
    return 1
  }
  if(n == 1){
    return 1
  }
  if(n == 2){
    return 2
  }
  var dp = [1, 1, 2, 5];
  for (var i = 4; i <= n; i++) {
    var left = 0,
        right = i - 1,
        sum = 0;
    while (left < i) {
      sum += dp[left] * dp[right];
        left++;
        right--;
    }
    dp[i] = sum;
  }
  return dp[n];
};

n = 4
console.log(numTrees(3))
