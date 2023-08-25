console.log("Time to get started...");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  return showResult ? console.log(phrase + result) : result;
}

const number1 = 50;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is : ";

add(number1, number2, printResult, resultPhrase);
