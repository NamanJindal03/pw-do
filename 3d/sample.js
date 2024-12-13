function add(num){

    // return function(num2){

    //     return num + add(num2)
    // }
	return function(num2){
		console.log(num2)
		if(num2 === undefined){
			return num;
		}
		console.log(num+num2);
		return add(num+num2)
	}
}

console.log(add(10)(20)(30)(40)(50)(100)(200)());


// function add(a,b,c){
// 	return a+b+c;
// }

// add(2,3,4)

// function curriedAdd(a){
// 	return function(b){
// 		return function(c){
// 			return a+b+c
// 		}
// 	}
// }
// curriedAdd(2)(3)(4)


// // function myFunction(){
// //     console.log(arguments);
// //     let sum = 0;
// //     for(let i=0; i< arguments.length; i++){
// //         console.log(arguments[i]);
// //         sum += arguments[i]
// //     }
// //     return sum
// //     // let sum=0;
// //     // for( let i=0;i < arguments.length;i++){
// //     //     sum += arguments[i];}
// //     //     return sum;
// // }
// // console.log(myFunction(1,2,3,4,5, 10, 29 , 50));


// //recursion -> when somebody calls itself -> 
// //when a function is calling himself only

// // function repeat(count){
// //     //base case
// //     if(count < 0){
// //         return;
// //     }
// //     console.log('repeat')
// //     repeat(count-1);
// // }
// // repeat(10);


// // const obj = {
// //     sample: function(){
// //         console.log('parent')
// //         return function(){
// //             console.log('abcd')
// //             return function(){
// //                 console.log('defg')
// //             }
// //         }
// //     },
// //     name: 'naman'
// // }
// // console.log(obj.name)
// // obj.sample()()();
// // const step1 = obj.sample();
// // const step2 = step1();
// // const step3 = step2();
// // console.log(step1);
// // console.log(step2);
// // console.log(step3);
// /* 
// Write a JavaScript function called curry that takes a function as an argument and return a curried versoin of that function.
//         The curried function should accept arguments one at a time and return a new function until all arguments are provided.
//         Then , it should execute the original function with all arguments.Test the curry function with a function that adds two numbers.

// */
// // function sum(){
// //     let localSum = 0;
// //     console.log(arguments);
// //     for(let i=0; i< arguments.length;i++){
// //         console.log(arguments[i])
// //         localSum += arguments[i];
// //     }
// //     console.log(localSum)
// // }


// // *********
// // let n = 10;
// // let str = '';
// // for(let i=0; i<n; i++){
// //     str += '*'
// // }
// // console.log(str)

// // const obj = {
// //         name: 'naman',
// //         age: 10
// // }
// // console.log(obj['name']);
// // console.log(obj.name);

// // const obj2 = new Object();
// // obj2.name = 'naman'
// // console.log(obj2);

// /* 
//         new ()

// */

// /* 
//         class or a constructor function 
// */

// // function Sample(){
// //         this.abcd = 10;
// // }
// // const s1 = new Sample();
// // console.log(s1);

// // function Animal(name, age, category){
// // 	this.name = name;
// // 	this.age = age;
// // 	this.category = category
// // }

// // Animal.prototype.getAgeAndCategory = function(){
// // 	return `Animal name is ${this.name} and its category is ${this.category}`
// // }

// // Animal.prototype.isBird = function(){
// // 	if(this.category === 'bird'){
// // 		return true;
// // 	}
// // 	else return false
// // }

// // const animal1 = new Animal('roger', 2, 'dog');
// // console.log(animal1);

// // const animal2 = new Animal('chichi', 1, 'bird');
// // console.log(animal2);

// // console.log(animal1.getAgeAndCategory());
// // console.log(animal2.getAgeAndCategory());

// // console.log(animal1.isBird())

// //Ecommerce -> users 

// //100 users -> 2 users -> 
// // const user1 = {
// // 	name: 'a',
// // 	age: 10,
// // 	phoneNumer: '12312313'
// // }
// // const user2 = {
// // 	name: 'b',
// // 	age: 11,
// // 	phoneNumer: '1231243243313'
// // }

// // new User('a', 10, '12312313');
// // new User('b', 11, '1231243243313')

// //function getAllOrders //calcUserDateOfBirth 


// // function curry(cb, args =[]){
// //     return function sample(numb){
// //         console.log(numb);
// //         if(numb === undefined){
// //             return cb(...args)
// //         }
// //         args.push(numb)
// //         console.log(args)
// //         return curry(cb, args);
// //     }
    
// // }

// // curry(sum)(3)(4)(5)();

// // function nonCurry(a,b,c,d){
// // 	return a+b+c+d;
// // }

// // console.log(nonCurry(1,2,3,4));
// // //if I have to make a curried version of the function -> 

// // function curried(a){
// // 	return function(b){
// // 		return function(c){
// // 			return function(d){
// // 				return a+b+c+d;
// // 			}
// // 		}
// // 	}
// // }

// //the way we call a curried function is like
// // console.log(curried(1)(2)(3)(4));

// /* 
// 	non-primitive types do not store their values directly. Instead, they store references to the location in memory where the actual data is kept.

// */

// //reference and value -> 

// //object and array -> references  -> non primitive datatypes
// //primitive -> boolean, number, symbol, undefined string 

// // 'use strict'
// // function sum(b, a){ //very wrong way to write a syntax 
// // 	console.log(a);
// // }
// // sum('',20)

// //interview question
// //var b;
// // function abcd(){
// // 	b = 10;
// // 	console.log(b);
// // }
// // abcd();
// // console.log(b)

// // class Animal{
// // 	constructor(name, species){
// // 		this.name = name;
// // 		this.species = species;
// // 	}
// // }
// // class WaterAnimals extends Animal{
// // 	constructor(noOfFins, timeToTakeOxygen, name, species){//name, species
// // 		super(name, species)
// // 		this.noOfFins = noOfFins;
// // 		this.timeToTakeOxygen = timeToTakeOxygen
// // 	}
// // }
// // class LandAnimals extends Animal{
// // 	constructor(noOfLegs, canFly){ //name, species
// // 		this.noOfLegs = noOfLegs;
// // 		this.canFly = canFly;
// // 	}
// // }
// // const a1 = new Animal('a', 'b');
// // console.log(a1)
// // const w1 = new WaterAnimals(2, 10, 'a', 'b');
// // console.log(w1)

// // const divElem = document.createElement('div');
// //we create a child element
// // we append some content inside the child elemnt
// // we might add some attributes and css on to it.
// //finally append the child element on to the div element
// //at the end append the div elem to an element already prpesent on the dom 

// /* 
// 	<div><p style="background-color:red">new content</p></div>


// 	reason is very simple we need something dynamic -> 
// 		api -> I want to create certain html, which can be done only using js
// */

// /* 
// 	what if we used a syntax similar to HTML but indeed we are able to do a dynamic job with it.

// 	React -> JSX -> which is an amalgation of HTML and JS 

// 	React -> lbrary -> inbox solutions -> 
// */




// /* 
// 	Ecommerce ->
// 		class Product {
// 			name
// 			price
// 			description
// 			seller
// 			images
// 		}

// 		class TechProducts {
// 			specifications
// 			usecase
// 			warranty
// 		}

// 		class ShoePiece{
// 			material: 
// 		}

// */

// const a = new Promise((resolve, reject)=>{
// 	resolve(100);
// })
// a.then((data)=>{
// 	return new Promise((resolve, reject)=>{
// 		resolve(1000)
// 	})
// })
// .then((data) => {
// 	console.log(data)
// })
// .catch((err)=>{
// 	console.log(err)
// })

console.log('a');
setTimeout(()=>{
	console.log('last')
},1000)
console.log('b');
console.log('c')