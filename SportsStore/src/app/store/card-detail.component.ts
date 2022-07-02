import { Cart } from './../model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(
    public cart: Cart,
  ) { }

  ngOnInit(): void {
  }

}
