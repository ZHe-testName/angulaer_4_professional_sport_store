import { Product } from './product.model';
import { Injectable } from "@angular/core";
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = []
  private categories: (string | undefined)[] = []

  constructor(
    private dataSource: RestDataSource,
  ) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;

      this.categories = data
        .map(p => p.category)
        .filter((c, index, arr) => arr.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string | null = null): Product[] {
    return this.products
      .filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product | {} {
    const product = this.products
      .find(p => p.id == id);

    return product ? product : {};
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.dataSource
        .saveProduct(product)
        .subscribe(prod => this.products.push(prod));
    } else {
      this.dataSource
        .updateProduct(product)
        .subscribe(prod => {
          this.products.splice(
            this.products.findIndex(p => p.id == product.id),
            1,
            product
          )
        })
    };
  }

  deleteProduct(id: number) {
    this.dataSource
      .deleteProduct(id)
      .subscribe(p => {
        this.products.splice(
          this.products.findIndex(p => p.id === id),
          1
        );
      });
  }
};