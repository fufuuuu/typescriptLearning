/**
 * @param {string} s
 * @return {number}
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
 */
s = "abcabcbb"
function getLongestSubstring(Array){
  var subs = []
  flag = 0
  maxsize = 0
  size = 0
  bp = 0
  for (let i = 0;i < Array.length; i++){
    for (let j = 0;j<i;j++){
      if(subs[j]=== Array[i]){
        flag = 1
        bp = j
        break
      }
    }
    if(flag){
      if(size > maxsize){
        maxsize = size
      }
      flag = 0
      subs.reverse()
      for(let k = 0;k<=bp;k++)
      {
        subs.pop(subs[k])
        size --
      }
      subs.reverse()
      subs.push(Array[i])
      size ++
    }else{
      size += 1
      if(size > maxsize){
        maxsize = size
      }
      subs.push(Array[i])
    }
  }
  console.log(subs)
  return maxsize
}
var lengthOfLongestSubstring = function(s) {
  var arr = s.split('')
  if(arr.length == 1 || arr.length == 0){
    return arr.length
  }
  else{
    return getLongestSubstring(arr)
  }
};

console.log(lengthOfLongestSubstring(s))