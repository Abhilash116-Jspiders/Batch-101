console.log("Hello World");

//string number, boolean, null and undefined

let number: number = 10;
console.log(number);
if(number < 20)
    number += 10;

console.log(number);//



/* 
Variables in TypeScript
*/

let age: number = 10;
// age = "20"
let personName: string = "Abhi";

let isMarried: boolean = true;

let numbers: number[] = [10, 20, 30];


/* 
Any type in TypeScript
*/

let a;

let b:any = "10"

function calculateSum(a, b) {
    console.log(a+b);
}