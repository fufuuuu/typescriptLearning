/**
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let maxstr = ""
  for(let i = 0;i < strs.length;i++){
    for(let j = 0;j < strs[i].length;j++){
      console.log(strs[i][j])
    }
  }
}

strs = ["flower","flow","flight"]
longestCommonPrefix(strs)