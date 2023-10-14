// Practice exercise 2.1
// What are the types of these variables listed below? Verify this with typeof and
// output the result to the console:
// let str1 = 'Laurence';
// let str2 = "Svekis";
// let val1 = undefined;
// let val2 = null;
// let myNum = 1000;
// Operators 

let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log(typeof str1); // Output: string
console.log(typeof str2); // Output: string
console.log(typeof val1); // Output: undefined
console.log(typeof val2); // Output: object
console.log(typeof myNum); // Output: number


// Practice exercise 2.2
// Create a variable for your name, another one for your age, and another one for
// whether you can code JavaScript or not.
// Log to the console the following sentence, where name, age and true/false are
// variables:

let name = "samra khan";
let age = 20;
let canCodeJavaScript = true;

console.log(`My name is ${name}, I am ${age} years old, and it is ${canCodeJavaScript ? 'true' : 'false'} that I can code JavaScript.`);



// Practice exercise 2.3
// Write some code to calculate the hypotenuse of a triangle using the Pythagorean
// theorem when given the values of the other two sides. The theorem specifies that the
// relation between the sides of a right-angled triangle is a2
//  + b2
//  = c2
// .
// You can use prompt() to get the value for a and b. Write code to get the value from
// the user for a and b. Then square the values of both a and b before adding them
// together and finding the square root. Print your answer to the console.
// Assignment operators
// We have seen one assignment operator already when we were assigning values to
// variables. The character for this basic assignment operation is =. There are a few
// others available. Every binary arithmetic operator has a corresponding assignment
// operator to write a shorter piece of code. For example, x += 5 means x = x + 5, and
// x **= 3 means x = x ** 3 (x to the power of 3).
// The Pythagorean theorem only applies to right-angled triangles.
// The sides connected to the 90-degree angle are called the adjacent
// and opposite sides, represented by a and b in the formula. The
// longest side, not connected to the 90-degree angle, is called the
// hypotenuse, represented by c. 



// Get the values of a and b from the user
let a = parseFloat(prompt("Enter the value of side a:"));
let b = parseFloat(prompt("Enter the value of side b:"));

// Check if the input is valid (numbers)
if (!isNaN(a) && !isNaN(b)) {
  // Calculate the square of a and b
  let aSquared = a * a;
  let bSquared = b * b;

  // Calculate the square of the hypotenuse
  let cSquared = aSquared + bSquared;

  // Calculate the hypotenuse by taking the square root of cSquared
  let c = Math.sqrt(cSquared);

  // Output the result to the console
  console.log(`The hypotenuse of the right-angled triangle with sides a = ${a} and b = ${b} is c = ${c}`);
} else {
  console.log("Invalid input. Please enter valid numbers for sides a and b.");
}


// Practice exercise 2.4
// Create variables for three numbers: a, b, and c. Update these variables with the
// following actions using the assignment operators:
// • Add b to a
// • Divide a by c
// JavaScript Essentials
// [ 40 ]
// • Replace the value of c with the modulus of c and b
// • Print all three numbers to the console


// Create variables for three numbers
let  t= 10;
let  s= 5;
let  r = 3;

// Add s to t

t += s;

// Divide t by r

t /= r;

// Replace the value of r with the modulus of r and s

r %= s;

// Print all three numbers to the console
console.log("t: " + t);
console.log("s: " + s);
console.log("r: " + r);


// Self-check quiz

// 1. What data type is the following variable?
// const c = "5";

// Answer: string

// 2. What data type is the following variable?
// const c = 91;

// Answer: number

// 3. Which one is generally better, line 1 or line 2?
// let empty1 = undefined; //line 1
// let empty2 = null; //line 2

// Answer: Line 2 (let empty2 = null;) is generally better because null is typically used to represent 
// the intentional absence of any object value,
//  while undefined is often used to indicate a variable that has not been assigned a value

// 4. What is the console output for the following?
// let a = "Hello";
// a = "world";
// console.log(a);

// Answer: world

// 5. What will be logged to the console?
// let a = "world";
// let b = `Hello ${a}!`;
// console.log(b);

// Answer: Hello world!

// 6. What is the value of a?
// let a = "Hello";
// a = prompt("world");
// console.log(a);
// Chapter 2
// [ 45 ]

// Answer: The value of a will be whatever the user enters when the prompt function is called.
//  The value of a depends on the user's input.

// 7. What is the value of b output to the console?
// let a = 5;
// let b = 70;
// let c = "5";
// b++;
// console.log(b);


// Answer: 71 (The value of b is incremented by 1 using the b++ operation.)

// 8. What is the value of result?
// let result = 3 + 4 * 2 / 8;


// Answer: 4 (The expression 3 + 4 * 2 / 8 is evaluated from left to right, following the order of operations.)

// 9. What is the value of total and total2?
// let firstNum = 5;
// let secondNum = 10;
// firstNum++;
// secondNum--;
// let total = ++firstNum + secondNum;
// console.log(total);
// let total2 = 500 + 100 / 5 + total--;
// console.log(total2);


// Answer: total is 17, and total2 is 507. total is calculated first, and then total2 is calculated using 
// the updated value of total.

// 10. What is logged to the console here?
// const a = 5;
// const b = 10;
// console.log(a > 0 && b > 0);
// console.log(a == 5 && b == 4);
// console.log(true ||false);
// console.log(a == 3 || b == 10);
// console.log(a == 3 || b == 7);

// Answer:
// true
// false
// true
// true
// false




