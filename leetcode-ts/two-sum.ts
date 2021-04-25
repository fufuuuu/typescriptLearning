/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode-cn.com/problems/two-sum/submissions/
 */
nums = [3,3];
const target = 6;

function tSum(nums: number[], target: number): number[] {
    const result: number[] = []
  
    for (let i = 0; i <= nums.length; i++) {
      let avaliableIndex = null
      const avaliableValue = nums.some((num, index) => {
        avaliableIndex = index
        return index !== i && nums[i] + num === target
      })
  
      if (avaliableValue) {
        result.push(i, avaliableIndex)
        break
      }
    }
  
    return result
  }


console.log(tSum(nums,target))