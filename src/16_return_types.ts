const double = (n: number) => n * 2; // return type inference

// explicit return type
const double2 = (n: number): number => n * 2;

function booleanToNum(b: boolean): number {
  return b ? 1 : 0;
}
