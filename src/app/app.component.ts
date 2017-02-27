import { Component } from '@angular/core';

let $ = jQuery;  //定义jquery

export class Hero {
	constructor(public id: number,public name: string){

	}
};
//实现数据双向绑定的两种方法
//第2种:此方法运用了angular的绑定事件的方法,用#定义局部变量,并把此变量当作事件源对象传入事件中去,动态来改变hero.name的值
// @Component({
//   selector: 'my-app',
//   template: `
//       <h1>{{title}}</h1>
//       <h2>{{hero.name}} details!</h2>
//       <div><label>ID:</label>{{hero.id}}</div>
//       <div>
//       	<label>Name:</label>
//         <input value = {{hero.name}} #box (keyup)="onKeyup(box.value)"  data-name="xiaowen" placeholder="name"/>
//       </div>
//   `,
// })
// export class AppComponent  {  title = "Tour of Herose"; hero = new Hero(1,"wukai");
//         onKeyup(value:string){
//             this.hero.name = value;
//         }

//  }
//  第1种:此方法用了ngModel指令
@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>ID:</label>{{hero.id}}</div>
      <div>
       <label>Name:</label>
        <input [(ngModel)] = "hero.name" placeholder="name"/>
      </div>
  `,
})
export class AppComponent  {  title = "Tour of Herose"; hero = new Hero(1,"wukai");
       
 }