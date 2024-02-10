// this is a comment
/* this is also a comment,
   but in multiple lines
*/

// End statements with semicolons.
// It's also possible to not use semicolons, and 
// some people do - but it's bad practice.
const myName = "Fernando";

// I defined a constant above.
// The value of a constant cannot change.
// myName = "Augusto"; // will cause an error

// This is a variable. It can change values.
let myLastName = "Lopez";
myLastName = "Plascencia"; // This is okay.

// Variables can also be defined with "var",
// but this has disadvantages; don't do it.
var myCity = "Oakland";

// Use the console to print test output to your
// browser's developer console.
console.log(myName); 

// This is more useful:
console.log('myName: ', myName);

// If you don't use "let", "const" or "var", it will
// still work, but the variable will live in the 
// "global scope". More on that later. In the 
// meantime, just always use "let" or "const".

// By the way, you can also use
window.alert("This is an alert");
// to show a pop-up to the user instead.

/**
 * Primitive data types
 */

// number
const age = 30; // number
const height = 70.2; // also a number

// btw, you can check the data type of something like this:
console.log(typeof height); // outputs "number"

// string
const city = "San Francisco"; // a string
const state = 'CA'; // can use '', "", ``
// if using `` you can do a neat trick:
const location = `${city}, ${state}` // this is called
                                     // "interpolation"

// boolean
const isAwake = true;
const isAsleep = false;

// null
// it represents something that is "intentionally left blank"
const somethingNull = null;

// undefined
// variables that are not yet initialized have this data type
let somethingElse;
console.log(typeof somethingElse); // outputs "undefined"

// there are also "bigint" and "symbol", but they are rare

// Everything else that is not any of the above is an object.

/**
 * Basic operators
 * You can type these things in the console and the browser will
 * respond with the answer
 */

1 + 2; // 3
19 - 3; // 16
0.4 + 0.3; // 0.7
3 * 4; // 12
10 / 2; // 5
5 / 2; // 2.5

// The modulo operator: it returns the remainder of a division
20 % 2; // 0
20 % 3; // 2

// there are special "numbers" too:
1/0; // Infinity
-1/0; // -Infinity
0/0; // NaN ("Not a Number"). It's special in that it's never
     // equal to anything

// Negation:
!false; // true
!true; // false
!!false; // false -- little useful, but works

// Checking equality: use triple equals; this guarantees
// both value and type are the same
const a = 1;
a === 1; // true

// there is also double equals, which only looks at value
// and automatically converts type.
const b = '1';
a === b; // false
a == b; // true: b is converted to number for the comparison
// DO NOT use double equals; it leads to errors

// checking inequality is very similar
// !== checks both value and type
a !== b; // true
a != b; // false; type is converted. DO NOT USE.

// More comparisons
1 < 3; // true
1 > 3; // false
1 >= 1; // true; one is more than *or* equal to one
2 <= 3; // true; two is less than *or* equal to three

// some shorthands
let base = 10;
base += 2; // means: base = base + 2; its value is now 12
// there is also -=, *=, /=

// also, for the Java and C lovers:
base++; // means: base = base + 1
base--; // means: base = base - 1
// useful for cycles!

// Concatenation of strings:
const alphabet = 'abcd' + 'efg'; // 'abcdefg'
// you can also do interpolation though

// check the length of a string with:
alphabet.length; // 7
// note that this is a property; it needs no ()

/**
 * Control statements 1: the if statement
 */

// Use this when you have to take a decision.
// This works the same as in Java and other languages.

// First, let's ask for a value to the user.
// For testing purposes we can use window.prompt.
// window.prompt will always return a string.
const userName = window.prompt("Enter your name:");
if (userName.length === 0) {
    // This gets executed if the condition is true.
    window.alert("You did not enter anything.");
    // you can put as many statements as you want
    // inside of the block
    window.alert("I am sad.");
} else {
    // This gets executed if the condition is false.
    window.alert(`Your name is ${userName}.`);
}