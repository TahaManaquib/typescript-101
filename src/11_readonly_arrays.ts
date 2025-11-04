const variable: readonly number[] = [1, 2, 3];
const variable2: ReadonlyArray<number> = [11, 22, 33];

function sum(arr: readonly number[]): number {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sum(variable));
console.log(sum(variable2));
console.log(sum(variable2));
