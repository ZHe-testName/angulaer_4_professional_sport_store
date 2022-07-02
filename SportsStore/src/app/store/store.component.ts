import { Product } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  public selectedCategory: string | null  = null
  public productsPerPage: number = 4
  public selectedPage: number = 1

  constructor(
    private repository: ProductRepository,
    private cart: Cart,
  ) { }

  ngOnInit(): void {
  }

  get products(): Product[] {
    let pageIndex: number = (this.selectedPage - 1) * this.productsPerPage;

    return this.repository.getProducts(this.selectedCategory)
              .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): (string | undefined)[]{
    return this.repository.getCategories();
  }

  //вместо этого неуклюжего решения

  // get pageNumbers(): number[] {
  //   return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  //используем вот такое
  get pageCount() {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  changeCategory(newCategory: string | null | void) {
    if(newCategory || newCategory === null) {
      this.selectedCategory = newCategory;
    }; 
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(e: EventTarget | null) {
    const target = e as HTMLSelectElement;
    
    this.productsPerPage = Number(target.value);

    this.changePage(1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
