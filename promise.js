// const func = function(){
//     console.log('abcd');
// }
// console.log(func);

// var abcd = 10;

// (function(){
//     var abcd = 20;
//     console.log(abcd);
// })()

// //iife -> immediately invoked function expressions

// function getMutualFriends(){
//     setTimeout(()=>{
//         console.log('got the mutual friendns')
//     },1000)
// }

// // console.log(abcd)
// function getFriends(){
//     setTimeout(()=>{
//         console.log('I got the friends')
//         getMutualFriends()
//     },1000)
// }

// setTimeout(()=>{
//     //getting user details
//     console.log('user details fetched')

//     getFriends()
    
// }, 1000)

// console.log('first')
// console.log('first')
// console.log('first')
// console.log('first')
// console.log('first')
// console.log('first')
// console.log('first')

// setTimeout(()=>{
//     //getting user details
//     console.log('user details fetched')

//     setTimeout(()=>{
//         console.log('I got the friends')
//         setTimeout(()=>{
//         console.log('got the mutual friendns')
//     },1000)
//     },1000)
    
// }, 1000)

//as a different file 
// function deliveryPartnerCode(orderDetails, cb){
//     //the delivery partner takes some unknown amount of time consider 12 hours for us say 12 seconds

//     setTimeout(()=>{
//         console.log('Internal compony informaiton: order is about to be dispatched');
//     },12000) //this can be random

//     cb()
// }


// //our company file
// function orderReceived(orderInfo){
//     //got the order 

//     //attach order id and some more details
//     orderInfo.id= Date.now();
//     orderInfo.fastDelivery = true;

//     deliveryPartnerCode(orderInfo, ()=>{
//         //inform the customer that the order has been dispatched
//         console.log('Customer Message: order dispatched');
//     })

//     console.log('order received, thanks for ordering');
// }

// orderReceived({name: 'mac pro m1', price: '2 lakh'})

// console.log('naman');

// console.log('\n')

// throw 'abcd'

// console.log('abcd')
const arr = [10, 20, 30]

const output = arr.map((entry)=>{
    return entry + 200;
})