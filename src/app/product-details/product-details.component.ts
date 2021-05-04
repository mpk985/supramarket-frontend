import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product-service/product.service';
import { Product } from '../product-service/product';

@Component({
   selector: 'product-details',
   templateUrl: './product-details.component.html',
   styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

    private id: number;
    public product: Product;
    public error: string;

    constructor(route: ActivatedRoute, productService: ProductService) {
    
        route.params.subscribe(
          (params) => {
            if(params.hasOwnProperty('id')) {
              this.id = params['id'];
              productService.getProductById(this.id)
              .then((product) => this.product = product, (error) => this.error = error);
            }
          else{
            productService.getRandomProduct()
            .then((product) => this.product = product, (error) => this.error = error);
            console.log("This product:", this.product);
          }
        }
        );
    }

}
