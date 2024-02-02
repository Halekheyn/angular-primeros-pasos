import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
             <h3>Counter: {{ counter }}</h3>
             <button (click)="increasyBy(+1)">+1</button>
             <button (click)="resetCounter()">reset</button>
             <button (click)="increasyBy(-1)">-1</button>
            `
})
export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increasyBy(value: number):void {
    this.counter += value;
  }

  /*decreasyBy(value: number):void {
    this.counter -= value;
  }*/

  resetCounter(){
    this.counter = 10;
  }
}
