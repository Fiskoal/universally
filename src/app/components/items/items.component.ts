import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { INVENTORY } from '../../inventory-list';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  item: any;
  private sub: any;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    let params = window.location.href;
    let id = parseInt(params.split('/')[params.split('/').length - 1]);
    this.item = this.itemsService.getItem(id);
  }

  addItem() {
    let storage = localStorage.getItem('cart');
    switch (storage) {
      case null:
        localStorage.setItem('cart', JSON.stringify([this.item]))
        break;
    
      default:
        console.log(storage)
        let thisThing = JSON.parse(storage);
        thisThing.push(this.item);
        localStorage.setItem('cart', JSON.stringify(thisThing))
        break;
    }
    console.log(JSON.parse(localStorage.getItem('cart')))
  }
}
