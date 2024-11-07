// function top(cb, number){
//     //100 different steps 
//     // if(number > 100){
//         cb(number)
//     // }
// }

// function calculateSum(numb){
//     for(let i=0; i< numb; i++){
//         console.log(i);
//     }
// }
// //function definition
// top(calculateSum, 100)

// for(let i=0; i<100;i++){
//     console.log(i);
// }

[1,2,3,4,5].forEach((entry, index, completeArr)=>{
    console.log(entry) //simple printing purpose, simple loop running
    console.log('index', index)
    console.log(completeArr)
})

//filter -> filter, map 

let arr = [1,2,3,4,5];
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
    if(arr[i] > 3){
        break;
    }
}

function random(){

}

// DOM 
// CSSOM 
// Render Tree
// Layout