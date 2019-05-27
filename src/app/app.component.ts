import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  postDataArr = [];

  onAddPost(postData){
    console.log(postData.length);
    this.postDataArr.push(postData);
  }
}
