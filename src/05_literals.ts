type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(direction);
}

const d1 = "left"; // TS will keep literal type "left"
move(d1);

let d2 = "left"; // TS widens to string
// move(d2);

let d3: Direction = "left"; // TS will keep literal type "left"
move(d3);
