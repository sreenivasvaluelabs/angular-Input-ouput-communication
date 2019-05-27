
import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared/shared.service';
@Component({
  selector:'my-service-list-post',
  templateUrl: './servicelistpost.component.html',
  styleUrls: ['./servicelistpost.component.css']
})

export class ServiceListPostComponent implements OnInit{

listPost = [];
constructor(private sharedService:SharedService){}

ngOnInit(){
    // subscribe receives the value.
    this.sharedService.chatMessageAdded.subscribe((data) => {
    this.listPost.push(data);
   });
 }

}
