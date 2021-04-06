/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode-cn.com/problems/two-sum/submissions/
 */
nums = [3,3], target = 6

var twoSum = function(nums, target) {
  var number = []
  for(let i = 0; i<nums.length-1 ;i++){
    for(let j = i+1; j < nums.length;j++){
      if(nums[i]+nums[j] === target){
        number.push(i,j)
        return(number)
      }
    }
  }
};

console.log(twoSum(nums,target))