import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29.99 },
  { title: "A Book", price: 10.99 },
];

const errorProduct = new Product("", -5.99);
validate(errorProduct).then((error) => {
  if (error.length > 0) {
    console.log("Validation Error");
    console.log(error);
  } else {
    console.log(errorProduct.getInformation());
  }
});

const loadedProducts = plainToClass(Product, products);

loadedProducts.forEach((item) => console.log(item.getInformation()));
