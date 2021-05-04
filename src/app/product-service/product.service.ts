import { Injectable } from '@angular/core';
import { Product, ProductVariantList, ProductOptionList, ProductImageList } from './product';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductService {

    private items: Product[];

    private http: Http;

    private baseUrl: string = environment.apiUrl+'products';

    private randomUrl: string = environment.apiUrl+'random';

    private promise: Promise<Product[]>;

    constructor(http: Http) {
        this.http = http;
    }

   
    getAllProducts() : Promise<Product[]> {
        this.promise =  this.http.get(this.baseUrl)
            .toPromise()
            .then((response) => response.json() as Product[])
            .catch();
            return this.promise;
    }

    getProductById(id: number) : Promise<Product> {
        return this.http.get(this.baseUrl + `/${id}`)
            .toPromise()
            .then(response => response.json() as Product)
            .catch();
    }

    getRandomProduct() : Promise<Product> {
        return this.http.get(this.randomUrl)
            .toPromise()
            .then(response => response.json() as Product)
            .catch();
    }

    // getAllSoldProducts() : Promise<Product[]> {
    //     return this.http.get(this.url+'/?sold=true')
    //         .toPromise()
    //         .then((response) => response.json() as Product[])
    //         .catch(this.handleError);
    // }


    // getImgByInventoryId(inventoryId: number) : Promise<Product> {
    //     return this.http.get(this.url + '/${')
    // }

    // createProduct(item: Product): Promise<Product> {
    //     return this.http.item(this.url + "/", item)
    //         .toPromise()
    //         .then(response => response.json() as Product)
    //         .catch(this.handleProductError);
    // }
    
    // updateProduct(inventoryId: number, item: Product): Promise<Product> {
    //     return this.http.put(this.url + `/${inventoryId}`, item)
    //         .toPromise()
    //         .then(response => response.json() as Product)
    //         .catch(this.handlePutError);
    // }

    // deleteProduct(inventoryId: number): Promise<Product> {
    //     return this.http.delete(this.url + `/${inventoryId}`)
    //         .toPromise()
    //         .then(response => response.json() as Product)
    //         .catch(this.handleDeleteError);
    // }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve product data.");
    }

    // private handleProductError(error: any): Promise<string> {
    //     console.log(error);
    //     return Promise.reject("Unable to create item.");
    // }

    // private handlePutError(error: any): Promise<string> {
    //     console.log(error);
    //     return Promise.reject("Unable to update item.");
    // }
    
    // private handleDeleteError(error: any): Promise<string> {
    //     console.log(error);
    //     return Promise.reject("Unable to delete item.");
    // }
}
