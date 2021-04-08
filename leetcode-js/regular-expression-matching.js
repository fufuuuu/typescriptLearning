/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
s = "aa" ,p = "ab"
var isMatch = function (s, p) {
  return new RegExp('^' + p + '$').test(s)
};

console.log(isMatch(s,p))