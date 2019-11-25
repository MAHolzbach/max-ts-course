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

//FUNCTIONS

const add5 = (n1: number, n2: number): number => {
  return n1 + n2;
};

//VOID

const printResult = (num: number): void => {
  console.log(`Result ${num}`);
};

printResult(add5(2, 3));

//FUNCTIONS AS TYPES

let combineValues: (a: number, b: number) => number;

//FUNCTION TYPES AND CALLBACKS

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};
addAndHandle(10, 20, result => {
  console.log(result);
});

//UNKNOWN
//Better than "Any" type, as it doesnt just disable TS.

//Doesnt work
let userInput: unknown;

//Works
// let userInput: any

let userName: string;

userInput = 5;
userInput = "derp";
// userName = userInput;

//NEVER

//This never returns anything. Not undefined or null. Just crashes code.
const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

generateError("Error happened", 500);
