/**
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
s = "PAYPALISHIRING", numRows = 4
var convert = function(s, numRows) {
  var arr = s.split('')
  var newArr = []
  if(numRows === 1){
    return s
  }
  else{
    var n = numRows
    while(n--){
      for(let i = 0;i < arr.length;i++){
        if(i%(2*(numRows-1)) == n){
          newArr.push(arr[i])
        }
      }
      console.log(newArr)
    }
    return newArr.reverse().join('')

  }
};
console.log(convert(s,numRows))