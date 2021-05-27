/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

intervals = [[1,3],[2,6],[8,10],[15,18]]
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0;i < intervals.length;i++){
      if(intervals[i + 1] === undefined){
        break
      }


      if(intervals[i][0] <= intervals[i + 1][0] && intervals[i][1] >= intervals[i+1][0]){
        intervals.splice(i, 2, [intervals[i][0], intervals[i][1]>intervals[i+1][1] ? intervals[i][1] : intervals[i+1][1]])
        i--
      }
    }
    return intervals
};

console.log(merge(intervals))


// .splice方法：
// 例如 ：intervals.splice(i, 2, [intervals[i][0], intervals[i][1])
// 从位置i开始后面的2个元素删除并替换成[intervals[i][0],intervals[i][1]]
// const arr = [[0,1],[2,3],[4,5]]
let arr = ['0','1','2','3',"4","5"]
arr.splice(3,1,'9')
console.log(arr)