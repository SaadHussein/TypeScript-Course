// // // const names: string[] = ["Saad", "Kholoud"];
// // const names: Array<string> = [];

// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve("Hi");
// //   }, 2000);
// // });

// // promise.then((data) => {
// //   console.log(data);
// // });

// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// // console.log(merge({ name: "Saad" }, { age: 22 }));
// const mergeObj = merge({ name: "Saad" }, { age: 22 });
// console.log(mergeObj.age);

// interface lengthy {
//   length: number;
// }

// function countAndPrint<T extends lengthy>(element: T): [T, string] {
//   let descripe = "Got no Value..!";
//   if (element.length === 1) {
//     descripe = "Got 1 element";
//   }
//   if (element.length > 1) {
//     descripe = "Got " + element.length + " elements";
//   }

//   return [element, descripe];
// }

// console.log(countAndPrint(["Cooking", "Sports"]));

// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return "Value is: " + obj[key];
// }

// extractAndConvert({ name: "Saad" }, "name");

// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }

//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();

// textStorage.addItem("Saad");
// textStorage.addItem("Kholoud");

// textStorage.removeItem("Saad");

// console.log(textStorage.getItems());

// // const objStorage = new DataStorage<object>();
// // const obj = { name: "Saad" };
// // objStorage.addItem(obj);
// // objStorage.addItem({ name: "Kholoud" });

// // objStorage.removeItem(obj);

// // console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Saad", "Kholoud"];
// names.pop();
// names.push("Hi");
