new Promise((resolve, reject) => {
  console.log('初始化');
  if(false){
    resolve();
  }
  else{
    reject();
  }
})
.then(() => {
  console.log('执行「这个」');
  throw new Error('有哪里不对了');

  
})
.catch(() => {
  console.log('执行「那个」');
})
.then(() => {
  console.log('执行「这个」，无论前面发生了什么');
});