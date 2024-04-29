#! /usr/bin/env node

import inquirer from "inquirer"

const answer: {
    sentence:string
} = await inquirer.prompt([
    {
        message:"Please Enter Your Sentence to count the words:",
        type:"input",
        name:"sentence"
    }
])

const wordsCount =answer.sentence.trim().split(" ")
console.log(wordsCount)
console.log(`Your Sentence Words Count ${wordsCount.length}`);
