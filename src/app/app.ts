import { Component, OnInit } from "@angular/core";
import { Category, ProductItem } from "./product";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App implements OnInit {
  products: ProductItem[] = [
    new ProductItem("Laptop", 2500, Category.Electronics),
    new ProductItem("T-Shirt", 45, Category.Clothing),
    new ProductItem("Apple", 3, Category.Food),
  ];

  ngOnInit(): void {
    for (const product of this.products) {
      product.showInfo();
    }
  }
}