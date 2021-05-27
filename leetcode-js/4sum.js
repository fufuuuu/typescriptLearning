// 4sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function unique(matrix) {
  let obj = {};
  let res = [];
  matrix.map(item => {
      item.sort((a, b) => a - b);
      if (!obj.hasOwnProperty(item)) {// 判断对象中是否有这个属性名
          obj[item] = item;
          res.push(item);
      }
  })
  return res;
}
var fourSum = function(nums, target) {
  let ans = []
  if(nums.length < 4){
    return ans
  }
  nums.sort((a,b) => a-b)
  for(let i = 0;i < nums.length-2;i++){
    for(let j = i + 1;j < nums.length-1;j++){
      let left  = j - 1
      let right = j + 1

      while(left >= 0 && right <nums.length){

        if(left === i){
          left --
        }else{
          if(nums[left]+nums[i]+nums[j]+nums[right] === target){
            ans.push([nums[left],nums[i],nums[j],nums[right]])
            if(left){
              left--
            }else{
              right++
            }
          }else if(nums[left]+nums[i]+nums[j]+nums[right] > target){
            left --
          }else{
            right ++
          }
        }
      }
    }
  }
  return unique(ans)
};

nums = [-2,-1,-1,1,1,2,2], target = 0
console.log(fourSum(nums, target))