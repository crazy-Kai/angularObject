import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule ,Routes}   from '@angular/router';

import { MyAppComponnet } from './newApp.component'; 
import { HeroDetailsComponent } from './newMyheroDetails.component';
import { HeroListComponent } from './newMyheroList.component';
import { HeroService }  from './hero.service';
import { DashboardComponent } from './dashboard.component';

const appRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'dashboard',component: DashboardComponent},
  { path: 'detail/:id',component: HeroDetailsComponent}
];

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
    	RouterModule.forRoot(appRoutes)
    	] ,
	declarations:[
		MyAppComponnet,
		DashboardComponent,
		HeroListComponent,
		HeroDetailsComponent
	],
	providers: [
     HeroService
  ],	
	bootstrap:[MyAppComponnet]
})



export class AppModule { }