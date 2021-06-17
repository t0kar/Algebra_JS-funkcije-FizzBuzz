function findFizzBuzz(max) {
    var fizzBuzz = [];
    var array_length;

    for (var i = 0; i <= max; i++) {
        if (i === 0) continue;

        var message = "";

        if (i % 3 === 0) message += "fizz";
        if (i % 5 === 0) message += "buzz";

        if (message !== "") fizzBuzz.push(message);
    }

    return fizzBuzz;
}

var fizzBuzz1 = findFizzBuzz(20);
console.log(fizzBuzz1, "array length is", fizzBuzz1.length);
var fizzBuzz2 = findFizzBuzz(40);
console.log(fizzBuzz2, "array length is", fizzBuzz2.length);

