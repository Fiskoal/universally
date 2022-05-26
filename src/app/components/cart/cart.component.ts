import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/app-state.model';
import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item.model';
// import { AddItemAction } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems$: Observable<Array<Item>>
  items: Item[] = JSON.parse(localStorage.getItem('cart'));
  total: number = 0;

  constructor(private store: Store<AppState>) { 
   }

  ngOnInit(): void {
    this.items.forEach(element => {
      this.total = this.total + element.price;
    });
    console.log(this.items)
    this.items = JSON.parse(localStorage.getItem('cart'));
    // let storeArray = [];
    // this.store.select(store => store.cart).forEach(element => {
    //   storeArray.push(element);
    // });
    // this.cartItems$ = this.store.select(store => store.cart);
    // console.log(storeArray)
  }

  clearCart() {
    localStorage.setItem('cart', '[]');
    location.reload();
  }

}
