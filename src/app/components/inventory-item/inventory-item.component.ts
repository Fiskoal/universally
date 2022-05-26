import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.model';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() item: Item;

  faPlus = faPlus;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  addItem(input: Item) {
    console.log({...input});
    let storage = localStorage.getItem('cart');
    switch (storage) {
      case null:
        localStorage.setItem('cart', JSON.stringify([input]))
        break;
    
      default:
        console.log(storage)
        let thisThing = JSON.parse(storage);
        thisThing.push(input);
        localStorage.setItem('cart', JSON.stringify(thisThing))
        break;
    }
    console.log(JSON.parse(localStorage.getItem('cart')))
  }

}
