import { Component } from '@angular/core';

@Component({
  selector: 'outputeventemiter-app-parent',
  template: `
    Message: {{message}}
    <outputeventemiter-app-child (messageEvent)="receiveMessage($event)"></outputeventemiter-app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}