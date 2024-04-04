import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template : `<h3> Counter {{counter}}</h3>
  <button (click)="Button(+1)"> +1 </button>
  <button (click)="reset()"> Reset</button>
  <button (click)="Button(-1)"> -1 </button>`
})

export class CounterComponent{
  counter: number = 10;
  Button(value: number): void{
  this.counter += value;
}

reset(){
  this.counter = 10;
}
}
