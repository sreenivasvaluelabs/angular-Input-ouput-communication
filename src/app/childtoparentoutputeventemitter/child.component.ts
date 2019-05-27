import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'outputeventemiter-app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `
})
export class OutputEmitChildComponent {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}