(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return this.radius ** 2 * Math.PI; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            let result;
            if (doRounding) {result = Math.round(this.getArea());}
            else result = this.getArea();

            console.log("Area of a circle with radius: " + this.radius + ", is: " + result);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
