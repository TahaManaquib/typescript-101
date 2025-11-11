function summAll(...nums: number[]): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(summAll(1, 2, 3, 4, 5));

// Tuple rest
function makeRange(
  ...args: [start: number, end: number, step?: number]
): number[] {
  const [start, end, step = 1] = args;

  const output: number[] = [];

  for (let i = start; i <= end; i += step) {
    output.push(i);
  }

  return output;
}
console.log(makeRange(1, 5));
console.log(makeRange(1, 5, 2));

function draw(x: number, y: number) {
  console.log(x, y);
}

const points = [10, 20];
// draw(...points); // points is not a tuple

const fixedPoints: [number, number] = [10, 20]; // fixedPoints is a tuple
const fixedPoints2 = [11, 22] as const; // fixedPoints is a tuple with fixed values also
draw(...fixedPoints);
draw(...fixedPoints2);
