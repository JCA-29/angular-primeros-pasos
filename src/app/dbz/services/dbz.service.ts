import { Injectable, Output } from '@angular/core';
import { Character } from '../interface/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  @Output()
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 100
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 90
  },{
    id: uuid(),
    name: 'Krilin',
    power: 70
  }]

  onNewCharacter(character: Character){
    const newCharacter = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }

  deleteCharacter(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
