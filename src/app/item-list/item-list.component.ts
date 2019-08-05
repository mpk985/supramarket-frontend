import { Component } from '@angular/core';
import { ItemService } from '../item-service/item.service';
import { Item } from '../item-service/item';

@Component({
   selector: 'item-list',
   templateUrl: 'item-list.component.html',
   styleUrls: ['item-list.component.css']
})
export class ItemListComponent {
    private itemService: ItemService;
    private items: Item[];
    public error: string;

    constructor(itemService: ItemService) {
        this.itemService = itemService;
        itemService.getAllItems()
        .then((items) => {
            this.items = items
        })
        .catch((error) => this.error = error);
    }

    getMyName(): string {
        return "Michael";
    }

    deleteItemFromList(inventoryId: number) {
        const index: number = this.items
            .findIndex((item) => item.inventoryId === inventoryId);
        this.items.splice(index, 1);
    }

    handleItemDeleted(item: Item) {
        this.itemService.deleteItem(item.inventoryId)
            .then((item) => this.deleteItemFromList(item.inventoryId))
            .catch((error) => this.error = error);
    }

}
