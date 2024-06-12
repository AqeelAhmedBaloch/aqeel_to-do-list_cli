#! /usr/bin/env node

import inquirer from "inquirer";

console.log('==================================');
console.log('Welcome to To DO List CLI Project.');
console.log('==================================\n');


let myLoop = true;
let toDoListArray: string[] = [];

while (myLoop) {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "todoItem",
      message: "Enter Item in you To Do List!",
    },
    {
      type: "confirm",
      name: "addMore",
      message: "Do you want to add more it",
      default: false,
    },
    {
      type: "confirm",
      name: "seeList",
      message: "Do you want to see the list? ",
      default: false,
      when(userInput) {
        return userInput.addMore === false;
      },
    },
  ]);

  const { todoItem, addMore, seeList } = userInput;

  if (todoItem) {
    toDoListArray.push(todoItem);
  }

  if (seeList) {
    console.log("\nHere is your To Do List:");
    toDoListArray.forEach((item, index) => {
      console.log(`${index + 1}, ${item}`);
    });
  }

  myLoop = addMore;
}
