"use strict";
var add;
add = function (n1, n2) { return n1 + n2; };
// let user1: Person;
// user1 = {
//   name: "Mike",
//   age: 40,
//   greet(phrase) {
//     console.log(phrase);
//   }
// };
// user1.greet("Yo!");
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        this.name = name;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase);
    };
    return Person;
}());
var user2;
user2 = new Person("Mike");
console.log(user2);
