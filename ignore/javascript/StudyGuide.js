//
// Core competencies assessed
//
// Reading and following directions
//
// Producing solutions that match the problem specification
//
// Using Git and working with GitHub
//     Cloning a git repository from GitHub
// Creating your own branch
// Committing and pushing work to a new branch on GitHub
//
// Programing fundamentals in JavaScript
// Working with values, variables, and data types
// Using assignment and comparision operators
// Working with JS internal functions to make decisions and perform actions.
//     Using conditional logic to make decisions inside functions
// Writing functions that take in inputs, process, and return outputs.
//
//     Here's some example word problems:
//
//
// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// console.log(timesFour(0))//0
// console.log(timesFour("5"))//20
// console.log(timesFour(-5));//-20
// console.log(timesFour('Texas')); //false
// console.log(timesFour([2, 1, 0])) //false
// console.log(timesFour(true))//false
// console.log(timesFour(null)) //false

function timesFour(input){
    if (isNaN(input)){//if this is true it will return false
        return false;
    }else if (typeof input === "number" || parseInt(input)){
        return Number(input) * 4;
    }else {
        return false;
    }
}


// // Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.

// console.log(convertDaysToHours(0)) //0
// console.log(convertDaysToHours('5')) // 120
// console.log(convertDaysToHours('Texas')) //false
// console.log(convertDaysToHours([2, 1, 0])) //false
// console.log(convertDaysToHours(true)) //false
// console.log(convertDaysToHours(false)) //false

//function named convertDaystoHours
//input has to be a number
//multiply days * 24(hours)
//if the unput is not numberi or numeric string the function will return false

function convertDaysToHours(input) {
    if (isNaN(input)) {
        return false
    } else if (typeof input === "number" || parseInt(input)) {
        return Number(input)  * 24;
    }else {
        return false
    }
}



// // Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.

//function named calculateTax
//must take in 2 inputs: totalPaid / taxPercent
//inputs must b e numeric or strings
//return must look like "xx.xx" return 2 decimals
//if the two string are not nuimberic return false

// function calculateTax(totalPaid, taxPercent) {
//     if (isNaN((totalPaid || taxPercent))) {
//         return false
//     } else {
//         return Number(totalPaid + (totalPaid * (taxPercent/100))).toFixed(2)
//     }
// }


// function calculateTax(totalPaid, taxPercent) {
//     if ((typeof totalPaid || typeof taxPercent) === 'undefined') {
//         return false
//     }else if (typeof totalPaid !== typeof taxPercent){
//        return false
//     }else if (typeof 'number' === typeof 'number') {
//         return Number(totalPaid + (totalPaid * (taxPercent/100))).toFixed(2)
//     }else if (typeof 'string' === typeof 'string') {
//         return Number(totalPaid + (totalPaid * (taxPercent/100))).toFixed(2)
//     }else {
//         return false
//     }
// }





console.log(calculateTax(25, 8))               // “$27.00"
console.log(calculateTax(10, 12))             // “$11.20”
console.log(calculateTax(120, 15.5))           // “$138.60"
console.log(calculateTax(10, true))           // false
console.log(calculateTax([1, 2, 3], 10))      // false
console.log(calculateTax("Codeup", 100))   // false
console.log(calculateTax())                   // false
