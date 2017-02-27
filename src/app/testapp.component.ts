import { Component } from '@angular/core';

class Hero{
	constructor(public id : number,public name: string){

	}
}
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
		<h2>My Heros</h2>
		<ul class="heroes">
          <li *ngFor = "let hero of heroes" 
          [class.selected] = "hero === selectedHero"
          (click) = "onClick(hero)">
          
              <span class="badge" >{{hero.id}}</span>
              {{hero.name}}
          </li>
		</ul> 
		<div *ngIf="selectedHero">
            <h2> {{selectedHero.name}} details!</h2>
            <div>
               <label>ID:</label>
               {{selectedHero.id}} 
            </div>
            <div>
             <label>Name:</label>
             <input [(ngModel)] = "selectedHero.name" placeholder="name"/>
            </div>
		</div>
	`,
})

export class AppComponent { heroes = [
   new Hero(1,"wukai"),new Hero(2,"wuxiaowen"),
   new Hero(3,"guorong"),new Hero(4,"guoming")
] ;
  selectedHero = null;
  onClick(hero){
     this.selectedHero = hero;

  }
}