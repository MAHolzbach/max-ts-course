//OBJECTS and ARRAYS

// const person: { name: string; age: number } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  //TUPLE
  role: [number, string];
} = {
  name: "Michael",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"]
};

let favHobbies: string[];

console.log(person.hobbies);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // ERROR
}

//ENUMS

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY = 5,
  AUTHOR //Now defaults to 6
}

const person2 = {
  name: "Michael",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};

if (person2.role === Role.ADMIN) {
  console.log(person2);
}
