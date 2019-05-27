import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "../data.service";

@Component({
  selector: 'sharedataservice-app-parent',
  template: `
    {{message}}
  `,
  styleUrls: ['./sibling.component.css']
})
export class ParentComponent implements OnInit {

  message:string;

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}