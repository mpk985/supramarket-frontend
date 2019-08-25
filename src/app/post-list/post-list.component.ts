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
    private postService: PostService;
    public posts: Post[];
    public error: string;
    public soldItems: Item[];
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
        })
        .catch((error) => this.error = error);
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
