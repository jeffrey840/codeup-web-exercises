"use strict";
(function () {
//alert("javascript");

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === 'red') {
//         return "this color is red"
//     } else if (color === 'orange') {
//         return "this color is orange"
//     } else if (color === 'yellow') {
//         return "this color is yellow"
//     } else {
//         return "I dont know"
//     }
// }
// console.log(analyzeColor('yellow'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// function analyzeColor() {
//     let answer = randomColor;
//     return answer
// };
// console.log(analyzeColor());

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(color) {
//     switch (color) {
//         case 'red' :
//             return "this color is red"
//         case 'orange' :
//             return "this color is orange"
//         case 'yellow' :
//             return "this color is yellow"
//         case 'green' :
//             return "this color is green"
//         case 'blue' :
//             return "this color is blue"
//         case 'indigo' :
//             return "this color is indigo"
//         case 'violet' :
//             return "this color is violet"
//         default:
//             return "choose another color"
//     }
//
// }
//console.log(analyzeColor('red'));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let userInput = prompt("whats you favorite color?")
//     alert(analyzeColor(userInput));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


// function calculateTotal(luckyNumber,totalAmount) {
//     if (luckyNumber === 5) {
//         return "0";
//     } else if (luckyNumber === 4) {
//         return totalAmount - totalAmount / 2;
//     } else if (luckyNumber === 3) {
//         return totalAmount - totalAmount * .35;
//     } else if (luckyNumber === 2) {
//         return totalAmount - totalAmount * .25;
//     } else if (luckyNumber === 1) {
//         return totalAmount - totalAmount * .10;
//     } else {
//         return totalAmount
//     }
// };

// console.log(calculateTotal(6,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6


// var luckyNumber = Math.floor(Math.random() * 6);
//
//     function calculateTotal(luckyNumber,totalAmount) {
//         if (luckyNumber === 5) {
//             return "0";
//         } else if (luckyNumber === 4) {
//             return totalAmount - totalAmount / 2;
//         } else if (luckyNumber === 3) {
//             return totalAmount - totalAmount * .35;
//         } else if (luckyNumber === 2) {
//             return totalAmount - totalAmount * .25;
//         } else if (luckyNumber === 1) {
//             return totalAmount - totalAmount * .10;
//         } else {
//             return totalAmount
//         }
//     };
//
// var totalAmount = prompt('what was your total bill?')
// alert(`your lucky number is ${luckyNumber}`);
// var appliedDiscount = calculateTotal(luckyNumber,totalAmount)
// alert(`your original amount was ${totalAmount} and your final total is
//  ${appliedDiscount}`)


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// let wouldYouLIkeToPlay = confirm('would you like to enter a number?');
// function numberCheck(x) {
//     if (wouldYouLIkeToPlay === true) {
//     } else {
//        alert('ok bye');
//     }
// }
// let letsPlay = parseFloat(prompt('Input a number'));
// alert('this is your number added to 100: ' + (letsPlay + 100));
// function oddOrEven(cxnum) {
//     if (cxnum % 2 == 0) {
//         alert('your number is even');
//     } else {
//         alert('your number is odd')
//     }
// }
// oddOrEven(letsPlay);
// function isPosOrNeg(cxnum2) {
//         if(cxnum2 >= 0) {
//             alert('your number is positive')
//         }else {
//             alert('your number is negative')
//         }
// }
// isPosOrNeg(letsPlay);
// numberCheck(wouldYouLIkeToPlay);

})();

