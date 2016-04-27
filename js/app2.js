    $(document).ready(function () {
    for (var myNumber = 1; myNumber <= 100; myNumber++) {
        if (myNumber % 15 === 0) {
            $('body').append("<p>FizzBuzz</p>");
        } else if (myNumber % 3 === 0) {
            $('body').append("<p>Fizz</p>");
        } else if (myNumber % 5 === 0) {
            $('body').append("<p>Buzz</p>");
        } else {
            $('body').append("<p>" + myNumber + "</p>");
        }
    }
});
