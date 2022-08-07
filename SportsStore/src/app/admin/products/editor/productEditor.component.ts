import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/model/product.model";
import { ProductRepository } from "src/app/model/product.repository";

@Component({
  templateUrl: './productEditor.component.html',
})
export class ProductEditor {
  editing: boolean = false;
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.editing = activeRoute.snapshot.params['mode'] == 'edit';

    if (this.editing) {
      Object.assign(
          this.product, 
          repository.getProduct(activeRoute.snapshot.params['id'])
        );
    };
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);

    this.router.navigateByUrl('/admin/main/products');
  }
};