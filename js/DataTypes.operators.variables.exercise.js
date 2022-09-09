<title>Data Types, Operators, and Variables </title>

/*
var a = 1;  answer:1
var b = a++;  answer:  the original console output is undefined , b is then called again and assigned 1.
var c = ++a; answer: the origin output is undefined, c is then called again
    and is immediately assigned 3 before "enter"
// what is the value of a, b, and c? answer:a=1, b=1, c=3
--------------

var d = "hello"; answer: 'hello'
var e = false; answer: 0

d++; answer:NaN, d is the type of string ,therefore not a number.
e++; answer:1,post increment, console prints 0, the value of e is incremented to 1.
--------------

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2; answer:NaN
--------------

var price = 2.7; answer:price is assigned the number 2.7.
price.toFixed(2); answer:'2.70', assigned a string with the value 2.70
--------------

var price = "2.7"; answer:console output is undefined
price.toFixed(2); answer:console returned an error TypeError: price.toFixed is not a function
price is assigned a string with the value 2.70, toFixed() method formats a number  not a string
--------------

isNaN(0) answer:false

isNaN(1) answer:false

isNaN("") answer:false

isNaN("string") answer:true

isNaN("0") answer:false

isNaN("1") answer:false

isNaN("3.145") answer:false

isNaN(Number.MAX_VALUE) answer:false

isNaN(Infinity) answer:false

isNaN("true") answer:true

isNaN(true) answer:false

isNaN("false") answer:true

isNaN(false) answer:false

// to illustrate why the isNaN() function is needed:
NaN == NaN answer:
--------------

!true answer:false

!false answer:true

!!true answer:true

!!false answer:false

!!0 answer:false

!!-0 answer:false

!!1 answer:true

!!-1 answer:true

!!0.1 answer:true

!!"hello" answer:true

!!"" answer:false

!!'' answer:false

!!"false" answer:true

!!"0" answer:true

--------------
*/


