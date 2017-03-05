import { Injectable  } from '@angular/core';

import { Hero } from './hero';

import { Heros } from './markHeros';
//装饰器 用来记录元数据!
@Injectable()

export class HeroService{

	getHeros() :Promise<Hero[]> {
		return Promise.resolve(Heros)
	}
//延迟加载数据
	slowGetHeros() :Promise<Hero[]> {
		return new Promise(resolve => {
			 setTimeout(() => resolve(this.getHeros()), 2000);
		})
	}
	//获取单个英雄
	getHero(id: number): Promise<Hero> {
  		return this.getHeros()
             .then(heroes => heroes.find(hero => hero.id === id));
}

	 
}