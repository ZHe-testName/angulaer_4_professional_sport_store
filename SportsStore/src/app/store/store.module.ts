import { RouterModule } from '@angular/router';
import { CardDetailComponent } from './card-detail.component';
import { CartSummaryComponent } from './cart-summary.component';
import { StoreComponent } from './store.component';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { CounterDirective } from './counter.directive';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CardDetailComponent,
    CheckoutComponent,
  ],
  exports: [
    StoreComponent,
    CardDetailComponent,
    CheckoutComponent,
  ],
})
export class StoreModule {};