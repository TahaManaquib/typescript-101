const raw = `{"id": 1, "name": "A", "info": {"age": 10}, "hobbies": ["swimming", "cricket"]}`;

const riskyUser = JSON.parse(raw) as {
  id: number;
  name: string;
};

console.log(riskyUser.name);

type User2 = {
  id: number;
  name: string;
  info: {
    age: number;
  };
  hobbies: string[];
};

function isUser(v: unknown): v is User2 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string" &&
    "info" in v &&
    typeof (v as any).info === "object" &&
    (v as any).info !== null &&
    "age" in (v as any).info &&
    typeof (v as any).info.age === "number" &&
    "hobbies" in v &&
    Array.isArray((v as any).hobbies) &&
    (v as any).hobbies.every((hobby: any) => typeof hobby === "string")
  );
}

const maybe = JSON.parse(raw) as unknown;

if (isUser(maybe)) {
  console.log(maybe); // safe
} else {
  console.log("Unexpected user data");
}
