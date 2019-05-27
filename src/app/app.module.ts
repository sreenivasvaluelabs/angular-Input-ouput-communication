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

import {ShareDataService } from 
'./sharingdatawithservice/data.service';


import {BloggerComponent } from 
'./passasyncdata/blogger.component';
import {Posts1Component } from 
'./passasyncdata/posts-1.component';
import {Posts2Component } from 
'./passasyncdata/posts-2.component';
import {Posts3Component } from 
'./passasyncdata/posts-3.component';
import { HttpModule } from '@angular/http';
 import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,HttpModule,HttpClientModule],
  declarations: [ AppComponent, HelloComponent, ListPostComponent,AddPostComponent, ServiceListPostComponent,ServiceAddPostComponent, 
  InputParentComponent, InputChildComponent
   ,ViewchildParentComponent,
    ViewchildChildComponent
  , OutputEmitParentComponent, OutputEmitChildComponent, SharingDataWithServiceSiblingComponent, SharingDataWithServiceParentComponent
  ,BloggerComponent
  ,Posts1Component
  ,Posts2Component
  ,Posts3Component

  ],
  bootstrap:    [ AppComponent ],
  providers: [ShareDataService]
})
export class AppModule { }
