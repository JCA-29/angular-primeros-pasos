import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesName: string [] = ['Spiderman', 'Ironman', 'Thor', 'Hulk', 'She Hulk'];
  public heroeBorrado?: string;

  removeHero(): void{
    this.heroeBorrado = this.heroesName.pop();
  }
}
