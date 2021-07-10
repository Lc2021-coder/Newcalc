const readlinesync = require("readline-sync");
const { Console } = require('console');

start();

function start() {
    
    function add(num1,num2){
        console.log(num1 + num2);
    }
    function subtract(num1,num2){
        console.log (num2- num1);
    }
    function multiply(num1,num2){

        console.log(num1 * num2);
    
    }
    function divide(num1,num2){
        console.log(num1 / num2);
        
    }
    function calculate(num1,num2, operationfunction){
     
    }
    
    const firstNumber = readlinesync.questionInt("please enter your first number:");
    const secondNumber = readlinesync.questionInt("please enter your second number:");
    const operation = readlinesync.question("please enter the operation you want to perform: add, subtract, multiply, divide:");
    
    if(operation==="add"){
     add(firstNumber, secondNumber)   
    }
if(operation==="subtract"){
subtract(firstNumber, secondNumber)
}
if(operation=== "multiply"){
multiply(firstNumber, secondNumber)
}
if(operation==="divide"){
divide(firstNumber, secondNumber)
}

//this end the st

}
