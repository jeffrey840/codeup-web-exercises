(function() {

//while loops
    //"i" is assigned a number of 1
    //while loop is implemented, "i" is less than 17,the output of, 2 ^ i or 2**i,is stored in result
    //var result is logged in the chrome console until the while loop parameter is false.
    let i = 1;
    while (i < 17) {
        let result = 2**i;
        console.log(result);
        i++;}


//do while loops
    //a number between 50 and 100 is stored in a variable allCones
    let allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Total: " + allCones);

    // do while loop executes the "{}" code block inside ,while the "()" condition inside is met.
    do {
        // A number from 1 to 5 is stored in the variable bought.
        let bought = Math.floor(Math.random() * 5) + 1;
        // If the output of cones - bought is less than of equal to 0.
        //bought + " cones sold." is displayed in the console
        //bought is subtracted from allCones and stored in allCones
        // this cycle continues until the if parameter is false.

        if ((allCones - bought) >= 0) {
            console.log(bought + " cones sold.");
            allCones = allCones - bought;
        //when the if parameter is false, "Can't sell you " + bought + ". I only have " + allCones,
        //is displayed in the chrome console.
        } else {
            console.log("Can't sell you " + bought + ". I only have " + allCones);
            continue;
        }
        //The code block is executed while the parameter, allCones > 0 || allCones < 0, is true.
    } while (allCones > 0 || allCones < 0);


     if (allCones === 0)  {console.log("Yay! I sold them all!")}
        else{ console.log("Woops, we have more...")}

})();

