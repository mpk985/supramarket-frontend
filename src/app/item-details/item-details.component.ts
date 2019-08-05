import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../item-service/item.service';
import { Item } from '../item-service/item';

@Component({
   selector: 'item-details',
   templateUrl: './item-details.component.html',
   styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

    private inventoryId: number;
    public item: Item;
    public error: string;

    constructor(route: ActivatedRoute, itemService: ItemService) {
        route.params.subscribe(params => this.inventoryId = params['inventoryId']);
        itemService.getItemById(this.inventoryId)
            .then((item) => this.item = item, (error) => this.error = error);
    }

}
