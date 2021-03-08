import { Component } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { Product } from '../product-service/product';
import { ItemCardComponent } from '../item-card/item-card.component';


@Component({
   selector: 'product-list',
   templateUrl: 'product-list.component.html',
   styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    private productService: ProductService;
    public items: Product[];
    private index: number = 0;
    public item: Product;

    public error: string;


    constructor(productService: ProductService) {
        this.productService = productService;
        // productService.getAllProducts()
        // .then((items) => {
        //     this.items = items;
        //     this.item = this.items[this.index+1];
        // })
        // .catch((error) => this.error = error);
    }

    // updateIndex(counter: number){
    //     this.index = Math.abs(counter%this.items.length);
    //     console.log("Index updated: " + this.index);
    //     this.item = this.items[this.index];
    // }

    // deleteProductFromList(inventoryId: number) {
    //     const index: number = this.items
    //         .findIndex((item) => item.inventoryId === inventoryId);
    //     this.items.splice(index, 1);
    // }

    // handleProductDeleted(item: Product) {
    //     this.productService.deleteProduct(item.inventoryId)
    //         .then((item) => this.deleteProductFromList(item.inventoryId))
    //         .catch((error) => this.error = error);
    // }

}