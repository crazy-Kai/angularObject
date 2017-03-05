import { Component, Input,OnInit,OnChanges} from '@angular/core';

import { Hero } from './hero';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

//@Component函数后不能加;号 否则就会报错
@Component({
  moduleId: module.id,
	selector:'myHero-details',
	templateUrl: './newMyheroDetails.component.html',
})

export class HeroDetailsComponent implements OnInit{
	// @Input 在此处的作用是:声明hero是输入属性,绑定到此组件上来! hero:Hero 是typeScript 的语法 声明变量类型!
	@Input() 
	hero: Hero;

  constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit(): void {
  this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);
}
    //回退
  goBack(): void {
    this.location.back();
  }
  
  

}