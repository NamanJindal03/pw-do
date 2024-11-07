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

const arr = [1,2,4,10, 60];
const newArr = arr.map((elem, index, completeArr)=>{
    //altering the values present at index
    //and it gives you a new array, the input array remains as it is.
    return elem + index;
})
console.log(arr);
console.log(newArr);
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