import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product-service/product.service';
import { Product } from '../product-service/product';

@Component({
   selector: 'item-details',
   templateUrl: './item-details.component.html',
   styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

    private inventoryId: number;
    public item: Product;
    public error: string;

    constructor(route: ActivatedRoute, itemService: ProductService) {
        route.params.subscribe(params => this.inventoryId = params['inventoryId']);
        // itemService.getProductById(this.inventoryId)
            // .then((item) => this.item = item, (error) => this.error = error);
    }

}
