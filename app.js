var _this = this;
// string
var myName = "Max";
// number
var myAge = 27;
// boolean
var hasHobbies = false;
// assign types
var myRealAge;
myRealAge = 27;
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// tuples
var address = ["Superstreet", 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Blue;
// any
var car = "BMW";
car = { brand: "BMW", series: 3 };
// functions
function returnMyName() {
    return myName;
}
// void
function sayHello() {
    console.log("Hello!");
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// function types
var myMultiply;
// objects
var userData = {
    name: "Max",
    age: 27
};
// Variable complex is an object that has two keys, data and output. Data is an array on numbers, and output is a function that takes one argument "all" which can be named anything, but must have type boolean. The function returns an array of numbers.
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [1, 2, 3],
    output: function (arg) {
        return _this.data;
    }
};
//union types. Can string together as many types as you like.
var myRealAge2 = 39;
//check types at runtime
var finalValue = "A string";
if (typeof finalValue === "string") {
    console.log(finalValue);
}
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Mike",
    bankAccount: bankAccount,
    hobbies: ["1", "2"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
