import { Component } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { Product, ProductVariantList, ProductOptionList, ProductImageList } from '../product-service/product';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
   selector: 'product-list',
   templateUrl: 'product-list.component.html',
   styleUrls: ['product-list.component.css']
})
export class ProductListComponent {
    private productService: ProductService;
    public products: Product[];
    private index: number = 0;

    public error: string;

    constructor(productService: ProductService) {
        this.productService = productService;
        this.productService.getAllProducts()
        .then((products) => {
            this.products = products;
        })
        .catch((error) => this.error = error);
    }

    updateIndex(counter: number){
        this.index = Math.abs(counter%this.products.length);
        console.log("Index updated: " + this.index);
    }

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
