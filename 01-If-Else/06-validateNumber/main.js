let firstNumber = +prompt("first number : ");
let secondNumber = +prompt("second number : ");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Invalid number");
} else {
    alert(`sum : ${firstNumber + secondNumber}`);
}


