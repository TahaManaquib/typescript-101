type User102 = {
  id: string;
  name: string;
  email?: string; // T['email'] => string | undefined
};

function getUserProp<T, K extends keyof T>(user: T, key: K): T[K] {
  return user[key];
}

const user102: User102 = {
  id: "1",
  name: "Johnny",
  // email: 'john@gmail.com'
};

const userId = getUserProp(user102, "id");
const userName = getUserProp(user102, "name");
const userEmail = getUserProp(user102, "email");

console.log(user102);

function setUserProp<T, K extends keyof T>(user: T, key: K, value: T[K]): void {
  user[key] = value;
}

setUserProp(user102, "name", "John");
setUserProp(user102, "email", "john@gmail.com");
console.log(user102);
