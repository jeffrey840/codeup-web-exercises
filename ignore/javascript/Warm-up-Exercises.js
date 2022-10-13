
//question 1
// Write a JavaScript function that accepts the 3 lengths of a triangle and outputs the triangle’s area.
//     Reverse a String: Write a JS function that accepts a string and returns the string in reverse. example input: codeup, example output: puedoc

//function
//function parameters must be 3
//outputs the traingles area

function area(a, b, c) {
    let totalNum = a + b + c;
    let div = totalNum * .5;
    console.log(`The area of this triangle is ${div}`)
}
// area(1,2,55,)

//question 2
//must be string
//reverse string
//ex: codeup/puedoc
function reverse(x) {
    if (typeof x === 'string') {
        // let splitString = x.split("")
        // let reverseArray = splitString.reverse();
        // let joinArray = reverseArray.join("");
        console.log(x.split("").reverse().join(""));
    } else {console.log("this is not a string") }
}
// reverse('reverse string')

//question 3
// Print numbers 1-100. If # is divisible by 3 print Fizz. If # is
// divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz

//prints num 1-100
//if div by 3 : print fizz
//if div by 5 :print buzz
// if div by 3 and 5: fizz buzz

// let randomNumber = Math.ceil(Math.random() * 100 + 1)
// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }
    for (let randomNumber = 1; randomNumber < 100; randomNumber++) {
        if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
            console.log(randomNumber + " is fizz buzz")
        }else if (randomNumber % 3 === 0) {
            console.log(randomNumber + " is fizz")
        }else if (randomNumber % 3 === 5) {
            console.log(randomNumber + " is buzz")
        }else { console.log(randomNumber)}
    }

//question 4
//Write a function to shuffle an array to a completely and entirely random order.

//must  be function
//make a random variable
// let randomNumber = Math.ceil(Math.random() * 50 + 1)

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

let arr = [2, 11, 37, 42];
shuffle(arr);
console.log(arr);

//question 5

// Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
// 2. Write a function that returns the reading status of each of the following books:
    let library = [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            readingStatus: true
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            readingStatus: true
        },
        {
            author: 'Suzanne Collins',
            title:  'Mockingjay: The Final Book of The Hunger Games',
            readingStatus: false
        }];

function sorting (Array) {
    Array.forEach(function (arr) {
        console.log(`The reading status for ${this.library} is ${this.readingStatus}`);
    })

}
sorting(library)


// / Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// // example input: [1,2,3,4,5] expected output: [2,4]
//
// let input = [1,2,3,4,5]
//
// function evenNum(input) {
//     let result = input.filter(x => x % 2 == 0)
//     console.log(result);
// }
// console.log(evenNum(input))
//
// // Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
//
// //     example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// // expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
//
// function addToArr(arr, key) {
//     arr.map(key => ({...key, continent: 'Asia'}))
// }
// console.log(addToArr());











