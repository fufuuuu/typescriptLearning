/**
 * @param {string} s
 * @return {number}
 */
s = "4193 with words"
var myAtoi = function (str) {
  const number = parseInt(str, 10);
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(-2, 31);

  // 无法转换的情况返回 0
  if (isNaN(number)) {
      return 0;
  }
  // 转换结果超出范围的情况
  if (number < Min || number > Max) {
      return number < 0 ? Min : Max;
  }
  return number;
};

console.log(myAtoi(s))

str = "     -12313 sdada"
const number = parseInt(str, 10);
console.log(number)