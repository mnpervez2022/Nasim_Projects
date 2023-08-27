import inquirer from "inquirer";
const cont = true;
while (cont) {
    const repeat = await inquirer.prompt({
        type: "list",
        name: "choice",
        choices: ["Yes", "No"],
        message: "Do you want to repeat Yes/No ",
    });
    if (repeat.choice === "Yes") {
        console.log("Welcome again");
    }
    else {
        break;
    }
}
console.log("last message after last {}");
