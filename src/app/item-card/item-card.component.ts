import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-service/product';

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
    item: Product;

    @Output()
    itemDeleted = new EventEmitter();

    @Output()
    itemIndexEvent = new EventEmitter<number>();

    constructor(router: Router) {
        this.router = router;
    }

    onClickRight() {
        this.counter++;
        this.itemIndexEvent.emit(this.counter);
    }

    onClickLeft() {
        this.counter--;
        this.itemIndexEvent.emit(this.counter);
    }


    deleteProduct() {
        this.itemDeleted.emit(this.item);
    }
    
}
