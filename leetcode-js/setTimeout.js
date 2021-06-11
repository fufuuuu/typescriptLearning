var boom = new Promise((resolve, reject)=>{
  let num = Math.random()
  if(num < 0.5){
    setTimeout(() => {
      resolve(1)
    }, 2000);
  }else{
    reject(2)
  }
}).then((result) => {
  return result
}).catch((result)=>{
  return result
})

boom.then((result) =>{
  console.log(result)
})