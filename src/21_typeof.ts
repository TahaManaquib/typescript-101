// typeof for primitives
function describeTypeof(x: unknown) {
  if (typeof x === "number") {
    return "number";
  }
  if (typeof x === "string") {
    return "string";
  }
  if (typeof x === "boolean") {
    return "boolean";
  }
  if (typeof x === "symbol") {
    return "symbol";
  }
  if (typeof x === "bigint") {
    return "bigint";
  }
  if (typeof x === "function") {
    return "function";
  }
  if (typeof x === "object") {
    return "object";
  }
  return "unknown";
}

console.log(describeTypeof(123));
console.log(describeTypeof("123"));
console.log(describeTypeof(true));
console.log(describeTypeof(null));
console.log(describeTypeof(undefined));
console.log(describeTypeof(Symbol("123")));
console.log(describeTypeof(BigInt(123)));
console.log(describeTypeof({}));
console.log(describeTypeof(() => {}));

function info(z: unknown) {
  if (Array.isArray(z)) {
    return "array";
  }
  if (z instanceof Date) {
    return "date";
  }
  if (z instanceof Error) {
    return "error";
  }
  return "unknown";
}

console.log(info([1, 2, 3]));
console.log(info(new Date()));
console.log(info(new Error("err")));
