import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
@Component({
  selector: 'my-dashboard',
  template: `
    <h3>Top Heroes</h3>
	<div class="grid grid-pad">
  		<div *ngFor="let hero of heroes" [routerLink]="['/detail', hero.id]" >
		    <div >
		      <h4>{{hero.name}}</h4>
		    </div>
  		</div>
	</div>
	
  `
})
export class DashboardComponent implements OnInit{ 
    heroes: Hero[] = [];
    constructor(
		  private heroService: HeroService
		
	) {}

    ngOnInit(): void {
	    this.heroService.getHeros()
	      .then(heroes => this.heroes = heroes);
  	}

  
}