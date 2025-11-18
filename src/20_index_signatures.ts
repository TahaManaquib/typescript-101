type NumberDict = {
  [k: string]: number;
};

const numberDict: NumberDict = {
  a: 1,
  b: 2,
  c: 3,
};

type Metrics = Record<"likes" | "views", number>; // much more tight, secure, safer
const metrics: Metrics = {
  likes: 1,
  views: 2,
};

const priceMap = new Map<string, number>();
priceMap.set("a", 1);
priceMap.set("b", 2);
priceMap.set("c", 3);

type LooseMap = Record<string, number | undefined>;
const looseMap: LooseMap = {
  a: 1,
  b: 2,
  c: 3,
  d: undefined,
};
