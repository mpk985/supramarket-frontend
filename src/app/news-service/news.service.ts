import { Injectable } from '@angular/core';
import { News } from './news';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class NewsService {

    private news: News[];

    private http: Http;

    private url: string = environment.apiUrl+'news';

    constructor(http: Http) {
        this.http = http;
    }

    getAllNews() : Promise<News[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((response) => response.json() as News[])
            .catch(this.handleError);
    }

    getNewsById(newsId: number) : Promise<News> {
        return this.http.get(this.url + `/${newsId}`)
            .toPromise()
            .then(response => response.json() as News)
            .catch(this.handleError);
    }

    // getImgByInventoryId(newsId: number) : Promise<News> {
    //     return this.http.get(this.url + '/${')
    // }

    // createNews(news: News): Promise<News> {
    //     return this.http.news(this.url + "/", news)
    //         .toPromise()
    //         .then(response => response.json() as News)
    //         .catch(this.handleNewsError);
    // }
    
    updateNews(newsId: number, news: News): Promise<News> {
        return this.http.put(this.url + `/${newsId}`, news)
            .toPromise()
            .then(response => response.json() as News)
            .catch(this.handlePutError);
    }

    deleteNews(newsId: number): Promise<News> {
        return this.http.delete(this.url + `/${newsId}`)
            .toPromise()
            .then(response => response.json() as News)
            .catch(this.handleDeleteError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to retrieve recent news.");
    }

    private handleNewsError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create news.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update news.");
    }
    
    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete news.");
    }
}
