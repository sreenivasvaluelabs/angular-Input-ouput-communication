import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListPostComponent } from './listpost/listpost.component';
import { AddPostComponent } from './addpost/addpost.component';





import { ServiceListPostComponent } from './servicelistpost/servicelistpost.component';
import { ServiceAddPostComponent } from './serviceaddpost/serviceaddpost.component';



import { InputParentComponent } from './parenttochildinput/parent.component';
import { InputChildComponent } from './parenttochildinput/child.component';

import { ViewchildParentComponent } from './childtoparentviewchild/parent.component';

import { ViewchildChildComponent } from './childtoparentviewchild/child.component';

import { OutputEmitParentComponent } from 
'./childtoparentoutputeventemitter/parent.component';

import { OutputEmitChildComponent } from 
'./childtoparentoutputeventemitter/child.component';

import { SharingDataWithServiceSiblingComponent } from 
'./sharingdatawithservice/sibling.component';
import { SharingDataWithServiceParentComponent } from 
'./sharingdatawithservice/parent.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListPostComponent,AddPostComponent, ServiceListPostComponent,ServiceAddPostComponent, 
  InputParentComponent, InputChildComponent
   ,ViewchildParentComponent,
    ViewchildChildComponent
  , OutputEmitParentComponent, OutputEmitChildComponent, SharingDataWithServiceSiblingComponent, SharingDataWithServiceParentComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
