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
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR"; //Now defaults to 6
})(Role || (Role = {}));
var person2 = {
    name: "Michael",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person2.role === Role.ADMIN) {
    console.log(person2);
}
//UNIONS
var add2 = function (input1, input2) {
    // const result = input1 + input2;
    // return result;
};
//LITERAL TYPES
var add3 = function (input1, input2, resultConversion) {
    // const result = input1 + input2;
    // return result;
};
var add4 = function (input1, input2, resultConversion) { };
//FUNCTIONS
var add5 = function (n1, n2) {
    return n1 + n2;
};
//VOID
var printResult = function (num) {
    console.log("Result " + num);
};
printResult(add5(2, 3));
//FUNCTIONS AS TYPES
var combineValues;
//FUNCTION TYPES AND CALLBACKS
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//UNKNOWN
//Better than "Any" type, as it doesnt just disable TS.
//Doesnt work
var userInput;
//Works
// let userInput: any
var userName;
userInput = 5;
userInput = "derp";
userName = userInput;
//NEVER
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError("Error happened", 500);
