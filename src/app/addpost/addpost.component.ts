import { Component, EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'my-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
  
})

export class AddPostComponent  {

@Output() postData = new EventEmitter();

addPostMessage(postMessage:HTMLInputElement){

// Emits the post message.
  this.postData.emit(postMessage.value);
  postMessage.value = '';
}


}
