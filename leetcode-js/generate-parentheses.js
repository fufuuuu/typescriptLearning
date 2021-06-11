// generate-parentheses
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var ans = []
  if(n === 1){
    return ['()']
  }
  if(n === 2){
    return ['()()','(())']
  }
};