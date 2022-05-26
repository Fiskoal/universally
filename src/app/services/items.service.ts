import { Injectable } from '@angular/core';
import { INVENTORY } from '../inventory-list';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems() {
    return INVENTORY;
  }

  getItem(id: number) {
    const item = INVENTORY.find(element => element.id === id)
    return item;
  }
}
