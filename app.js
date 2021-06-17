function findFizzBuzz(max) {
    var fizzBuzz = [];

    for (var i = 0; i <= max; i++) {
        if (i === 0) continue;

        var message = "";

        if (i % 3 === 0) message += "fizz";
        if (i % 5 === 0) message += "buzz";

        if (message !== "") fizzBuzz.push(message);
    }

    return fizzBuzz;
}

console.log(findFizzBuzz(20));
console.log(findFizzBuzz(40));
