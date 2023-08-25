const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Saad",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("Saaad"); //This is an exception, Will Work
console.log(person.role);

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const someone = {
  name: "Saad",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favouriteActivities: any[];
favouriteActivities = [5];

console.log(person.name);
console.log(someone.name);

for (const hobby of someone.hobbies) {
  console.log(hobby);
}

if (someone.role === Role.ADMIN) {
  console.log("He is an ADMIN");
}
