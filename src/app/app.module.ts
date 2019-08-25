import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemService } from './item-service/item.service';
import { ItemSortPipe } from './item-service/item-sort.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PostListComponent } from './post-list/post-list.component'
import { PostSortPipe } from './post-service/post-sort.pipe';
import { PostCardComponent } from './post-card/post-card.component';
import { PostService } from './post-service/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { EscapeHtmlPipe } from './post-service/post-keep-html.pipe';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { NewsSortPipe } from './news-service/news-sort.pipe';
import { NewsService } from './news-service/news.service';


@NgModule({
   declarations: [
       AppComponent,
       HeaderComponent,
       ItemListComponent,
       ItemDetailsComponent,
       ItemCardComponent,
       ItemSortPipe,
       PostListComponent,
       PostDetailsComponent,
       PostCardComponent,
       PostSortPipe,
       EscapeHtmlPipe,
       ContactUsComponent,
       NewsListComponent,
       NewsCardComponent,
       NewsSortPipe
    ],
   imports: [
       BrowserModule, 
       RouterModule.forRoot([
           {
               path: '',
               redirectTo: 'home',
               pathMatch: 'full'
           },
           {
               path: 'items',
               component: ItemListComponent
           },
            {
               path: 'items/:inventoryId',
               component: ItemDetailsComponent
           },
           {
               path: 'sold',
               component: PostListComponent
           },
           {
               path: 'home',
               component: ItemListComponent
           },
           {
               path: 'parts',
               component: PostDetailsComponent
           },
           {
             path: 'about',
             component: ContactUsComponent
           }
       ]),
       HttpModule,
       FormsModule
    ],
   providers: [ItemService, PostService, NewsService], 
   bootstrap: [AppComponent]
})
export class AppModule { }
