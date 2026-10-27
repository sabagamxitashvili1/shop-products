export enum Category {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Food = "Food",
}

export interface Product {
  name: string;
  price: number;
  category: Category;
}

export class ProductItem implements Product {
  name: string;
  price: number;
  category: Category;

  constructor(name: string, price: number, category: Category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  showInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Price: ${this.price}`);
    console.log(`Category: ${this.category}`);
  }
}