// value must have everything from A and B
type Inter1 = { id: string };
type Inter2 = { name: string };

type Entity = Inter1 & Inter2;

const entity: Entity = {
  id: "1",
  name: "John",
};

type NumberHolder = { a: number };
type StringHolder = { a: string };

// type NumberStringHolder = NumberHolder & StringHolder;
// const val: NumberStringHolder = { a: 1 }; // error

type Product = { id: string; title: string };
type Priced = { price: number };

type PricedProduct = Product & Priced;
