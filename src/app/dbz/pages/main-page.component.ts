import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private DbzService: DbzService){
  }

  get characters(): Character[]{
    return [...this.DbzService.characters];
  }

  onDeleteCharacter(id: string){
    return this.DbzService.deleteCharacter(id);
  }

  onNewCharacter(character: Character){
    return this.DbzService.onNewCharacter(character);
  }
}
