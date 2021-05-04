import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
//
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCardComponent} from './product-card/product-card.component';
//
import { ProductService } from './product-service/product.service';
import { ItemSortPipe } from './product-service/item-sort.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';


@NgModule({
   declarations: [
       AppComponent,
       HeaderComponent,
       ProductListComponent,
       ProductDetailsComponent,
       ProductCardComponent,
       ItemSortPipe,
       ContactUsComponent,
       FooterComponent,
       HomeComponent
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
               path: 'products',
               component: ProductListComponent
           },
            {
               path: 'products/:id',
               component: ProductDetailsComponent
           },

           {
               path: 'home',
               component: HomeComponent
           },
           {
             path: 'random',
             component: ProductDetailsComponent
           }
       ]),
       HttpModule,
       FormsModule
    ],
   providers: [ProductService], 
   bootstrap: [AppComponent]
})
export class AppModule { }
