import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { OrderTable } from './orders/table/orderTable.component';
import { ProductEditor } from './products/editor/productEditor.component';
import { ProductTable } from './products/table/productTable.component';

let routing = RouterModule.forChild([
  { 
    path: 'auth', 
    component: AuthComponent,
  },
  { 
    path: 'main', 
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products/:mode/:id',
        component: ProductEditor,
      },
      {
        path: 'products/:mode',
        component: ProductEditor,
      },
      {
        path: 'products',
        component: ProductTable,
      },
      {
        path: 'orders',
        component: OrderTable,
      },
      {
        path: '**',
        redirectTo: 'products',
      },
    ],
  },
  { 
    path: '**', 
    redirectTo: 'auth',
  },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  providers: [AuthGuard],
  declarations: [
    AuthComponent, 
    AdminComponent,
    OrderTable,
    ProductEditor,
    ProductTable,
  ],
})
export class AdminModule {};