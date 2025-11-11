function greetOptional(name?: string): string {
  return `Hello ${name || "World"}`;
}
console.log(greetOptional());
console.log(greetOptional("John"));

function greetDefault(name: string = "World"): string {
  return `Hello ${name}`;
}
console.log(greetDefault());
console.log(greetDefault("John"));
