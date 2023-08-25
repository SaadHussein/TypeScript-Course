// Code goes here!
// console.log("Hiii");
// const userName = "Saad";
// //userName = "Saad"; Not Correct because it is Const

// let age;
// age = 22;

// var result;

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// } // We can access var from out from the function and too for let

//console.log(isOld); //this is work for var but not work for let or const

// const add = (a: number, b: number) => {
//   return a + b;
// }; //Valid expertion

// const add = (a: number, b: number = 1) => a + b; //Valid expertion too

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(2));

const btn = document.querySelector("button")!;

btn.addEventListener("click", (event) => console.log(event));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

// activeHobbies.push(...hobbies);

const person = {
  ourName: "Saad",
  age: 22,
};

const another = { ...person };

const add = (...numbers: number[]) => {
  let result = 0;
  result = numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);

  return result;
};

const addNumbers = add(2, 5, 9, 6);
console.log(addNumbers);

const [hobby1, hobby2] = hobbies;

const { ourName: firstName, age } = person;

console.log(firstName, age);
