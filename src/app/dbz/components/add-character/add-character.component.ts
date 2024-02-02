import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interface/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      id: '',
      name: '',
      power: 0
    }

    emitCharacter():void{


      if(this.character.name.length === 0) return;
      this.character.id = uuid();

      console.log(this.character);
      this.onNewCharacter.emit(this.character);

      // Antes
      // this.character.id = '';
      // this.character.name = '';
      // this.character.power = 0;

      // Asignación de una sola lectura
      this.character = { id: '', name: '', power: 0};
    }
}
