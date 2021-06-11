function debounce(fn, delay) {
  let timer = null
  return function (s) {
    let context = this
    let args = arguments

    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, delay);
  }
}
let flag = 0; // 记录当前函数调用次数
// 当用户滚动时被调用的函数
function foo() {
  flag++;
  console.log('Number of calls: %d', flag);
}

document.addEventListener('click', debounce(foo, 2000))