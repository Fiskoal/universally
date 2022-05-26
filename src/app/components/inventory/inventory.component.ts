import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model';
import { INVENTORY } from 'src/app/inventory-list';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  items: Item[] = INVENTORY;

  constructor() {}

  ngOnInit(): void {
    console.log(this.items)
  }

}
