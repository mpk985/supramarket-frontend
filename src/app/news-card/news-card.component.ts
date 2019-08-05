import { Component, Input, Output, EventEmitter } from '@angular/core';
import { News } from '../news-service/news';

import { Router } from '@angular/router';

@Component({
    selector: 'news-card',
    templateUrl: 'news-card.component.html',
    styleUrls: ['news-card.component.css']
})
export class NewsCardComponent { 
    private router: Router;

    @Input()
    news: News;

    @Output()
    private newsDeleted = new EventEmitter();

    constructor(router: Router) {
        this.router = router;
    }

    deleteNews() {
        this.newsDeleted.emit(this.news);
    }
    
}
