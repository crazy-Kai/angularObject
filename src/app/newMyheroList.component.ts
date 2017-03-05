import {Component,Input,OnChanges,EventEmitter,Output,OnInit,AfterViewInit} from '@angular/core';

import { Hero } from './hero';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

@Component({
   moduleId: module.id,
   selector:"my-heroList",
   templateUrl: './newMyheroList.component.html'
})
export class HeroListComponent implements OnInit{
	myheroes : Hero[];
  selectedHero : Hero ;
  // @Input()  selectedHero : Hero ;
  //子组件改变父组件的方法之一，用outPut函数输出事件，把hero带出去，然后在父组件监听此event函数，并写好回调函数
  // @Output() onClicked = new EventEmitter<Hero>();
  //只要有输入属性发生变化 就会触发OnChange事件
 //  ngOnChanges(){
 //    console.log(1111)
 //  }
 //添加组件的providers元数据,并注入到AppComponent模块
 constructor(
    private router: Router,
    private heroService: HeroService ) { } //初始化方法

  ngOnInit(){
    //调用注入的获取数据的方法
    this.heroService.getHeros().then( heroes =>  {
      this.myheroes = heroes;
     
    } );
  }

 onClick(hero : Hero):void{
     
     this.selectedHero = hero;

  }
  //渲染出详情
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}