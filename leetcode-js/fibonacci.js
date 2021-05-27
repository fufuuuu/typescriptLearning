// 输出第n位斐波那契数

const n = 10
function fibonacci(n) {
  if (n == 1){
    return 0
  }
  if (n == 2){
    return 1
  }
  while(n > 2){
    n--
    return fibonacci(n)+fibonacci(n-1)
  }
}

console.log(fibonacci(n))