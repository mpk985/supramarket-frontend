import { Component } from '@angular/core';
import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';
import { ItemService } from '../item-service/item.service';
import { Item } from '../item-service/item';

@Component({
   selector: 'post-list',
   templateUrl: 'post-list.component.html',
   styleUrls: ['post-list.component.css']
})
export class PostListComponent {
    public posts: Post[];
    public error: string;
    public soldItems: Item[];
    public soldItem: Item;
    private index: number = 1;

    private postService: PostService;
    private itemService: ItemService;


    constructor(postService: PostService, 
                 itemService: ItemService) {
        this.postService = postService;
        this.itemService = itemService;
        postService.getAllPosts()
        .then((posts) => {
            this.posts = posts
        })
        .catch((error) => this.error = error);

        this.itemService.getAllSoldItems()
        .then((items) => {
            this.soldItems = items;
            this.soldItem = this.soldItems[this.index];
        })
        .catch((error) => this.error = error);
    }


    updateIndex(counter: number){
        this.index = Math.abs(counter%this.soldItems.length);
        console.log("Index updated: " + this.index);
        this.soldItem = this.soldItems[this.index];
    }
 

    deletePostFromList(postId: number) {
        const index: number = this.posts
            .findIndex((post) => post.postId === postId);
        this.posts.splice(index, 1);
    }

    handlePostDeleted(post: Post) {
        this.postService.deletePost(post.postId)
            .then((post) => this.deletePostFromList(post.postId))
            .catch((error) => this.error = error);
    }

}
