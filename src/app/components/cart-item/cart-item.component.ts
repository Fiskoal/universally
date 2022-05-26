import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: Item;
  @Input() index: number;
  faMinus = faMinus;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.item)
  }

  removeItem() {
    // console.log(this.index)
    let cart = JSON.parse(localStorage.getItem('cart'));
    // console.log(cart)
    cart.splice(this.index, 1);
    // console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
  }

}
