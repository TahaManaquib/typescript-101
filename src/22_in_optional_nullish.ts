type InExp1 = { role: "admin"; permission: string[] };
type InExp2 = { role: "user"; expiresAt: Date };

type UserExample = InExp1 | InExp2;

function describeUserAgain(user: UserExample) {
  if ("permission" in user) {
    console.log(user.permission);
  }
  if ("expiresAt" in user) {
    console.log(user.expiresAt);
  }
  console.log(user.role);
}

// avoid runtime errors using nullish and optional
// ?? and ||
// obj?.

type Profile = {
  name: string;
  contact?: {
    email?: string;
    phone?: string;
  };
};

const p1: Profile = {
  name: "John",
  contact: {
    email: "john@doe.com",
    phone: "1234567890",
  },
};

const p2: Profile = {
  name: "Jane",
};

console.log(p1.contact?.email);
console.log(p2.contact?.email);

// ?? - uses the right hand side if the left hand side is null or undefined
// || - uses the right hand side if the left hand side is falsy

const countFromServer: number | null = 0;
const labelFromServer: string | undefined = "";

const count1 = countFromServer ?? 212121;
const label1 = labelFromServer ?? "default";

const count2 = countFromServer || 1212121;
const label2 = labelFromServer || "default";

console.log(count1, label1);
console.log(count2, label2);
