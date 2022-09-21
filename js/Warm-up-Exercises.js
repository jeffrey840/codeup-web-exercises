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

// Print numbers 1-100. If # is divisible by 3 print Fizz. If # is
// divisible by 5 print Buzz. If # is divisible by both 3 and 5 print FizzBuzz

//prints num 1-100
//if div by 3 : print fizz
//if div by 5 :print buzz
// if div by 3 and 5: fizz buzz

let randomNumber = Math.ceil(Math.random() * 100 + 1)
function FB(randomNumber) {

    if (randomNumber % 3 === 0 && randomNumber % 5 === 0){
        console.log(`{$randomNumber} is fizz buzz`)
    }
}