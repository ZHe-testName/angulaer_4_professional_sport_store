import { Component } from "@angular/core";
import { Order } from "src/app/model/order.model";
import { OrderRepository } from "src/app/model/order.repository";

@Component({
  templateUrl: './orderTable.component.html',
})
export class OrderTable {
  includeShipped: boolean = false;

  constructor (
    private repository: OrderRepository,
  ) {}

  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter(order => this.includeShipped || !order.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;

    this.repository.updateOrder(order);
  }

  delete(id: number | null) {
    if (id !== null) {
      this.repository.deleteOrder(id);
    };
  }
};