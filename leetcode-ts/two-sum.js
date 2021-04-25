/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode-cn.com/problems/two-sum/submissions/
 */
nums = [3, 3];
var target = 6;
function tSum(nums, target) {
    var result = [];
    var _loop_1 = function (i) {
        var avaliableIndex = null;
        var avaliableValue = nums.some(function (num, index) {
            avaliableIndex = index;
            return index !== i && nums[i] + num === target;
        });
        if (avaliableValue) {
            result.push(i, avaliableIndex);
            return "break";
        }
    };
    for (var i = 0; i <= nums.length; i++) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return result;
}
console.log(tSum(nums, target));
