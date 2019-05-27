import { Component, OnInit } from '@angular/core';
import { ShareDataService } from "./data.service";

@Component({
  selector: 'sharedataservice-app-parent',
  template: `
    parent component:{{message}} End
  `
})
export class SharingDataWithServiceParentComponent implements OnInit {

  message:string;

  constructor(private data: ShareDataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}