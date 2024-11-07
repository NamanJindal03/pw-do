/* 
    1) You are allowed to pass one funciton inside another function
    2) YOu are allowed to return a function as part of a funciton
*/

// function HOF(cb){
//     return ()=>{
//         console.log('this is a new function')
//     }
// }

// const func = HOF();

// const callbackFuncLogic = function (){
//     console.log('this is a callback func')
// }

// const func2 = HOF(callbackFuncLogic)


/* 
    map
    filter
    forEach
    reduce 
*/

// Array.prototype.map = function (cb){

// }


// [].map((value)=>{
//     return value + 10;
// })

class Animal{
    #sample 
    #sample2
    constructor(name){
        this.#sample = name;
    }
    get sample(){
        return this.#sample
    }
    set sample(someVal){
        this.#sample = someVal
    }
    get sample2(){

    }
    setSampleValue
}

const rhino = new Animal('rhiinnoo');
console.log(rhino.sample);
rhino.sample = 'new rhino value';
console.log(rhino.sample);

// rhino.#sample = 10;
/* 
    abcddcba -> palindrome
    abcdcba -> palindrome 
    a
    aba 
*/

// const str = 'abdba';
// let endPointer = str.length -1;
// let startPointer = 0
// let flag = false;

// while(startPointer <= endPointer){
//     if(str[endPointer] !== str[startPointer]){
//         flag = true;
//         break;
//     }
//     startPointer = startPointer +1;
//     endPointer = endPointer -1;
// }

// if(flag){
//     console.log('not a palindrome')
// }
// else{
//     console.log('is a palindrome')
// }
/* 
    clean code -> blogs 

    ideally a developer -> thinking the names -> 
*/


/* 
    filter ->
    forEach 
*/

// function filterEvenValuesHOF(cb, originalArr){
//     //filter the values
//         let newArr = [];
//         for(let i=0; i<originalArr.length; i++){
//             if(originalArr[i] %2 === 0){
//                 newArr.push(originalArr[i])
//             }
//         }
//     //execute the cb
//     return cb(newArr)
// }
// //this was printing 
// const ans1 = filterEvenValuesHOF((arr)=>{
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i])
//     }
//     return arr;
// }, [1,10,11, 18, 20])

// const ans2 = filterEvenValuesHOF((arr)=>{
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum;
// }, [1,10,11, 18, 20])

// console.log("ans1", ans1);
// console.log("ans2", ans2)

/* 
    ...
*/

/* 
    rest -> 

*/

// function restExec(...a){
//     console.log(a)
// }

// restExec(1,2,3,4,5)

// const arrSpread = [10, 20, 30, 40]

// const arrSprad2 = [100, 200, 300]

// const combined = [...arrSprad2, ...arrSpread];
// console.log(combined)

// const mainContainerTag = document.querySelector('.container');
// console.log(mainContainerTag);

// const newDivElem = document.createElement('div');
// const childPElem = document.createElement('p');
// childPElem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quidem.';

// newDivElem.append(childPElem);

// console.log(newDivElem);

// mainContainerTag.append(newDivElem);