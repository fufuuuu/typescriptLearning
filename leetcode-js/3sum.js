/**
 * https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 * 解题思路
 * 为了方便去重，首先将数组排序
 * 遍历数组，取当前遍历的数nums[i]作为基数，遍历数后面的数为寻找数组
 * 在寻找数组设定2个起点，最左侧为left(i+1)，最右侧为right (num.length-1)
 * 判断三数是否等于0，如果等于0，加入结果，left和right移动一位
 * 如果小于0，left向右移动一位
 * 如果大于0，right向左移动一位
 */
function bubbleSort(arr) {
  let len = arr.length;
  //共需要n-1趟排序
  for(let i = 1; i < len; i++){
      for(let j = 0; j < len - i; j++){
          if(arr[j] > arr[j + 1]){
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //解构赋值进行交换
          }
      }
  }
  return arr;
}

// 判断数组内是否已经存在
function isNewArr(arr,newArr){
  let flag = 1
  for(let i = 0;i < arr.length;i++){
    let f = 0
    for(let j = 0;j < newArr.length;j++){
      if(newArr[j] != arr[i][j]){
        f = 1
      }
    }
    if(f == 0){
      flag = 0
    }
  }
  if(flag){
    arr.push(newArr)
  }
  return arr
}
var threeSum = function(nums) {
  var newArr = [],tempArr = []
  bubbleSort(nums)
  console.log(nums)
  for(let i= 0;i < nums.length;i++){
    let left  = i - 1,right = i + 1
    while(left>=0&&right<=nums.length-1){
      if((nums[left]+nums[i]+nums[right]) == 0){
        tempArr = [nums[left],nums[i],nums[right]]
        console.log(tempArr)
        isNewArr(newArr,tempArr)
        left--
      }else if(nums[left]+nums[i]+nums[right] < 0){
        right++
      }else{
        left--
      }
    }

  }
  return newArr
}

var nums = [3,0,-2,-1,1,2]
console.log(threeSum(nums))