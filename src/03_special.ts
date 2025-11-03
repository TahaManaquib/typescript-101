// strictNullChecks
// let title: string = "intro";
// title = undefined;
// title = null;

let subtitle: string | undefined | null = null;
subtitle = "hello";
subtitle = undefined;
subtitle = null;

// void: function doesn't return a useful value (can return undefined)
function log(message: string): void {
  console.log(message);
  return undefined;
}

// never: function never returns (it cannot have a reachable endpoint)
// function fail(message: string): never {
//   console.log(message);
// }
function fail(message: string): never {
  throw new Error(message);
}

// NEVER USE ANY - AVOID AS MUCH AS POSSIBLE
const someValue: any = JSON.parse('{"name": "John"}');
// someValue.anotherValue.toFixed(2) // will compile because of any type, but will break at runtime
