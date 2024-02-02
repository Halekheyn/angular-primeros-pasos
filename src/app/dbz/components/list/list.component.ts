import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

    /*@Input()
    public characterList: Character[] = [{
      name: 'Trunks',
      power: 10
    }]*/

    @Input()
    public characterList: Character[] = [];

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter();

    /*onDeleteCharacter(index:number):void {
      //console.log({index});

      this.onDelete.emit(index);
    }*/

    onDeleteCharacter( id:string ):void {
      //console.log({index});
      this.onDelete.emit(id);
    }
}
