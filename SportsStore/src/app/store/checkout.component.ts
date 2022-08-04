import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSend: boolean = false;
  submitted: boolean = false;

  constructor(
    public repository: OrderRepository,
    public order: Order,
  ) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;

    if(form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();

        this.orderSend = true;
        this.submitted = false;
      });
    };
  }
}
