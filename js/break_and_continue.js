
(function() {
//ask user for an od input between 1 - 50

//skip over user input

//(use loop and break) if user does not return a number between 1
// and 50 ask again for an input

//(use a loop and a continue statement)only return  odd numbers
// between 1 - 50

//skip over user input

    // user is prompted to pick a number 1 - 50, number is assigned a variable userInput
    //while loop is applied, while userInput meets the parameter criteria of even or true, -
    // - the user is prompted to return a number 1 -50


    let userInput = Number((prompt("Pick an odd number between 1 and 50.")));
    while (userInput % 2 === 0) {
        userInput = Number((prompt("Pick an odd number between 1 and 50.")));
    }



    // chrome console outputs "Number to skip is: " + userInput
    //for loop is applied, "i" must meet the parameter criteria,
    // The outer if outputs "Here is an odd number: " + i, in the chrome console when the -
    // - parameter criteria is true.
    //the inner if outputs "Yikes! Skipping number: " + userInput, in the chrome console when the -
    // - parameter criteria is true.

    console.log("Number to skip is: " + userInput);
    for(let i = 1; i < 50;i++){
        if (i === parseFloat(userInput)){
            console.log("Yikes! Skipping number: " + userInput)
            continue;
        }
        if (i % 2 !== 0){console.log("Here is an odd number: " + i)}
    }

})();
