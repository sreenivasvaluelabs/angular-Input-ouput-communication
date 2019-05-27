import { Component } from '@angular/core';

@Component({
  selector: 'input-app-parent',
  template: `
    <input-app-child [childMessage]="parentMessage"></input-app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentMessage = "message from parent"
  constructor() { }
}