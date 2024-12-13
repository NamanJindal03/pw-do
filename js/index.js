// import sampleImage from './img/sample.jpeg'

// const rootElem = documet.querySelector('.root');

// const cardDiv = document.createElement('div');
// const head = document.createElement('h3');
// head.textContent = 'Card Head'

// rootElem.appendChild(cardDiv)


//similarities
/* 
    both are  higher order functions 

    the internal workign is different for them -> 

    structure of both of them are same


*/

// const arr = [1,2,4,10, 60];
// const newArr = arr.map((elem, index, completeArr)=>{
//     //altering the values present at index
//     //and it gives you a new array, the input array remains as it is.
//     return elem + index;
// })
// console.log(arr);
// console.log(newArr);
// let sum = 0;
// arr.forEach((elem, index, completeArr)=>{
//     //doesnt give you a new array
//     //it majorly gets used to iterate over the complete array and do some static calculation
//     sum += elem;
// })
// console.log(sum)

/* 
    map datastructure -> 

    object -> 

    ordering -> 

    map -> ordering -> 
        pushed -> 1 then 2 then 3

    object -> 1 then 2 then 3 
            2 3 1

    iterator -> 
*/

// == ===
// data type comparision whereas === does a data type comparision

// console.log(1=='1'); //true
// // console.log(1==='1'); //false

// console.log(typeof 1);
// console.log(typeof '1');
// // typeof '1';

// //the first step is making the datatype as same -> 
// console.log(parseInt('1'));

//when we do somehting like 1== '1'
//step 1 -> is the datatype same? NO
//step 2 -> make the datatype as same by auto coercision(data type conversion) -> '1' got converted to 1
//step 3 -> now compare the value -> 1==1 -> true

/// 3 < 4 -> true
/// 3 <= 4 -> true
/// 3 < 3 -> false
/// 3 <= 3 -> true 

/* 
    target = "_blank" -> attribute
*/
// <


//await -> async function is necesary

// async function sampleApiCall(){
//     //i am doing some async code of calling an api
//     const data = await fetch('https://fakestoreapi.com/products'); //wait 
//     console.log(data)

//     //cannot move to the next line till I have the data from above
//     const trueData = await data.json(); //asyc process

//     console.log(trueData)
// }
// sampleApiCall()

// {todos.map((todoItem) => {
//     return (
//       <TodoItem
//         key={todoItem.id}
//         text={todoItem.text}
//         isCompleted={todoItem.completed}
//       />
//     )}


/* 
    promise.all() -> [async, async, async]

    promise.any()



*/

// console.log(Math.ceil(5.4))
// console.log(Math.floor(5.4))

// console.log(Math.ceil(Math.random()*10)) //random number between 0 to 1 -> 1 excluded

/* 
    Math.abs()
    Math.sqrt()
    Math.pow()

*/
const inputBoxElem = document.querySelector('#calcInput')
inputBoxElem.value = ''

const stack = [];


function finalCalc(str){

}

finalCalc('2+3*8+(2*3)')