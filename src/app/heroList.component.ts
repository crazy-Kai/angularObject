import {Component,Input,OnChanges,EventEmitter,Output,OnInit,AfterViewInit} from '@angular/core';

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
	@Input()  myheroes : Hero[];
  @Input()  selectedHero : Hero ;
  //子组件改变父组件的方法之一，用outPut函数输出事件，把hero带出去，然后在父组件监听此event函数，并写好回调函数
  @Output() onClicked = new EventEmitter<Hero>();

 onClick(hero : Hero):void{
     this.onClicked.emit(hero);
     this.selectedHero = hero;

  }
}