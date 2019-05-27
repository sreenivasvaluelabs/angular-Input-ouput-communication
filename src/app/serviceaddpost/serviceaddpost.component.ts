
import {Component} from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector:'my-service-add-post',
  templateUrl: './serviceaddpost.component.html',
  styleUrls: ['./serviceaddpost.component.css']
})

export class ServiceAddPostComponent {

  constructor(private sharedserive:SharedService){}

  addPostMessage(postMessage:HTMLInputElement){
    // Emitts the event.
    //this.sharedserive.chatMessageAdded.emit(postMessage.value)
   // postMessage.value = '';
      this.sharedserive.chatMessageAdded.next(postMessage.value);
      postMessage.value = '';
  }
  
}