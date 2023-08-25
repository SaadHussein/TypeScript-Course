// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let userOne: Person;

// userOne = {
//   name: "Saad",
//   age: 22,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// userOne.greet("Hi There, I am");

//You can inherite from multible interfaces but in classes you can inherite from one class
interface Named {
  readonly name?: string; //we can not write any access modifier only readonly
  outputName?: string;
  sayName?(name: string): void;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// let userTwo: Greetable;

class Person implements Greetable {
  name?: string;
  age = 22;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

let userTwo: Greetable;
userTwo = new Person("Hi");
// userTwo.name = "Ahmed";   // Error happpen if the type is Greetable not Person

let userOne: Person = new Person();

userOne.greet("Hi There, I am");
userOne.name = "Kholoud";
userOne.greet("Hi There, I am");

// type addFn = (n1: number, n2: number) => number;
// let add: addFn;
// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface addFn {
  (n1: number, n2: number): number;
}
let add: addFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};
