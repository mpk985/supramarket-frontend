import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
   selector: 'header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	private router: Router;
	public currentRoute: string;

	constructor(router: Router){
		this.router = router;

		this.router.events
           .filter(event => event instanceof NavigationStart)
           .subscribe((event: NavigationStart) => {
               if (event.url.indexOf('home') > -1){
                 this.currentRoute = 'home';
               }
               else if (event.url.indexOf('sold') > -1) {
                   this.currentRoute = 'sold';
               } 
               else if(event.url.indexOf('parts') > -1){
                   this.currentRoute = 'parts';
               }
               else if (event.url.indexOf('about') > -1) {
                   this.currentRoute = 'about';
               } else {
                   this.currentRoute = 'home';
               }
           });

	}

	goToRoute(url: string){
		this.router.navigate([url]);
	}
}
