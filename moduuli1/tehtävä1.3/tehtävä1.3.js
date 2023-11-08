    "use strict";
    const number1 = parseInt(prompt("Type a number."));
    const number2 = parseInt(prompt("Type a second number."));
    const number3 = parseInt(prompt("Type a third number."));
    const sum = (number1 + number2 + number3)
    const product = (number1 * number2 * number3)
    const average = ((number1 + number2 + number3)/3)
    document.querySelector('#target1').innerHTML = sum.toString();
    document.querySelector('#target2').innerHTML = product.toString();
    document.querySelector('#target3').innerHTML = average.toString();