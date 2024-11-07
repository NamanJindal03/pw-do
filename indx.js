//social media applciation 

//sign up -> 
/* 
    first name ->
    last name -> 
*/

/* 
    full name of the user -> 

    let firstName;
    let lastName;
    let fullName = firstName + lastName 
*/

function giveFullName(fName, lName){
    return fName+ lName
}
giveFullName()

/* 
    A function can also be a variable
*/

//Function Expressions

// let func1 = function random(){
//     return 1+2
// }

/* 
    HOF are the funciton which can receive any funtion definition from the params, or they return a funciton
// */

// function HOF(num){
//     return function abcd(){
//         console.log('I am present in a function called as HOF')
//     }
// }
// // function HOF(num, normal){
// //     normal()
// // }

// // function normal(){
// //     return 1+2
// // }


// const value = HOF(1)
// console.log(value)
// HOF(1, normal)
// console.log(value()) //output???

/* 
    function definition
    function reference 
*/

/* 
    A
    B C
    D E F
    G H I J
*/

/* 
    String.fromCharCode(65)
    String.charCodeAt()
*/
    let alphabetNum = 65;
    let charInEachRow = 1;

       
    while("J".charCodeAt() >= alphabetNum ){
        let charToPrint = charInEachRow;
        let stringForRow = ''
        while(charToPrint !=0 && "J".charCodeAt() >= alphabetNum){
            stringForRow = stringForRow + String.fromCharCode(alphabetNum) + ' ';
            alphabetNum++;
            charToPrint = charToPrint -1;
        }
        console.log(stringForRow)
        // console.log('\n');
        charInEachRow = charInEachRow+1;
    }

