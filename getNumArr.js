var randomNum = []
function getRandomNum(){
    return Math.floor(Math.random()*31 + 2)
}

function isNewNum(num,arr) {
    let flag = 1
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == num){
            flag = 0
            console.log('cunzaisame')
        }
    }
    if(flag){
        console.log('push!')
        arr.push(num)
    }
}
function getNumArr(){
    while(randomNum.length < 5){
        var newNum = getRandomNum()
        console.log(newNum)
        isNewNum(newNum,randomNum)
    }
    return randomNum
}


console.log(getNumArr())
