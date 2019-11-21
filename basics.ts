const add = (n1: number, n2: number, printResult: boolean, phrase: string) => {
  return printResult ? console.log(`${phrase}${n1 + n2}`) : n1 + n2;
};

let num1 = 2;
const num2 = 3;
const printResult = true;
const resultPhrase = "The result is ";

add(num1, num2, printResult, resultPhrase);
