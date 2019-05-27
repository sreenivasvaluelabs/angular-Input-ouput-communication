import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-app-child',
  template: `
      Child received message from parent: {{ childMessage }}
  `
})
export class InputChildComponent {

  @Input() childMessage: string;

  constructor() { }

}