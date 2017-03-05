/*引入jquery*/
var $ = require('jquery');

import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
	selector:'my-app',
	template:`
	<h1>{{title}}</h1>
	<nav>
	   <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	</nav>
    <router-outlet></router-outlet>
	`
})

export class MyAppComponnet {
	title = 'Tour of Heroes';
	
}