// inference - TS infers(understands) the type of a variable based on the value assigned to it

let count = 0; // TS infers count to be a number

count.toFixed(); // valid

// count = "red"; // error

let color = "red"; // TS infers color to be a string

color = "blue"; // valid

// color = 1; // error

let numbers = [1, 2, 3]; // TS infers numbers to be an array of numbers

numbers.push(4); // valid

// numbers.push("5"); // error

let value: number | string; // TS infers value to be a number or a string

value = Math.random() > 0.5 ? 1 : "red"; // valid

value = 1; // valid
value = "red"; // valid
// value = true; // error
