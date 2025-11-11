// interface - named shape for objects (schema)

interface User333 {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  createdAt: new Date(),
};

interface Admin333 extends User333 {
  role: string;
}

const admin333: Admin333 = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  createdAt: new Date(),
  role: "admin",
};

interface UserMeta {
  age: number;
  gender: string;
}

interface Admin333WithMeta extends Admin333, UserMeta {}

const admin333WithMeta: Admin333WithMeta = {
  id: 1,
  name: "John",
  email: "john@gmail.com",
  createdAt: new Date(),
  role: "admin",
  age: 30,
  gender: "male",
};
