import { Component } from "@angular/core";
import { ProductRepository } from "src/app/model/product.repository";

@Component({
  templateUrl: './productTable.component.html',
})
export class ProductTable {
  constructor (
    private repository: ProductRepository,
  ) {}

  getProducts() {
    return this.repository.getProducts();
  }

  deleteProduct(id: number | undefined) {
    if (id !== undefined) {
      this.repository.deleteProduct(id);
    };
  }
};
