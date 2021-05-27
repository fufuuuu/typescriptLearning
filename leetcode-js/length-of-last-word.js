// length-of-last-word
/**
 * @param {string} s
 * @return {number}
 */

const s = "a   "
var lengthOfLastWord = function(s) {
  let arr = []
  arr = s.split(' ')
  arr = arr.filter(i => i && i.trim() )
  if(!arr.length || !arr){
    return 0
  }
  return arr[arr.length-1].length
};

console.log(lengthOfLastWord(s))