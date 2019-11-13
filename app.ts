// string
let myName: string = "Max";

// number
let myAge: number = 27;

// boolean
let hasHobbies: boolean = false;

// assign types
let myRealAge: number;
myRealAge = 27;

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue = 2 // 2
}
let myColor: Color = Color.Blue;

// any
let car: any = "BMW";
car = { brand: "BMW", series: 3 };

// functions
function returnMyName(): string {
  return myName;
}

// void
function sayHello(): void {
  console.log("Hello!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// function types
let myMultiply: (a: number, b: number) => number;

// objects
let userData: { name: string; age: number } = {
  name: "Max",
  age: 27
};

// Variable complex is an object that has two keys, data and output. Data is an array on numbers, and output is a function that takes one argument "all" which can be named anything, but must have type boolean. The function returns an array of numbers.
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

//type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [1, 2, 3],
  output: arg => {
    return this.data;
  }
};

//union types. Can string together as many types as you like.
let myRealAge2: number | string = 39;

//check types at runtime
let finalValue = "A string";
if (typeof finalValue === "string") {
  console.log(finalValue);
}

type BankAccount = { money: number; deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  }
};

let myself: {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
} = {
  name: "Mike",
  bankAccount,
  hobbies: ["1", "2"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
