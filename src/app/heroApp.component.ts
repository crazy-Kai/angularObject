/*引入jquery*/
var $ = require('jquery');

import { Component, OnInit } from '@angular/core';
//引入Hero这个类;
import { Hero } from './hero';

import { HeroService } from './hero.service';

import { HeroListComponent } from './heroList.component';

//*ngFor 指令 循环heros数组 let hero of heros,目的:渲染出每个英雄列表
//ngmodel 用于数据双向绑定,当然也可以用给表单绑定事件的方式来实现!
//*ngIf 用于判断 是否渲染出模版 相当于原生js的if else 功能
//[class.selected] = "hero === selectedHero"语句是用来添加属性class类的 ,如果当前的hero 的值等于被选中selectedHero的值就添加上class.selected
//angualr 绑定事件  (click) = onClick(hero) 这里的第一个参数不是event对象默认是没有的,
//需要自己塞进去比如$event,这个事件的目的是把循环中的某一个选中了的hero的值赋值给selectedHero
////最后把selectedHero 当前选中的英雄的值渲染到下面模版中去!
@Component({
	selector:'my-testapp',
	template:`
		
   <h2>My Heros </h2>	
	 <my-heroList [myheroes] = "heroes" [selectedHero]="selectedHero" (onClicked)="onClicked($event)"></my-heroList>
   <myHero-details [hero]="selectedHero"></myHero-details>
	`,
  // //用来依赖注入的供应商
  providers:[HeroService]
})

export class AppComponent { 
  heroes :Hero[];
  selectedHero : Hero;
 
  //添加组件的providers元数据,并注入到AppComponent模块
  constructor( private heroService :　HeroService ){}

  //初始化方法
  ngOnInit(){
    //调用注入的获取数据的方法
    this.heroService.getHeros().then( heroes =>  {
      this.heroes = heroes;
     
    } );
  }
  onClicked(hero : Hero){
     this.selectedHero = hero;

  }
}