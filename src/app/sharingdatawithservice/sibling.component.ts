import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "./data.service";

@Component({
  selector: 'sharedataservice-app-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `
})
export class SharingDataWithServiceSiblingComponent implements OnInit {

  message:string;

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}