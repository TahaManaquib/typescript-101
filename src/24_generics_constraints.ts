// <T> - contraint T so that only certain shapes are allowed
// <T extends X>
// key constraints <k extends keyof T> - k must be a key of T

function getLength<T extends { length: number }>(x: T): number {
  return x.length;
}

console.log(getLength("hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength({ length: 10 }));
// console.log(getLength(10));

type User101 = {
  id: string;
  name: string;
  age: number;
};
function getUserInfo<T, K extends keyof T>(arr: T[], key: K): Array<T[K]> {
  return arr.map((item) => item[key]);
}

const usersData: User101[] = [
  { id: "1", name: "John", age: 30 },
  { id: "2", name: "Jane", age: 25 },
  { id: "3", name: "Bob", age: 40 },
];
console.log(getUserInfo(usersData, "name"));
// console.log(getUserInfo(usersData, "email")) // email is not present in usersData, so K is giving error
