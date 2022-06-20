import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
  private products: Product[] = [
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
    new Product(1, 'Product 1', 'Category 2', 'Product 1 (Category 2)', 100),
    new Product(1, 'Product 1', 'Category 2', 'Product 1 (Category 2)', 100),
    new Product(1, 'Product 1', 'Category 2', 'Product 1 (Category 2)', 100),
    new Product(1, 'Product 1', 'Category 2', 'Product 1 (Category 2)', 100),
    new Product(1, 'Product 1', 'Category 3', 'Product 1 (Category 3)', 100),
    new Product(1, 'Product 1', 'Category 3', 'Product 1 (Category 3)', 100),
    new Product(1, 'Product 1', 'Category 3', 'Product 1 (Category 3)', 100),
    new Product(1, 'Product 1', 'Category 3', 'Product 1 (Category 3)', 100),
  ]

  getProducts(): Observable<Product[]>{
    return from([this.products]);
  }
};