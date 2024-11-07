// var myBlockScopeVariable2 = 10;
// let letVariable = 20;
// function randomFunc(){
//     var myBlockScopeVariable = 10;
//     console.log(myBlockScopeVariable);

// }
// randomFunc();
// // console.log(myBlockScopeVariable);
// console.log(myBlockScopeVariable2);
// console.log(letVariable);

// function isThePersonEligibleToVote(person){
//     if(person.age > 18 && person.country === 'india'){
//         console.log('person is eligible to vote')
//     }
// }

//because a normal function returns undefined when their is no value being returned
//an arrow function returns whatever is last executed 
// const abcd= (cb) => (
//     cb
// )

// function higher(f1, f2){
//     console.log(f1);
//     f1('abcd', 'defg', 'fgh');
//     return f2;
// }

// const func = higher(
//     ()=>{console.log('random')}, 
//     abcd(10) //is this a callback??
// );

/* 
    abcd -> function definition or passing a function as a reference

    abcd() -> function execution -> calling a funciton
*/




// func(
//     ()=>{console.log('random2')}
// )
// const obj = {key: 'k1', value: 'v1'}

// const {value, key} = {...obj}

// console.log(value); // v1 |
// console.log(key); // k1 | 

// const [a, b] = [100, 200];  //array destructing? 
// console.log(a,b); //100, 200

// function random(key, value){
//     //complete the function 
//     //an object created over 
//     let sampleObj = {};
//     sampleObj[key] = value;
//     return sampleObj;
// }
// let key = 'myKey';
// let value = 'myValue'
// const ans = random(key, value);
// console.log(ans)  //{key: myValue}

//I should get {myKey: myValue} -> object? 

/* 
    css and html questions ->
    1) semantic tags
    2) what is accessibility and why it is important
    3) visibility vs hidden
    4) selectors in css
    5) positions
    6) flex vs grid
    7) psuedo selectors
    8) units and responsiveness


*/


/* 
    JS Questions ->

    let var const and its output questions
    function in javascript -> arrow function, normal functions
    callbacks 
    Popular higher order functions -> map, reduce, filter, find
    scope questions
    this in arrow vs normal
    bind apply 
    currying
    closure
    code writing questions on something related to classes
    prototype chain
    destructing 
    settimeout,setinterval 
    async programming -> event driven architecture | event loop
    microtask queue and callback queue
    promises 
    then catch
    async await 
    try catch
    differnecce between the above two
    why we switched from callbacks to promises
    api calling -> fetch, axios
    http methods
    polyfills
    error handling


    creation of elements through JS
    events

*/
/*
Responsive ->
    1) Flex or grids
    2) (px) avoided why???, rem, em, %, vh, vw
        border -> px
        font size -> rem 
        em -> borders, padding, margins
        //vw %

        
    3) media query ->

*/

/* 
    * * * * * 
    *
    *
    * * * * *
    
*/

// let n = 4

// let row = 0;
// let maxStar = 5;
// while(row < n){
//     let str = '';
//     if(row == 0 || row == n-1){
//         for(let i=0; i< maxStar; i++){
//             if(i==0){
//                 str = '*';
//                 continue;
//             }
//             str = str + ' *'
//         }
//         console.log(str);
//         row++;
//         continue;
//     }
//     console.log('*');
//     row++;
// }


// let n = 8

// let row = 0;
// let maxStar = 5;
// while(row < n){
//     let str = '*';
//     if(row == 0 || row == n-1){
//         for(let i=0; i< maxStar-1; i++){
//             str = str + ' *'
//         }
//     }
//     console.log(str);
//     row++;
// }

// let str = '';
// for(let i =5; i>0; i--){
//     if(i==5){
//         str = str+ i;
//         continue;
//     }
//     str = str + ',' + i;
// }
// console.log(str)

// let maxNumber = 10;
// let row = 1;
// while(row <= maxNumber){
//     let numStart = 1;
//     let str = ''
//     while(numStart <=row){
//         str = str + ' ' + numStart;
//         numStart++;
//     }
//     console.log(str);
//     row++;
// }

/* 
    Everything is an Object -> 

    Array
    String 
    N

*/

// const str = "my string";
// const str2 = new String('somethign')


/* 
    let and const -> ES6 -> 

    To improve JS 
*/

/* 
    var -> hoisting -> it was too lilient 
*/

// console.log(randomVariable)
// let randomVariable = 10;

/* 
    closures ->

    encoded -> 

*/

function close(){
    let a = 100;
    return function inner(){
        console.log(a);
    }
}

const innerFunc = close();
console.log(innerFunc()); //why we get 100?