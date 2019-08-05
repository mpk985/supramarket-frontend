import { Component } from '@angular/core';
import { NewsService } from '../news-service/news.service';
import { News } from '../news-service/news';

@Component({
   selector: 'news-list',
   templateUrl: 'news-list.component.html',
   styleUrls: ['news-list.component.css']
})
export class NewsListComponent {
    private newsService: NewsService;
    public news: News[];
    public error: string;

    constructor(newsService: NewsService) {
        this.newsService = newsService;
        newsService.getAllNews()
        .then((news) => {
            this.news = news
        })
        .catch((error) => this.error = error);
    }

   

    deleteNewsFromList(newsId: number) {
        const index: number = this.news
            .findIndex((news) => news.newsId === newsId);
        this.news.splice(index, 1);
    }

    handleNewsDeleted(news: News) {
        this.newsService.deleteNews(news.newsId)
            .then((news) => this.deleteNewsFromList(news.newsId))
            .catch((error) => this.error = error);
    }

}
