// understand what is type parameter - <T>
// understand how ts infers T from arguments implicitly

// generic is a function, where the types are defined at a later stage
// <T> is a placeholder, so when the function is called ts infers the type from the argument

function id<T>(x: T): T {
  return x;
}
// ts will inter T
// id(5) - T = number
// id("str") - T = string

const xyz = id("5");
console.log(xyz + 2);

function firstGen<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(firstGen([]));
console.log(firstGen([1, 2, 3]));

// without generics - (x: unknown) => unknown
// with generics - <T>(x: T) =>   T
function wrap<T>(value: T): { value: T } {
  return { value };
}
