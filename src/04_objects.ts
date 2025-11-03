// goal -> how to model objects, how to use required, optional, read only properties

type User = {
  id: string; // required
  name: string; // required
  email?: string; // optional
  readonly createdAt: Date; // read only (cannot be reassigned)
};

const user1: User = {
  id: "1",
  name: "John",
  createdAt: new Date(),
};
user1.name = "johnny";
// user1.createdAt = new Date(); // error
console.log(user1);

type Count = { [k: string]: number };
const counts: Count = {
  one: 1,
  two: 2,
  three: 3,
};
console.log(counts);

type Count2 = Record<"likes" | "views" | "shares", number>;
const counts2: Count2 = {
  likes: 1,
  views: 2,
  shares: 3,
};
console.log(counts2);
