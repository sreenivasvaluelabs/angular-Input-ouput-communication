import { Component } from '@angular/core';

@Component({
  selector: 'input-app-parent',
  template: `
    <input-app-child [childMessage]="parentMessage"></input-app-child>
  `
})
export class InputParentComponent{
  parentMessage = "message from parent"
  constructor() { }
}