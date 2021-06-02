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
import { ItemSortPipe } from './product-service/item-sort.pipe';
import { CallbackPipe } from './product-service/callback.pipe';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ImageLightboxComponent } from './image-lightbox/image-lightbox.component';
//Services
import { ProductService } from './product-service/product.service';
import { ImageService } from './image-service/image.service';


@NgModule({
   declarations: [
       AppComponent,
       HeaderComponent,
       ProductListComponent,
       ProductDetailsComponent,
       ProductCardComponent,
       ItemSortPipe,
       CallbackPipe,
       ContactUsComponent,
       FooterComponent,
       HomeComponent,
       ImageLightboxComponent,
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
           },
           {
              path: 'archive',
              component: ImageLightboxComponent
           }
       ]),
       HttpModule,
       FormsModule
    ],
   providers: [ProductService, ImageService], 
   bootstrap: [AppComponent]
})
export class AppModule { }
