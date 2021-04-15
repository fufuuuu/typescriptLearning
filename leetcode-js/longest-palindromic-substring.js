/**
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 * @param {string} s
 * @return {string}
 */
s = "babcad"
// //1、暴力解法两次循环
// var longestPalindrome1 = function(s) {
//   let maxLen = 1, begin = 0;
//   for(let i=0; i<s.length-1; i++){
//     for(let j=i+1; j<s.length; j++){
//        if(isPalindrome1(s,i,j) && j-i+1>maxLen){
//          maxLen = j-i+1;
//          begin = i
//        }
//     }
//   }
//   return s.substr(begin,maxLen)
// };
// var isPalindrome1 = function(s,left,right) {
//   while(left<right){
//       if(s[left]!==s[right]) return false;
//       left++;
//       right--;
//   }
//   return true;
// }
//2、中心扩散；最优解
// var longestPalindrome2 = function(s) {
// let maxLen = 1, begin = 0;
// for(let i=0; i<s.length-1; i++){
//    let oddLen = isPalindrom2(s,i,i); //奇数
//    let evenLen = isPalindrom2(s,i,i+1); //偶数
//    let theLen = Math.max(oddLen,evenLen);
//    if(theLen>maxLen){
//      maxLen = theLen;
//      begin = i - Math.floor((maxLen-1)/2)
//    }
// }
// return s.substr(begin,maxLen);
// }
// var isPalindrom2 = function(str,left,right){ //2,3
// while(left>= 0 && right<str.length){
//   if(str[left]!=str[right]) break;
//   else{
//     left--;
//     right++;
//   }
// }
// return right-left-1;
// }
// //3、动态规划；优化暴力解法
// var longestPalindrome3 = function(s) {
//  let len = s.length;
//  let dp = new Array(len).fill().map(item=>[]);
//  for(let i=0; i<len; i++){
//    dp[i][i] = true;
//  }
//  let maxLen = 1; begin = 0;
//  for(let j=1; j<len; j++){
//     for(let i=0; i<j; i++){
//       if(s[j]!=s[i]){
//         dp[i][j] = false;
//       }else{
//         if( j-i < 3){
//           dp[i][j] = true;
//         }else{
//           dp[i][j] = dp[i+1][j-1]
//         }
//       }
//       if(dp[i][j] && (j-i+1)>maxLen){
//          maxLen = j-i+1;;
//          begin = i;
//       }
//     }
//  }
//  return s.substr(begin,maxLen)
// }

// 4. 中心扩散
var longestPalindrome = function(s) {
  let maxLen = 1,begin = 0;
  for(let i=0;i<s.length-1;i++){
    let oddLen = isPalindrom(s,i,i) // 奇数子回文串
    let evenLen = isPalindrom(s,i,i+1) // 偶数子回文串
    let theLen = Math.max(oddLen,evenLen) // 最大子回文串长度
    if(theLen > maxLen){
      maxLen = theLen
      begin = i - Math.floor((maxLen-1)/2)
    }
  }
  return s.substr(begin,maxLen);
}
var isPalindrom = function(str,left,right){
  while(left>= 0 && right<str.length){
    if(str[left] != str[right]) break;
    else{
      left--;
      right++;
    }
  }
  return right-left-1
}

console.log(longestPalindrome(s))