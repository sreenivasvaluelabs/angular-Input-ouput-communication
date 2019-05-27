import { Component } from '@angular/core';

@Component({
  selector: 'outputeventemiter-app-parent',
  template: `
    Message: {{message}}
    <outputeventemiter-app-child (messageEvent)="receiveMessage($event)"></outputeventemiter-app-child>
  `
})
export class OutputEmitParentComponent {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}