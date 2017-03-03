import {Component,Input,OnChanges,OnInit,AfterViewInit} from '@angular/core';

import { Hero } from './hero';

@Component({
   selector:"my-heroList",
   template:`
		<ul class="heroes">
          <li *ngFor = "let hero of myheroes" 
           [class.selected] = "hero == selectedHero"
          (click) = "onClick(hero)">
          
              <span class="badge" >{{hero.id}}</span>
              {{hero.name}}
          </li>
		</ul> 
		
   `,
})
export class HeroListComponent {
	@Input()
    myheroes : Hero[];
   
    selectedHero : Hero ;

ngOnChanges(){
  if(this.myheroes){
     this.selectedHero = this.myheroes[0];
     
  }
}

 
 onClick(hero : Hero): void{
 console.log(this.myheroes,this.firstData)
     this.selectedHero = hero;

  }
}