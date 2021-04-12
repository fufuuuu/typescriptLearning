/**
 * https://leetcode-cn.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let nums=[1000,900,500,400,100,90,50,40,10,9,5,4,1],
      chars=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result='';
  while(num){
      // .shift方法删除并返回第一个元素
      if(num>=nums[0]){
          result+=chars[0];
          num-=nums[0];
      }else{
          nums.shift();
          chars.shift();
      }
  }
  return result;
};

console.log(intToRoman(3))