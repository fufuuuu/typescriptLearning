/**
 * https://leetcode-cn.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var height = [1,1,1,1,2,2,2,3]

 // 方法一 ： 暴力解决一切
// var maxArea1 = function(height) {
//   var len = height.length,maxS = 0,s = 0
//   for(var k=0;k<len;k++){
//     for(var j=0;j<k;j++){
//       s = Math.min(height[k],height[j]) * (k-j)
//       if(s > maxS){
//         maxS = s
//       }
//     }
//   }
//   return maxS
// }

// 方法二 ： 双指针法
var maxArea2 = function(height) {
  var len = height.length,l = 0, r = len - 1;
  var maxr = 0;
  while(l < r){
    if(height[l] < height[r]){
      maxr = Math.max(maxr,(r-l) * height[l])
      l++
    }else{
      maxr = Math.max(maxr,(r-l) * height[r])
      r--
    }
  }
  return maxr
}

console.log(maxArea2(height))

