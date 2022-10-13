// # JavaScript Review
//
// ## **1. I would appreciate a recap on callback functions. Especially in situations like:
// 	```javascript
// someArray.forEach(callbackFunction(element){function definition})
// ```
//
//
// #### callback functions
// - a function that gets passed as an _argument_ to another function
// - Methods (like _forEach_) we are not having to define, because those methods have already been created for us
//                                                                                                             - so every time we use a method like _forEach_ we are actually _calling_ that method (remember a method is just a function that is stored in an object) and we pass into it an _argument_
// - that _argument_ happens to be a _*callback function*_
// - it's called a _callback function_ because it's:
// 	- 1) a function
// - 2) being passed into another function (method) as an argument
//
//
// ##### callback functions example using forEach
//
// start with array of items:
//
// 	```javascript
// let pizzaToppings = ['pepperoni', 'jalapeños', 'pineapple', 'mushrooms']
// ```
//
// 	**loop through the array and print out each topping individually:**
//
// ```javascript
//    pizzaToppings.forEach()
//     // this CALLS the forEach method (on) pizzaToppings array
//    // (that's how it knows which array we're looping through)
//    ```
//
// **the (anonymous) callback function accepts each array item as _its_ argument:**
// ```javascript
//    pizzaToppings.forEach(function(topping){
//    console.log("I like " + topping + " on my pizza.");
//    };
//    ```
//
// - how does it know that the `topping` is the array's item?
// - the forEach method does that for us!
// 	- it extracts from the array each item and passes it into the callback function to be used.
//
//
//
// **So where's the callback function?**
//
// 	`function(topping){console.log("I like " + topping + " on my pizza.")}` )**is** the callback function
//
//
//
// ___
//
// 2. **I would like to go over the JS assessment retake.**
//
// ___
//
// ## **3. I wouldn't mind running through the objects section of javascript**
//
// ## `&&`
//
// ## **4. I could use a refresher on objects, and pulling/sending items to objects please.**
//
//
// ### JavaScript Objects
// - it's a data type in javascript
// - it's a tool used in javascript to STORE values
// - the values are stored with a label/identifier/name to reference the value being stored
//
//
//
// **create an object:**
//
// ```javascript
//     let myObj = {
//         itemOne: 'first item',
//         itemTwo: 'second item',
//         itemThree: 'third item'
//     }
//    ```
//
// **access items in an object using dot notation**
//
// - You first have to name the object whose item(values) you're wanting to access
// - Then you call on the property (the label/identifier) of the value you're trying to access
// - You have to _nest_ your way through the object to access (and use) the values stored in the object
//
// 	```javascript
//     let itemFromObject = myObj.itemTwo;
//     console.log(itemFromObject); // second item
// ```
//
// ### **Nested Objects**
//
// ```javascript
//     let countries = {
//         Guatemala: {
//             capital: 'Guatemala City',
//             location: 'Central America',
//             population: 16.86
//         },
//         Denmark: {
//             capital: 'Copenhagen',
//             location: 'Europe',
//             population: 5.83
//         },
//         SouthKorea: {
//           capital: 'Seoul',
//           location: 'East Asia',
//           population:  51.78
//         }
//     }
// ```
//
// #### Accessing Denmark's capital, Guatemala's population, and southKorea's location:
//
// 	```javascript
//     let capitalDenmark = countries.Denmark.capital;
//     console.log(capitalDenmark); // Copenhagen
//
//     let popGuate = countries.Guatemala.poulation;
//     console.log(popGuate); // 16.86
//
//     let skLoc = countries.SouthKorea.location;
//     console.log(skLoc); // East Asia
// ```
//
//
//   👩‍💻👨‍💻👩‍💻👨‍💻 **TRY IT YOURSELF** 👩‍💻👨‍💻👩‍💻👨‍💻
// ```javascript
// TODO: write a function that accepts the `countries` object and prints the following:
//  - Denmark population
//  - Guatemala location
//  - South Korea capital
// ```
//
// ### Object with nested array:
//
// 	**create the object**
// ```javascript
// let sportsTeams = {
//     basketball: ['spurs', 'lakers', 'bucks', 'rockets'],
//     soccer: ['bayern', 'manchester', 'real madrid', 'liverpool'],
//     tennis: ['nadal, r', 'federer, r (retired)', 'williams, s', 'sharapova, m'],
//     baseball: ['cubs', 'yankees', 'missions', 'red sox']
// }
// ```
//
// **accessing items INSIDE an array INSIDE an object**
//
// ```javascript
// // lakers
// let laTeam = sportsTeams.basketball[1]; // lakers
//
// // bayern
// let munichSoccer = sportsTeams.soccer[0]; // bayern
//
// //serena
// let usTennis = sportsTeams.tennis[2]; // williams, s
// ```
//
// **looping through ALL soccer teams**
//
// ```javascript
// // using forEach method
//
// sportsTeams.soccer.forEach(function(team){
//     console.log(team + " is my favorite team.");
// })
//
// // bayern
// // manchester
// // real madrid
// //liverpool
//
//
// // using for loop
//
// for(i = 0; i< sportsTeams.soccer.length; i++){
//     console.log(sportsTeams.soccer[i] + " is my favorite team");
// }
//
// // bayern
// // manchester
// // real madrid
// //liverpool
//
// ```
//
//
// 👩‍💻👨‍💻👩‍💻👨‍💻 **TRY IT YOURSELF** 👩‍💻👨‍💻👩‍💻👨‍💻
// ```javascript
// TODO: write a function that accepts the sportsTeam object and prints all baseball teams to the console
// ```
//
// 	```javascript
// TODO: write a function that adds an additional team to the soccer array and to the tennis array
// ```
//
// 	```javascript
// TODO: BONUS: write a function that accepts the sportsTeam object and removes the last item in each of the arrays
// ```
// ___
// ___
// ## **5. could we go over for and while loops**
//
// 	#### **Loops**
// - loops let us apply the same lines/block of code to a number of items in one action
//
// ##### **for loop**
//
//
// 	for loop syntax:
// 		```javascript
// for(starting point; keep going until this point; iterate through it this way;){
//     apply this code to each of the numbers in the array that is being looped through'
// }
// ```
//
// let's loop through an array of numbers
//
// ```javascript
// let nums = [2,4,6,8,10];
// ```
//
// loop through nums array
// 	```javascript
//
// // for - keyword starting a for loop
// // let i = 0; - we creating the i variable to hold the current index that we're on in the array and we're starting at 0 to begin at the beginning of the array (index 0)
// // i < nums.length - keep iterating through the array until you meet the array before it meets the end (arrays start at 0)
// // i++ - iterate through the array one-by-one
//   for(let i = 0; i < nums.length; i++){
//       console.log("the element we're currently on (aka: i) in the nums array is: " + nums[i]);
//   }
//
// // 2
// // 4
// //6
// //8
// //10
// ```
//
// 👩‍💻👨‍💻👩‍💻👨‍💻 **TRY IT YOURSELF** 👩‍💻👨‍💻👩‍💻👨‍💻
// ```javascript
// TODO: write a function that accepts the nums array and returns the same array but adds 2 to every number in the array;
//     expected output: [4,6,8,10,12]
// ```
//
//
//
//
// ___
// ## **6. I would like to have more better understanding on functions.**
//
// ### **functions**
//
// #### **function syntax**
// ```javascript
// function nameOfFunction(parameters - this is a placeholder that tells the function to hold a spot for SOMETHING until the actual value is passed in when this function is called){
//     the code that will run only ONCE the function has been called
// }
//
// // this is where we CALL the function to run
// nameOfFunction(argument - this is the ACTUAL value being passed into the function that will essentially 'replace' the parameter)
//
// ```
//
// **function example**
//
// // write a function that accepts a name and returns "hello [name]";
//
// ```javascript
// function sayHello(someonesName){
//
//     return "Hello, " + someonesName;
//
// }
//
// sayHello("Laura"); // Hello, Laura
// sayHello("Kenneth"); // Hello, Kenneth
// sayHello("Ana"); // Hello, Ana
//
//
// ```
