// 学习参考文章：https://segmentfault.com/a/1190000006082676

// function packageMaxValue(weight, value, size){
//   // 省略参数合法性校验
//   let bagMatrix = []
//   for(let w = 0; w <= size; w++) {
//       // js不能直接创建二维数组，所以在此初始化数组
//       bagMatrix[w] = []
//       for (let j = 0; j < 5; j++) {
//           // 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0
//           if(w === 0) {
//               bagMatrix[w][j] = 0
//               continue
//           }
//           // 背包的容量小于物品j的重量，那么就没有上述情况a了
//           if(w < weight[j]){
//               bagMatrix[w][j] = bagMatrix[w][j-1] || 0
//               continue
//           }
//           bagMatrix[w][j] = Math.max((bagMatrix[w-weight[j]][j-1] || 0) + value[j], bagMatrix[w][j-1] || 0)
//       }
//   }
//   return bagMatrix
// }
let weight = [4, 5, 6, 2, 2]
let value = [6, 4, 5, 3, 6]

console.log(packageMaxValue(weight, value, 10))

function  packageMaxValue(weight, value, size) {
  let packageMatrix = []
  for(let i = 0;i <= size;i++){
    packageMatrix[i] = []
    for(let j = 0; j < weight.length; j++){
      if(i === 0){
        packageMatrix[i][j] = 0
        continue
      }
      if( i < weight[j]){
        packageMatrix[i][j] = packageMatrix[i][j-1] || 0
        continue
      }
      packageMatrix[i][j] = Math.max((packageMatrix[i-weight[j]][j-1] || 0) + value[j], packageMatrix[i][j-1] || 0)
    }
  }
  return packageMatrix
}