import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()
export class Cart {
  public cartLines: CartLine[] = [];
  public cartItems: number = 0;
  public cartPrice: number = 0;

  addLine(product: Product, quantity: number = 1) {
    let line = this.cartLines.find(line => line.product.id == product.id);

    if(line != undefined) {
      this.cartItems += quantity;
    } else {
      this.cartLines.push(new CartLine(product, quantity));
    };

    this.recalculate();
  }

  updateQuantity(product: Product, e: EventTarget | null) {
    const target = e as HTMLInputElement;
    const quantity = target.value;
    
    let line = this.cartLines.find(line => line.product.id == product.id);

    if(line != undefined) {
      line.quantity = Number(quantity);
    };

    this.recalculate();
  }

  removeLine(id: number | undefined) {
    if(!id) {
      return;
    };

    let index = this.cartLines.findIndex(line => line.product.id == id);

    this.cartLines.splice(index);

    this.recalculate();
  }

  clearCart() {
    this.cartLines = [];
    this.cartItems = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.cartItems = 0;
    this.cartPrice = 0;

    this.cartLines.forEach(line => {
      this.cartItems += line.quantity;

      this.cartPrice += (line.quantity * (line.product.price ? line.product.price : 1));
    });
  }
};

export class CartLine {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get lineTotal() {
    return  (this.product.price ? this.product.price : 1) * this.quantity;
  }
};