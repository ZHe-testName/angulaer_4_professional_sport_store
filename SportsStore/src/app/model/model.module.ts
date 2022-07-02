import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { NgModule } from "@angular/core";
import { Cart } from './cart.model';

@NgModule({
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
  ],
})
export class ModelModule {};