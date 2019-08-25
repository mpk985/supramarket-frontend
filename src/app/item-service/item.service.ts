import { Injectable } from '@angular/core';
import { Item } from './item';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ItemService {

    private items: Item[];

    private http: Http;

    private url: string = environment.apiUrl+'item';

    constructor(http: Http) {
        this.http = http;
    }

    getAllItems() : Promise<Item[]> {
        return this.http.get(this.url+'/?sold=false')
            .toPromise()
            .then((response) => response.json() as Item[])
            .catch(this.handleError);
    }

    getAllSoldItems() : Promise<Item[]> {
        return this.http.get(this.url+'/?sold=true')
            .toPromise()
            .then((response) => response.json() as Item[])
            .catch(this.handleError);
    }



    getItemById(inventoryId: number) : Promise<Item> {
        return this.http.get(this.url + `/${inventoryId}`)
            .toPromise()
            .then(response => response.json() as Item)
            .catch(this.handleError);
    }

    // getImgByInventoryId(inventoryId: number) : Promise<Item> {
    //     return this.http.get(this.url + '/${')
    // }

    // createItem(item: Item): Promise<Item> {
    //     return this.http.item(this.url + "/", item)
    //         .toPromise()
    //         .then(response => response.json() as Item)
    //         .catch(this.handleItemError);
    // }
    
    updateItem(inventoryId: number, item: Item): Promise<Item> {
        return this.http.put(this.url + `/${inventoryId}`, item)
            .toPromise()
            .then(response => response.json() as Item)
            .catch(this.handlePutError);
    }

    deleteItem(inventoryId: number): Promise<Item> {
        return this.http.delete(this.url + `/${inventoryId}`)
            .toPromise()
            .then(response => response.json() as Item)
            .catch(this.handleDeleteError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve item data.");
    }

    private handleItemError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create item.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update item.");
    }
    
    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete item.");
    }
}
