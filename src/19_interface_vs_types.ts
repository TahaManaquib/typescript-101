// interface - mainly used for object shapes/schemas, where extends is used
// interface also supports declaration merging

// type - more general where union, intersection, are required
// type does not support declaration merging

interface Box1 {
  height: number;
  width: number;
}

interface Box1 {
  scale: number;
}

let box1: Box1 = { height: 5, width: 6, scale: 10 };

type Box2 = {
  height: number;
  width: number;
};

// the below code gives error, because it deos not support declaration merging
// type Box2 = {
//   scale: number;
// }

// both can be used, both are correct
// but interface is mainly used for object shapes/schemas, where extends is used
// type is more general where union, intersection, are required
