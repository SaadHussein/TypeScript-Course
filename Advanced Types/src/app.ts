type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Saad",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;

type Universal = Combinable & Numeric; //The type will be number beacause it is common between Combinable and Numeric

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchedUserData = {
  id: "D1",
  name: "Saad",
  job: {
    title: "Software Engineer",
    description: "I am a MERN Stack Developer",
  },
};

console.log(fetchedUserData?.job?.title);

// const result = add(1, 5);
const result = add("Saad", "Kholoud");
result.split(" ");

const userInput = null;
const storeData = userInput ?? "Default"; //?? work with undifined or null
console.log(storeData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log(emp.name);

//   if ("privileges" in emp) {
//     console.log(emp.privileges);
//   }

//   if ("startDate" in emp) {
//     console.log(emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a Truck....");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive;
//   // if ("loadCargo" in vehicle) {
//   if (vehicle instanceof Truck) {
//     //Both True
//     vehicle.loadCargo(500);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }

//   console.log(speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 500 });
// moveAnimal({ type: "horse", runningSpeed: 200 });

// const paragraph = document.getElementById("message-output");

// // const input = document.getElementById("user-input") as HTMLInputElement;
// // if (input) {
// //   input.value = "Hi";
// // }

// // const input = document.getElementById("user-input");
// // if (input) {
// //   (input as HTMLInputElement).value = "Hi";
// // }

// // const input = <HTMLInputElement>document.getElementById("user-input")!;
// const input = document.getElementById("user-input")! as HTMLInputElement;
// input.value = "Hi";

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a Valid Email..!",
//   userName: "Must Start with a Capital Character.!",
// };
