import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interface/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter( id: string ):void {

console.log({ id });

   //if ( id ) return;
    this.onDelete.emit( id);
  }

}
