function throttle(fn, delay) {
  let timer = null

  return function () {
    let context = this
    let args = arguments
    if(!timer){
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay);
    }
  }
}