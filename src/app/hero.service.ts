import { Injectable  } from '@angular/core';

import { Hero } from './hero';

import { Heros } from './markHeros';
//装饰器 用来记录元数据!
@Injectable()

export class HeroService{
	getHeros() :Promise<Hero[]>{
		return Promise.resolve(Heros)
	}
}