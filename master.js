// Master file that imports funcations from different files w.r.t their requirements
// i.e if user required addition function then Addition funcation from add.js file call
// other funcations calls on same pattern.
// In addition also add module thats continue program till required
import inquirer from 'inquirer';
import { Addion } from './add.js';
import { Subtraction } from './sub.js';
import { multiplication } from './mul.js';
import { division } from './div.js';
let repeat = true;
while (repeat) {
    const answers = await inquirer.prompt([
        {
            message: "Enter first number",
            type: "number",
            name: "num1",
        },
        { message: "Enter second number",
            type: "number",
            name: "num2",
        },
        {
            message: "Enter required operation ",
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
        },
    ]);
    let { num1, num2, operator } = answers;
    let result = 0;
    if (num1 && num2 && operator) {
        if (operator === "+") {
            result = Addion(answers.num1, answers.num2);
        }
        else if (operator === "-") {
            result = Subtraction(answers.num1, answers.num2);
        }
        else if (operator === "*") {
            result = multiplication(answers.num1, answers.num2);
        }
        else if (operator === "/") {
            result = division(answers.num1, answers.num2);
        }
        console.log(`Your required operation is "${operator}" and result of ${answers.num1} ${operator} ${answers.num2} is =  ${result}`);
    }
    else {
        console.log("Kindly input required numbers");
    }
    //console.log(`Your required operation is "${operator}" and result of ${answers.num1} ${operator} ${answers.num2} is =  ${result}`);
    const response1 = await inquirer.prompt({
        type: "list",
        name: "response",
        choices: ["Yes", "No"],
        message: "Do you want to continue "
    });
    if (response1.response === "Yes") {
    }
    else
        break;
}
console.log("Program terminated");
