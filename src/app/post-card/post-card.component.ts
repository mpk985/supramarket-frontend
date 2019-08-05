import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post-service/post';

import { Router } from '@angular/router';

@Component({
    selector: 'post-card',
    templateUrl: 'post-card.component.html',
    styleUrls: ['post-card.component.css']
})
export class PostCardComponent { 
    private router: Router;

    @Input()
    post: Post;

    @Output()
    private postDeleted = new EventEmitter();

    constructor(router: Router) {
        this.router = router;
    }

    deletePost() {
        this.postDeleted.emit(this.post);
    }
    
}
