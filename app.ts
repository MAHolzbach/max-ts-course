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
let myRealAge: number | string = 39;

//check types at runtime
let finalValue = "A string";
if (typeof finalValue === "string") {
  console.log(finalValue);
}
