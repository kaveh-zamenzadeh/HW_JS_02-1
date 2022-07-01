const leftHand = +prompt("Enter left hand number");
const operator = prompt("Enter operator");
const rightHand = +prompt("Enter right hand number");

let result = 0;

switch (operator) {
    case "+":
        result=leftHand+rightHand
        break;
    case "-":
        result=leftHand-rightHand
        break;
    case "*":
        result=leftHand*rightHand
        break;
    case "/":
        result=leftHand/rightHand
        break;
    default:
        break;
}
console.log(leftHand)
console.log(operator)
console.log(rightHand)
document.write(result)