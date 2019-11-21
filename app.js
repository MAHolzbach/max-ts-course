//OBJECTS and ARRAYS
// const person: { name: string; age: number } = {
var person = {
    name: "Michael",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"]
};
var favHobbies;
console.log(person.hobbies);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // ERROR
}
//ENUMS
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person2 = {
    name: "Michael",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: ADMIN
};
if (person2.role === ADMIN) {
    console.log(person2);
}
