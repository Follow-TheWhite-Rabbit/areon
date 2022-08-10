
function calc(num1, num2, operation) {

    num1 = checkNumber(num1)
    num2 = checkNumber(num2)

    switch (operation) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            alert('Invalid operation, try again: (+, -, *, /)')
    }
}

let numberOne = +prompt('Enter the first number')
let numberTwo = +prompt('Enter the second number')
let mathOperation = prompt('Enter the mathematical operation to be performed (+, -, *, /)')


function checkNumber(number) {
    while (isNaN(+number) || number === null || number === "") {
        number = prompt('You entered not a number, please try again.', number)
    }
    return +number
}

console.log(calc(numberOne, numberTwo, mathOperation))

