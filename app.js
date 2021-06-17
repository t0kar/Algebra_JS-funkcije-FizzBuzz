function findFizzBuzz(min, max, modulo_3_msg = "fizz", modulo_5_msg = "buzz") {
    var fizzBuzz = [];

    for (var i = min; i <= max; i++) {
        if (i === 0) continue;

        var message = "";

        if (i % 3 === 0) message += modulo_3_msg;
        if (i % 5 === 0) message += modulo_5_msg;

        if (message !== "") fizzBuzz.push(message);
    }

    return fizzBuzz;
}

var fizzBuzz1 = findFizzBuzz(5, 20, "diss", "miss");
console.log(fizzBuzz1, "array length is", fizzBuzz1.length);
var fizzBuzz2 = findFizzBuzz(10, 80, "riss", "kiss");
console.log(fizzBuzz2, "array length is", fizzBuzz2.length);

