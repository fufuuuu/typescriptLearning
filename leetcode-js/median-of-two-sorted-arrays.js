/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
nums1 = [1,2,8], nums2 = [3,4,5,6,7]
//方法一：合并数组，调用.sort方法排序得出中位数。代码最少的方法，时间复杂度为O((m + n)log(m + n))。
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  console.log(arr)
  const { length } = arr;
  return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
};

// //方法二：双指针排序法，时间复杂度为O(m + n)。
// var findMedianSortedArrays = function(nums1, nums2) {
//   let reIndex = nums2.length - 1;
//   for (let i = nums1.length - 1; i >= 0; i--) {
//       while (nums1[i] <= nums2[reIndex] && reIndex > -1) {
//           nums1.splice(i + 1, 0, ...(nums2.splice(reIndex, 1)));
//           reIndex--;
//       }
//   }
//   const arr = nums2.concat(nums1);
//   const { length } = arr;
//   return length % 2 ? arr[Math.floor(length / 2)] : (arr[length / 2] + arr[length / 2 - 1]) / 2;
// };

//方法三：二分查找法，时间复杂度O(log(min(m, n)))。
var findMedianSortedArrays = function(nums1, nums2) {
  // 保证num1是比较短的数组
  if (nums1.length > nums2.length) {
      [nums1, nums2] = [nums2, nums1];
  }
  const length1 = nums1.length;
  const length2 = nums2.length;
  let min = 0;
  let max = length1;
  // 向下取整
  let half = Math.floor((length1 + length2 + 1) / 2);
  while (max >= min) {
      const i = Math.floor((max + min) / 2);
      const j = half - i;
      if (i > min && nums1[i - 1] > nums2[j]) {
          max = i - 1;
      } else if (i < max && nums1[i] < nums2[j - 1]) {
          min = i + 1;
      } else {
          let left,right;
          if (i === 0) left = nums2[j - 1];
          else if (j === 0) left = nums1[i - 1];
          else left = Math.max(nums1[i - 1], nums2[j - 1]);
          if (i === length1) right = nums2[j];
          else if (j === length2) right = nums1[i];
          else right = Math.min(nums1[i], nums2[j]);
          console.log(nums1,nums2)
          return (length1 + length2) % 2 ? left : (left + right) / 2;
      }
  }
  return 0;
};

console.log(findMedianSortedArrays(nums1,nums2))