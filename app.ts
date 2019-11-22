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

//UNIONS

const add2 = (input1: number | string, input2: number | string) => {
  // const result = input1 + input2;
  // return result;
};

//LITERAL TYPES

const add3 = (
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-string"
) => {
  // const result = input1 + input2;
  // return result;
};

//TYPE ALIASES/CUSTOM TYPES

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

const add4 = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {};
