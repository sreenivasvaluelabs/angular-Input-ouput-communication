import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewchildChildComponent } from "./child.component";

@Component({
  selector: 'viewchild-app-parent',
  template: `
    Message: {{ message }}
    <viewchild-app-child></viewchild-app-child>
  `
})
export class ViewchildParentComponent implements AfterViewInit {

  @ViewChild(ViewchildChildComponent) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}