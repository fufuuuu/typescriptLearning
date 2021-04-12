/**
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let nums=[1000,500,100,50,10,5,1],
      chars=['M','D','C','L','X','V','I'];
  var arr = s.split('')
  console.log(arr)
  let sum = 0
  for(let i = 0;i < arr.length;i++){
    for(let j = 0;j < chars.length;j++){
      if(arr[i] == chars[j]){
        arr[i] = nums[j]
      }
    }
  }
  for(let i = 0;i < arr.length - 1;i++){
    if(arr[i] < arr[i+1]){
      arr[i] = -arr[i]
    }
    sum += arr[i]
  }
  sum += arr[arr.length-1]
  return sum
};


// map方法
var romanToInt = function(s) {
  const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  }

  let sum = 0;
  for(i = 0; i < s.length; i++) {
      const item = s[i]
      // 获取当前指针位置
      let val = map[item];
      if(val < map[s[i+1]]) {
          // 前面小于后面 后面 - 前面
          val = map[s[i+1]] - val;
          i++;
      }
      sum += val;
  }
  return sum
};

console.log(romanToInt('MCMXCIV'))