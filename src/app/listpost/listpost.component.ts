import { Component,Input } from '@angular/core';
@Component({
  selector: 'my-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
  
})


export class ListPostComponent  {
// Listen the post message
@Input() listPost = [];
 
}
