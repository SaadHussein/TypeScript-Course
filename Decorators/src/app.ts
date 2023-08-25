// function Logger(LogPerson: string) {
//   return function (constructor: Function) {
//     console.log(LogPerson);
//     console.log(constructor);
//     console.log("Saad");
//   };
// }

// function withTemplate(template: string, hookId: string) {
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         const hookElement = document.getElementById(hookId);
//         if (hookElement) {
//           hookElement.innerHTML = template;
//           hookElement.querySelector("h1")!.innerHTML = this.name;
//         }
//       }
//     };
//   };
// }

// @Logger("Logging - Person")
// @withTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating Object.");
//   }
// }

// const pers = new Person();
// console.log(pers);

// // -----

// function log(target: any, prototypeName: string | Symbol) {
//   console.log("Prototype Decorator");
//   console.log(target, prototypeName);
// }

// function log2(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log("Access Descriptor");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }

// function log3(
//   target: any,
//   name: string | Symbol,
//   descriptor: PropertyDescriptor
// ) /*: PropertyDescriptor*/ {
//   console.log("Method Descriptor");
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);

//   // return { configurable: true, enumerable: true };
// }

// function log4(target: any, name: string | Symbol, position: number) {
//   console.log("Parameter Descriptor");
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }

// class Product {
//   @log
//   title: string;
//   private _price: number;

//   @log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid Price - Should be More Than 0");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @log3
//   getPriceWithTax(@log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const p1 = new Product("Book1", 19);
// const p2 = new Product("Book2", 29);

// //---------

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjustDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this);
//       return boundFn;
//     },
//   };

//   return adjustDescriptor;
// }

// class Printer {
//   message = "This Works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const printer = new Printer();

// const btn = document.querySelector("button")!;
// btn.addEventListener("click", printer.showMessage);

//-----------

interface validatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const registeredValidators: validatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function validate(obj: any) {
  console.log(registeredValidators);
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }

  console.log(objectValidatorConfig);

  let isValid = true;
  for (const prop in objectValidatorConfig) {
    console.log(prop);
    for (const validator of objectValidatorConfig[prop]) {
      console.log(validator);
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");
courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title")! as HTMLInputElement;
  const priceEl = document.getElementById("price")! as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Inputs Not True, Please enter Valid Inputs");
    return;
  }

  console.log(createdCourse);
});
