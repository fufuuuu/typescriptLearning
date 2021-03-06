/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 */

// function getLongestSubstring(Array){
//   var subs = []
//   flag = 0
//   maxsize = 0
//   size = 0
//   bp = 0
//   for (let i = 0;i < Array.length; i++){
//     for (let j = 0;j<i;j++){
//       if(subs[j]=== Array[i]){
//         flag = 1
//         bp = j
//         break
//       }
//     }
//     if(flag){
//       if(size > maxsize){
//         maxsize = size
//       }
//       flag = 0
//       subs.reverse()
//       for(let k = 0;k<=bp;k++)
//       {
//         subs.pop(subs[k])
//         size --
//       }
//       subs.reverse()
//       subs.push(Array[i])
//       size ++
//     }else{
//       size += 1
//       if(size > maxsize){
//         maxsize = size
//       }
//       subs.push(Array[i])
//     }
//   }
//   console.log(subs)
//   return maxsize
// }
// var lengthOfLongestSubstring = function(s) {
//   var arr = s.split('')
//   if(arr.length == 1 || arr.length == 0){
//     return arr.length
//   }
//   else{
//     return getLongestSubstring(arr)
//   }
// };

const s = "abcbefbb"
var lengthOfLongestSubstring = function(s) {
  const occ = new Set()
  let right = 0, ans = 0
  const len = s.length
  for (let i = 0; i < len; i++) {
    while (right < len && !occ.has(s.charAt(right))) {
      occ.add(s.charAt(right))
      right++
    }
    console.log(occ)
    occ.delete(s.charAt(i))
    console.log(occ)
    ans = Math.max(ans, right - i)
  }
  return ans
};

console.log(lengthOfLongestSubstring(s))