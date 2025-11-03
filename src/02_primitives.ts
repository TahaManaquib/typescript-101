// goal -> get to know about the primitives values in TS

let username: string = "john";
let age: number = 30;
let isMarried: boolean = true;
let maxNum: bigint = 2n ** 63n - 1n;
const token: unique symbol = Symbol("token");

function yearsToDays(years: number): number {
  return years * 365;
}
console.log(yearsToDays(7));
