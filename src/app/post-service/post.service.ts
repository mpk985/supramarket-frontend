import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PostService {

    private posts: Post[];

    private http: Http;

    private url: string = environment.apiUrl+'post';

    constructor(http: Http) {
        this.http = http;
    }

    getAllPosts() : Promise<Post[]> {
        return this.http.get(this.url)
            .toPromise()
            .then((response) => response.json() as Post[])
            .catch(this.handleError);
    }

    getPostById(postId: number) : Promise<Post> {
        return this.http.get(this.url + `/${postId}`)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handleError);
    }

    // getImgByInventoryId(postId: number) : Promise<Post> {
    //     return this.http.get(this.url + '/${')
    // }

    // createPost(post: Post): Promise<Post> {
    //     return this.http.post(this.url + "/", post)
    //         .toPromise()
    //         .then(response => response.json() as Post)
    //         .catch(this.handlePostError);
    // }
    
    updatePost(postId: number, post: Post): Promise<Post> {
        return this.http.put(this.url + `/${postId}`, post)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handlePutError);
    }

    deletePost(postId: number): Promise<Post> {
        return this.http.delete(this.url + `/${postId}`)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handleDeleteError);
    }

    private handleError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Parts list currently unavailable.  Check back later");
    }

    private handlePostError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to create post.");
    }

    private handlePutError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to update post.");
    }
    
    private handleDeleteError(error: any): Promise<string> {
        console.log(error);
        return Promise.reject("Unable to delete post.");
    }
}
