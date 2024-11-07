
// setTimeout(()=>{
//     console.log('executed asyn')
// },1000)

// console.log('one')

let arr = [10, 20, 30]

function map(cb){
    const localArr = []
    for(let i=0; i<arr.length; i++){
        localArr.push(cb(arr[i]))
    }
    return localArr
}

const newArr = map((entry)=>{
    return entry + 100
})

console.log(newArr);//I should get the updated array

