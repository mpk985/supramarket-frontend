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

    private counter = 0;

    @Input()
    item: Item;

    @Output()
    itemDeleted = new EventEmitter();

    @Output()
    itemIndexEvent = new EventEmitter<number>();

    constructor(router: Router) {
        this.router = router;
    }

    onClickRight() {
        this.counter++;
        console.log("Count:" + this.counter);
        this.itemIndexEvent.emit(this.counter);
    }

    onClickLeft() {
        this.counter--;
                console.log("Count:" + this.counter);

        this.itemIndexEvent.emit(this.counter);
    }


    deleteItem() {
        this.itemDeleted.emit(this.item);
    }
    
}
