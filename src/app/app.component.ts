import { Component } from '@angular/core';

export class Hero {
	constructor(public id: number,public name: string){

	}
};

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>ID:</label>{{hero.id}}</div>
      <div>
      	<label>Name:</label>
        <input  [(ngModel)] = "hero.name" placeholder="name"/>
      </div>
  `,
})
export class AppComponent  {  title = "Tour of Herose"; hero = new Hero(1,"wukai"); }