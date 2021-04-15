// /**
//  * https://leetcode-cn.com/problems/longest-common-prefix/
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function(strs) {
  let maxstr = ""
  let flag = 0
  if(strs.length === 0){
    return maxstr
  }
  let len = strs[0].length
  for(let i = 0;i < len;i++){
    for(let j = 1;j < strs.length;j++){
      if(strs[j][i] != strs[0][i]){
        flag = 1
        break
      }
    }
    if(flag){
      return maxstr
    }else{
      maxstr += strs[0][i]
    }
  }
  return maxstr
}

strs = []
console.log(longestCommonPrefix(strs))