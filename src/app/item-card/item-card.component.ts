import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item-service/item';

import { Router } from '@angular/router';

@Component({
    selector: 'item-card',
    templateUrl: 'item-card.component.html',
    styleUrls: ['item-card.component.css']
})
export class ItemCardComponent { 
    private router: Router;

    @Input()
    item: Item;

    @Output()
    private itemDeleted = new EventEmitter();

    constructor(router: Router) {
        this.router = router;
    }

    deleteItem() {
        this.itemDeleted.emit(this.item);
    }
    
}
