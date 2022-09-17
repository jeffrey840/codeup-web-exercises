(function() {

//function showMultiplicationTable

function showMultiplicationTable(x) {
    for (let i = 0; i < 11; i++) {
        let a = i * x;
        console.log(`${i} * ${x} = ${a}`)
    }
}

showMultiplicationTable();

// Returns is odd if number is even between 200 and 20
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.ceil(Math.random() * (200 -20) + 20)
    if (randomNumber % 2 === 0) {console.log(`${randomNumber} is even`)}
    else (console.log(`${randomNumber} is odd`))
}

//number pyramid
for (let i = 1; i < 10; i++) {
    let string = i.toString()
    let result = string.repeat(i);
    console.log(result)
}

//100 to 5 with decreasing values of 5
for (let i = 105; i >= 10; i--) {
    let a = i - 5;
    if (a % 5 === 0) {console.log(a)}
}

 })();






