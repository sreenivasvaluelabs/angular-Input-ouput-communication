import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-app-child',
  template: `
      Say {{ message }}
  `
})
export class InputChildComponent {

  @Input() childMessage: string;

  constructor() { }

}