import { Component } from '@angular/core';
import { PostService } from '../post-service/post.service';
import { Post } from '../post-service/post';

@Component({
   selector: 'post-list',
   templateUrl: 'post-list.component.html',
   styleUrls: ['post-list.component.css']
})
export class PostListComponent {
    private postService: PostService;
    public posts: Post[];
    public error: string;

    constructor(postService: PostService) {
        this.postService = postService;
        postService.getAllPosts()
        .then((posts) => {
            this.posts = posts
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
