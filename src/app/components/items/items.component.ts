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
}
