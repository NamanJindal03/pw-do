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
    #sample  //private variable -> private 
    #sample2
    constructor(name){
        this.#sample = name;
        this.naman = 'abcd' //public
    }
    get sam(){
        return this.#sample
    }
    set sam(someVal){
        this.#sample = someVal
    }
    validFuncToChangeSample(newValue){
        this.#sample = newValue;
        this.#pvtMethodAny()
    }
    #pvtMethodAny(){
        console.log('called a pvt method')
    }
    //custom function to modify the vlaue of #sample. The value of #sample
    //the access of #sample is restriced outside the class.
    // setSampleValue
}


const rhino = new Animal('rhiinnoo');
// rhino.naman = 'llllll'; //from this we can see we are able to modify the things defined n a class as well
rhino.sample = 'new property'
// console.log(rhino)
// console.log(rhino.sam)
// rhino.sam = 'new name, done through proper method'
// console.log(rhino.sam)
rhino.validFuncToChangeSample('yes, I have changed it');
console.log(rhino.sam)
// rhino.#pvtMethodAny()


// rhino.naman = 'yes'
// console.log(rhino.sample);
// rhino.sample = 'new rhino value';
// console.log(rhino.sample);

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

// const newObj = {
//     email : 'namanjindal@gmail.com',
//     name: 'naman jindal',
//     password : "12345",
//     appType : "ecommerce"
// }

// JSON.parse()

// const val = JSON.stringify(newObj);
// console.log(newObj);
// console.log(val);

// const normal = JSON.parse(val);
// console.log(normal);

/* 
    API -> communicate over a network -> 

    browser does that for me -> 
    xmlHttp ->
    fetch ->>>>>>>>>>>>>>> frontend -> 
    fetch ->>>>>>>>>>>>>>> frontend -> 
    axios 
// */

// const res = fetch('https://fakestoreapi.com/products'); //makign an api call
//     // console.log(res) //treat this code as synchronous code -> 
// res.then((data)=>{
//     console.log('data', data )
//     return data.json(); //converting the stream into js obejct
// })
// .then((data)=>{
//     console.log(data)
// })

// fetch("https://dummyjson.com/products/1", {})
//   .then((response) => response.json()) //
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

function Sample(){
    this.name = 'naman'
}

Sample.prototype.common = function(){
    console.log('I am a common funciton which every instance will have')
}
const s1 = new Sample();
s1.common();
const s2 = new Sample();
s2.common();

//classes, extends -> these all ideally never were part of JS
//internall whenever you call any such keyword -> 




const funcExpress = function random(){
    console.log('this si a function expresssion')
}
// funcExpress()
const funcE2 = () => {

}

//IIFE -> immediately invoked function expressions

(function random2(){
    console.log('calling this')
})()

function step3(){
    console.log('work done')
}

function step2(){
    //do my own work 
    step3()
}

function step1(step2, step3){
    //do my own work
    step2()
}

function manager(step1, step2, step3){
    step1(step2, step3)
}
manager(()=>{}, ()=>{}, ()=>{})


async function managerPromise(){
    const ans = await step1();
    const ans2= await step2();
    const finalAns = await step3() 
}