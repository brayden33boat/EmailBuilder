import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewEmailBuilderComponent } from './view-email-builder/view-email-builder.component';

import {DndModule} from 'ng2-dnd';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmailBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
