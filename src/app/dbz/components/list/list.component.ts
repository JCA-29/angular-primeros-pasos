import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Goku',
    power: 10
  },{
    name: 'Vegeta',
    power: 90
  }]

  deleteCharacter(id?: string): void{
    this.onDelete.emit(id);
  }
}
