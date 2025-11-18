// objects shapes - similar to interface
// union types (a | B)
// intersection types (a & B)
// function types

// type is more general than interfaces

type Person1 = {
  id: string;
  name: string;
};

const person1: Person1 = {
  id: "1",
  name: "John",
};

type Status = "active" | "inactive" | "pending";

function nextActionCheck(s: Status): string {
  switch (s) {
    case "active":
      return "next";
    case "inactive":
      return "start";
    case "pending":
      return "wait";
  }
}

type ToMerge1 = { price: number };
type ToMerge2 = { stock: number };

type Merged = ToMerge1 & ToMerge2;

const merged: Merged = {
  price: 10,
  stock: 100,
};
