function func1(a: number, b: number): number {
  return a + b;
}

const nums2 = [1, 2, 3];

const doubled = nums2.map((num) => num * 2);
console.log(doubled);

// const square = (n) => n * n; // Always give annonations
// console.log(square(2));

type Point = {
  x: number;
  y: number;
};
const distanceFromOrigin = (p: Point) => {
  return Math.hypot(p.x, p.y);
};
console.log(distanceFromOrigin({ x: 3, y: 5 }));
