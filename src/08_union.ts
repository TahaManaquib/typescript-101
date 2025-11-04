// value = this or that

function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// object union
type Admin = {
  role: "Admin";
  permissions: string[];
};
type Customer = {
  role: "Customer";
  loyaltyPoints: number;
};
function describeUser(user: Admin | Customer) {
  if (user.role === "Admin") {
    console.log(user.permissions);
  } else {
    console.log(user.loyaltyPoints);
  }
}

function describeUserWithInOperator(user: Admin | Customer) {
  if ("permissions" in user) {
    console.log(user.permissions);
  } else {
    console.log(user.loyaltyPoints);
  }
}

// array of unions and union of arrays
const arrOfUnion: (string | number)[] = ["a", 1, "b", 2];
const unionOfArr: string[] | number[] = ["a", "b", "c"];
