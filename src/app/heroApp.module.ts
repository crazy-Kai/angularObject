import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './heroApp.component'; 
import { HeroDetailsComponent } from './heroDetails.component';
import { HeroListComponent } from './heroList.component';

@NgModule({
	imports: [BrowserModule,FormsModule ] ,
	declarations:[
		AppComponent,
		HeroListComponent,
		HeroDetailsComponent
	],	
	bootstrap:[AppComponent]
})

export class AppModule { }