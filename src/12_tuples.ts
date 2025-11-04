// tuples - fixed length and fixed types

let a: [number, string, boolean] = [1, "a", true];

type Row = [number, string?];
const rows: Row[] = [[1, "a"], [2, "b"], [4]];
