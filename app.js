// Variable complex is an object that has two keys, data and output. Data is an array on numbers, and output is a function that takes one argument "all" which can be named anything, but must have type boolean. The function returns an array of numbers.
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
complex = {};
