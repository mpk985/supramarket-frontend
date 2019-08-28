import { Component } from '@angular/core';
import { ItemService } from '../item-service/item.service';
import { Item } from '../item-service/item';
import { ItemCardComponent } from '../item-card/item-card.component';


@Component({
   selector: 'item-list',
   templateUrl: 'item-list.component.html',
   styleUrls: ['item-list.component.css']
})
export class ItemListComponent {
    private itemService: ItemService;
    public items: Item[];
    private index: number = 0;
    public item: Item;

    public error: string;


    constructor(itemService: ItemService) {
        this.itemService = itemService;
        itemService.getAllItems()
        .then((items) => {
            this.items = items;
            this.item = this.items[this.index+1];
        })
        .catch((error) => this.error = error);
    }

    updateIndex(counter: number){
        this.index = Math.abs(counter%this.items.length);
        console.log("Index updated: " + this.index);
        this.item = this.items[this.index];
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
