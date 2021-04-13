import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-service/product';

import { Router } from '@angular/router';

@Component({
    selector: 'product-card',
    templateUrl: 'product-card.component.html',
    styleUrls: ['product-card.component.css']
})
export class ProductCardComponent { 
    private router: Router;

    private counter = 0;

    @Input()
    product: Product;

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
        this.itemDeleted.emit(this.product);
    }
    
}
