interface Greetable extends Named {
  // readonly name: string;
  // age: number;
  greet(phrase: string): void;
}

interface Named {
  readonly name: string;
  optionalName?: string;

  optionalMethod?(): void;
}

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

// let user1: Person;

// user1 = {
//   name: "Mike",
//   age: 40,
//   greet(phrase) {
//     console.log(phrase);
//   }
// };

// user1.greet("Yo!");

class Person implements Greetable {
  name: string;
  age?: number = 30;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user2: Greetable;

user2 = new Person("Mike");
console.log(user2);
