import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListPostComponent } from './listpost/listpost.component';
import { AddPostComponent } from './addpost/addpost.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListPostComponent,AddPostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
