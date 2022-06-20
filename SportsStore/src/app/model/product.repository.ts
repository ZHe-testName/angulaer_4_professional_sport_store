import { StaticDataSource } from './static.datasource';
import { Product } from './product.model';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductRepository {
  private products: Product[] = []
  private categories: (string | undefined)[] = []

  constructor(
    private dataSource: StaticDataSource
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
};