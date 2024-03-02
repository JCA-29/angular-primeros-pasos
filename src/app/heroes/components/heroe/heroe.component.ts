import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name: string = 'Ironman';
  public age: number = 45

  get capitalazedName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string):string {
    return this.name = name;
  }

  changeAge(age: number): number{
    return this.age = age;
  }

  Reset(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
