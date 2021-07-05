const firstNumber = +prompt("Enter the first number");
const secondNumber = +prompt("Enter the second number");
const mathOperation = prompt("Enter the math operation to be performed: +, -, *, /.");

function calcNumber (firstNumber, secondNumber) {

    if (mathOperation === "+") {
        console.log(firstNumber + secondNumber);

    } else if (mathOperation === "-") {
        console.log(firstNumber - secondNumber);

    } else if (mathOperation === "*") {
        console.log(firstNumber * secondNumber);

    } else if (mathOperation === "/") {
        console.log(firstNumber / secondNumber);

    } else {
        alert("Incorrect data entered");
    }
}
calcNumber (firstNumber, secondNumber);



//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const firstNumber = +prompt("Enter the first number");
// const secondNumber = +prompt("Enter the second number");
// const mathOperation = prompt("Enter the math operation to be performed: +, -, *, /.");
//
// function calcNumber (firstNumber, secondNumber) {
//         switch (mathOperation) {
//             case "+":
//                 console.log(firstNumber + secondNumber);
//                     break;
//              case "-":
//                  console.log(firstNumber - secondNumber);
//                     break;
//              case "*":
//                  console.log(firstNumber * secondNumber);
//                     break;
//              case "/":
//                  console.log(firstNumber / secondNumber);
//                     break;
//             default:
//                 alert("Incorrect data entered");
//         }
// }
//
// calcNumber (firstNumber, secondNumber);