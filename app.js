var add = function (n1, n2, printResult, phrase) {
    return printResult ? console.log("" + phrase + (n1 + n2)) : n1 + n2;
};
var num1 = 2;
var num2 = 3;
var printResult = true;
var resultPhrase = "The result is ";
add(num1, num2, printResult, resultPhrase);
